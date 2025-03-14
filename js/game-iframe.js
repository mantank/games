/**
 * Game Iframe Manager
 * Handles loading, displaying, and managing game iframes with security features
 */

/**
 * Load a game into an iframe with proper security settings
 * @param {Object} game - The game object containing configuration
 * @param {string} containerId - The ID of the container element (default: 'game-iframe-container')
 */
function loadGameIframe(game, containerId = 'game-iframe-container') {
    const iframeContainer = document.getElementById(containerId);
    if (!iframeContainer) {
        console.error('Game iframe container not found:', containerId);
        return;
    }

    // 检查是否为垂直游戏，如果是则应用垂直游戏样式
    if (game.isVertical) {
        iframeContainer.classList.add('vertical-game-iframe-container');
        iframeContainer.classList.remove('game-iframe-container');
    } else {
        iframeContainer.classList.add('game-iframe-container');
        iframeContainer.classList.remove('vertical-game-iframe-container');
    }

    // Clear any existing iframe
    const existingIframe = iframeContainer.querySelector('iframe');
    if (existingIframe) {
        iframeContainer.removeChild(existingIframe);
    }

    // Get or create loader
    let loader = iframeContainer.querySelector('.game-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.className = 'game-loader';
        loader.innerHTML = '<div class="spinner"></div><span data-i18n="gameDetails.loading">Loading Game...</span>';
        iframeContainer.appendChild(loader);
    } else {
        loader.style.display = 'flex';
    }

    // Create iframe with security attributes
    const iframe = document.createElement('iframe');
    iframe.className = 'game-iframe';
    
    // Set sandbox attributes for security
    const sandboxOptions = game.sandboxOptions || 'allow-scripts allow-same-origin allow-popups';
    iframe.setAttribute('sandbox', sandboxOptions);
    
    // Set other security and performance attributes
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    
    // Set fullscreen attribute if allowed
    if (game.allowFullscreen) {
        iframe.setAttribute('allowfullscreen', 'true');
    }
    
    // Handle responsive sizing
    if (game.aspectRatio) {
        const aspectRatioPadding = calculateAspectRatioPadding(game.aspectRatio);
        iframeContainer.classList.add('responsive');
        iframeContainer.style.paddingBottom = aspectRatioPadding;
    } else if (game.width && game.height) {
        iframe.style.width = game.width + 'px';
        iframe.style.height = game.height + 'px';
    }
    
    // Set up load and error event handlers
    iframe.onload = () => {
        hideLoader(loader);
        
        // Apply any required permissions
        if (game.requiredPermissions && game.requiredPermissions.length > 0) {
            applyIframePermissions(iframe, game.requiredPermissions);
        }
        
        // Notify that game is ready
        const event = new CustomEvent('gameReady', { detail: { game } });
        document.dispatchEvent(event);
    };
    
    iframe.onerror = () => {
        showLoadError(loader);
    };
    
    // Set the source last to start loading after all configurations
    iframe.src = game.gameUrl;
    iframeContainer.appendChild(iframe);
    
    // Set up fullscreen button if it exists
    setupFullscreenButton(containerId);
    
    return iframe;
}

/**
 * Calculate padding-bottom percentage for responsive aspect ratio
 * @param {string} aspectRatio - Aspect ratio in format "width:height"
 * @returns {string} - CSS padding-bottom value with percentage
 */
function calculateAspectRatioPadding(aspectRatio) {
    if (!aspectRatio || !aspectRatio.includes(':')) {
        return '56.25%'; // Default 16:9 ratio
    }
    
    const [width, height] = aspectRatio.split(':').map(Number);
    if (!width || !height) {
        return '56.25%';
    }
    
    const paddingPercentage = (height / width * 100).toFixed(2) + '%';
    return paddingPercentage;
}

/**
 * Hide the loader element
 * @param {HTMLElement} loader - The loader element to hide
 */
function hideLoader(loader) {
    if (loader) {
        loader.style.display = 'none';
    }
}

/**
 * Show error message in the loader
 * @param {HTMLElement} loader - The loader element
 */
function showLoadError(loader) {
    if (loader) {
        loader.innerHTML = '<span data-i18n="gameDetails.errorLoading">Error loading game</span>';
        
        // Add retry button
        const retryBtn = document.createElement('button');
        retryBtn.className = 'retry-button';
        retryBtn.innerHTML = '<i class="fas fa-redo"></i> <span data-i18n="gameDetails.retry">Retry</span>';
        retryBtn.onclick = () => {
            window.location.reload();
        };
        
        loader.appendChild(retryBtn);
    }
}

/**
 * Apply special permissions to iframe if needed
 * @param {HTMLIFrameElement} iframe - The iframe element
 * @param {Array<string>} permissions - List of permissions to apply
 */
function applyIframePermissions(iframe, permissions) {
    if (!iframe || !permissions || !Array.isArray(permissions)) {
        return;
    }
    
    permissions.forEach(permission => {
        switch (permission) {
            case 'microphone':
                iframe.setAttribute('allow', 'microphone');
                break;
            case 'camera':
                iframe.setAttribute('allow', 'camera');
                break;
            case 'autoplay':
                iframe.setAttribute('allow', 'autoplay');
                break;
            case 'gyroscope':
                iframe.setAttribute('allow', 'gyroscope');
                break;
            case 'accelerometer':
                iframe.setAttribute('allow', 'accelerometer');
                break;
            // Add more permissions as needed
        }
    });
}

/**
 * Set up fullscreen button functionality
 * @param {string} containerId - The ID of the container to make fullscreen
 */
function setupFullscreenButton(containerId) {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (!fullscreenBtn) return;
    
    const container = document.getElementById(containerId);
    if (!container) return;
    
    fullscreenBtn.addEventListener('click', () => {
        toggleFullscreen(container);
    });
    
    // Update button state when fullscreen changes
    document.addEventListener('fullscreenchange', updateFullscreenButtonState);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButtonState);
    document.addEventListener('mozfullscreenchange', updateFullscreenButtonState);
    document.addEventListener('MSFullscreenChange', updateFullscreenButtonState);
}

/**
 * Toggle fullscreen mode for an element
 * @param {HTMLElement} element - The element to toggle fullscreen
 */
function toggleFullscreen(element) {
    if (!element) return;
    
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        // Enter fullscreen
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

/**
 * Update fullscreen button state based on current fullscreen status
 */
function updateFullscreenButtonState() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (!fullscreenBtn) return;
    
    if (document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement) {
        // Currently in fullscreen mode
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> <span data-i18n="gameDetails.exitFullscreen">Exit Fullscreen</span>';
    } else {
        // Not in fullscreen mode
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> <span data-i18n="gameDetails.fullscreen">Fullscreen</span>';
    }
    
    // Update i18n if available
    if (typeof updateI18n === 'function') {
        updateI18n();
    }
}

/**
 * Handle window resize events to adjust iframe size
 * @param {HTMLIFrameElement} iframe - The iframe element
 * @param {Object} game - The game object with size information
 */
function handleWindowResize(iframe, game) {
    if (!iframe || !game) return;
    
    const resizeHandler = () => {
        if (!game.aspectRatio && game.width && game.height) {
            const container = iframe.parentElement;
            if (!container) return;
            
            const containerWidth = container.clientWidth;
            if (containerWidth < game.width) {
                const scale = containerWidth / game.width;
                iframe.style.width = '100%';
                iframe.style.height = (game.height * scale) + 'px';
            } else {
                iframe.style.width = game.width + 'px';
                iframe.style.height = game.height + 'px';
            }
        }
    };
    
    // Initial resize
    resizeHandler();
    
    // Add event listener
    window.addEventListener('resize', resizeHandler);
    
    // Return function to remove event listener
    return () => {
        window.removeEventListener('resize', resizeHandler);
    };
}

/**
 * Check if the browser supports required features for the game
 * @param {Object} game - The game object with requirements
 * @returns {boolean} - Whether the browser is compatible
 */
function checkBrowserCompatibility(game) {
    if (!game || !game.requirements) return true;
    
    const requirements = game.requirements;
    
    // Check WebGL support if required
    if (requirements.webgl) {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            return false;
        }
    }
    
    // Check for touch support if required
    if (requirements.touch && !('ontouchstart' in window)) {
        return false;
    }
    
    // Add more compatibility checks as needed
    
    return true;
}

/**
 * Handle messages from the iframe
 * @param {Window} iframeWindow - The iframe's window object
 * @param {Function} messageHandler - Function to handle messages
 * @returns {Function} - Function to remove the event listener
 */
function setupIframeMessageHandler(iframeWindow, messageHandler) {
    if (!iframeWindow || typeof messageHandler !== 'function') {
        return () => {};
    }
    
    const handler = (event) => {
        // Check origin for security
        if (event.source !== iframeWindow) {
            return;
        }
        
        messageHandler(event.data);
    };
    
    window.addEventListener('message', handler);
    
    return () => {
        window.removeEventListener('message', handler);
    };
}

// Export functions for use in other scripts
window.GameIframeManager = {
    loadGameIframe,
    toggleFullscreen,
    setupFullscreenButton,
    handleWindowResize,
    checkBrowserCompatibility,
    setupIframeMessageHandler
}; 