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
    // 使用 Intersection Observer API 实现图片懒加载
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '200px 0px'
        });
        
        // 监听所有带有 data-src 属性的图片
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy-load');
            imageObserver.observe(img);
        });
    } else {
        // 对于不支持 Intersection Observer 的浏览器，使用传统方法
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Run preload after window load to prioritize main content first
window.addEventListener('load', function() {
    preloadGameThumbnails();
    optimizeImageLoading();
});