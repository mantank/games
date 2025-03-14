// Game Data
const gamesData = [
    // Game Data Template
    /*
    {
        id: "game-id",                // Unique game identifier
        title: "Game Title",          // Game title
        description: "Game description text", // Game description
        thumbnail: "images/games/game-thumbnail.jpg", // Thumbnail path
        category: ["category1", "category2"], // Game categories
        theme: ["theme1"],            // Game theme
        gameUrl: "https://example.com/game-url/", // iframe game URL
        isFeatured: true,             // Featured game
        isNew: true,                  // New game
        popularity: 90,               // Game popularity (0-100)
        dateAdded: "2024-03-14",      // Date added
        width: 800,                   // Default iframe width
        height: 600,                  // Default iframe height
        aspectRatio: "16:9",          // Aspect ratio
        allowFullscreen: true,        // Allow fullscreen
        sandboxOptions: "allow-scripts allow-same-origin allow-popups", // Security settings
        requiredPermissions: []       // Special permissions required
    }
    */
    {
        id: "flappy-twist",
        title: "Flappy Twist",
        description: "Take flight in this exciting twist on the classic flappy bird game! Navigate your bird through challenging obstacles, collect coins, and achieve the highest score possible. With colorful graphics, simple one-touch controls, and increasingly difficult levels, Flappy Twist offers an addictive gaming experience that will keep you coming back for more. Can you master the perfect timing and reflexes needed to set a new high score?", 
        thumbnail: "games/Flappy Twist-512x384.jpg",
        category: ["arcade", "casual"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/o0hke3znuxl3mgwfs4z069tspyjiy6bu/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 480,
        height: 854,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "sokoban-puzzle-game",
        title: "Sokoban Puzzle Game",
        description: "Challenge your mind with this classic Sokoban puzzle game! Push crates to their designated spots while navigating through increasingly complex mazes. With hundreds of levels ranging from beginner to expert, this game offers endless brain-teasing fun. The clean, minimalist design focuses on pure puzzle-solving enjoyment, making it perfect for players who love logical challenges. Can you solve all the puzzles and become a Sokoban master?", 
        thumbnail: "games/sokoban puzzle game-512x384.jpg",
        category: ["puzzle", "brain"],
        theme: ["minimalist"],
        gameUrl: "https://html5.gamemonetize.co/hejref8l6r0omms0tmbw95xzvem8ftqe/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 750,
        height: 1334,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "john-is-a-lifeguard",
        title: "John is a Lifeguard",
        description: "Join John on his exciting lifeguard adventures at the beach! Help him rescue swimmers in distress, navigate treacherous waters, and ensure everyone's safety. This simulation game challenges your reaction time and decision-making skills as you patrol the shoreline, spot dangers, and perform heroic rescues. With realistic water physics and engaging gameplay, you'll experience the thrills and responsibilities of being a professional lifeguard. Are you ready to save lives?", 
        thumbnail: "games/John is a lifeguard-512x384.jpg",
        category: ["simulation", "action"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/v52n81cfw6ry52l6r4y3293rni1x8ygm/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "flip-master",
        title: "Flip Master",
        description: "Master the art of acrobatics in Flip Master! Perform incredible flips, twists, and stunts as you soar through the air with precision and style. This exciting physics-based game challenges you to execute perfect landings while unlocking new characters and environments. With intuitive controls and realistic physics, you'll be pulling off spectacular aerial maneuvers in no time. How many flips can you master?", 
        thumbnail: "games/Flip Master-512x384.jpg",
        category: ["action", "sports"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/t5h6lmvu96x7kk5bj6v5n6999o7mf9f1/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 960,
        height: 600,
        aspectRatio: "16:10",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "ramp-race",
        title: "Ramp Race",
        description: "Experience the ultimate thrill in Ramp Race! Navigate challenging ramps, perform spectacular stunts, and race against time in this adrenaline-pumping racing game. With stunning 3D graphics, realistic physics, and multiple vehicles to unlock, you'll be on the edge of your seat as you conquer increasingly difficult tracks. Perfect your timing, master the controls, and become the ultimate ramp racing champion!", 
        thumbnail: "games/Ramp race-512x384.jpg",
        category: ["racing", "action"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/c32o5le1bu4sxm4xdzwervlir7xw7u99/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 1280,
        height: 720,
        aspectRatio: "16:9",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "poppy-playtime-chapter-3",
        title: "Poppy Playtime Chapter 3",
        description: "Continue the thrilling adventure in Poppy Playtime Chapter 3! Explore the abandoned toy factory and uncover its dark secrets while solving intricate puzzles and evading terrifying toys that have come to life. With immersive gameplay, spine-chilling atmosphere, and an engaging storyline, this horror-adventure game will keep you on the edge of your seat. Can you survive the next chapter of this haunting tale?", 
        thumbnail: "games/Poppy Playtime Chapter 3-512x384.jpg",
        category: ["adventure", "horror"],
        theme: ["horror"],
        gameUrl: "https://html5.gamemonetize.co/p2hqlmkqbvo4m6ii166bc10u8t1zz1m0/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 900,
        height: 600,
        aspectRatio: "3:2",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "noodle-stack-runner",
        title: "Noodle Stack Runner",
        description: "Race through exciting levels in this addictive vertical runner game! Stack noodles as you run, creating the perfect balance to overcome obstacles and reach new heights. With colorful graphics and simple one-touch controls, Noodle Stack Runner offers a fun challenge for players of all ages. Collect power-ups, unlock new characters, and compete for the highest score in this fast-paced mobile-style game.", 
        thumbnail: "games/Noodle Stack Runner-512x384.jpg",
        category: ["action", "arcade"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/me10twl3ggmhi220yxqtnxgocpqdjhun/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 750,
        height: 1334,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "lego-pirate-adventure",
        title: "Lego Pirate Adventure",
        description: "Embark on an epic Lego Pirate Adventure! Sail the high seas, discover hidden treasures, and battle rival pirates in this exciting brick-building game. Customize your pirate character, build and upgrade your ship, and explore mysterious islands filled with challenges and rewards. With colorful graphics and intuitive controls, this adventure brings the classic Lego pirate theme to life for players of all ages.", 
        thumbnail: "games/Lego Pirate Adventure-512x384.jpg",
        category: ["adventure", "action"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/9ldmsitwsskom4jas7e6q18ngg9mbdee/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 900,
        height: 600,
        aspectRatio: "3:2",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "super-mario-and-sonic",
        title: "Super Mario and Sonic",
        description: "Join the iconic duo Mario and Sonic in this exciting adventure game! Run, jump, and dash through colorful levels filled with challenges and enemies. Collect coins, power-ups, and special items to unlock new abilities. With classic platformer gameplay and nostalgic characters, this game offers hours of fun for players of all ages.", 
        thumbnail: "games/Super Mario and Sonic-512x384.jpg",
        category: ["action", "adventure"],
        theme: ["retro"],
        gameUrl: "https://html5.gamemonetize.co/9s24edtryabq95mg8ebnh5ej6z60lpwp/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "sunny-fields",
        title: "Sunny Fields",
        description: "Explore the beautiful Sunny Fields in this relaxing farming simulation game! Plant and harvest crops, raise animals, and build your dream farm. With stunning visuals and engaging gameplay, Sunny Fields offers a peaceful escape into rural life. Customize your farm, trade with villagers, and discover seasonal events throughout the year.", 
        thumbnail: "games/Sunny Fields-512x384.jpg",
        category: ["simulation", "casual"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/6677ao3k189n72jdo2h94kdvvkmo6c72/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 1280,
        height: 720,
        aspectRatio: "16:9",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "animal-puzzle-kids",
        title: "Animal Puzzle Kids",
        description: "A fun animal puzzle game designed especially for children! Complete adorable animal puzzles by dragging and dropping different animal parts. This game not only improves children's cognitive abilities and hand-eye coordination but also helps them learn about various animals. With vibrant graphics and simple controls, it's the perfect choice for young players.", 
        thumbnail: "games/Animal Puzzle Kids-512x384.jpg",
        category: ["puzzle", "educational"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/82pj8b1xs9zbjwk71p37vkscyj1vd4fg/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "merge-fruits-2048",
        title: "Merge Fruits 2048",
        description: "Merge fruits and create higher-level combinations! This fun puzzle game combines the classic 2048 and merging gameplay, challenging your strategic thinking in a relaxed and enjoyable environment. Merge identical fruits to score points and see if you can reach 2048! Suitable for players of all ages.", 
        thumbnail: "games/Merge fruits  2048 New in 2D -512x384.jpg",
        category: ["puzzle", "casual"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/43d7snh2al6o822hutmpyb4ewxh6qvr8/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "one-plus-two",
        title: "One Plus Two",
        description: "Challenge your math skills with this addictive puzzle game! Combine numbers to solve increasingly difficult equations. With colorful graphics and intuitive gameplay, One Plus Two offers a perfect blend of education and entertainment. Test your mental math abilities and see how far you can go!", 
        thumbnail: "games/One Plus Two-512x384.jpg",
        category: ["puzzle", "educational"],
        theme: ["minimalist"],
        gameUrl: "https://html5.gamemonetize.co/wu1eu9t5m3asl1y8dmrka98lx8d5pztr/",
        isFeatured: true,
        isNew: true,
        popularity: 100,
        dateAdded: "2024-06-05",
        width: 640,
        height: 960,
        aspectRatio: "2:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "car-racing-adventure",
        title: "Car Racing Adventure",
        description: "Experience the ultimate car racing adventure! Race through challenging tracks, dodge obstacles, and compete against skilled opponents. With stunning graphics and responsive controls, this high-speed racing game will keep you on the edge of your seat. Perfect for racing enthusiasts of all skill levels.", 
        thumbnail: "games/Fishing Baron Real Fishing-512x384.jpg",
        category: ["racing", "action"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/k3ysix64bb4k1sdhvafwpfrnimvqjbag/",
        isFeatured: true,
        isNew: true,
        popularity: 99,
        dateAdded: "2024-06-05",
        width: 1334,
        height: 750,
        aspectRatio: "1334:750",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "ice-racing-game",
        title: "Ice Racing Challenge",
        description: "Experience the thrill of ice racing! In this exciting racing game, drive your car across icy surfaces, avoid obstacles, overtake opponents, and achieve the best score. With beautiful graphics and simple controls, it's suitable for players of all ages. Are you ready for the challenge?", 
        thumbnail: "games/Toca Avatar My Hospital-512x384.jpg",
        category: ["racing", "action"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/ice041o5s3uwjcmgocr71nnlqw9oofet/",
        isFeatured: true,
        isNew: true,
        popularity: 96,
        dateAdded: "2024-06-02",
        width: 1600,
        height: 768,
        aspectRatio: "25:12",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "vertical-adventure-game",
        title: "Vertical Adventure",
        description: "Start an exciting vertical adventure! In this addictive mobile-style game, navigate through challenging obstacles, collect power-ups, and reach new heights. Perfect for quick gaming sessions, providing endless fun.", 
        thumbnail: "games/Room Sort Floor Plan-512x384.jpg",
        category: ["action", "puzzle"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/lp2fgoca7wo5l59w216lklkr4p5ump8g/",
        isFeatured: true,
        isNew: true,
        popularity: 98,
        dateAdded: "2024-06-01",
        width: 720,
        height: 1280,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "fantasy-tower-defence",
        title: "2D Fantasy Tower Defence",
        description: "Defend your kingdom from monster invasions in this exciting tower defense game! Build powerful defense towers, upgrade your units, use special abilities, and strategize to defeat wave after wave of enemies. With beautiful 2D fantasy-style graphics and engaging gameplay, you won't be able to put it down.", 
        thumbnail: "games/2D Fantasy Tower Defence-512x384 .jpg",
        category: ["strategy", "tower-defense"],
        theme: ["fantasy"],
        gameUrl: "https://html5.gamemonetize.co/8bxmmbgq3l9wllxfgzkchyrkn50lu2fl/",
        isFeatured: true,
        isNew: true,
        popularity: 95,
        dateAdded: "2024-03-14",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "turkish-draughts",
        title: "Turkish Draughts",
        description: "Experience this classic Turkish draughts game! Turkish draughts is a popular board game with simple rules but strong strategic elements. Move your pieces on an 8x8 board, capture your opponent's pieces, and become the ultimate winner. Suitable for players of all ages, whether you're a beginner or an experienced player, you'll enjoy the fun.", 
        thumbnail: "games/Turkish draughts-512x384 .jpg",
        category: ["board", "strategy"],
        theme: ["classic"],
        gameUrl: "https://html5.gamemonetize.co/d2gokou3otdsj4x3y2l09gxx4ktk1okw/",
        isFeatured: true,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-14",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    }
];

// Game Categories
const gameCategories = {
    "action": "Action Games",
    "adventure": "Adventure Games",
    "arcade": "Arcade Games",
    "board": "Board Games",
    "card": "Card Games",
    "casual": "Casual Games",
    "educational": "Educational Games",
    "puzzle": "Puzzle Games",
    "racing": "Racing Games",
    "shooter": "Shooter Games",
    "simulation": "Simulation Games",
    "sports": "Sports Games",
    "strategy": "Strategy Games",
    "tower-defense": "Tower Defense Games"
};

// Game Themes
const gameThemes = {
    "classic": "Classic",
    "cartoon": "Cartoon",
    "fantasy": "Fantasy",
    "scifi": "Sci-Fi",
    "horror": "Horror",
    "cyberpunk": "Cyberpunk",
    "retro": "Retro",
    "minimalist": "Minimalist"
};

// Get game by ID
function getGameById(gameId) {
    return gamesData.find(game => game.id === gameId);
}

// Get games by category
function getGamesByCategory(category) {
    return gamesData.filter(game => game.category.includes(category));
}

// Get games by theme
function getGamesByTheme(theme) {
    return gamesData.filter(game => game.theme.includes(theme));
}

// Get featured games
function getFeaturedGames() {
    return gamesData.filter(game => game.isFeatured);
}

// Get new games
function getNewGames() {
    return gamesData.filter(game => game.isNew);
}

// Get popular games (sorted by popularity)
function getPopularGames() {
    return [...gamesData].sort((a, b) => b.popularity - a.popularity);
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