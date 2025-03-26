// ManGames - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }
    
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        });
        
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // 修改侧边栏分类链接的点击事件，使其直接滚动到首页对应的分类部分
    setupSidebarCategoryLinks();
    
    // 滚动到顶部按钮
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        // 监听滚动事件，显示/隐藏按钮
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // 点击按钮滚动到顶部
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Comment form submission
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            const comment = textarea.value.trim();
            
            if (comment) {
                // In a real implementation, you would send this to your server
                alert('Comment submitted! In a real implementation, this would be saved to a database.');
                textarea.value = '';
                
                // Mock adding a comment to the UI
                addComment({
                    username: 'Guest User',
                    date: new Date().toLocaleDateString(),
                    text: comment
                });
            }
        });
    }
    
    // Function to add a comment to the UI
    function addComment(comment) {
        const commentsContainer = document.getElementById('comments-container');
        if (!commentsContainer) return;
        
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${comment.username}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
        `;
        
        commentsContainer.appendChild(commentElement);
    }
    
    // Load game ratings dynamically (example)
    function loadGameRatings() {
        // In a real implementation, this would fetch from your server
        // This is just a placeholder example
        const ratingContainers = document.querySelectorAll('.rating');
        
        ratingContainers.forEach(container => {
            // We're assuming the rating data would come from a data attribute in a real implementation
            // This is just for demonstration
            const starsElements = container.querySelectorAll('.star');
            const ratingCount = container.querySelector('span:not(.star)');
            
            if (starsElements.length > 0 && ratingCount) {
                // Here you would update the rating data with actual data from your server
                // This is just an example
                console.log('Rating stars and count found, in a real implementation these would be updated dynamically');
            }
        });
    }
    
    // Call functions that need to run on page load
    loadGameRatings();
    
    // Add CSS class for animations after page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);

    // Fix relative paths for language files
    fixRelativePaths();

    // 移动设备上的语言选择器点击事件
    const languageSelector = document.querySelector('.language-selector > a');
    if (languageSelector) {
        languageSelector.addEventListener('click', function(e) {
            // 只在移动设备视图下执行
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    }

    // 验证Voxel World游戏是否已加载
    const voxelWorldGame = getGameById('voxel-world');
    if (voxelWorldGame) {
        console.log('[INFO] Voxel World游戏已成功加载');
        
        // 验证游戏已正确分类
        const strategySection = document.getElementById('strategy-games');
        const puzzleSection = document.getElementById('puzzle-games');
        
        // 检查这些分类区域是否包含该游戏
        if (strategySection && puzzleSection) {
            const strategyHasGame = strategySection.querySelector('[data-game-id="voxel-world"]');
            const puzzleHasGame = puzzleSection.querySelector('[data-game-id="voxel-world"]');
            
            console.log('[INFO] Voxel World在策略游戏分类中:', !!strategyHasGame);
            console.log('[INFO] Voxel World在益智游戏分类中:', !!puzzleHasGame);
        }
    } else {
        console.error('[ERROR] 无法加载Voxel World游戏');
    }

    // 添加性能优化
    optimizeImageLoading();
    
    // 等页面基本渲染完成后再进行DOM性能优化
    setTimeout(optimizeDOMPerformance, 1000);

    // 添加搜索功能
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('game-search');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Add new game data
    window.gamesData = window.gamesData || [];
    window.gamesData.push({
        id: 'global-guesser',
        title: 'Global Guesser',
        thumbnail: 'games/global-guesser-512-lg.jpg',
        url: 'https://unblocked-games.s3.amazonaws.com/games/2025/html/global-guesser/index.html#/',
        category: ['puzzle', 'casual'],
        description: 'Test your geography knowledge in this exciting location guessing game! Explore the world and guess where you are based on street views and landmarks.',
        controls: 'Use mouse to look around, click on the map to make your guess, the closer your guess, the more points you earn',
        tags: ['#games', '#geography', '#quiz', '#world', '#maps', '#exploration', '#educational', '#guessing']
    });
});

// 设置侧边栏分类链接的点击事件
function setupSidebarCategoryLinks() {
    const categoryLinks = document.querySelectorAll('.sidebar .category-list a');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 获取分类名称
            const href = this.getAttribute('href');
            const categoryMatch = href.match(/category\/(.+)\.html/);
            const themeMatch = href.match(/theme\/(.+)\.html/);
            
            // 检查当前是否在首页
            const isHomePage = window.location.pathname.endsWith('index.html') || 
                window.location.pathname.endsWith('/') || 
                window.location.pathname.endsWith('/game/');
                
            if (categoryMatch || themeMatch) {
                const isCategory = !!categoryMatch;
                const categoryOrTheme = isCategory ? categoryMatch[1] : themeMatch[1];
                
                if (isHomePage) {
                    // 在首页，阻止默认行为并滚动到对应部分
                    e.preventDefault();
                    scrollToSection(categoryOrTheme, isCategory);
                } else {
                    // 不在首页，跳转到首页并添加锚点
                    window.location.href = `index.html#${isCategory ? 'category' : 'theme'}-${categoryOrTheme}`;
                }
                
                // 在移动设备上，点击后关闭侧边栏
                if (window.innerWidth <= 768 && sidebar && overlay) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// 滚动到指定分类或主题部分
function scrollToSection(categoryOrTheme, isCategory) {
    // 首先尝试使用新的锚点ID格式
    const sectionId = isCategory ? `category-${categoryOrTheme}` : `theme-${categoryOrTheme}`;
    let targetSection = document.getElementById(sectionId);
    
    // 如果找不到section，尝试使用旧的游戏容器ID格式
    if (!targetSection) {
        const targetId = isCategory ? `${categoryOrTheme}-games` : `${categoryOrTheme}-themed-games`;
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetSection = targetElement.closest('.game-section');
        }
    }
    
    // 如果找到目标元素，滚动到该位置
    if (targetSection) {
        // 滚动到section的位置，并考虑页面顶部的固定元素
        const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
        const offsetTop = targetSection.offsetTop - headerHeight - 20; // 20px的额外空间
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // 添加高亮效果
        highlightSection(targetSection);
        
        console.log(`滚动到分类: ${categoryOrTheme}, 目标元素ID: ${targetSection.id}`);
    } else {
        console.warn(`未找到目标分类: "${categoryOrTheme}"`);
    }
}

// 高亮显示当前选中的分类部分
function highlightSection(section) {
    // 移除所有section的高亮
    document.querySelectorAll('.game-section').forEach(s => {
        s.classList.remove('highlighted');
    });
    
    // 添加高亮类
    section.classList.add('highlighted');
    
    // 3秒后移除高亮
    setTimeout(() => {
        section.classList.remove('highlighted');
    }, 3000);
}

// Preload game thumbnails for smoother transitions
function preloadGameThumbnails() {
    const thumbnails = document.querySelectorAll('.game-thumb-hover');
    thumbnails.forEach(img => {
        if (img.dataset.src) {
            const preloadImage = new Image();
            preloadImage.src = img.dataset.src;
            
            preloadImage.onload = function() {
                img.src = img.dataset.src;
            };
        }
    });
}

// Fix relative paths for language files and other resources
function fixRelativePaths() {
    // Check if we're in a subdirectory
    const isInSubdirectory = window.location.pathname.split('/').length > 2;
    
    if (isInSubdirectory) {
        // Override the fetch method in i18n.js to use the correct path
        if (window.i18n) {
            const originalLoadLanguage = window.i18n.loadLanguage;
            window.i18n.loadLanguage = async function(lang) {
                try {
                    const response = await fetch(`../js/lang/${lang}.json`);
                    if (!response.ok) {
                        throw new Error(`Failed to load language file: ${lang}`);
                    }
                    this.translations = await response.json();
                    this.currentLang = lang;
                    localStorage.setItem('mangames_lang', lang);
                    return this.translations;
                } catch (error) {
                    console.error(`Error loading language: ${lang}`, error);
                    // Fallback to English if loading fails
                    if (lang !== 'en') {
                        return this.loadLanguage('en');
                    }
                    return {};
                }
            };
            
            // Reload the current language with the correct path
            window.i18n.loadLanguage(window.i18n.currentLang).then(() => {
                window.i18n.translatePage();
            });
        }
    }
}

// 优化图片加载
function optimizeImageLoading() {
    console.log('[DEBUG] 初始化图片懒加载');
    
    // 使用原生懒加载属性
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
    });
    
    // 使用 Intersection Observer API 实现更高级的图片懒加载
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // 处理data-src属性
                    if (img.dataset.src && !img.src.includes(img.dataset.src)) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                    
                    // 处理data-srcset属性
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '200px 0px', // 提前200px加载
            threshold: 0.01 // 只需要1%的元素可见就开始加载
        });
        
        // 监听所有带有 data-src 属性的图片
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy-load');
            imageObserver.observe(img);
        });
        
        console.log('[DEBUG] 启用Intersection Observer图片懒加载');
    } else {
        // 对于不支持 Intersection Observer 的浏览器，使用传统方法
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
        console.log('[DEBUG] 浏览器不支持Intersection Observer，使用传统图片加载');
    }
}

// 优化DOM渲染性能
function optimizeDOMPerformance() {
    // 减少不必要的DOM重绘
    document.querySelectorAll('.game-card').forEach(card => {
        card.style.willChange = 'transform';
        card.style.transform = 'translateZ(0)'; // 启用GPU加速
    });
    
    // 优化动画性能
    document.querySelectorAll('.game-thumb-container').forEach(container => {
        container.style.willChange = 'transform';
    });
    
    console.log('[DEBUG] 已应用DOM性能优化');
}

// 监听窗口大小变化，优化网格布局
window.addEventListener('resize', debounce(function() {
    // 重新调整网格布局
    const grids = document.querySelectorAll('.games-grid');
    grids.forEach(grid => {
        if (grid.children.length > 0) {
            adjustGridLayout(grid);
        }
    });
    
    // 调整瀑布流布局
    const waterfallContainer = document.getElementById('games-waterfall');
    if (waterfallContainer && window.WaterfallGrid && typeof window.WaterfallGrid.initLayout === 'function') {
        window.WaterfallGrid.initLayout('games-waterfall');
    }
}, 300));

// 防抖函数
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

// 调整网格布局
function adjustGridLayout(container) {
    const containerWidth = container.clientWidth;
    const cardWidth = 200; // 基础卡片宽度
    const minGap = 20; // 最小间距
    
    let columns = Math.floor(containerWidth / (cardWidth + minGap));
    columns = Math.max(1, columns); // 至少1列
    
    const gap = Math.floor((containerWidth - (columns * cardWidth)) / columns);
    
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gap = `${gap}px`;
}

// 修改搜索功能，确保搜索结果不重复显示在热门游戏区域
function performSearch() {
    const searchInput = document.getElementById('game-search');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const waterfallContainer = document.getElementById('games-waterfall');
    
    if (!waterfallContainer) return;
    
    // 清空瀑布流容器
    waterfallContainer.innerHTML = '';
    
    if (searchTerm === '') {
        // 如果搜索词为空，重新加载所有热门游戏（不重复）
        setupWaterfallGridForPopularGames();
    } else {
        // 过滤游戏
        const filteredGames = window.gamesData.filter(game => 
            game.title.toLowerCase().includes(searchTerm) || 
            (game.description && game.description.toLowerCase().includes(searchTerm)) ||
            (game.descriptions && game.descriptions.zh && game.descriptions.zh.toLowerCase().includes(searchTerm)) ||
            (game.descriptions && game.descriptions.en && game.descriptions.en.toLowerCase().includes(searchTerm)) ||
            (game.category && game.category.some(cat => cat.toLowerCase().includes(searchTerm))) ||
            (game.theme && game.theme.some(theme => theme.toLowerCase().includes(searchTerm))) ||
            (game.tags && game.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
        
        // 显示过滤后的游戏
        if (filteredGames.length > 0) {
            const fragment = document.createDocumentFragment();
            filteredGames.forEach(game => {
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
            
            waterfallContainer.appendChild(fragment);
            
            // 应用瀑布流布局
            if (window.WaterfallGrid && typeof window.WaterfallGrid.initLayout === 'function') {
                window.WaterfallGrid.initLayout('games-waterfall');
            } else {
                // 使用CSS grid作为备选方案
                applyGridLayout(waterfallContainer);
            }
        } else {
            waterfallContainer.innerHTML = 
                '<div class="no-results">没有找到匹配您搜索的游戏。</div>';
        }
    }
}

window.addEventListener('error', function(e) {
    console.error('JavaScript错误:', e.message);
    // 可以显示一个友好的错误消息给用户
});