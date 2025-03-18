// Game Data
let gamesData = [
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
        id: "kings-io",
        title: "Kings IO",
        description: "Battle for the crown in this intense multiplayer io game! Control your royal character, collect gems to grow stronger, and defeat other players to claim their territory. With strategic gameplay, power-ups, and a constantly evolving battlefield, Kings IO offers endless competition and excitement. Upgrade your abilities, form alliances, and dominate the kingdom to become the ultimate ruler. Can you rise to the top of the leaderboard and maintain your reign as the mightiest king?",
        thumbnail: "games/Kings-io-lg.jpg",
        category: ["action", "strategy"],
        theme: ["fantasy", "adventure"],
        isFeatured: true,
        isNew: true,
        popularity: 98,
        dateAdded: "2024-07-03",
        gameUrl: "https://cloud.onlinegames.io/games/2025/construct/208/kings-io/index-og.html",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "sparta-hoppers",
        title: "Sparta Hoppers",
        description: "Join the ranks of elite Spartan warriors in this challenging action arcade game! Test your reflexes and timing as you jump, dodge, and battle your way through increasingly difficult levels. With stunning ancient Greek-inspired visuals and addictive gameplay mechanics, Sparta Hoppers offers an exciting adventure that combines skill-based challenges with historical themes. Can you become the ultimate Spartan hero and conquer all obstacles in your path?",
        thumbnail: "games/sparta-hoppers-game-lg.jpg",
        category: ["action", "arcade"],
        theme: ["retro", "adventure"],
        isFeatured: true,
        isNew: true,
        popularity: 95,
        dateAdded: "2024-07-03",
        gameUrl: "https://cloud.onlinegames.io/games/2025/construct/227/spartahoppers/index-og.html",
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
        description: "Challenge your logical thinking with this engaging mechanical puzzle game! Arrange nuts, bolts, gears and other mechanical parts to solve increasingly complex mechanical puzzles. With intuitive controls and progressively difficult levels, Nuts and Bolts Puzzle offers a satisfying brain-teasing experience that will test your spatial reasoning and problem-solving skills. Can you master all the intricate puzzles and become a mechanical genius?",
        thumbnail: "games/nuts-and-bolts-puzzle-lg.jpg",
        category: ["puzzle", "brain"],
        theme: ["minimalist"],
        isFeatured: true,
        isNew: true,
        popularity: 96,
        dateAdded: "2024-07-02",
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/nuts-and-bolts-puzzle/index-og.html",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "tank-arena-online",
        title: "Tank Arena Online",
        description: "Battle in intense tank warfare across dynamic arenas! Command your customizable tank, destroy opponents, and dominate the battlefield in this action-packed multiplayer game. With various weapons, power-ups, and strategic gameplay elements, Tank Arena Online offers endless tactical possibilities. Upgrade your tank, master different terrain types, and climb the global leaderboards in this thrilling combat experience.",
        thumbnail: "games/Tank-Arena-Online-lg.jpg",
        category: ["action", "strategy"],
        theme: ["retro", "adventure"],
        isFeatured: true,
        isNew: true,
        popularity: 97,
        dateAdded: "2024-07-01",
        gameUrl: "https://cloud.onlinegames.io/games/2025/construct/293/tank-arena/index-og.html",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "monster-survivors",
        title: "Monster Survivors",
        description: "Survive endless waves of monsters in this intense action game! Control your character, strategically collect power-ups, and eliminate hordes of creatures as you level up your abilities. With rogue-lite elements, each run offers a unique experience as you unlock new characters and abilities to survive longer in this challenging monster apocalypse.",
        thumbnail: "games/Monster-survivors-lg.jpg",
        category: ["action", "strategy"],
        theme: ["fantasy", "adventure"],
        featured: true,
        new: true,
        popularity: 96,
        dateAdded: "2024-03-18",
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "endless-cyberpunk-runner",
        title: "Endless Cyberpunk Runner",
        description: "Run through a futuristic cyberpunk city in this fast-paced endless runner. Dodge obstacles, collect power-ups, and see how far you can go in this neon-lit adventure. With increasing speed and difficulty, test your reflexes and compete for the highest score in this thrilling arcade experience.",
        thumbnail: "games/Endless Cyberpunk Runner-512x384.jpg",
        category: ["action", "puzzle"],
        theme: ["cyberpunk", "scifi"],
        featured: true,
        new: true,
        popularity: 94,
        dateAdded: "2024-03-18",
        gameUrl: "https://html5.gamemonetize.co/nxy3n2hzdzpqkujwqxvzht3nhqlxufxv/",
        width: 1920,
        height: 1080,
        aspectRatio: "16:9",
        allowFullscreen: true
    },
    {
        id: "baby-noob-vs-baby-obby-horse",
        title: "Baby Noob vs Baby Obby Horse",
        description: "Embark on an exciting adventure with Baby Noob as they face off against Baby Obby Horse in this fun obstacle course game! Navigate through challenging levels, avoid traps, and collect rewards as you race to the finish line. With colorful graphics, simple controls, and increasingly difficult challenges, this game offers endless entertainment for players of all ages.",
        thumbnail: "games/Baby Noob vs Baby Obby Horse-512x384.jpg",
        category: ["action", "sports"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/qoi0njrme4iwwxsawr338w1592i3loeu/",
        isFeatured: true,
        isNew: true,
        popularity: 95,
        dateAdded: "2025-03-18",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "dye-it-right-color-picker",
        title: "Dye It Right Color Picker",
        description: "Test your color perception and matching skills in this engaging puzzle game! Mix different dyes to create the perfect colors and complete challenging levels. With intuitive controls, vibrant visuals, and increasingly difficult challenges, Dye It Right offers a stimulating experience that will sharpen your color recognition abilities. Match colors precisely, solve intricate puzzles, and become a master of color blending in this addictive brain-teaser game.",
        thumbnail: "games/Dye It Right  Color Picker-512x384.jpg",
        category: ["puzzle", "brain"],
        theme: ["minimalist"],
        gameUrl: "https://html5.gamemonetize.co/l8s1gmsd7kto5j66kty307cohgqk5008/",
        isFeatured: true,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-21",
        width: 750,
        height: 1334,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "hit-and-run-solo-leveling",
        title: "Hit And Run Solo Leveling",
        description: "Embark on an intense action adventure in this fast-paced hit and run game inspired by Solo Leveling. Race through challenging environments, dodge obstacles, and defeat enemies as you level up your character and unlock powerful abilities. With stunning graphics, intuitive controls, and an engaging progression system, this game offers a thrilling experience that will test your reflexes and strategy. Can you master the art of hitting and running while becoming the strongest hunter?",
        thumbnail: "games/Hit And Run  Solo Leveling-512x384.jpg",
        category: ["action", "racing"],
        theme: ["fantasy", "adventure"],
        gameUrl: "https://html5.gamemonetize.co/f89br0v93lrsimki3ms5qjfpaf83vh2x/",
        isFeatured: true,
        isNew: true,
        popularity: 94,
        dateAdded: "2024-03-20",
        width: 750,
        height: 1334,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "deep-in-the-lab",
        title: "Deep in the Lab",
        description: "Escape a secret laboratory by solving challenging puzzles.",
        thumbnail: "games/Poppy Playtime Chapter 3-512x384.jpg",
        category: ["puzzle", "adventure"],
        theme: ["scifi", "survival"],
        featured: true,
        new: true,
        popularity: 92,
        dateAdded: "2024-03-18",
        gameUrl: "https://html5.gamepix.com/play/deep-in-the-lab?sid=110312",
        isVertical: true
    },
    {
        id: "last-war-survival",
        title: "Last War Survival",
        description: "Engage in an intense battle for survival in this action-packed war game! Navigate through dangerous territories, collect weapons and resources, and eliminate enemies to be the last one standing. With realistic graphics, strategic gameplay, and multiple challenging levels, Last War Survival offers an immersive gaming experience that will test your combat skills and survival instincts. Can you outlast your opponents and claim victory?", 
        thumbnail: "games/Last War Survival-512x384.jpg",
        category: ["action", "strategy"],
        theme: ["survival", "adventure"],
        gameUrl: "https://html5.gamemonetize.co/lm5valmd3l3mloh1r56z3o7bdguxyn7l/",
        isFeatured: true,
        isNew: true,
        popularity: 95,
        dateAdded: "2024-03-15",
        width: 640,
        height: 1136,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
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
        category: ["action", "puzzle"],
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
    },
    {
        id: "stack-tower",
        title: "Stack Tower",
        description: "Test your patience, timing, and stacking skills with this addictive game. Stack blocks as high as you can without letting them fall off the tower.",
        thumbnail: "games/Noodle Stack Runner-512x384.jpg",
        category: ["skill", "puzzle"],
        theme: ["challenge"],
        featured: true,
        popularity: 89,
        dateAdded: "2023-07-02",
        gameUrl: "https://html5.gamepix.com/play/stack-blocks-tower?sid=110312",
        width: 640,
        height: 960,
        aspectRatio: "2:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "valentines-day-mahjong",
        title: "Valentines Day Mahjong",
        thumbnail: "games/Valentines Day Mahjong-512x384.jpg",
        description: "Enjoy this romantic Valentine's Day-themed Mahjong game! Match pairs of identical tiles to clear the board in this classic tile-matching puzzle. With beautiful Valentine's designs, relaxing gameplay, and increasing levels of difficulty, this game offers a perfect blend of challenge and romance.",
        category: ["puzzle", "board"],
        theme: ["classic", "cartoon"],
        gameUrl: "https://html5.gamemonetize.co/xyp1vx5bqkgjmplhju75kq4mt9bky8dw/",
        iframe: '<iframe src="https://html5.gamemonetize.co/xyp1vx5bqkgjmplhju75kq4mt9bky8dw/" width="800" height="450" scrolling="none" frameborder="0"></iframe>',
        isFeatured: true,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-07-10",
        width: 800,
        height: 450,
        aspectRatio: "16:9",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        descriptions: {
            en: "Enjoy this romantic Valentine's Day-themed Mahjong game! Match pairs of identical tiles to clear the board in this classic tile-matching puzzle. With beautiful Valentine's designs, relaxing gameplay, and increasing levels of difficulty, this game offers a perfect blend of challenge and romance.",
            zh: ""
        }
    },
    {
        id: "sprinkle-plants-puzzle-game",
        title: "Sprinkle Plants Puzzle Game",
        thumbnail: "games/Sprinkle Plants Puzzle Game-512x384.jpg",
        description: "Grow your own virtual garden in this relaxing puzzle game! Water your plants carefully, solve plant-related puzzles, and watch your garden flourish. With beautiful graphics and engaging gameplay mechanics, Sprinkle Plants offers a perfect blend of puzzle-solving and plant simulation that will test your gardening skills and strategic thinking.",
        category: ["puzzle", "simulation"],
        theme: ["cartoon", "minimalist"],
        gameUrl: "https://html5.gamemonetize.co/t8o0mltu7cuze9lx131k7ovkpkafnv3z/",
        iframe: '<iframe src="https://html5.gamemonetize.co/t8o0mltu7cuze9lx131k7ovkpkafnv3z/" width="750" height="1334" scrolling="none" frameborder="0"></iframe>',
        isFeatured: true,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-07-11",
        width: 750,
        height: 1334,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true,
        descriptions: {
            en: "Grow your own virtual garden in this relaxing puzzle game! Water your plants carefully, solve plant-related puzzles, and watch your garden flourish. With beautiful graphics and engaging gameplay mechanics, Sprinkle Plants offers a perfect blend of puzzle-solving and plant simulation that will test your gardening skills and strategic thinking.",
            zh: ""
        }
    },
    {
        id: "squid-game-merger",
        title: "Squid Game Merger",
        thumbnail: "games/Squid Game Merger-512x384.jpg",
        description: "Challenge your puzzle skills in this addictive Squid Game themed merger! Combine identical items to upgrade and progress through exciting levels inspired by the popular series. With strategic gameplay and increasing difficulty, this merger game will test your matching and planning abilities while providing hours of entertainment.",
        category: ["puzzle", "casual"],
        theme: ["cartoon", "challenge"],
        gameUrl: "https://html5.gamemonetize.co/edaixam7nxogh335w18h1k78h6fe6spn/",
        iframe: '<iframe src="https://html5.gamemonetize.co/edaixam7nxogh335w18h1k78h6fe6spn/" width="1080" height="1920" scrolling="none" frameborder="0"></iframe>',
        isFeatured: true,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-07-12",
        width: 1080,
        height: 1920,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true,
        descriptions: {
            en: "Challenge your puzzle skills in this addictive Squid Game themed merger! Combine identical items to upgrade and progress through exciting levels inspired by the popular series. With strategic gameplay and increasing difficulty, this merger game will test your matching and planning abilities while providing hours of entertainment.",
            zh: ""
        }
    },
    {
        id: "connect-one-line",
        title: "Connect One Line",
        thumbnail: "games/Connect One Line-512x384.jpg",
        description: "Test your logical thinking with this addictive line-drawing puzzle game! Connect dots using a single continuous line without crossing paths. With progressive difficulty levels and elegant design, Connect One Line offers a perfect blend of simplicity and challenge for puzzle enthusiasts. Solve increasingly complex patterns and train your brain with this relaxing yet stimulating game.",
        category: ["puzzle", "brain"],
        theme: ["minimalist", "classic"],
        gameUrl: "https://html5.gamemonetize.co/kii9p1fkvoxg6f37a4mfpht8gilxnjjn/",
        iframe: '<iframe src="https://html5.gamemonetize.co/kii9p1fkvoxg6f37a4mfpht8gilxnjjn/" width="800" height="600" scrolling="none" frameborder="0"></iframe>',
        isFeatured: true,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-07-15",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        descriptions: {
            en: "Test your logical thinking with this addictive line-drawing puzzle game! Connect dots using a single continuous line without crossing paths. With progressive difficulty levels and elegant design, Connect One Line offers a perfect blend of simplicity and challenge for puzzle enthusiasts. Solve increasingly complex patterns and train your brain with this relaxing yet stimulating game.",
            zh: ""
        }
    }
];

// 现在这行过滤代码可以正常工作
gamesData = gamesData.filter(game => game.id !== "voxel-world");

// Game Categories
const gameCategories = {
    "action": "Action Games",
    "puzzle": "Puzzle Games",
    "racing": "Racing Games",
    "casual": "Casual Games",
    "shooting": "Shooting Challenges",
    "sports": "Sports Games",
    "multiplayer": "Multiplayer Games"
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
    return gamesData.filter(game => game.featured || game.isFeatured);
}

// Get new games
function getNewGames() {
    return gamesData.filter(game => game.new || game.isNew);
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
    // ... 现有代码 ...
    standardizeGamesData();
    // ... 现有代码 ...
});

window.gamesData = gamesData; 