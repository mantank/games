/**
 * Homepage Game Generator
 * Generates game cards and sections for the homepage
 */

// 记录每个游戏在哪些分类中显示
const gamesInCategories = {}; // 记录每个游戏在哪些分类中显示

document.addEventListener('DOMContentLoaded', function() {
    // 检查游戏数据是否正确加载
    if (!window.gamesData || !Array.isArray(window.gamesData) || window.gamesData.length === 0) {
        console.error('游戏数据未正确加载或为空!');
        
        // 尝试从全局变量加载游戏数据
        if (typeof gamesData !== 'undefined') {
            window.gamesData = gamesData;
            console.log('已从全局变量加载游戏数据:', window.gamesData.length);
        } else {
            console.error('无法找到游戏数据!');
        }
    } else {
        console.log('游戏数据已加载，共有游戏:', window.gamesData.length);
    }
    
    // Load internationalization resources
    loadI18nResources();
    
    // 添加热门游戏展示
    generatePopularGames();
    
    // 按照优先级顺序生成分类游戏
    const categories = ['action', 'puzzle', 'strategy', 'racing', 'brain', 'sports', 'tower-defense'];
    
    categories.forEach(category => {
        // 为每个分类生成游戏，无论是否有游戏
        generateCategoryGames(category);
    });
    
    
    // Popular Games section uses waterfall layout
    // 初始化流行游戏的瀑布流布局，一次性加载所有游戏
    const waterfallContainer = document.getElementById('games-waterfall');
    if (waterfallContainer && window.WaterfallGrid) {
        waterfallContainer.innerHTML = '';
        
        // 获取所有按人气排序的游戏
        const allPopularGames = getPopularGames();
        console.log(`[DEBUG] 瀑布流布局一次性加载所有 ${allPopularGames.length} 个热门游戏`);
        
        // 创建所有游戏卡片
        const fragment = document.createDocumentFragment();
        allPopularGames.forEach(game => {
            const gameCard = createGameCard(game);
            if (gameCard) {
                // 为图片添加懒加载属性
                const img = gameCard.querySelector('img');
                if (img) {
                    img.loading = 'lazy';
                    img.decoding = 'async';
                }
                fragment.appendChild(gameCard);
            }
        });
        
        // 一次性添加所有游戏卡片，减少DOM操作次数
        waterfallContainer.appendChild(fragment);
        
        // 应用瀑布流布局
        if (typeof window.WaterfallGrid.initLayout === 'function') {
            // 使用原有的initLayout函数
            window.WaterfallGrid.initLayout('games-waterfall');
        } else {
            // 使用CSS grid作为备选方案
            applyGridLayout(waterfallContainer);
        }
    }
    
    // Setup mobile menu
    setupMobileMenu();
    
    // 更新策略游戏和益智游戏分类，确保包含新添加的Voxel World游戏
    const strategyGames = getGamesByCategory('strategy');
    const puzzleGames = getGamesByCategory('puzzle');
    
    // 检查并确认新游戏已添加到相应分类
    console.log('[DEBUG] 策略游戏分类中的游戏数量:', strategyGames.length);
    console.log('[DEBUG] 益智游戏分类中的游戏数量:', puzzleGames.length);
    
    // 如果使用了优化游戏分类的函数，确保它被调用
    if (typeof optimizeGameCategories === 'function') {
        optimizeGameCategories();
    }
    
    // 对游戏分类优化处理
    optimizeGameCategories();
    
    // 在瀑布流区域一次性加载所有热门游戏
    setupWaterfallGridForPopularGames();
    
    // 添加Voxel World游戏加载检测
    setTimeout(() => {
        // 验证游戏是否能正确展示
        const voxelWorldGame = window.gamesData.find(game => game.id === "voxel-world");
        if (voxelWorldGame) {
            console.log('[INFO] Voxel World游戏数据:', voxelWorldGame);
            
            // 检查游戏是否在相应分类中显示
            const puzzleContainer = document.getElementById('puzzle-games');
            const actionContainer = document.getElementById('action-games');
            
            if (puzzleContainer) {
                const puzzleHasGame = puzzleContainer.querySelector('[data-game-id="voxel-world"]');
                console.log('[INFO] Voxel World在益智游戏分类中显示:', !!puzzleHasGame);
            }
            
            if (actionContainer) {
                const actionHasGame = actionContainer.querySelector('[data-game-id="voxel-world"]');
                console.log('[INFO] Voxel World在动作游戏分类中显示:', !!actionHasGame);
            }
            
            // 检查在热门游戏区域
            const waterfallContainer = document.getElementById('games-waterfall');
            if (waterfallContainer) {
                const waterfallHasGame = waterfallContainer.querySelector('[data-game-id="voxel-world"]');
                console.log('[INFO] Voxel World在热门游戏瀑布流中显示:', !!waterfallHasGame);
            }
        } else {
            console.error('[ERROR] 无法找到Voxel World游戏数据');
        }
    }, 1000); // 延迟1秒后检查，确保页面已完全加载
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
    // 刷新热门游戏
    refreshPopularGames();
    
    // 刷新分类游戏
    refreshCategoryGames('action');
    refreshCategoryGames('puzzle');
    refreshCategoryGames('strategy');
    refreshCategoryGames('racing');
    refreshCategoryGames('brain');
    refreshCategoryGames('sports');
    refreshCategoryGames('tower-defense');
    
    // 刷新瀑布流布局
    const waterfallContainer = document.getElementById('games-waterfall');
    if (waterfallContainer && window.WaterfallGrid) {
        waterfallContainer.innerHTML = '';
        // 使用流行游戏数据初始化瀑布流（流行游戏不受已显示游戏的限制）
        window.WaterfallGrid.init('games-waterfall', window.WaterfallGrid.getPopularWaterfallGames);
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
    if (!container) {
        console.warn(`找不到${category}分类的容器元素`);
        return;
    }
    
    // 清空容器
    container.innerHTML = '';
    
    // 获取该分类的所有游戏
    const categoryGames = getFilteredCategoryGames(category);
    
    // 如果没有游戏，显示一条消息
    if (!categoryGames || categoryGames.length === 0) {
        container.innerHTML = '<p class="no-games-message">No games available for this category</p>';
        return;
    }
    
    // 最多显示4个游戏
    const gamesToShow = categoryGames.slice(0, 4);
    
    // 生成游戏卡片
    generateGameCards(container, gamesToShow);
    
    // 如果分类部分存在，则显示它
    const categorySection = container.closest('.category-section');
    if (categorySection) {
        categorySection.style.display = gamesToShow.length > 0 ? 'block' : 'none';
    }
}

/**
 * Generate games for the Popular category
 * 修改为只在瀑布流区域显示热门游戏，避免重复展示
 */
function generatePopularGames() {
    const container = document.getElementById('popular-games');
    if (!container) {
        console.warn('找不到热门游戏容器元素');
        return;
    }
    
    // 清空容器内容
    container.innerHTML = '';
    
    // 移除提示文字，保持容器为空
    // 不再添加任何文本提示
    
    console.log('[DEBUG] 热门游戏仅在瀑布流区域展示，避免重复');
}

/**
 * 设置CSS网格布局
 */
function applyGridLayout(container) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    container.style.gap = '20px';
    container.style.marginTop = '20px';
}

/**
 * @returns {Array} - Filtered array of game objects
 */
function getFilteredCategoryGames(category) {
    if (!window.gamesData || !Array.isArray(window.gamesData)) {
        console.error('未找到游戏数据，无法为分类获取游戏:', category);
        return [];
    }
    
    console.log(`[DEBUG] 为分类 ${category} 获取游戏`);
    
    // 获取此分类的所有游戏
    const allCategoryGames = window.gamesData.filter(game => 
        game.category && Array.isArray(game.category) && game.category.includes(category)
    );
    
    console.log(`[DEBUG] 分类 ${category} 总共有 ${allCategoryGames.length} 个游戏`);
    
    if (allCategoryGames.length === 0) {
        console.log(`[DEBUG] 分类 ${category} 没有可用游戏`);
        return [];
    }
    
    // 记录游戏在哪个分类中展示
    for (const game of allCategoryGames) {
        // 记录游戏在哪个分类中展示，但不再影响游戏是否显示
        if (!gamesInCategories[game.id]) {
            gamesInCategories[game.id] = [];
        }
        if (!gamesInCategories[game.id].includes(category)) {
            gamesInCategories[game.id].push(category);
        }
        
        console.log(`[DEBUG] 游戏 "${game.title}" (ID: ${game.id}) 添加到分类 ${category}`);
    }
    
    // 按照特色和人气对游戏进行排序
    const sortedGames = [...allCategoryGames].sort((a, b) => {
        // 特色游戏排在前面（同时支持featured和isFeatured两种属性名）
        const aFeatured = a.featured || a.isFeatured;
        const bFeatured = b.featured || b.isFeatured;
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        // 然后按人气排序
        return (b.popularity || 0) - (a.popularity || 0);
    });
    
    console.log(`[DEBUG] 分类 ${category} 有 ${sortedGames.length} 个游戏可显示`);
    return sortedGames;
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
    if (!game) return null;
    
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.setAttribute('data-game-id', game.id);
    
    gameCard.innerHTML = `
        <a href="game.html?id=${game.id}" class="game-thumb-container">
            <img src="${game.thumbnail}" alt="${game.title}" loading="lazy" class="game-thumb">
            <div class="game-info-overlay">
                <div class="game-title">${game.title}</div>
                <div class="game-category">${(game.category || []).join(', ')}</div>
            </div>
        </a>
    `;
    
    return gameCard;
}

/**
 * Load more games for a section
 * @param {string} sectionId - The ID of the section to load games for
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
        games = getFilteredCategoryGames(category);
    }
    
    // Calculate pagination
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const gamesSlice = games.slice(startIndex, endIndex);
    
    // Generate and append game cards
    gamesSlice.forEach(game => {
        const gameCard = createGameCard(game);
        if (gameCard) {
            container.appendChild(gameCard);
        }
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

// Export functions for use in other scripts
window.HomepageGenerator = {
    createGameCard,
    loadMoreGames
};

/**
 * Get filtered games for popular category (shows all games regardless of display status)
 * @returns {Array} - Filtered array of game objects
 */
function getFilteredPopularGames() {
    // 流行游戏不受已显示游戏的限制，可以显示全部游戏
    return getPopularGames();
}

/**
 * Refresh popular games
 */
function refreshPopularGames() {
    const container = document.getElementById('popular-games-grid');
    if (!container) return;
    
    // 清空容器
    container.innerHTML = '';
    
    // 重新生成热门游戏
    generatePopularGames();
}

/**
 * 游戏分类优化函数
 * 将每个游戏最多分配到2个最相关的分类中
 */
function optimizeGameCategories() {
    if (!window.gamesData || !Array.isArray(window.gamesData)) {
        console.error('未找到游戏数据，无法优化分类');
        return;
    }
    
    console.log('[DEBUG] 开始进行游戏分类优化，限制每个游戏最多显示在2个分类中');
    
    // 新的分类容器元素映射
    const categoryContainers = {
        'action': document.getElementById('action-games'),
        'puzzle': document.getElementById('puzzle-games'),
        'racing': document.getElementById('racing-games'),
        'casual': document.getElementById('casual-games'),
        'shooting': document.getElementById('shooting-games'),
        'sports': document.getElementById('sports-games'),
        'multiplayer': document.getElementById('multiplayer-games')
    };
    
    // 清空所有分类容器
    Object.values(categoryContainers).forEach(container => {
        if (container) container.innerHTML = '';
    });
    
    // 添加游戏到相应分类容器
    window.gamesData.forEach(game => {
        if (!game.category || !Array.isArray(game.category) || game.category.length === 0) {
            return; // 跳过没有分类的游戏
        }
        
        // 确保每个游戏最多只有两个分类
        const categories = game.category.slice(0, 2);
        
        // 在对应的分类容器中添加游戏卡片
        categories.forEach(category => {
            const container = categoryContainers[category];
            if (container) {
                const gameCard = createGameCard(game);
                if (gameCard) {
                    // 为图片添加懒加载属性
                    const img = gameCard.querySelector('img');
                    if (img) {
                        img.loading = 'lazy';
                        img.decoding = 'async';
                    }
                    container.appendChild(gameCard);
                }
            }
        });
    });
    
    console.log('[DEBUG] 游戏分类优化完成');
    
    // 对分类容器应用网格布局
    Object.values(categoryContainers).forEach(container => {
        if (container) {
            applyGridLayout(container);
        }
    });
}

/**
 * 设置瀑布流区域，用于展示所有热门游戏（不重复）
 */
function setupWaterfallGridForPopularGames() {
    const waterfallContainer = document.getElementById('games-waterfall');
    if (!waterfallContainer) {
        console.warn('找不到瀑布流容器');
        return;
    }
    
    // 清空容器
    waterfallContainer.innerHTML = '';
    
    // 获取所有热门游戏
    const allPopularGames = getPopularGames();
    console.log(`[DEBUG] 瀑布流布局一次性加载所有 ${allPopularGames.length} 个热门游戏`);
    
    // 创建所有游戏卡片
    const fragment = document.createDocumentFragment();
    allPopularGames.forEach(game => {
        const gameCard = createGameCard(game);
        if (gameCard) {
            // 为图片添加懒加载属性
            const img = gameCard.querySelector('img');
            if (img) {
                img.loading = 'lazy';
                img.decoding = 'async';
            }
            fragment.appendChild(gameCard);
        }
    });
    
    // 一次性添加所有游戏卡片，减少DOM操作次数
    waterfallContainer.appendChild(fragment);
    
    // 应用瀑布流布局
    if (typeof window.WaterfallGrid === 'object' && typeof window.WaterfallGrid.initLayout === 'function') {
        // 使用原有的initLayout函数
        window.WaterfallGrid.initLayout('games-waterfall');
    } else {
        // 使用CSS grid作为备选方案
        applyGridLayout(waterfallContainer);
    }
} 