/**
 * Waterfall Grid and Infinite Scroll Implementation
 * Handles the dynamic loading and display of game cards in a waterfall layout
 */

// Configuration
const WATERFALL_CONFIG = {
    initialGames: 20,       // 增加初始加载游戏数量
    batchSize: 15,          // 增加每批次加载游戏数量
    loadThreshold: 300,     // 增加触发加载的距离，提前开始加载
    animationDelay: 30,     // 减少动画延迟，使加载更加流畅
    debounceDelay: 80,      // 优化滚动事件延迟
    lazyLoadOffset: 500     // 增加预加载图片的距离
};

// State management
let waterfallState = {
    loading: false,         // Whether new games are currently being loaded
    page: 0,                // Current page of loaded games
    hasMore: true,          // Whether there are more games to load
    container: null,        // The waterfall grid container element
    loadingIndicator: null, // The loading indicator element
    observer: null,         // Intersection observer for lazy loading
    scrollToTopBtn: null,   // Scroll to top button
    visibleItems: new Set(), // Currently visible game cards
    loadedGameIds: new Set() // 跟踪已经加载的游戏ID，防止重复
};

/**
 * Initialize the waterfall grid and infinite scroll
 * @param {string} containerId - ID of the container element
 * @param {Function} dataProvider - Function that returns game data
 */
function initWaterfallGrid(containerId, dataProvider) {
    // 重置状态，确保每次初始化时都是一个新的开始
    waterfallState = {
        loading: false,
        page: 0,
        hasMore: true,
        container: null,
        loadingIndicator: null,
        observer: null,
        scrollToTopBtn: null,
        visibleItems: new Set(),
        loadedGameIds: new Set()
    };
    
    // Get container element
    waterfallState.container = document.getElementById(containerId);
    if (!waterfallState.container) {
        console.error('Waterfall grid container not found:', containerId);
        return;
    }
    
    // Convert container to waterfall grid
    waterfallState.container.classList.add('waterfall-grid');
    
    // Create loading indicator
    createLoadingIndicator();
    
    // Create scroll to top button
    createScrollToTopButton();
    
    // Initialize intersection observer for lazy loading
    initLazyLoadObserver();
    
    // 一次性加载所有游戏
    loadGames(dataProvider, 1000);
    
    // 仅保留滚动到顶部按钮的更新事件
    window.addEventListener('scroll', debounce(() => {
        updateScrollToTopButton();
    }, WATERFALL_CONFIG.debounceDelay));
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        // Recalculate layout if needed
    }, 200));
}

/**
 * Load games and add them to the grid
 * @param {Function} dataProvider - Function that returns game data
 * @param {number} count - Number of games to load
 */
function loadGames(dataProvider, count) {
    if (waterfallState.loading) return;
    
    waterfallState.loading = true;
    showLoadingIndicator();
    
    // 一次性加载所有游戏，不再进行分页
    const games = getAllGames(dataProvider);
    
    if (games.length === 0) {
        hideLoadingIndicator();
        waterfallState.loading = false;
        return;
    }
    
    // 添加所有游戏到瀑布流中
    games.forEach((game, index) => {
        // 记录已加载游戏ID，防止重复
        waterfallState.loadedGameIds.add(game.id);
        
        setTimeout(() => {
            const gameCard = createGameCard(game, index);
            waterfallState.container.appendChild(gameCard);
            
            // 观察图片懒加载
            if (waterfallState.observer && gameCard.querySelector('.game-thumb')) {
                const img = gameCard.querySelector('.game-thumb');
                waterfallState.observer.observe(img);
                
                if (!img.src || img.src.includes('data:image/svg+xml')) {
                    if (img.dataset.src) {
                        img.addEventListener('load', () => {
                            img.classList.add('loaded');
                        });
                    }
                } else {
                    img.classList.add('loaded');
                }
            }
        }, index * (WATERFALL_CONFIG.animationDelay / 2)); // 减少延迟，加快加载速度
    });
    
    // 隐藏加载指示器
    setTimeout(() => {
        hideLoadingIndicator();
        waterfallState.loading = false;
        // 禁用"加载更多"功能
        waterfallState.hasMore = false;
    }, Math.min(games.length * (WATERFALL_CONFIG.animationDelay / 2), 1000));
}

/**
 * 获取所有游戏（不分页）
 * @param {Function} dataProvider - 提供游戏数据的函数
 * @returns {Array} - 所有游戏对象数组
 */
function getAllGames(dataProvider) {
    // 直接获取所有游戏，不使用分页
    if (typeof dataProvider === 'function') {
        // 调用dataProvider但忽略分页参数，获取全部游戏
        return dataProvider(0, 1000); // 使用一个很大的数字来获取所有游戏
    }
    return [];
}

/**
 * Create a game card element with animation delay
 * @param {Object} game - Game data object
 * @param {number} index - Index for animation delay calculation
 * @returns {HTMLElement} - The game card element
 */
function createGameCard(game, index) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.setAttribute('data-game-id', game.id);
    gameCard.style.setProperty('--animation-order', index % 10); // Cycle through 0-9 for staggered animation
    
    // 获取当前语言
    const currentLang = window.I18n ? window.I18n.getCurrentLanguage() : 'en';
    
    // 获取游戏描述（支持国际化）
    let description = game.description;
    if (game.descriptions && game.descriptions[currentLang]) {
        description = game.descriptions[currentLang];
    } else if (game.descriptions && game.descriptions.en) {
        description = game.descriptions.en;
    }
    
    // 确保描述长度一致 - 与主页保持相同的截断长度
    const truncatedDescription = description.substring(0, 100) + (description.length > 100 ? '...' : '');
    
    // 获取游戏标题（支持国际化）
    let title = game.title;
    if (game.titles && game.titles[currentLang]) {
        title = game.titles[currentLang];
    } else if (game.titles && game.titles.en) {
        title = game.titles.en;
    }
    
    // 获取"立即玩"按钮文本的翻译
    const playNowText = window.I18n && typeof window.I18n.getTranslation === 'function' 
        ? window.I18n.getTranslation('games.playNow') 
        : 'Play Now';
    
    // Check if game is in favorites
    const isFav = window.FavoritesManager && window.FavoritesManager.isFavorite(game.id);
    const favIconClass = isFav ? 'fas fa-heart' : 'far fa-heart';
    const favTitle = isFav 
        ? (window.I18n && window.I18n.getTranslation('gameDetails.removeFromFavorites') || 'Remove from Favorites')
        : (window.I18n && window.I18n.getTranslation('gameDetails.addToFavorites') || 'Add to Favorites');
    
    const shareTitle = window.I18n && window.I18n.getTranslation('gameDetails.share') || 'Share';
    
    gameCard.innerHTML = `
        <div class="game-thumb-container">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                 data-src="${game.thumbnail}" 
                 alt="${title}" 
                 class="game-thumb lazy-load">
            <div class="play-now-overlay">
                <div class="game-title-overlay">${title}</div>
                <span class="play-button">${playNowText}</span>
            </div>
            <button class="favorite-btn ${isFav ? 'active' : ''}" data-game-id="${game.id}" title="${favTitle}">
                <i class="${favIconClass}"></i>
            </button>
            <button class="share-btn" data-game-id="${game.id}" title="${shareTitle}">
                <i class="fas fa-share-alt"></i>
            </button>
        </div>
        <div class="game-info">
            <h3 class="game-title">${title}</h3>
            <p class="game-description">${truncatedDescription}</p>
            <div class="play-now-button-container">
                <button class="play-now-button">${playNowText} <i class="fas fa-play-circle"></i></button>
            </div>
        </div>
    `;
    
    // Add click event to navigate to game detail page
    const thumbContainer = gameCard.querySelector('.game-thumb-container');
    if (thumbContainer) {
        thumbContainer.addEventListener('click', (e) => {
            // Don't navigate if clicking on favorite or share button
            if (e.target.closest('.favorite-btn') || e.target.closest('.share-btn')) {
                return;
            }
            
            // 在新标签页中打开游戏详情页
            window.open(`game.html?id=${game.id}`, '_blank', 'noopener,noreferrer');
        });
    }
    
    // 修改Play Now按钮的点击事件，使用同一个页面而不是新标签页
    const playNowButton = gameCard.querySelector('.play-now-button');
    if (playNowButton) {
        playNowButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            window.open(`game.html?id=${game.id}`, '_blank', 'noopener,noreferrer'); // 在新窗口中打开
        });
    }
    
    // Add click event for favorite button
    const favBtn = gameCard.querySelector('.favorite-btn');
    if (favBtn) {
        favBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (window.FavoritesManager) {
                const isFavorite = window.FavoritesManager.toggleFavorite(game);
                
                // Update button appearance
                favBtn.classList.toggle('active', isFavorite);
                favBtn.querySelector('i').className = isFavorite ? 'fas fa-heart' : 'far fa-heart';
                
                // Update tooltip
                favBtn.title = isFavorite 
                    ? I18n.getTranslation('gameDetails.removeFromFavorites') 
                    : I18n.getTranslation('gameDetails.addToFavorites');
                
                // Show toast message
                showFavoriteToast(isFavorite);
            }
        });
    }
    
    // Add click event for share button
    const shareBtn = gameCard.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Open share modal
            openShareModal(game);
        });
    }
    
    return gameCard;
}

/**
 * Show toast message for favorite action
 * @param {boolean} added - Whether the game was added to favorites
 */
function showFavoriteToast(added) {
    // Create toast if it doesn't exist
    let toast = document.getElementById('toast-message');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-message';
        toast.className = 'toast-message';
        
        const toastText = document.createElement('span');
        toastText.id = 'toast-text';
        toast.appendChild(toastText);
        
        document.body.appendChild(toast);
    }
    
    // Set message and show toast
    const toastText = document.getElementById('toast-text');
    if (toastText) {
        toastText.textContent = added 
            ? I18n.getTranslation('favorites.added') || 'Added to favorites!' 
            : I18n.getTranslation('favorites.removed') || 'Removed from favorites!';
    }
    
    toast.classList.add('show');
    
    // Hide toast after delay
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Open share modal for a game
 * @param {Object} game - The game to share
 */
function openShareModal(game) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('share-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'share-modal';
        modal.className = 'share-modal';
        document.body.appendChild(modal);
    }
    
    // Get description based on current language
    let description = game.description; // Default description
    if (game.descriptions && window.I18n) {
        const currentLang = window.I18n.getCurrentLanguage();
        if (game.descriptions[currentLang]) {
            description = game.descriptions[currentLang];
        } else if (game.descriptions.en) {
            description = game.descriptions.en;
        }
    }
    
    // Generate share URLs
    const shareUrl = `${window.location.origin}/game.html?id=${game.id}`;
    const shareTitle = encodeURIComponent(game.title);
    const shareImage = encodeURIComponent(game.thumbnail);
    
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&t=${shareTitle}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`;
    
    // Set modal content
    modal.innerHTML = `
        <div class="share-modal-content">
            <div class="share-modal-header">
                <h3 data-i18n="share.title">Share This Game</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="share-modal-body">
                <div class="share-preview">
                    <img src="${game.thumbnail}" alt="${game.title}" class="share-thumbnail">
                    <div class="share-info">
                        <h4>${game.title}</h4>
                        <p>${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</p>
                    </div>
                </div>
                <div class="share-buttons">
                    <a href="${facebookUrl}" target="_blank" class="share-button facebook">
                        <i class="fab fa-facebook-f"></i>
                        <span data-i18n="share.facebook">Share on Facebook</span>
                    </a>
                    <a href="${twitterUrl}" target="_blank" class="share-button twitter">
                        <i class="fab fa-twitter"></i>
                        <span data-i18n="share.twitter">Share on Twitter</span>
                    </a>
                    <button class="share-button wechat" id="wechat-share">
                        <i class="fab fa-weixin"></i>
                        <span data-i18n="share.wechat">Share on WeChat</span>
                    </button>
                    <button class="share-button copy-link" id="copy-link">
                        <i class="fas fa-link"></i>
                        <span data-i18n="share.copyLink">Copy Link</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('show');
    
    // Update translations in modal
    if (window.I18n && window.I18n.updateI18n) {
        window.I18n.updateI18n();
    }
    
    // Add event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // Close when clicking outside modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Copy link button
    const copyLinkBtn = document.getElementById('copy-link');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                const span = copyLinkBtn.querySelector('span');
                const originalText = span.textContent;
                span.textContent = I18n.getTranslation('share.linkCopied') || 'Link copied!';
                
                setTimeout(() => {
                    span.textContent = originalText;
                }, 2000);
            });
        });
    }
    
    // WeChat share button
    const wechatBtn = document.getElementById('wechat-share');
    if (wechatBtn) {
        wechatBtn.addEventListener('click', () => {
            // For WeChat, we'll show a QR code that users can scan
            // This is a simplified implementation
            alert('Please scan the QR code with WeChat to share (QR code would be displayed here)');
        });
    }
}

/**
 * Initialize the Intersection Observer for lazy loading images
 */
function initLazyLoadObserver() {
    if ('IntersectionObserver' in window) {
        waterfallState.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        // 设置图片源
                        img.src = src;
                        
                        // 添加加载事件监听器
                        img.addEventListener('load', () => {
                            img.classList.add('loaded');
                        });
                        
                        // 添加错误处理
                        img.addEventListener('error', () => {
                            // 加载失败时使用默认图片
                            img.src = 'images/default-thumbnail.jpg';
                            img.classList.add('loaded');
                        });
                        
                        // 停止观察已加载的图片
                        waterfallState.observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: `${WATERFALL_CONFIG.lazyLoadOffset}px 0px`
        });
    } else {
        // 对于不支持IntersectionObserver的浏览器，立即加载所有图片
        loadAllImages();
    }
}

/**
 * Fallback function to load all images without lazy loading
 */
function loadAllImages() {
    const lazyImages = document.querySelectorAll('.game-thumb.lazy-load');
    lazyImages.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
            // 设置图片源
            img.src = src;
            
            // 添加加载事件监听器
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            
            // 添加错误处理
            img.addEventListener('error', () => {
                // 加载失败时使用默认图片
                img.src = 'images/default-thumbnail.jpg';
                img.classList.add('loaded');
            });
        }
    });
}

/**
 * Create loading indicator element
 */
function createLoadingIndicator() {
    waterfallState.loadingIndicator = document.createElement('div');
    waterfallState.loadingIndicator.className = 'loading-indicator';
    waterfallState.loadingIndicator.innerHTML = `
        <span>正在加载所有游戏，请稍候...</span>
    `;
    waterfallState.loadingIndicator.style.display = 'none';
    
    // Append to container's parent
    if (waterfallState.container.parentNode) {
        waterfallState.container.parentNode.appendChild(waterfallState.loadingIndicator);
    }
}

/**
 * Show loading indicator
 */
function showLoadingIndicator() {
    if (waterfallState.loadingIndicator) {
        waterfallState.loadingIndicator.style.display = 'flex';
    }
}

/**
 * Hide loading indicator
 */
function hideLoadingIndicator() {
    if (waterfallState.loadingIndicator) {
        waterfallState.loadingIndicator.style.display = 'none';
    }
}

/**
 * Create scroll to top button
 */
function createScrollToTopButton() {
    waterfallState.scrollToTopBtn = document.createElement('div');
    waterfallState.scrollToTopBtn.className = 'scroll-to-top';
    waterfallState.scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    
    waterfallState.scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(waterfallState.scrollToTopBtn);
}

/**
 * Update scroll to top button visibility
 */
function updateScrollToTopButton() {
    if (waterfallState.scrollToTopBtn) {
        if (window.scrollY > 300) {
            waterfallState.scrollToTopBtn.classList.add('visible');
        } else {
            waterfallState.scrollToTopBtn.classList.remove('visible');
        }
    }
}

/**
 * Handle scroll event to load more games when near bottom
 * @param {Function} dataProvider - Function that returns game data
 */
function handleScroll(dataProvider) {
    if (isNearBottom() && !waterfallState.loading && waterfallState.hasMore) {
        loadGames(dataProvider, WATERFALL_CONFIG.batchSize);
    }
}

/**
 * Check if scroll position is near the bottom of the page
 * @returns {boolean} - Whether scroll position is near bottom
 */
function isNearBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - WATERFALL_CONFIG.loadThreshold;
}

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Debounce delay in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

/**
 * Get games data for waterfall grid
 * @param {number} page - Page number (0-based)
 * @param {number} count - Number of games to return
 * @returns {Array} - Array of game objects
 */
function getWaterfallGames(page, count) {
    // Calculate start and end indices
    const startIndex = page * count;
    const endIndex = startIndex + count;
    
    // Get games from global gamesData array
    if (typeof gamesData !== 'undefined' && Array.isArray(gamesData)) {
        return gamesData.slice(startIndex, endIndex);
    }
    
    return [];
}

/**
 * Get popular games data for waterfall grid
 * This function returns all popular games at once
 * @returns {Array} - Array of all popular game objects sorted by popularity
 */
function getPopularWaterfallGames() {
    // 一次性获取所有热门游戏，不再分页
    let popularGames = [];
    
    if (typeof window.getPopularGames === 'function') {
        // 优先使用window.getPopularGames函数，确保按照最新游戏、特色游戏和人气排序
        popularGames = window.getPopularGames();
    } else if (typeof getFilteredPopularGames === 'function') {
        popularGames = getFilteredPopularGames();
    } else if (typeof gamesData !== 'undefined' && Array.isArray(gamesData)) {
        // 兼容性处理，如果getFilteredPopularGames不可用，则使用原始方法
        // 创建一个新数组副本
        popularGames = [...gamesData];
        
        // 优先级排序：1.新游戏 2.特色游戏 3.人气
        popularGames.sort((a, b) => {
            // 新游戏排在最前面（同时支持new和isNew两种属性名）
            const aNew = a.new || a.isNew;
            const bNew = b.new || b.isNew;
            if (aNew && !bNew) return -1;
            if (!aNew && bNew) return 1;
            
            // 特色游戏排在次之（同时支持featured和isFeatured两种属性名）
            const aFeatured = a.featured || a.isFeatured;
            const bFeatured = b.featured || b.isFeatured;
            if (aFeatured && !bFeatured) return -1;
            if (!aFeatured && bFeatured) return 1;
            
            // 最后按人气排序
            return (b.popularity || 0) - (a.popularity || 0);
        });
    }
    
    // 确保游戏数据不为空
    if (!popularGames || popularGames.length === 0) {
        console.warn('无法加载热门游戏数据');
        return [];
    }
    
    console.log(`一次性加载所有热门游戏，共${popularGames.length}个游戏`);
    return popularGames;
}

// Export functions for use in other scripts
window.WaterfallGrid = {
    init: initWaterfallGrid,
    loadGames: loadGames,
    getWaterfallGames: getWaterfallGames,
    getPopularWaterfallGames: getPopularWaterfallGames,
    openShareModal: openShareModal
}; 