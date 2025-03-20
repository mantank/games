/**
 * Game Instructions Generator
 * Automatically generates game instructions and controls based on game type
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get game ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (!gameId || typeof window.getGameById !== 'function') return;
    
    // Get game data
    const game = window.getGameById(gameId);
    if (!game) return;
    
    // Auto-generate game instructions
    generateGameInstructions(game);
});

/**
 * Generates and displays game instructions based on game data
 * @param {Object} game - The game object with title, description, category, etc.
 */
function generateGameInstructions(game) {
    // Get game type
    const gameType = game.category && game.category.length > 0 ? game.category[0] : '';
    
    // Generate game introduction
    const howToPlayElement = document.getElementById('game-how-to-play');
    if (howToPlayElement) {
        // Generate introduction based on game type and name
        howToPlayElement.innerHTML = generateHowToPlayContent(game, gameType);
    }
    
    // Generate game controls
    const controlsList = document.querySelector('.controls-list');
    if (controlsList) {
        controlsList.innerHTML = generateControlsContent(gameType);
    }
    
    // Generate game tips
    const tipsList = document.getElementById('game-tips');
    if (tipsList) {
        tipsList.innerHTML = generateTipsContent(gameType, game);
    }
}

/**
 * Generates how-to-play content based on game data
 * @param {Object} game - The game data
 * @param {string} gameType - The primary game category
 * @returns {string} - HTML content with how-to-play instructions
 */
function generateHowToPlayContent(game, gameType) {
    // 基本介绍开头
    let content = `<p>Welcome to <strong>${game.title}</strong>! ${getGameIntroSentence(game)}</p>`;
    
    // 基于游戏类型添加特定内容
    switch (gameType.toLowerCase()) {
        case 'action':
            content += `
                <p>This action-packed game challenges you to navigate through obstacles, defeat enemies, and complete missions. Your reflexes and strategy will be tested as you progress through increasingly difficult levels.</p>
                <p>Collect power-ups to enhance your abilities and watch for special items that can give you an advantage in challenging situations. The game features dynamic environments that react to your actions.</p>
                <p>Master the controls and discover powerful combinations to overcome boss battles and special challenges waiting for you throughout the game.</p>
            `;
            break;
            
        case 'puzzle':
            content += `
                <p>This mind-bending puzzle game will test your problem-solving skills through a series of increasingly complex challenges. Each puzzle has a unique solution waiting to be discovered.</p>
                <p>Pay close attention to patterns, colors, and shapes as they often provide clues to the solution. Some puzzles may have time limits, while others allow you to solve at your own pace.</p>
                <p>As you progress, new mechanics will be introduced that build upon previously learned concepts, creating deeper and more satisfying puzzles.</p>
            `;
            break;
            
        case 'racing':
            content += `
                <p>Experience the thrill of high-speed racing as you compete against skilled opponents on beautifully designed tracks. Master the perfect racing line to achieve the fastest times possible.</p>
                <p>Learn the handling characteristics of your vehicle and optimize your driving technique for different track conditions. Use drifting, slipstreaming, and strategic shortcuts to gain advantages.</p>
                <p>Collect power-ups during races to boost your speed, create obstacles for opponents, or protect yourself from hazards. Unlock new vehicles and tracks as you win races and progress.</p>
            `;
            break;
            
        case 'shooting':
            content += `
                <p>Test your accuracy and reflexes in this shooting challenge where precision is key to success. Target priority enemies first to maximize your score and survival chances.</p>
                <p>Manage your ammunition wisely and time your reloads strategically between combat encounters. Different weapons have unique characteristics such as fire rate, damage, and accuracy.</p>
                <p>As you advance, enemies will employ more sophisticated movement patterns and defenses that require adapting your tactics. Keep moving to avoid incoming fire while maintaining your aim.</p>
            `;
            break;
            
        case 'casual':
            content += `
                <p>Enjoy this relaxing casual game designed to be accessible and entertaining for players of all skill levels. The intuitive controls make it easy to pick up and play immediately.</p>
                <p>Complete simple objectives through creative interaction with the colorful game elements. The difficulty increases gradually, allowing you to master each new concept at your own pace.</p>
                <p>There's no rush or pressure - play whenever you want for a few minutes or hours of entertainment. The game saves your progress automatically so you can continue where you left off.</p>
            `;
            break;
            
        case 'sports':
            content += `
                <p>Step into the world of competitive sports with realistic physics and responsive controls. Master timing-based actions to perform perfect moves and outplay your opponents.</p>
                <p>Learn the strengths and weaknesses of different players or teams to develop effective strategies. Position yourself strategically on the field to create scoring opportunities or defensive advantages.</p>
                <p>Compete in tournaments, leagues, or quick matches to test your skills against increasingly challenging opponents. Track your statistics to see your improvement over time.</p>
            `;
            break;
            
        case 'multiplayer':
            content += `
                <p>Connect with other players in this engaging multiplayer experience where teamwork and communication lead to victory. Coordinate with teammates to execute complex strategies.</p>
                <p>Each player role has unique abilities that complement others, encouraging diverse team compositions. Learn the map layouts and objective locations to gain tactical advantages.</p>
                <p>Develop your skills through practice and adapt to different playstyles you encounter. A good balance of offense and defense is often key to sustained success.</p>
            `;
            break;
            
        default:
            // For any other game type, generate a generic but informative guide
            content += `
                <p>Explore the engaging world of this game as you discover its unique mechanics and challenges. The game provides a balance of challenge and entertainment suitable for your style of play.</p>
                <p>Take some time to learn the controls and interact with the game environment to understand its possibilities. Many hidden features and secrets await discovery as you progress.</p>
                <p>Whether you prefer to follow the main objectives or create your own goals, this game offers freedom to approach challenges in different ways. Enjoy the journey and have fun!</p>
            `;
            break;
    }
    
    // Add game-specific details if available
    if (game.description && game.description.length > 50) {
        content += `<p>${getFormattedGameDescription(game.description)}</p>`;
    }
    
    return content;
}

/**
 * Creates an introductory sentence based on game data
 * @param {Object} game - The game data
 * @returns {string} - An introductory sentence
 */
function getGameIntroSentence(game) {
    const themes = game.theme || [];
    const categories = game.category || [];
    
    let sentence = "This game offers an exciting gaming experience";
    
    if (themes.length > 0 && categories.length > 0) {
        sentence = `This ${themes[0]} ${categories[0]} game offers an exciting adventure`;
    } else if (categories.length > 0) {
        sentence = `This ${categories[0]} game offers an exciting experience`;
    } else if (themes.length > 0) {
        sentence = `This ${themes[0]}-themed game offers an exciting experience`;
    }
    
    return sentence + " with intuitive controls and engaging gameplay.";
}

/**
 * Format game description to be more instructional
 * @param {string} description - The original game description
 * @returns {string} - A formatted instructional description
 */
function getFormattedGameDescription(description) {
    // Remove any potential HTML
    const plainText = description.replace(/<\/?[^>]+(>|$)/g, "");
    
    // Convert to sentence case if it's not already
    let formatted = plainText.charAt(0).toUpperCase() + plainText.slice(1);
    
    // Ensure it ends with a period
    if (!formatted.endsWith('.') && !formatted.endsWith('!') && !formatted.endsWith('?')) {
        formatted += '.';
    }
    
    return formatted;
}

/**
 * Generates game controls content based on game type
 * @param {string} gameType - The primary game category
 * @returns {string} - HTML content for game controls
 */
function generateControlsContent(gameType) {
    switch (gameType.toLowerCase()) {
        case 'action':
            return `
                <li><span class="control-key">WASD</span> <span class="control-action">or Arrow Keys - Move character</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Jump</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Attack</span></li>
                <li><span class="control-key">E</span> <span class="control-action">- Interact with objects</span></li>
                <li><span class="control-key">Q</span> <span class="control-action">- Use special ability</span></li>
                <li><span class="control-key">1-4</span> <span class="control-action">- Switch weapons/items</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            
        case 'puzzle':
            return `
                <li><span class="control-key">Mouse</span> <span class="control-action">- Select and move objects</span></li>
                <li><span class="control-key">Click and Drag</span> <span class="control-action">- Move pieces</span></li>
                <li><span class="control-key">Right Click</span> <span class="control-action">- Rotate objects (if applicable)</span></li>
                <li><span class="control-key">R</span> <span class="control-action">- Reset puzzle</span></li>
                <li><span class="control-key">H</span> <span class="control-action">- Show hint (if available)</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            
        case 'racing':
            return `
                <li><span class="control-key">W or Up Arrow</span> <span class="control-action">- Accelerate</span></li>
                <li><span class="control-key">S or Down Arrow</span> <span class="control-action">- Brake/Reverse</span></li>
                <li><span class="control-key">A/D or Left/Right Arrows</span> <span class="control-action">- Steer</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Handbrake/Drift</span></li>
                <li><span class="control-key">Shift</span> <span class="control-action">- Boost/Nitro (if available)</span></li>
                <li><span class="control-key">C</span> <span class="control-action">- Change camera view</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            
        case 'shooting':
            return `
                <li><span class="control-key">Mouse Movement</span> <span class="control-action">- Aim</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Shoot</span></li>
                <li><span class="control-key">Right Click</span> <span class="control-action">- Aim down sights/Zoom</span></li>
                <li><span class="control-key">R</span> <span class="control-action">- Reload</span></li>
                <li><span class="control-key">WASD</span> <span class="control-action">- Move (if applicable)</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Jump/Dodge (if applicable)</span></li>
                <li><span class="control-key">Shift</span> <span class="control-action">- Sprint/Steady aim</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            
        case 'casual':
            return `
                <li><span class="control-key">Mouse</span> <span class="control-action">- Select items and interact</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Perform actions</span></li>
                <li><span class="control-key">Arrow Keys</span> <span class="control-action">- Navigate menus</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            
        case 'sports':
            return `
                <li><span class="control-key">WASD or Arrow Keys</span> <span class="control-action">- Move player/team</span></li>
                <li><span class="control-key">Space/Left Click</span> <span class="control-action">- Shoot/Hit/Throw</span></li>
                <li><span class="control-key">E</span> <span class="control-action">- Pass</span></li>
                <li><span class="control-key">Q</span> <span class="control-action">- Special move</span></li>
                <li><span class="control-key">Shift</span> <span class="control-action">- Sprint</span></li>
                <li><span class="control-key">Tab</span> <span class="control-action">- View scoreboard</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
            
        default:
            return `
                <li><span class="control-key">WASD</span> <span class="control-action">or Arrow Keys - Movement</span></li>
                <li><span class="control-key">Mouse</span> <span class="control-action">- Look/Aim</span></li>
                <li><span class="control-key">Left Click</span> <span class="control-action">- Primary action</span></li>
                <li><span class="control-key">Right Click</span> <span class="control-action">- Secondary action</span></li>
                <li><span class="control-key">Space</span> <span class="control-action">- Jump/Confirm</span></li>
                <li><span class="control-key">E</span> <span class="control-action">- Interact</span></li>
                <li><span class="control-key">Esc</span> <span class="control-action">- Pause game</span></li>
            `;
    }
}

/**
 * Generates game tips content based on game type and data
 * @param {string} gameType - The primary game category
 * @param {Object} game - The game data
 * @returns {string} - HTML content for game tips
 */
function generateTipsContent(gameType, game) {
    switch (gameType.toLowerCase()) {
        case 'action':
            return `
                <li>Learn enemy attack patterns to time your counterattacks effectively.</li>
                <li>Use the environment to your advantage during combat encounters.</li>
                <li>Save your special abilities for challenging situations and boss fights.</li>
                <li>Take your time to explore each level for hidden collectibles and power-ups.</li>
            `;
            
        case 'puzzle':
            return `
                <li>Look for patterns in colors, shapes, or movements to identify solutions.</li>
                <li>If you're stuck, try approaching the problem from a completely different angle.</li>
                <li>Pay attention to subtle visual or audio cues that may hint at the solution.</li>
                <li>Some puzzles have multiple solutions - find the most efficient one for higher scores.</li>
            `;
            
        case 'racing':
            return `
                <li>Brake before entering corners, then accelerate through them for optimal speed.</li>
                <li>Use the racing line (ideal path through turns) to maintain maximum velocity.</li>
                <li>Draft behind opponents temporarily to gain a speed boost, then overtake.</li>
                <li>Learn each track's shortcuts and optimal racing lines to improve lap times.</li>
            `;
            
        case 'shooting':
            return `
                <li>Aim for headshots or critical points to maximize damage and efficiency.</li>
                <li>Reload your weapon when in cover or during quiet moments, not during encounters.</li>
                <li>Move unpredictably to avoid becoming an easy target for enemies.</li>
                <li>Prioritize targets based on their threat level and proximity to you.</li>
            `;
            
        case 'casual':
            return `
                <li>Take your time to enjoy the game without pressure - it's designed to be relaxing.</li>
                <li>Experiment with different interactions to discover unique and fun outcomes.</li>
                <li>The early levels introduce key mechanics - pay attention to the tutorial guidance.</li>
                <li>Focus on having fun rather than achieving perfect scores or completion times.</li>
            `;
            
        case 'sports':
            return `
                <li>Master the timing of your actions for perfect execution of moves.</li>
                <li>Learn the strengths and weaknesses of different players/characters.</li>
                <li>Develop strategies that leverage your team's unique advantages.</li>
                <li>Watch replays of your performances to identify areas for improvement.</li>
            `;
            
        default:
            return `
                <li>Take your time to explore the game environment thoroughly.</li>
                <li>Collect power-ups and items to enhance your gaming experience.</li>
                <li>Pay attention to the tutorial sections to understand core mechanics.</li>
                <li>Try different approaches if you encounter a challenging section.</li>
            `;
    }
} 