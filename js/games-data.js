// Game Data
let gamesData = [
    // 游戏模板 - 可以参考这个结构添加新游戏
    /*
    {
        id: "game-id",                // 游戏唯一标识符
        title: "游戏标题",            // 游戏标题
        description: "游戏描述文本",   // 游戏描述
        thumbnail: "games/game-thumbnail.jpg", // 缩略图路径
        category: ["category1", "category2"], // 游戏分类
        theme: ["theme1"],            // 游戏主题
        gameUrl: "https://example.com/game-url/", // 游戏URL
        isFeatured: true,             // 是否为特色游戏
        isNew: true,                  // 是否为新游戏
        popularity: 90,               // 游戏人气值(0-100)
        dateAdded: "2024-03-14",      // 添加日期
        width: 800,                   // 默认iframe宽度
        height: 600,                  // 默认iframe高度
        aspectRatio: "16:9",          // 宽高比
        allowFullscreen: true,        // 是否允许全屏
        sandboxOptions: "allow-scripts allow-same-origin allow-popups", // 安全设置
        requiredPermissions: [],      // 需要的特殊权限
        isVertical: false             // 是否为竖屏游戏
    }
    */
    {
        id: "monster-survivors",
        title: "Monster Survivors",
        description: "Survive endless waves of monsters in this intense action game! Control your character, strategically collect power-ups, and eliminate hordes of creatures as you level up your abilities. With rogue-lite elements, each run offers a unique experience as you unlock new characters and abilities to survive longer in this challenging monster apocalypse.",
        thumbnail: "games/Monster-survivors-lg.jpg",
        category: ["action", "shooting"],
        theme: ["fantasy", "adventure"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
        isFeatured: true,
        isNew: true,
        popularity: 96,
        dateAdded: "2024-03-21",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "mahjong",
        title: "Classic Mahjong",
        description: "Experience the timeless challenge of Mahjong in this beautifully designed puzzle game. Match identical tiles to clear the board and test your observation skills. With multiple layouts, relaxing gameplay, and increasing levels of difficulty, this classic tile-matching puzzle offers hours of brain-teasing entertainment for players of all ages.",
        thumbnail: "games/Mahjong-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["classic", "minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/mahjong/index-og.html",
        isFeatured: true,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-21",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "voxel-world",
        title: "Voxel World",
        description: "Build, explore, and survive in this immersive voxel-based sandbox adventure. Shape the landscape, craft items, and create structures in a fully destructible world. With endless possibilities, day-night cycles, and various biomes to discover, this creative experience lets you express yourself while facing exciting challenges in a charming blocky universe.",
        thumbnail: "games/voxel-world-lg.jpg",
        category: ["action", "casual"],
        theme: ["adventure", "fantasy"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html",
        isFeatured: true,
        isNew: true,
        popularity: 94,
        dateAdded: "2024-03-21",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "nuts-and-bolts-puzzle",
        title: "Nuts and Bolts Puzzle",
        description: "Challenge your logical thinking with this engaging mechanical puzzle game! Arrange nuts, bolts, gears and other mechanical parts to solve increasingly complex mechanical puzzles. With intuitive controls and progressively difficult levels, Nuts and Bolts Puzzle offers a satisfying brain-teasing experience that will test your spatial reasoning and problem-solving skills.",
        thumbnail: "games/nuts-and-bolts-puzzle-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/nuts-and-bolts-puzzle/index-og.html",
        isFeatured: true,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-21",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "survival-island",
        title: "Survival Island",
        description: "Test your survival skills on a remote island filled with challenges and dangers. Gather resources, craft tools, build shelter, and hunt for food while exploring the island's mysterious environments. With dynamic weather systems and day-night cycles, this immersive survival experience will push your wilderness skills to the limit.",
        thumbnail: "games/Survival-Island-lg.jpg",
        category: ["action", "casual"],
        theme: ["adventure", "survival"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/unity2/survival-island/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-25",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "cookie-clicker-pro",
        title: "Cookie Clicker Pro",
        description: "Click your way to cookie fortune in this addictive incremental game! Start with a single click and build your cookie empire with automatic bakers, factories, and magical upgrades. With countless achievements to unlock and strategies to discover, this classic idle game offers a satisfying progression system that keeps you coming back for more.",
        thumbnail: "games/Cookie-Clicker-Pro-Game-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["minimalist", "classic"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/cookie-clicker-pro/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-25",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "global-guesser",
        title: "Global Guesser",
        description: "Test your geography knowledge in this challenging world exploration game! Based on visual clues and 360° panoramic views, guess the correct location on the world map. With difficulty levels ranging from famous landmarks to remote locations, this educational yet entertaining game will improve your global awareness while providing hours of fun.",
        thumbnail: "games/global-guesser-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/html/global-guesser/index-og.html#/",
        isFeatured: false,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-03-25",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "conquer-kingdoms",
        title: "Conquer Kingdoms",
        description: "Build your empire and conquer rival kingdoms in this strategy-focused multiplayer game! Gather resources, train armies, research technologies, and form alliances in your quest for dominance. With real-time battles, diplomatic options, and territory control, this medieval strategy experience offers deep gameplay and endless replayability.",
        thumbnail: "games/conquer-kigdoms-online-lg.jpg",
        category: ["casual", "multiplayer"],
        theme: ["fantasy", "adventure"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/conquer-kingdoms/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-25",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "squid-shooter",
        title: "Squid Shooter",
        description: "Take on challenging shooting courses in this colorful and exciting target practice game! With a variety of weapons, moving targets, and timed challenges, test your accuracy and reflexes through increasingly difficult levels. Unlock new maps and special abilities as you improve your shooting skills in this action-packed arcade experience.",
        thumbnail: "games/squid-Shooter-online-lg.jpg",
        category: ["action", "shooting"],
        theme: ["cartoon", "fantasy"],
        gameUrl: "https://html5.gamedistribution.com/c0a72373f81d4096a325f9b0dde0d7b9/?gd_sdk_referrer_url=https://www.onlinegames.io/squid-shooter/",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-25",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "turbo-race-3d",
        title: "Turbo Race 3D",
        description: "Experience high-speed racing action in this thrilling 3D driving game! Choose from multiple vehicles, master challenging tracks, and compete against skilled AI opponents. With realistic physics, nitro boosts, and customizable cars, this adrenaline-fueled racing experience delivers intense competition and excitement across diverse environments.",
        thumbnail: "games/Turbo-Race-3D-online-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "scifi"],
        gameUrl: "https://html5.gamedistribution.com/6b93a7631e0d41d59cd4d661b46ccf90/?gd_sdk_referrer_url=https://www.onlinegames.io/turbo-race-3d/",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-25",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    }
];

// Game Categories
const gameCategories = {
    "action": "动作游戏",
    "puzzle": "益智游戏",
    "racing": "赛车游戏",
    "casual": "休闲游戏",
    "shooting": "射击挑战",
    "sports": "体育游戏",
    "multiplayer": "多人游戏"
};

// Game Themes
const gameThemes = {
    "classic": "经典",
    "cartoon": "卡通",
    "fantasy": "奇幻",
    "scifi": "科幻",
    "horror": "恐怖",
    "cyberpunk": "赛博朋克",
    "retro": "复古",
    "minimalist": "极简主义",
    "adventure": "冒险"
};

// Get game by ID
function getGameById(gameId) {
    return gamesData.find(game => game.id === gameId);
}

// Get games by category
function getGamesByCategory(category) {
    return gamesData.filter(game => game.category && game.category.includes(category));
}

// Get games by theme
function getGamesByTheme(theme) {
    return gamesData.filter(game => game.theme && game.theme.includes(theme));
}

// Get featured games
function getFeaturedGames() {
    return gamesData.filter(game => game.featured || game.isFeatured);
}

// Get new games
function getNewGames() {
    return gamesData.filter(game => game.new || game.isNew);
}

// Get popular games (sorted by new status, featured status, and popularity)
function getPopularGames() {
    // 创建游戏数据的副本
    const games = [...gamesData];
    
    // 优先级排序：1.新游戏 2.特色游戏 3.人气
    return games.sort((a, b) => {
        // 新游戏排在最前面（同时支持new和isNew两种属性名）
        const aNew = a.new || a.isNew;
        const bNew = b.new || b.isNew;
        if (aNew && !bNew) return -1;
        if (!aNew && bNew) return 1;
        
        // 特色游戏排在次之（同时支持featured和isFeatured两种属性名）
        const aFeatured = a.featured || a.isFeatured;
        const bFeatured = b.featured || b.isFeatured;
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        
        // 最后按人气排序
        return (b.popularity || 0) - (a.popularity || 0);
    });
}

// Get related games (same category or theme)
function getRelatedGames(gameId, limit = 4) {
    const currentGame = getGameById(gameId);
    if (!currentGame) return [];
    
    // Find games with same category or theme
    const related = gamesData.filter(game => 
        game.id !== gameId && (
            game.category.some(cat => currentGame.category.includes(cat)) ||
            game.theme.some(theme => currentGame.theme.includes(theme))
        )
    );
    
    // Shuffle and limit results
    return related
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);
}

// 标准化游戏数据
function standardizeGamesData() {
    if (!window.gamesData || !Array.isArray(window.gamesData)) return;
    
    window.gamesData.forEach(game => {
        // 确保游戏有ID
        if (!game.id && game.title) {
            game.id = game.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        }
        
        // 统一URL属性
        if (!game.gameUrl && game.url) {
            game.gameUrl = game.url;
        } else if (!game.gameUrl && !game.url && game.iframe) {
            // 从iframe中提取URL
            const urlMatch = game.iframe.match(/src="([^"]+)"/);
            if (urlMatch && urlMatch[1]) {
                game.gameUrl = urlMatch[1];
            }
        }
        
        // 统一特色和新游戏属性
        if (game.featured !== undefined && game.isFeatured === undefined) {
            game.isFeatured = game.featured;
        }
        if (game.new !== undefined && game.isNew === undefined) {
            game.isNew = game.new;
        }
        
        // 确保游戏有正确的分类
        if (!game.category || !Array.isArray(game.category) || game.category.length === 0) {
            game.category = ['casual']; // 默认分类
        } else {
            // 映射旧分类到新分类
            const validCategories = ['action', 'puzzle', 'racing', 'casual', 'shooting', 'sports', 'multiplayer'];
            const oldToNewCategory = {
                'strategy': 'puzzle',
                'adventure': 'action',
                'brain': 'puzzle',
                'arcade': 'casual',
                'tower-defense': 'shooting',
                'educational': 'puzzle',
                'board': 'puzzle',
                'skill': 'casual',
                'simulation': 'casual',
                'horror': 'action'
            };
            
            // 转换分类
            game.category = game.category.map(cat => {
                if (validCategories.includes(cat)) {
                    return cat;
                }
                return oldToNewCategory[cat] || 'casual';
            });
            
            // 去重
            game.category = [...new Set(game.category)];
            
            // 限制最多2个分类
            if (game.category.length > 2) {
                game.category = game.category.slice(0, 2);
            }
        }
        
        // 检查并修复缩略图路径
        if (!game.thumbnail && game.image) {
            game.thumbnail = game.image;
        }
        if (game.thumbnail && !game.thumbnail.startsWith('http') && !game.thumbnail.startsWith('games/') && !game.thumbnail.startsWith('/games/')) {
            // 尝试修复可能的路径问题
            if (!game.thumbnail.startsWith('images/')) {
                game.thumbnail = 'games/' + game.thumbnail;
            }
        }
    });
    
    console.log("[INFO] 游戏数据已标准化");
}

// 在DOMContentLoaded事件中调用此函数
document.addEventListener('DOMContentLoaded', function() {
    standardizeGamesData();
});

window.gamesData = gamesData; 
window.getPopularGames = getPopularGames; 

standardizeGamesData();

// Ensure all necessary functions are available in the global scope and window object
window.getGamesByCategory = getGamesByCategory;
window.getGamesByTheme = getGamesByTheme;
window.getGameById = getGameById;
window.gamesData = gamesData;
console.log('[DEBUG] Game data loading status:', {
    gamesDataLength: gamesData.length,
    getGamesByCategoryAvailable: typeof getGamesByCategory === 'function',
    getGamesByThemeAvailable: typeof getGamesByTheme === 'function'
});