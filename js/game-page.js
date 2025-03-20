// Game Page Processing Script
document.addEventListener('DOMContentLoaded', function() {
    // Get game ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (!gameId) {
        console.error('Game ID not provided');
        document.getElementById('game-container').innerHTML = '<div class="error-message">Game not found</div>';
        return;
    }
    
    // Load game data
    const game = window.getGameById(gameId);
    
    if (!game) {
        console.error(`Game with ID ${gameId} not found`);
        document.getElementById('game-container').innerHTML = '<div class="error-message">Game not found</div>';
        return;
    }
    
    // Set page title
    document.title = `${game.title} - Happy Games`;
    
    // Set game title
    const gameTitleElement = document.querySelector('.game-title');
    if (gameTitleElement) {
        gameTitleElement.textContent = game.title;
    }
    
    // Update SEO related tags and structured data
    updateSEOElements(game);
    
    // Update breadcrumb navigation
    updateBreadcrumbs(game);
    
    // Set favorite button
    const favoriteBtn = document.querySelector('.favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.setAttribute('data-game-id', game.id);
        // Check if game is already favorited
        if (typeof isFavorite === 'function' && isFavorite(game.id)) {
            favoriteBtn.classList.add('favorited');
            favoriteBtn.querySelector('span').textContent = 'Favorited';
        }
        
        // Add favorite button event
        favoriteBtn.addEventListener('click', function() {
            const gameId = this.getAttribute('data-game-id');
            if (typeof toggleFavorite === 'function') {
                const isFav = toggleFavorite(gameId);
                if (isFav) {
                    this.classList.add('favorited');
                    this.querySelector('span').textContent = 'Favorited';
                } else {
                    this.classList.remove('favorited');
                    this.querySelector('span').textContent = 'Add to Favorites';
                }
            }
        });
    }
    
    // Set game description
    const gameDescElement = document.getElementById('game-description');
    if (gameDescElement) {
        // Use English description
        gameDescElement.textContent = game.description || '';
    }
    
    // Set game category
    const gameCategoryElement = document.getElementById('game-category');
    if (gameCategoryElement && game.category) {
        gameCategoryElement.textContent = game.category.join(', ');
    }
    
    // Set game theme
    const gameThemeElement = document.getElementById('game-theme');
    if (gameThemeElement && game.theme) {
        gameThemeElement.textContent = game.theme.join(', ');
    }
    
    // Load game iframe
    loadGame(game);
    
    // Load related games
    loadRelatedGames(game);
    
    // Fullscreen button functionality
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

// Load game
function loadGame(game) {
    const frameContainer = document.getElementById('game-frame-container');
    const loadingElement = document.getElementById('game-loading');
    
    if (!frameContainer) return;
    
    // Check if game is vertical
    if (game.isVertical) {
        frameContainer.classList.add('vertical-game');
        document.body.classList.add('has-vertical-game');
    }
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = game.gameUrl;
    iframe.allowFullscreen = game.allowFullscreen !== false;
    
    // Set sandbox attributes (if any)
    if (game.sandboxOptions) {
        iframe.sandbox = game.sandboxOptions;
    }
    
    // Hide loading indicator when iframe is loaded
    iframe.onload = function() {
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        
        // Trigger game ready event for other modules (like vertical game responsive)
        const gameReadyEvent = new CustomEvent('gameReady', {
            detail: {
                game: game,
                iframe: iframe
            }
        });
        document.dispatchEvent(gameReadyEvent);
    };
    
    // Add iframe to container
    frameContainer.appendChild(iframe);
}

// Load related games
function loadRelatedGames(currentGame) {
    const relatedGamesContainer = document.getElementById('related-games');
    if (!relatedGamesContainer) return;
    
    // Get related games
    let relatedGames = [];
    
    // Prioritize games with the same category
    if (currentGame.category && currentGame.category.length > 0) {
        const categoryGames = window.getGamesByCategory(currentGame.category[0]);
        if (categoryGames && categoryGames.length > 0) {
            relatedGames = [...categoryGames];
        }
    }
    
    // If not enough category games, use games with same theme
    if (relatedGames.length < 4 && currentGame.theme && currentGame.theme.length > 0) {
        const themeGames = window.getGamesByTheme(currentGame.theme[0]);
        if (themeGames && themeGames.length > 0) {
            relatedGames = [...new Set([...relatedGames, ...themeGames])];
        }
    }
    
    // If still not enough, use popular games
    if (relatedGames.length < 4) {
        const popularGames = window.gamesData.sort((a, b) => b.popularity - a.popularity);
        relatedGames = [...new Set([...relatedGames, ...popularGames])];
    }
    
    // Filter out current game
    relatedGames = relatedGames.filter(game => game.id !== currentGame.id);
    
    // Limit display count
    relatedGames = relatedGames.slice(0, 4);
    
    // Render related games
    relatedGamesContainer.innerHTML = '';
    relatedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <a href="game.html?id=${game.id}" target="_blank" rel="noopener noreferrer" class="game-thumb-container">
                <img src="${game.thumbnail}" alt="${game.title}" loading="lazy" class="game-thumb">
                <div class="game-info-overlay">
                    <div class="game-title">${game.title}</div>
                    <div class="game-category">${(game.category || []).join(', ')}</div>
                </div>
            </a>
        `;
        relatedGamesContainer.appendChild(gameCard);
    });
}

/**
 * Get game instructions based on game type
 * @param {string} gameType - The game category/type
 * @param {string} gameTitle - The game title
 * @returns {string} - HTML content with game instructions
 */
function getGameInstructions(gameType, gameTitle) {
    let instructions = `<p>Welcome to ${gameTitle}! Follow these instructions to enjoy the game:</p>`;
    
    switch (gameType.toLowerCase()) {
        case 'action':
            instructions += `
                <p>This fast-paced action game requires quick reflexes and strategic thinking. Your objective is to defeat enemies, avoid obstacles, and complete missions to progress through levels.</p>
                <p>Use your character's abilities to navigate through challenging environments while collecting power-ups that enhance your capabilities.</p>
                <p>Watch out for boss battles at the end of each section - they'll test your skills and strategy!</p>
            `;
            break;
            
        case 'puzzle':
            instructions += `
                <p>Exercise your brain with this challenging puzzle game. Your goal is to solve increasingly complex puzzles by manipulating objects, matching patterns, or finding hidden connections.</p>
                <p>Take your time to observe each puzzle carefully before attempting to solve it. Sometimes the solution requires thinking outside the box!</p>
                <p>As you progress, new puzzle mechanics will be introduced to keep the gameplay fresh and engaging.</p>
            `;
            break;
            
        case 'racing':
            instructions += `
                <p>Get ready for an adrenaline-pumping racing experience! Race against opponents or the clock to reach the finish line first.</p>
                <p>Master the handling of your vehicle by taking corners efficiently and using boost when available. Navigate through various tracks and weather conditions to prove your racing skills.</p>
                <p>Collect power-ups during races to gain advantages, and upgrade your vehicle between races to improve performance.</p>
            `;
            break;
            
        case 'shooting':
            instructions += `
                <p>Test your aim and precision in this shooting game. Target enemies or objects within the time limit to earn points and advance.</p>
                <p>Carefully manage your ammunition and reload at strategic moments. Aim for critical spots on targets to maximize damage and score.</p>
                <p>As levels progress, targets will move faster and environmental challenges will make aiming more difficult.</p>
            `;
            break;
            
        case 'casual':
            instructions += `
                <p>Enjoy this relaxing casual game that's easy to learn but offers increasing challenges as you progress.</p>
                <p>Complete simple objectives by interacting with game elements in creative ways. The game is designed to be accessible for all ages and skill levels.</p>
                <p>No pressure - play at your own pace and enjoy the charming visuals and satisfying gameplay mechanics.</p>
            `;
            break;
            
        case 'sports':
            instructions += `
                <p>Experience the thrill of sports in this dynamic game. Compete against opponents using skill-based controls to achieve victory.</p>
                <p>Master timing and positioning to execute perfect plays. Learn the strengths and weaknesses of different players or teams to build your strategy.</p>
                <p>Progress through tournaments or seasons to become the ultimate champion!</p>
            `;
            break;
            
        case 'multiplayer':
            instructions += `
                <p>Team up or compete with other players in this exciting multiplayer game. Coordinate with teammates or outmaneuver opponents to achieve objectives.</p>
                <p>Communication and teamwork are key to success in team modes. In competitive modes, study your opponents' patterns to gain the upper hand.</p>
                <p>Good sportsmanship enhances everyone's experience - have fun and respect other players!</p>
            `;
            break;
            
        default:
            instructions += `
                <p>Explore the game environment and discover the objectives as you play. Use the controls to interact with elements and progress through the game.</p>
                <p>Look for in-game tutorials or hints that will guide you through the basics. Don't be afraid to experiment with different approaches!</p>
                <p>Enjoy the experience and challenge yourself to master all aspects of the game.</p>
            `;
    }
    
    return instructions;
}

/**
 * Update game controls based on game type
 * @param {string} gameType - The game category/type
 */
function updateGameControls(gameType) {
    const controlsList = document.querySelector('.controls-list');
    if (!controlsList) return;
    
    let controlsHTML = '';
    
    switch (gameType.toLowerCase()) {
        case 'action':
            controlsHTML = `
                <li><span class="control-key">WASD</span> <span class="control-action">or Arrow Keys - Move character</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Jump</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Attack</span></li>
                <li><span class="control-key">E</span> <span class="control-action">- Interact with objects</span></li>
                <li><span class="control-key">Q</span> <span class="control-action">- Use special ability</span></li>
                <li><span class="control-key">1-4</span> <span class="control-action">- Switch weapons/items</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            break;
            
        case 'puzzle':
            controlsHTML = `
                <li><span class="control-key">Mouse</span> <span class="control-action">- Select and move objects</span></li>
                <li><span class="control-key">Click and Drag</span> <span class="control-action">- Move pieces</span></li>
                <li><span class="control-key">Right Click</span> <span class="control-action">- Rotate objects (if applicable)</span></li>
                <li><span class="control-key">R</span> <span class="control-action">- Reset puzzle</span></li>
                <li><span class="control-key">H</span> <span class="control-action">- Show hint (if available)</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            break;
            
        case 'racing':
            controlsHTML = `
                <li><span class="control-key">W or Up Arrow</span> <span class="control-action">- Accelerate</span></li>
                <li><span class="control-key">S or Down Arrow</span> <span class="control-action">- Brake/Reverse</span></li>
                <li><span class="control-key">A/D or Left/Right Arrows</span> <span class="control-action">- Steer</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Handbrake/Drift</span></li>
                <li><span class="control-key">Shift</span> <span class="control-action">- Boost/Nitro (if available)</span></li>
                <li><span class="control-key">C</span> <span class="control-action">- Change camera view</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            break;
            
        case 'shooting':
            controlsHTML = `
                <li><span class="control-key">Mouse Movement</span> <span class="control-action">- Aim</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Shoot</span></li>
                <li><span class="control-key">Right Click</span> <span class="control-action">- Aim down sights/Zoom</span></li>
                <li><span class="control-key">R</span> <span class="control-action">- Reload</span></li>
                <li><span class="control-key">WASD</span> <span class="control-action">- Move (if applicable)</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Jump/Dodge (if applicable)</span></li>
                <li><span class="control-key">Shift</span> <span class="control-action">- Sprint/Steady aim</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            break;
            
        case 'casual':
            controlsHTML = `
                <li><span class="control-key">Mouse</span> <span class="control-action">- Select items and interact</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Perform actions</span></li>
                <li><span class="control-key">Arrow Keys</span> <span class="control-action">- Navigate menus</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            break;
            
        case 'sports':
            controlsHTML = `
                <li><span class="control-key">WASD or Arrow Keys</span> <span class="control-action">- Move player/team</span></li>
                <li><span class="control-key">Space/Left Click</span> <span class="control-action">- Shoot/Hit/Throw</span></li>
                <li><span class="control-key">E</span> <span class="control-action">- Pass</span></li>
                <li><span class="control-key">Q</span> <span class="control-action">- Special move</span></li>
                <li><span class="control-key">Shift</span> <span class="control-action">- Sprint</span></li>
                <li><span class="control-key">Tab</span> <span class="control-action">- View scoreboard</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            break;
            
        default:
            controlsHTML = `
                <li><span class="control-key">WASD</span> <span class="control-action">or Arrow Keys - Movement</span></li>
                <li><span class="control-key">Mouse</span> <span class="control-action">- Look/Aim</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Primary action</span></li>
                <li><span class="control-key">Right Click</span> <span class="control-action">- Secondary action</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Jump/Confirm</span></li>
                <li><span class="control-key">E</span> <span class="control-action">- Interact</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
    }
    
    controlsList.innerHTML = controlsHTML;
}

/**
 * Updates SEO-related elements including meta tags and structured data
 * @param {Object} game - The game object
 */
function updateSEOElements(game) {
    // Update basic meta tags
    document.title = `${game.title} - Play Free Online | Happy Games`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', generateMetaDescription(game));
    }
    
    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', `${game.title} - Play Free Online | Happy Games`);
    if (ogDescMeta) ogDescMeta.setAttribute('content', generateMetaDescription(game));
    if (ogImageMeta && game.thumbnail) ogImageMeta.setAttribute('content', getFullUrl(game.thumbnail));
    if (ogUrlMeta) ogUrlMeta.setAttribute('content', window.location.href);
    
    // Add structured data
    addStructuredData(game);
}

/**
 * Generates a meta description based on game data
 * @param {Object} game - The game object
 * @returns {string} - Generated meta description
 */
function generateMetaDescription(game) {
    let description = `Play ${game.title} for free on Happy Games. `;
    
    if (game.description && game.description.length > 20) {
        // Use first 150 characters of game description
        const shortDesc = game.description.substring(0, 150).trim();
        description += shortDesc;
        if (game.description.length > 150) description += '...';
    } else {
        // Fallback description based on game type
        const gameType = game.category && game.category.length > 0 ? game.category[0] : '';
        
        switch(gameType.toLowerCase()) {
            case 'action':
                description += 'This exciting action game offers fast-paced gameplay with challenging levels and enemies to defeat.';
                break;
            case 'puzzle':
                description += 'Test your brain with this challenging puzzle game featuring unique mechanics and increasingly difficult levels.';
                break;
            case 'racing':
                description += 'Experience the thrill of high-speed racing with realistic physics and beautifully designed tracks.';
                break;
            case 'shooting':
                description += 'Test your aim and reflexes in this precision shooting game with various weapons and target challenges.';
                break;
            case 'casual':
                description += 'Enjoy this relaxing casual game that\'s easy to learn but offers increasing challenges as you progress.';
                break;
            default:
                description += 'Enjoy this exciting online game with intuitive controls and engaging gameplay. No downloads required!';
        }
    }
    
    // Add call to action
    description += ' Play now for free, no download required!';
    
    return description;
}

/**
 * Adds structured data (Schema.org) to the page
 * @param {Object} game - The game object
 */
function addStructuredData(game) {
    // Create VideoGame structured data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": game.title,
        "description": game.description || generateMetaDescription(game),
        "url": window.location.href,
        "image": getFullUrl(game.thumbnail),
        "playMode": "SinglePlayer",
        "applicationCategory": "Game",
        "genre": game.category ? game.category.join(", ") : "",
        "gamePlatform": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        }
    };
    
    // Add structured data to page
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);
}

/**
 * Updates breadcrumb navigation
 * @param {Object} game - The game object
 */
function updateBreadcrumbs(game) {
    const categorySpan = document.getElementById('game-category-breadcrumb');
    const titleSpan = document.getElementById('game-title-breadcrumb');
    
    if (categorySpan && game.category && game.category.length > 0) {
        const primaryCategory = game.category[0];
        categorySpan.innerHTML = `<a href="category/${primaryCategory.toLowerCase()}.html">${capitalizeFirstLetter(primaryCategory)}</a>`;
    }
    
    if (titleSpan) {
        titleSpan.textContent = game.title;
    }
    
    // Add breadcrumb structured data
    addBreadcrumbStructuredData(game);
}

/**
 * Adds breadcrumb structured data to the page
 * @param {Object} game - The game object
 */
function addBreadcrumbStructuredData(game) {
    const category = game.category && game.category.length > 0 ? game.category[0] : 'Games';
    
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": getFullUrl("")
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": capitalizeFirstLetter(category),
                "item": getFullUrl(`category/${category.toLowerCase()}.html`)
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": game.title,
                "item": window.location.href
            }
        ]
    };
    
    // Add structured data to page
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(scriptTag);
}

/**
 * Converts a relative URL to a full URL
 * @param {string} relativeUrl - Relative URL
 * @returns {string} - Full URL
 */
function getFullUrl(relativeUrl) {
    const baseUrl = window.location.origin;
    if (!relativeUrl) return baseUrl;
    
    // If it's already a full URL, return it
    if (relativeUrl.startsWith('http')) return relativeUrl;
    
    // Ensure there's a leading slash
    if (!relativeUrl.startsWith('/')) {
        relativeUrl = '/' + relativeUrl;
    }
    
    return baseUrl + relativeUrl;
}

/**
 * Capitalizes the first letter of a string
 * @param {string} string - Input string
 * @returns {string} - String with first letter capitalized
 */
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
} 