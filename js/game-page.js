// 游戏页面处理脚本
document.addEventListener('DOMContentLoaded', function() {
    // 从URL获取游戏ID
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (!gameId) {
        console.error('未提供游戏ID');
        document.getElementById('game-container').innerHTML = '<div class="error-message">游戏未找到</div>';
        return;
    }
    
    // 加载游戏数据
    const game = window.getGameById(gameId);
    
    if (!game) {
        console.error(`找不到ID为${gameId}的游戏`);
        document.getElementById('game-container').innerHTML = '<div class="error-message">游戏未找到</div>';
        return;
    }
    
    // 设置页面标题
    document.title = `${game.title} - Happy Games`;
    
    // 设置游戏标题
    const gameTitleElement = document.querySelector('.game-title');
    if (gameTitleElement) {
        gameTitleElement.textContent = game.title;
    }
    
    // 设置收藏按钮
    const favoriteBtn = document.querySelector('.favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.setAttribute('data-game-id', game.id);
        // 检查游戏是否已收藏
        if (typeof isFavorite === 'function' && isFavorite(game.id)) {
            favoriteBtn.classList.add('favorited');
            favoriteBtn.querySelector('span').textContent = '已收藏';
        }
        
        // 添加收藏按钮事件
        favoriteBtn.addEventListener('click', function() {
            const gameId = this.getAttribute('data-game-id');
            if (typeof toggleFavorite === 'function') {
                const isFav = toggleFavorite(gameId);
                if (isFav) {
                    this.classList.add('favorited');
                    this.querySelector('span').textContent = '已收藏';
                } else {
                    this.classList.remove('favorited');
                    this.querySelector('span').textContent = '添加到收藏';
                }
            }
        });
    }
    
    // 设置游戏描述
    const gameDescElement = document.getElementById('game-description');
    if (gameDescElement) {
        // 优先使用中文描述，如果没有则使用英文描述
        if (game.descriptions && game.descriptions.zh) {
            gameDescElement.textContent = game.descriptions.zh;
        } else {
            gameDescElement.textContent = game.description || '';
        }
    }
    
    // 设置游戏分类
    const gameCategoryElement = document.getElementById('game-category');
    if (gameCategoryElement && game.category) {
        gameCategoryElement.textContent = game.category.join(', ');
    }
    
    // 设置游戏主题
    const gameThemeElement = document.getElementById('game-theme');
    if (gameThemeElement && game.theme) {
        gameThemeElement.textContent = game.theme.join(', ');
    }
    
    // 加载游戏iframe
    loadGame(game);
    
    // 加载相关游戏
    loadRelatedGames(game);
    
    // 全屏按钮功能
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameContainer = document.getElementById('game-container');
    
    if (fullscreenBtn && gameContainer) {
        fullscreenBtn.addEventListener('click', function() {
            if (gameContainer.requestFullscreen) {
                gameContainer.requestFullscreen();
            } else if (gameContainer.webkitRequestFullscreen) {
                gameContainer.webkitRequestFullscreen();
            } else if (gameContainer.msRequestFullscreen) {
                gameContainer.msRequestFullscreen();
            }
        });
    }
});

// 加载游戏
function loadGame(game) {
    const frameContainer = document.getElementById('game-frame-container');
    const loadingElement = document.getElementById('game-loading');
    
    if (!frameContainer) return;
    
    // 检查游戏是否为垂直方向
    if (game.isVertical) {
        frameContainer.classList.add('vertical-game');
    }
    
    // 创建iframe
    const iframe = document.createElement('iframe');
    iframe.src = game.gameUrl;
    iframe.allowFullscreen = game.allowFullscreen !== false;
    
    // 设置sandbox属性（如果有）
    if (game.sandboxOptions) {
        iframe.sandbox = game.sandboxOptions;
    }
    
    // 当iframe加载完成后隐藏加载指示器
    iframe.onload = function() {
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    };
    
    // 添加iframe到容器
    frameContainer.appendChild(iframe);
}

// 加载相关游戏
function loadRelatedGames(currentGame) {
    const relatedGamesContainer = document.getElementById('related-games');
    if (!relatedGamesContainer) return;
    
    // 获取相关游戏
    let relatedGames = [];
    
    // 优先使用相同分类的游戏
    if (currentGame.category && currentGame.category.length > 0) {
        const categoryGames = window.getGamesByCategory(currentGame.category[0]);
        if (categoryGames && categoryGames.length > 0) {
            relatedGames = [...categoryGames];
        }
    }
    
    // 如果找不到足够的分类游戏，再使用相同主题的游戏
    if (relatedGames.length < 4 && currentGame.theme && currentGame.theme.length > 0) {
        const themeGames = window.getGamesByTheme(currentGame.theme[0]);
        if (themeGames && themeGames.length > 0) {
            relatedGames = [...new Set([...relatedGames, ...themeGames])];
        }
    }
    
    // 如果还是不够，就用热门游戏
    if (relatedGames.length < 4) {
        const popularGames = window.gamesData.sort((a, b) => b.popularity - a.popularity);
        relatedGames = [...new Set([...relatedGames, ...popularGames])];
    }
    
    // 过滤掉当前游戏
    relatedGames = relatedGames.filter(game => game.id !== currentGame.id);
    
    // 限制显示数量
    relatedGames = relatedGames.slice(0, 4);
    
    // Render related games
    relatedGamesContainer.innerHTML = '';
    relatedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <a href="game.html?id=${game.id}" target="_blank" rel="noopener noreferrer" class="game-thumb-container">
                <img src="../${game.thumbnail}" alt="${game.title}" loading="lazy" class="game-thumb">
                <div class="game-info-overlay">
                    <div class="game-title">${game.title}</div>
                    <div class="game-category">${(game.category || []).join(', ')}</div>
                </div>
            </a>
        `;
        relatedGamesContainer.appendChild(gameCard);
    });
} 