/**
 * Internationalization (i18n) Manager
 * English-only version
 */

// Default language (English only)
let currentLanguage = 'en';

// Available languages (English only)
const availableLanguages = ['en'];

// Translations
const translations = {
    en: {
        nav: {
            home: 'Home',
            topGames: 'Top Games',
            newGames: 'New Games',
            categories: 'Categories',
            myFavorites: 'My Favorites',
            language: 'Language'
        },
        hero: {
            welcome: 'Welcome to Happy Games',
            cta: 'Start Playing Now'
        },
        sections: {
            featured: 'Featured Games',
            newGames: 'New Arrivals',
            popular: 'Popular Games',
            seeAll: 'See All'
        },
        categories: {
            action: 'Action Games',
            puzzle: 'Puzzle Games',
            strategy: 'Strategy Games',
            racing: 'Racing Games',
            brain: 'Brain Teasers',
            sports: 'Sports Games',
            towerDefense: 'Tower Defense Games',
            board: 'Board Games'
        },
        themes: {
            cyberpunk: 'Cyberpunk',
            scifi: 'Sci-Fi',
            fantasy: 'Fantasy',
            survival: 'Survival',
            adventure: 'Adventure'
        },
        footer: {
            about: 'About Happy Games',
            aboutDesc: 'Free online gaming platform for endless fun!',
            quickLinks: 'Quick Links',
            categories: 'Categories',
            legal: 'Legal',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service',
            cookiePolicy: 'Cookie Policy',
            contactUs: 'Contact Us',
            copyright: 'All rights reserved.'
        },
        gameDetails: {
            backToGames: 'Back to Games',
            fullscreen: 'Fullscreen',
            exitFullscreen: 'Exit Fullscreen',
            addToFavorites: 'Add to Favorites',
            removeFromFavorites: 'Remove from Favorites',
            share: 'Share',
            loading: 'Loading Game...',
            errorLoading: 'Error loading game',
            retry: 'Retry',
            aboutGame: 'About This Game',
            howToPlay: 'How to Play',
            defaultInstructions: 'Use keyboard arrows or WASD to move, mouse to aim and click to interact with game elements.',
            relatedGames: 'Related Games',
            shareGame: 'Share This Game'
        },
        favorites: {
            title: 'My Favorite Games',
            empty: 'You haven\'t added any games to your favorites yet.',
            added: 'Added to favorites!',
            removed: 'Removed from favorites!'
        },
        search: {
            title: 'Search Results',
            placeholder: 'Search games...',
            noResults: 'No games found matching your search.',
            button: 'Search'
        },
        share: {
            title: 'Share This Game',
            facebook: 'Share on Facebook',
            twitter: 'Share on Twitter',
            wechat: 'Share on WeChat',
            copyLink: 'Copy Link',
            linkCopied: 'Link copied!'
        },
        home: {
            backToTop: 'Back to Top'
        },
        games: {
            playNow: 'Play Now'
        }
    }
};

/**
 * Get translation for a key
 * @param {string} key - Translation key in dot notation (e.g., 'nav.home')
 * @param {Object} params - Optional parameters for formatting
 * @returns {string} - Translated text or key if translation not found
 */
function getTranslation(key, params = {}) {
    // Split the key by dots to navigate the translations object
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    // Navigate through the translations object
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            // Return the key if translation not found
            return key;
        }
    }
    
    // If translation is not a string, return the key
    if (typeof translation !== 'string') {
        return key;
    }
    
    // Format the translation with parameters
    return formatTranslation(translation, params);
}

/**
 * Format translation with parameters
 * @param {string} text - Text to format
 * @param {Object} params - Parameters for formatting
 * @returns {string} - Formatted text
 */
function formatTranslation(text, params) {
    // Replace {paramName} with the corresponding value
    return text.replace(/{(\w+)}/g, (match, key) => {
        return params[key] !== undefined ? params[key] : match;
    });
}

/**
 * Update all elements with data-i18n attribute
 */
function updateI18n() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation) {
            // If element has children, only update text nodes
            if (el.childElementCount > 0) {
                // Get all text nodes
                const textNodes = Array.from(el.childNodes)
                    .filter(node => node.nodeType === Node.TEXT_NODE);
                
                // If there's at least one text node, update the first one
                if (textNodes.length > 0) {
                    textNodes[0].nodeValue = translation;
                } else {
                    // If no text nodes, prepend translation
                    el.prepend(translation);
                }
            } else {
                // If no children, set text content
                el.textContent = translation;
            }
        }
    });
}

/**
 * Initialize i18n functionality
 */
function initI18n() {
    // Apply translations
    updateI18n();
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);

// Export functions for use in other scripts
window.I18n = {
    getTranslation,
    formatTranslation,
    updateI18n,
    getCurrentLanguage: () => currentLanguage
}; 