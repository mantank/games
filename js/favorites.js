/**
 * Favorites Manager
 * Handles adding, removing, and checking favorite games
 */

// Initialize favorites from localStorage
let favorites = [];

// Load favorites on script load
loadFavorites();

/**
 * Load favorites from localStorage
 */
function loadFavorites() {
    const storedFavorites = localStorage.getItem('happyGamesFavorites');
    if (storedFavorites) {
        try {
            favorites = JSON.parse(storedFavorites);
        } catch (e) {
            console.error('Error parsing favorites:', e);
            favorites = [];
        }
    }
}

/**
 * Save favorites to localStorage
 */
function saveFavorites() {
    localStorage.setItem('happyGamesFavorites', JSON.stringify(favorites));
}

/**
 * Check if a game is in favorites
 * @param {string} gameId - The ID of the game to check
 * @returns {boolean} - Whether the game is in favorites
 */
function isFavorite(gameId) {
    return favorites.includes(gameId);
}

/**
 * Add a game to favorites
 * @param {string} gameId - The ID of the game to add
 */
function addFavorite(gameId) {
    if (!isFavorite(gameId)) {
        favorites.push(gameId);
        saveFavorites();
        
        // Dispatch event for other components
        document.dispatchEvent(new CustomEvent('favoritesChanged', { 
            detail: { gameId, action: 'add' } 
        }));
    }
}

/**
 * Remove a game from favorites
 * @param {string} gameId - The ID of the game to remove
 */
function removeFavorite(gameId) {
    const index = favorites.indexOf(gameId);
    if (index !== -1) {
        favorites.splice(index, 1);
        saveFavorites();
        
        // Dispatch event for other components
        document.dispatchEvent(new CustomEvent('favoritesChanged', { 
            detail: { gameId, action: 'remove' } 
        }));
    }
}

/**
 * Toggle a game's favorite status
 * @param {Object} game - The game object
 * @returns {boolean} - The new favorite status
 */
function toggleFavorite(game) {
    if (!game || !game.id) return false;
    
    const gameId = game.id;
    
    if (isFavorite(gameId)) {
        removeFavorite(gameId);
        return false;
    } else {
        addFavorite(gameId);
        return true;
    }
}

/**
 * Get all favorite games
 * @returns {Array} - Array of game objects
 */
function getFavoriteGames() {
    return favorites.map(gameId => getGameById(gameId)).filter(Boolean);
}

/**
 * Load favorite games into a container
 * @param {string} containerId - The ID of the container element
 */
function loadFavoritesIntoContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const favoriteGames = getFavoriteGames();
    
    if (favoriteGames.length === 0) {
        container.innerHTML = `
            <div class="empty-favorites">
                <div class="empty-message">
                    <i class="far fa-heart"></i>
                    <p data-i18n="favorites.empty">You haven't added any games to your favorites yet.</p>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    favoriteGames.forEach(game => {
        if (typeof createGameCard === 'function') {
            const gameCard = createGameCard(game);
            container.appendChild(gameCard);
        } else {
            // Fallback if createGameCard is not available
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <div class="game-thumb-container">
                    <img src="${game.thumbnail}" alt="${game.title}" class="game-thumb">
                    <div class="play-now-overlay">
                        <div class="game-title-overlay">${game.title}</div>
                        <span class="play-button">Play Now</span>
                    </div>
                    <button class="favorite-btn active" data-game-id="${game.id}" title="${I18n.getTranslation('gameDetails.removeFromFavorites') || '移出收藏'}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="share-btn" data-game-id="${game.id}" title="${I18n.getTranslation('gameDetails.share') || '分享'}">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            `;
            
            // Add click event to navigate to game detail page
            gameCard.querySelector('.game-thumb-container').addEventListener('click', (e) => {
                // Don't navigate if clicking on favorite or share button
                if (e.target.closest('.favorite-btn') || e.target.closest('.share-btn')) {
                    return;
                }
                // 在新标签页中打开游戏详情页
                window.open(`game.html?id=${game.id}`, '_blank', 'noopener,noreferrer');
            });
            
            // Add click event for favorite button
            const favBtn = gameCard.querySelector('.favorite-btn');
            if (favBtn) {
                favBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    toggleFavorite(game);
                    
                    // Remove card from favorites page
                    gameCard.classList.add('removing');
                    setTimeout(() => {
                        gameCard.remove();
                        
                        // Check if container is empty
                        if (container.children.length === 0) {
                            loadFavoritesIntoContainer(containerId);
                        }
                    }, 300);
                    
                    // Show toast message
                    showToast(I18n.getTranslation('favorites.removed') || 'Removed from favorites!');
                });
            }
            
            // Add click event for share button
            const shareBtn = gameCard.querySelector('.share-btn');
            if (shareBtn && window.WaterfallGrid && window.WaterfallGrid.openShareModal) {
                shareBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Open share modal
                    window.WaterfallGrid.openShareModal(game);
                });
            }
            
            container.appendChild(gameCard);
        }
    });
}

// Initialize favorites page if on that page
document.addEventListener('DOMContentLoaded', function() {
    const favoritesContainer = document.getElementById('favorites-container');
    if (favoritesContainer) {
        loadFavoritesIntoContainer('favorites-container');
    }
    
    // Setup favorite buttons
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        const gameId = btn.getAttribute('data-game-id');
        if (gameId) {
            // Update button state
            if (isFavorite(gameId)) {
                btn.classList.add('active');
                btn.setAttribute('title', I18n.getTranslation('gameDetails.removeFromFavorites') || 'Remove from Favorites');
                btn.querySelector('i').className = 'fas fa-heart';
            } else {
                btn.classList.remove('active');
                btn.setAttribute('title', I18n.getTranslation('gameDetails.addToFavorites') || 'Add to Favorites');
                btn.querySelector('i').className = 'far fa-heart';
            }
            
            // Add click handler
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const game = getGameById(gameId);
                if (game) {
                    const isFav = toggleFavorite(game);
                    
                    // Update button appearance
                    btn.classList.toggle('active', isFav);
                    btn.querySelector('i').className = isFav ? 'fas fa-heart' : 'far fa-heart';
                    
                    // Update tooltip
                    btn.title = isFav 
                        ? (I18n.getTranslation('gameDetails.removeFromFavorites') || 'Remove from Favorites')
                        : (I18n.getTranslation('gameDetails.addToFavorites') || 'Add to Favorites');
                    
                    // Show toast message
                    showToast(isFav 
                        ? (I18n.getTranslation('favorites.added') || 'Added to favorites!') 
                        : (I18n.getTranslation('favorites.removed') || 'Removed from favorites!'));
                }
            });
        }
    });
    
    // Listen for favorites changes
    document.addEventListener('favoritesChanged', function(e) {
        if (favoritesContainer && e.detail && e.detail.action === 'remove') {
            // Refresh favorites container if a game was removed
            loadFavoritesIntoContainer('favorites-container');
        }
    });
});

// Helper function to show toast message
function showToast(message) {
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
    const toastText = document.getElementById('toast-text') || toast;
    if (toastText) {
        toastText.textContent = message;
    }
    
    toast.classList.add('show');
    
    // Hide toast after delay
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Export functions for use in other scripts
window.FavoritesManager = {
    isFavorite,
    toggleFavorite,
    getFavoriteGames,
    loadFavoritesIntoContainer
}; 