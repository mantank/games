/**
 * Homepage Game Generator
 * Generates game cards and sections for the homepage
 */

// 跟踪已经显示的游戏ID
let displayedGameIds = new Set();
const MAX_CATEGORIES_PER_GAME = 2; // 每个游戏最多显示在几个分类中
const gamesInCategories = {}; // 记录每个游戏在哪些分类中显示

document.addEventListener('DOMContentLoaded', function() {
    // 重置跟踪变量
    displayedGameIds = new Set();
    
    // Load internationalization resources
    loadI18nResources();
    
    // 按照优先级顺序生成分类游戏
    generateCategoryGames('action');
    generateCategoryGames('puzzle');
    generateCategoryGames('strategy');
    generateCategoryGames('racing');
    generateCategoryGames('brain');
    generateCategoryGames('sports');
    generateCategoryGames('tower-defense');
    
    // 生成主题游戏
    generateThemeGames('cyberpunk');
    generateThemeGames('scifi');
    generateThemeGames('fantasy');
    generateThemeGames('survival');
    generateThemeGames('adventure');
    
    // Popular Games section uses waterfall layout
    
    // Setup mobile menu
    setupMobileMenu();
});

/**
 * Load internationalization resources
 */
function loadI18nResources() {
    // 检查I18n对象是否存在
    if (window.I18n && typeof window.I18n.updateI18n === 'function') {
        // 更新页面上的所有翻译
        window.I18n.updateI18n();
    } else {
        console.warn('I18n object not found or not properly initialized');
    }
}

/**
 * Refresh game cards to update translations
 */
function refreshGameCards() {
    // 重置跟踪变量
    displayedGameIds = new Set();
    
    // 刷新分类游戏
    refreshCategoryGames('action');
    refreshCategoryGames('puzzle');
    refreshCategoryGames('strategy');
    refreshCategoryGames('racing');
    refreshCategoryGames('brain');
    refreshCategoryGames('sports');
    refreshCategoryGames('tower-defense');
    
    // 刷新主题游戏
    refreshThemeGames('cyberpunk');
    refreshThemeGames('scifi');
    refreshThemeGames('fantasy');
    refreshThemeGames('survival');
    refreshThemeGames('adventure');
    
    // 刷新瀑布流布局
    const waterfallContainer = document.getElementById('games-waterfall');
    if (waterfallContainer && window.WaterfallGrid) {
        waterfallContainer.innerHTML = '';
        window.WaterfallGrid.init('games-waterfall', window.WaterfallGrid.getWaterfallGames);
    }
}

/**
 * Refresh games for a specific category
 */
function refreshCategoryGames(category) {
    const container = document.getElementById(`${category}-games`);
    if (container) {
        const categoryGames = getFilteredCategoryGames(category);
        generateGameCards(container, categoryGames.slice(0, 4));
    }
}

/**
 * Generate games for a specific category
 * @param {string} category - The category to generate games for
 */
function generateCategoryGames(category) {
    const container = document.getElementById(`${category}-games`);
    if (!container) return;
    
    const categoryGames = getFilteredCategoryGames(category);
    generateGameCards(container, categoryGames.slice(0, 4));
}

/**
 * Get filtered games for a category, respecting the max categories per game limit
 * @param {string} category - The category to get games for
 * @returns {Array} - Filtered array of game objects
 */
function getFilteredCategoryGames(category) {
    const allCategoryGames = getGamesByCategory(category);
    const filteredGames = [];
    
    for (const game of allCategoryGames) {
        // 检查游戏是否已经在MAX_CATEGORIES_PER_GAME个分类中显示
        if (!gamesInCategories[game.id] || gamesInCategories[game.id] < MAX_CATEGORIES_PER_GAME) {
            filteredGames.push(game);
            
            // 更新游戏分类计数
            if (!gamesInCategories[game.id]) {
                gamesInCategories[game.id] = 1;
            } else {
                gamesInCategories[game.id]++;
            }
        }
    }
    
    return filteredGames;
}

/**
 * Generate game cards in a container
 * @param {HTMLElement} container - The container to add game cards to
 * @param {Array} games - Array of game objects
 */
function generateGameCards(container, games) {
    if (!container || !games || !games.length) {
        container.innerHTML = '<p class="no-games-message">No games available</p>';
        return;
    }
    
    container.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        container.appendChild(gameCard);
    });
}

/**
 * Create a game card element
 * @param {Object} game - The game object
 * @returns {HTMLElement} - The game card element
 */
function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.setAttribute('data-game-id', game.id);
    
    // 获取当前语言
    const currentLang = window.I18n ? window.I18n.getCurrentLanguage() : 'en';
    
    // 获取游戏描述（支持国际化）
    let description = game.description;
    if (game.descriptions && game.descriptions[currentLang]) {
        description = game.descriptions[currentLang];
    }
    
    // 确保描述长度一致
    const truncatedDescription = description.substring(0, 100) + (description.length > 100 ? '...' : '');
    
    // 获取游戏标题（支持国际化）
    let title = game.title;
    if (game.titles && game.titles[currentLang]) {
        title = game.titles[currentLang];
    }
    
    // 获取"立即玩"按钮文本的翻译
    const playNowText = window.I18n && typeof window.I18n.getTranslation === 'function' 
        ? window.I18n.getTranslation('games.playNow') 
        : 'Play Now';
    
    gameCard.innerHTML = `
        <div class="game-thumb-container">
            <img src="${game.thumbnail}" alt="${title}" class="game-thumb">
            <div class="play-now-overlay">
                <span class="play-button">${playNowText}</span>
            </div>
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
    gameCard.addEventListener('click', (e) => {
        // 如果点击的是Play Now按钮，阻止事件冒泡
        if (e.target.closest('.play-now-button')) {
            e.stopPropagation();
            window.location.href = `game-detail.html?id=${game.id}`;
            return;
        }
        window.location.href = `game-detail.html?id=${game.id}`;
    });
    
    // 单独为Play Now按钮添加点击事件
    const playNowButton = gameCard.querySelector('.play-now-button');
    if (playNowButton) {
        playNowButton.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `game-detail.html?id=${game.id}`;
        });
    }
    
    // Add favorite functionality if available
    if (typeof isFavorite === 'function') {
        const isFav = isFavorite(game.id);
        if (isFav) {
            gameCard.classList.add('favorite');
        }
    }
    
    return gameCard;
}

/**
 * Load more games for infinite scrolling
 * @param {string} sectionId - The ID of the section to load more games for
 * @param {number} page - The page number to load
 * @param {number} limit - The number of games per page
 */
function loadMoreGames(sectionId, page, limit) {
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    let games = [];
    
    // Determine which games to load based on section ID
    if (sectionId === 'featured-games') {
        games = getFeaturedGames();
    } else if (sectionId === 'new-games') {
        games = getNewGames();
    } else if (sectionId === 'popular-games') {
        games = getPopularGames();
    } else if (sectionId.endsWith('-games')) {
        const category = sectionId.replace('-games', '');
        games = getGamesByCategory(category);
    }
    
    // Calculate pagination
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const gamesSlice = games.slice(startIndex, endIndex);
    
    // Generate and append game cards
    gamesSlice.forEach(game => {
        const gameCard = createGameCard(game);
        container.appendChild(gameCard);
    });
    
    // Return whether there are more games to load
    return endIndex < games.length;
}

/**
 * Setup mobile menu functionality
 */
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            // 创建或切换遮罩层
            let overlay = document.querySelector('.mobile-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);
                
                // 点击遮罩层关闭菜单
                overlay.addEventListener('click', function() {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    this.classList.remove('active');
                    
                    // 关闭所有打开的下拉菜单
                    const activeDropdowns = document.querySelectorAll('.language-selector.active');
                    activeDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                });
            }
            
            overlay.classList.toggle('active');
        });
        
        // 移动设备上的语言选择器点击事件
        const languageSelector = document.querySelector('.language-selector > a');
        if (languageSelector) {
            languageSelector.addEventListener('click', function(e) {
                // 只在移动设备视图下执行
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation(); // 防止事件冒泡
                    this.parentElement.classList.toggle('active');
                    
                    // 确保下拉菜单可见
                    const dropdown = this.parentElement.querySelector('.language-dropdown');
                    if (dropdown) {
                        dropdown.style.display = this.parentElement.classList.contains('active') ? 'block' : 'none';
                    }
                }
            });
        }
        
        // 移动设备上的语言选项点击事件
        const languageOptions = document.querySelectorAll('.language-dropdown a[data-lang]');
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    // 在移动设备上，点击后关闭下拉菜单
                    const selector = this.closest('.language-selector');
                    if (selector) {
                        setTimeout(() => {
                            selector.classList.remove('active');
                        }, 100);
                    }
                }
            });
        });
    }
}

/**
 * Generate games for a specific theme
 * @param {string} theme - The theme to generate games for
 */
function generateThemeGames(theme) {
    const container = document.getElementById(`${theme}-themed-games`);
    if (!container) return;
    
    const themeGames = getGamesByTheme(theme);
    generateGameCards(container, themeGames.slice(0, 4));
}

/**
 * Refresh games for a specific theme
 */
function refreshThemeGames(theme) {
    const container = document.getElementById(`${theme}-themed-games`);
    if (container) {
        const themeGames = getGamesByTheme(theme);
        generateGameCards(container, themeGames.slice(0, 4));
    }
}

/**
 * Get games by theme
 * @param {string} theme - The theme to get games for
 * @returns {Array} - Array of game objects
 */
function getGamesByTheme(theme) {
    if (!window.gamesData) return [];
    
    return window.gamesData.filter(game => 
        game.theme && Array.isArray(game.theme) && game.theme.includes(theme)
    ).sort((a, b) => (b.rating || 0) - (a.rating || 0));
}

// Export functions for use in other scripts
window.HomepageGenerator = {
    generateGameCards,
    createGameCard,
    loadMoreGames
}; 