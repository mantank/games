/**
 * Vertical Game Responsive Handler
 * 处理垂直游戏的响应式显示，使其能根据设备尺寸自动调整大小
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化垂直游戏响应式处理
    initVerticalGameResponsive();
});

/**
 * 初始化垂直游戏响应式处理
 */
function initVerticalGameResponsive() {
    // 检查页面URL以确定是否在游戏详情页
    if (window.location.href.includes('game.html')) {
        console.log('[Vertical Game] 在游戏详情页中初始化垂直游戏响应式处理');
        
        // 添加自定义的游戏加载事件监听器
        document.addEventListener('gameReady', function(e) {
            const game = e.detail.game;
            if (game && game.isVertical) {
                console.log('[Vertical Game] 检测到垂直游戏，应用响应式布局');
                const container = document.getElementById('game-frame-container');
                if (container) {
                    // 调整容器尺寸
                    adjustVerticalGameSize(container);
                    
                    // 监听窗口大小变化，重新调整垂直游戏尺寸
                    window.addEventListener('resize', function() {
                        adjustVerticalGameSize(container);
                    });
                }
            }
        });
        
        // 立即检查页面中是否已经有垂直游戏容器
        checkAndAdjustExistingVerticalGames();
    }
}

/**
 * 检查并调整页面中已存在的垂直游戏容器
 */
function checkAndAdjustExistingVerticalGames() {
    const verticalContainers = document.querySelectorAll('.vertical-game');
    if (verticalContainers.length > 0) {
        console.log(`[Vertical Game] 找到 ${verticalContainers.length} 个垂直游戏容器`);
        verticalContainers.forEach(function(container) {
            adjustVerticalGameSize(container);
        });
        
        // 添加窗口大小变化监听器
        window.addEventListener('resize', function() {
            verticalContainers.forEach(function(container) {
                adjustVerticalGameSize(container);
            });
        });
    }
}

/**
 * 调整垂直游戏的尺寸，使其在不同设备上有最佳显示效果
 * @param {HTMLElement} container - 游戏容器元素
 */
function adjustVerticalGameSize(container) {
    if (!container) return;
    
    // 获取视口高度
    const viewportHeight = window.innerHeight;
    // 获取视口宽度
    const viewportWidth = window.innerWidth;
    
    // 获取游戏详情容器的顶部位置
    const gameDetailsContainer = document.querySelector('.game-content-wrapper');
    const containerTop = gameDetailsContainer ? gameDetailsContainer.getBoundingClientRect().top : 0;
    const availableHeight = viewportHeight - containerTop - 50; // 减去一些底部间距
    
    // 根据设备宽度和可用高度设置合适的尺寸
    let containerHeight;
    let containerWidth;
    
    if (viewportWidth >= 1200) {
        // 大屏幕设备
        containerHeight = Math.min(availableHeight, Math.min(viewportHeight * 0.8, 800)) + 'px';
        containerWidth = '450px';
    } else if (viewportWidth >= 768) {
        // 中等屏幕设备
        containerHeight = Math.min(availableHeight, Math.min(viewportHeight * 0.75, 750)) + 'px';
        containerWidth = '400px';
    } else if (viewportWidth >= 481) {
        // 平板设备
        containerHeight = Math.min(availableHeight, Math.min(viewportHeight * 0.7, 700)) + 'px';
        containerWidth = '350px';
    } else {
        // 手机设备
        containerHeight = Math.min(availableHeight, Math.min(viewportHeight * 0.65, 650)) + 'px';
        containerWidth = '90%';
    }
    
    // 确保高度不小于最小值
    const minHeight = 450;
    if (parseInt(containerHeight) < minHeight) {
        containerHeight = minHeight + 'px';
    }
    
    // 应用新尺寸
    container.style.height = containerHeight;
    container.style.width = containerWidth;
    
    console.log(`[Vertical Game] 调整尺寸: ${viewportWidth}x${viewportHeight} -> ${containerWidth}x${containerHeight}`);
}

// 将函数暴露到全局作用域，以便其他脚本可以使用
window.VerticalGameResponsive = {
    init: initVerticalGameResponsive,
    adjustSize: adjustVerticalGameSize,
    checkExisting: checkAndAdjustExistingVerticalGames
}; 