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
    },
    {
        id: "paper-planets",
        title: "Paper Planets",
        description: "Embark on a whimsical journey through paper-crafted planetary systems in this creative puzzle adventure. Navigate your spacecraft through colorful paper worlds, solving physics-based challenges and collecting celestial objects. With its unique origami-inspired visuals and relaxing gameplay, this artistic space exploration offers a refreshing twist on traditional puzzle mechanics.",
        thumbnail: "games/Paper-Planets-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["scifi", "minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2023/unity3/paper-planets/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "race-clicker-drift-max",
        title: "Race Clicker Drift Max",
        description: "Combine idle clicking mechanics with intense drift racing in this unique hybrid game! Tap to earn currency, upgrade your vehicles, and unlock new drift tracks as you build your racing empire. With satisfying progression systems and high-speed drift challenges, this addictive clicker-racer perfectly blends casual gameplay with exciting racing action.",
        thumbnail: "games/Race-Clicker-Drift-Max-Play-lg.jpg",
        category: ["racing", "casual"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://www.onlinegames.io/race-clicker-drift-max/",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "slope-rolling",
        title: "Slope Rolling",
        description: "Test your reflexes in this fast-paced endless rolling adventure! Guide your ball down increasingly challenging slopes while avoiding obstacles and collecting points. With physics-based gameplay, randomly generated courses, and steadily increasing difficulty, this high-speed arcade experience delivers pulse-pounding excitement as you strive to set new distance records.",
        thumbnail: "games/Slope-Rolling-lg.jpg",
        category: ["action", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://html5.gamedistribution.com/0022998ce3c54962be6ffe178229b168/?gd_sdk_referrer_url=https://www.onlinegames.io/slope-rolling/",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "golf-orbit",
        title: "Golf Orbit",
        description: "Experience golf like never before in this physics-based planetary golf adventure! Launch your ball around moons, planets and space stations using gravity to your advantage. With intuitive controls, increasingly complex orbital challenges, and stunning space visuals, this innovative sports puzzler offers a refreshing take on traditional golf that's both challenging and deeply satisfying.",
        thumbnail: "games/Golf-Orbit-Play-Online-lg.jpg",
        category: ["sports", "puzzle"],
        theme: ["scifi", "minimalist"],
        gameUrl: "https://html5.gamedistribution.com/02ff01e6e9f7451ba28d889a2a55eec9/?gd_sdk_referrer_url=https://www.onlinegames.io/golf-orbit/",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "drift-king",
        title: "Drift King",
        description: "Master the art of drifting in this high-octane racing simulation! Control powerful cars as you perfect your drift techniques across challenging tracks with varying surfaces and conditions. With realistic physics, car customization options, and competitive leaderboards, this adrenaline-fueled driving experience rewards precision control and style as you slide your way to becoming the ultimate Drift King.",
        thumbnail: "games/Drift-King-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2024/unity/drift-king/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "highway-traffic-2",
        title: "Highway Traffic 2",
        description: "Navigate through challenging highway traffic in this intense driving simulator! Weave between cars, trucks, and obstacles as you race against time through increasingly busy roads. With realistic traffic patterns, multiple vehicles to unlock, and various weather conditions, this immersive driving experience tests your reflexes and decision-making skills at high speeds.",
        thumbnail: "games/Highway-Traffic-2-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "love-tester",
        title: "Love Tester",
        description: "Discover your compatibility with friends and crushes in this fun and lighthearted casual game! Input two names and watch as the love calculator analyzes your connection through a series of entertaining animations. With charming visuals, humorous results, and shareable outcomes, this playful love meter offers a delightful diversion that's perfect for parties or just passing time with friends.",
        thumbnail: "games/love-tester-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2021/3/love-tester/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 82,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "traffic-jam",
        title: "Traffic Jam",
        description: "Solve challenging traffic puzzles in this brain-teasing strategy game! Slide cars, trucks, and other vehicles around a gridlocked board to clear a path for your red car to escape. With hundreds of increasingly difficult levels, intuitive controls, and a variety of vehicle types, this addictive puzzle game offers hours of entertainment as you untangle complex traffic situations with logical thinking.",
        thumbnail: "games/Traffic-Jam-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["minimalist", "classic"],
        gameUrl: "https://html5.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb/?gd_sdk_referrer_url=https://www.onlinegames.io/traffic-jam-3d/",
        isFeatured: false,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "masked-special-forces",
        title: "Masked Special Forces",
        description: "Join elite special forces in intense first-person combat missions! Battle through urban environments, military compounds, and hostile territories as you eliminate enemy threats with precision. Featuring realistic weapons, tactical gameplay, and challenging objectives, this action-packed FPS experience delivers adrenaline-fueled gunfights that will test your combat skills and strategic thinking.",
        thumbnail: "games/Masked-Special-Forces-FPS-lg.jpg",
        category: ["action", "shooting"],
        theme: ["adventure", "scifi"],
        gameUrl: "https://www.onlinegames.io/games/2022/unity2/masked-special-forces/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "obby-bike",
        title: "Obby on a Bike",
        description: "Master challenging obstacle courses while riding a bicycle in this unique platforming adventure! Navigate precarious platforms, dangerous traps, and moving hazards as you balance on two wheels. With increasingly difficult levels, various bikes to unlock, and precision-based gameplay, this obstacle course experience combines cycling mechanics with parkour challenges for a fresh twist on the classic obstacle course formula.",
        thumbnail: "games/obby-but-your-on-a-bike-lg.jpg",
        category: ["action", "casual"],
        theme: ["adventure", "cartoon"],
        gameUrl: "https://playhop.com/app/257923?utm_source=distrib&skip-guard=1&header=no&utm_medium=cristian-ovidiu",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "geometry-dash",
        title: "Geometry Dash",
        description: "Jump and fly your way through danger in this rhythm-based action platformer! Push your skills to the limit as you jump, fly, and flip your way through dangerous passages and spiky obstacles. With music that syncs to the gameplay, colorful minimal graphics, and increasingly challenging levels, this addictive precision platformer will test your reflexes and patience as you strive for the perfect run.",
        thumbnail: "games/Geometry-Dash-lg.jpg",
        category: ["action", "casual"],
        theme: ["minimalist", "retro"],
        gameUrl: "https://turbowarp.org/105500895/embed?autoplay&addons=remove-curved-stage-border",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "drift-hunters-2",
        title: "Drift Hunters 2",
        description: "Experience the ultimate drifting simulation in this high-fidelity racing game! Master the art of controlled slides across diverse tracks with realistic physics and handling. Customize and upgrade a garage full of meticulously detailed cars, unlock new tracks and challenges, and perfect your drifting technique to earn points and climb the global leaderboards in this adrenaline-pumping driving experience.",
        thumbnail: "games/Drift-Hunters-2-Online-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2024/unity/drift-hunters-2/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "miniblox-io",
        title: "MiniBlox.io",
        description: "Battle against players worldwide in this multiplayer block-building arena! Collect resources, construct defenses, and eliminate opponents in quick-paced competitive matches. With simple building mechanics, diverse character abilities, and various game modes, this vibrant multiplayer experience offers endless competitive fun as you strategize, build, and fight your way to the top of the leaderboards.",
        thumbnail: "games/MiniBlox.io-lg.jpg",
        category: ["action", "multiplayer"],
        theme: ["cartoon", "adventure"],
        gameUrl: "https://miniblox.io/",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "basketball-stars",
        title: "Basketball Stars",
        description: "Showcase your basketball skills in fast-paced 1v1 and 2v2 matches! Choose from a roster of unique characters, each with special abilities, and compete in quick matches featuring power-ups and special moves. With intuitive controls, multiple game modes including tournaments and practice challenges, this arcade sports game delivers high-energy basketball action perfect for quick play sessions or extended competitive gameplay.",
        thumbnail: "games/Basketball-Stars-Game-lg.jpg",
        category: ["sports", "action"],
        theme: ["cartoon", "classic"],
        gameUrl: "https://www.onlinegames.io/games/2024/gm/basketball-stars/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "obby-tower-parkour",
        title: "Obby Tower Parkour Climb",
        description: "Test your platforming skills in this vertical obstacle course challenge! Climb your way to the top of increasingly difficult towers filled with moving platforms, dangerous traps, and precision jumps. With progressively challenging levels, unique obstacles on each floor, and satisfying movement mechanics, this parkour-inspired climbing adventure offers a rewarding test of timing, reflexes, and spatial awareness.",
        thumbnail: "games/obby-tower-parkour-climb-lg.jpg",
        category: ["action", "casual"],
        theme: ["adventure", "cartoon"],
        gameUrl: "https://html5.gamedistribution.com/5532111b774e4ca18238b41c029617e0/?gd_sdk_referrer_url=https://www.onlinegames.io/obby-tower-parkour-climb/",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "stack-fire-ball",
        title: "Stack Fire Ball",
        description: "Master the art of stacking in this addictive arcade challenge! Time your taps perfectly to stack colorful fireballs on top of each other, creating the tallest tower possible. With vibrant visuals, satisfying physics, and increasingly difficult stages, this precision-based stacking game tests your timing and concentration as you aim to beat your high score and unlock new ball designs.",
        thumbnail: "games/Stack-Fire-Ball-Game-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["minimalist", "fantasy"],
        gameUrl: "https://www.onlinegames.io/games/2021/unity/stack-fire-ball/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "squid-race-simulator",
        title: "Squid Race Simulator",
        description: "Compete in intense multiplayer obstacle races inspired by popular survival game shows! Run, jump, and dodge through challenging courses filled with traps and obstacles while racing against other players. With colorful environments, multiple game modes, and elimination-style competitions, this fast-paced racing simulator delivers adrenaline-pumping action as you strive to be the last contestant standing.",
        thumbnail: "games/squid-race-simulator-lg.jpg",
        category: ["action", "multiplayer"],
        theme: ["cartoon", "adventure"],
        gameUrl: "https://www.onlinegames.io/games/2021/unity3/squid-race-simulator/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "gta-simulator",
        title: "GTA Simulator",
        description: "Experience open-world urban adventure in this action-packed city simulator! Drive various vehicles through bustling streets, complete challenging missions, and explore a vast metropolis filled with activities and surprises. With freedom to choose your path, diverse gameplay mechanics, and an immersive city environment, this sandbox experience offers endless possibilities for creating your own urban adventure story.",
        thumbnail: "games/GTA-Simulator-lg.jpg",
        category: ["action", "racing"],
        theme: ["adventure", "cyberpunk"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "real-flight-simulator-2",
        title: "Real Flight Simulator 2",
        description: "Take to the skies in this realistic aviation experience! Pilot various aircraft through detailed environments with authentic flight physics and controls. From takeoff to landing, master the complexities of flight while navigating changing weather conditions and completing challenging missions. With multiple aircraft to unlock and diverse locations to explore, this immersive simulator offers the ultimate flying experience.",
        thumbnail: "games/Real-Flight-Simulator-2-lg.jpg",
        category: ["casual", "action"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity/real-flight-simulator/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "paper-io-2",
        title: "Paper.io 2",
        description: "Conquer territory in this addictive multiplayer arena game! Control your block as you create loops to claim new land while defending your existing territory from other players. With simple controls but deep strategic gameplay, colorful minimal graphics, and intense competitive action, this territorial conquest game offers endless replayability as you strive to dominate the map and climb the leaderboards.",
        thumbnail: "games/Paper-io-2-Online-lg.jpg",
        category: ["multiplayer", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://html5.gamedistribution.com/rvvASMiM/c5d4966b176246748d6c847103ebfd51/?gd_sdk_referrer_url=https://www.onlinegames.io/Paper-io-2",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "tb-world-toca-boca",
        title: "TB World Toca Boca",
        description: "Create your own stories in this charming open-world sandbox game! Design characters, build and customize environments, and bring your imagination to life through creative play without limits. With colorful graphics, intuitive controls, and endless possibilities for creative expression, this delightful virtual playground offers a safe and engaging experience where you can explore, experiment, and craft unique adventures at your own pace.",
        thumbnail: "games/TB-World-Toca-Boca-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon", "adventure"],
        gameUrl: "https://playhop.com/app/364663?utm_source=distrib&is-united-page=1&skip-guard=1&header=no&utm_medium=cristian-ovidiu&clid=8531463",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "drift-hunters-pro",
        title: "Drift Hunters Pro",
        description: "Experience the ultimate professional drifting simulation with stunning graphics and realistic physics! Master precision drift techniques across meticulously designed tracks, upgrade and customize high-performance vehicles, and compete for top scores on the global leaderboards. With detailed car tuning options, diverse racing environments, and authentic driving mechanics, this premium drifting experience delivers the perfect balance of accessibility and depth for drift enthusiasts.",
        thumbnail: "games/Drift-Hunters-Pro-lg.jpg",
        category: ["racing", "action"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "stickman-gta-city",
        title: "Stickman GTA City",
        description: "Explore an open urban playground as a nimble stickman character in this action-packed city simulator! Complete missions, steal cars, evade the police, and cause mayhem throughout a bustling metropolis filled with opportunities for chaos and adventure. With simplified controls, various weapons and vehicles to discover, and complete freedom to approach objectives your way, this stylized open-world experience delivers endless criminal escapades in a reactive city environment.",
        thumbnail: "games/stickman-gta-city-free-lg.jpg",
        category: ["action", "racing"],
        theme: ["minimalist", "cyberpunk"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/unity3/stickman-gta-city/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "stickman-parkour",
        title: "Stickman Parkour",
        description: "Test your reflexes in this fast-paced stickman platforming challenge! Run, jump, slide, and wall-run through increasingly difficult urban environments filled with obstacles and hazards. With precise controls, fluid animations, and progressively challenging levels, this high-speed parkour adventure puts your timing and spatial awareness to the test as you guide your stickman character through cleverly designed courses to achieve the fastest possible times.",
        thumbnail: "games/stickman-parkour-OG-lg.jpg",
        category: ["action", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "supermarket-simulator",
        title: "Supermarket Simulator",
        description: "Run your own virtual supermarket in this engaging management simulation! Stock shelves, manage inventory, hire employees, and keep customers happy as you grow your store from a small shop to a retail empire. With multiple departments to oversee, business decisions to make, and unexpected events to handle, this detailed retail simulator combines strategic planning with day-to-day operations for a satisfying business management experience.",
        thumbnail: "games/Supermarket-Simulator-Online-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["minimalist", "classic"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/unity/supermarket-simulator/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "capybara-clicker-pro",
        title: "Capybara Clicker Pro",
        description: "Build your capybara empire in this addictive incremental clicking game! Start with a single capybara and expand to a massive collection of these adorable creatures. Upgrade your habitats, unlock special capybaras with unique abilities, and discover rare variants as you click your way to capybara domination. With charming visuals, satisfying progression, and endless upgrades, this relaxing clicker game offers hours of laid-back entertainment.",
        thumbnail: "games/Capybara-Clicker-Pro-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 84,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "madalin-stunt-cars-pro",
        title: "Madalin Stunt Cars Pro",
        description: "Push the limits of physics in this high-octane stunt driving simulator! Choose from a garage full of meticulously detailed supercars and take them through massive open environments designed for extreme stunts and high-speed action. With realistic driving physics, multiplayer functionality, and expansive stunt playgrounds, this premium driving experience lets you perform incredible jumps, drifts, and stunts with unparalleled freedom and style.",
        thumbnail: "games/Madalin-Stunt-Cars-Pro-Game-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity/madalin-stunt-cars-pro/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "basket-random",
        title: "Basket Random",
        description: "Experience basketball with a chaotic twist in this unpredictable sports game! Shoot hoops in bizarre environments with ever-changing physics, random power-ups, and unexpected obstacles that transform each shot into a unique challenge. With wacky characters, unconventional courts, and unpredictable gameplay mechanics, this offbeat basketball experience delivers laugh-out-loud moments and surprising challenges that keep you coming back for more random basketball action.",
        thumbnail: "games/Basket-Random-lg.jpg",
        category: ["sports", "casual"],
        theme: ["cartoon", "fantasy"],
        gameUrl: "https://html5.gamedistribution.com/bf1268dccb5d43e7970bb3edaa54afc8/?gd_sdk_referrer_url=https://www.onlinegames.io/basket-random",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "skribblio",
        title: "Skribbl.io",
        description: "Test your drawing and guessing skills in this entertaining multiplayer pictionary game! Take turns drawing while others try to guess the word, or put your detective skills to work deciphering others' artistic creations. With simple drawing tools, automatic scoring, and rooms for friends or random players, this social drawing game creates hilarious moments and tests your creativity as you compete to earn the most points through your artistic abilities.",
        thumbnail: "games/Skribblio-lg.jpg",
        category: ["multiplayer", "casual"],
        theme: ["cartoon", "minimalist"],
        gameUrl: "https://skribbl.io/",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "fnaf-online",
        title: "Five Nights at Freddy's Online",
        description: "Survive five nights as a security guard in this terrifying horror game! Monitor security cameras, manage limited power resources, and defend yourself against malfunctioning animatronic characters that roam the restaurant at night. With an atmosphere of mounting dread, strategic resource management, and perfectly timed jump scares, this nerve-wracking survival horror experience tests your courage and quick thinking as you try to make it through each increasingly difficult night shift.",
        thumbnail: "games/Play-FNAF-Online-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["horror", "cyberpunk"],
        gameUrl: "https://www.onlinegames.io/games/2024/w1/five-nights-at-freddys/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 94,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "smash-karts",
        title: "Smash Karts",
        description: "Battle in this explosive multiplayer kart racing arena! Drive weaponized go-karts and eliminate opponents in chaotic free-for-all matches where speed meets combat. With simple controls, power-ups, and destructible environments, this fast-paced vehicular combat game delivers intense multiplayer action as you drift, boost, and blast your way to victory against players from around the world.",
        thumbnail: "games/smash-karts-online-lg.jpg",
        category: ["racing", "multiplayer"],
        theme: ["cartoon", "action"],
        gameUrl: "https://smashkarts.io/",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "granny",
        title: "Granny",
        description: "Escape a terrifying house in this spine-chilling survival horror game! Trapped inside the home of a mysterious elderly woman with exceptional hearing, you must solve puzzles and find keys to unlock the exit while avoiding detection. With a tense atmosphere, unpredictable AI behavior, and limited resources at your disposal, this nerve-racking stealth experience tests your problem-solving skills and courage under extreme pressure.",
        thumbnail: "games/granny-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["horror", "adventure"],
        gameUrl: "https://playhop.com/app/307198?utm_source=distrib&is-united-page=1&skip-guard=1&header=no&utm_medium=cristian-ovidiu&clid=8531463",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "bitlife",
        title: "BitLife",
        description: "Make life choices in this comprehensive text-based life simulator! Starting from birth, navigate through education, career, relationships, and more as you make decisions that shape your virtual life story. With countless scenarios, random events, and branching paths, this addictive life simulation offers near-endless replayability as you experience different lives, careers, and outcomes based on your choices.",
        thumbnail: "games/Bitlife-PLay-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://html5.gamedistribution.com/ac6a950a44d144139dabe7837aa4aab9/?gd_sdk_referrer_url=https://www.onlinegames.io/bitlife",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "vex-7",
        title: "Vex 7",
        description: "Navigate through deadly obstacle courses in this challenging platformer! Guide your stickman character through increasingly difficult levels filled with spikes, saws, lasers, and other hazards that require perfect timing and precision. With responsive controls, clean visuals, and progressively complex level design, this hardcore platformer offers a satisfying test of skill that will push your reflexes and patience to their limits.",
        thumbnail: "games/vex-7-online-lg.jpg",
        category: ["action", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://html5.gamedistribution.com/0c454c9562d249d28ba3a2b50564042c/?gd_sdk_referrer_url=https://www.onlinegames.io/vex-7/",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "police-chase-drifter",
        title: "Police Chase Drifter",
        description: "Evade the law in this high-speed police pursuit game! Master the art of drifting as you outrun police vehicles through crowded city streets, highways, and challenging terrain. With realistic drift mechanics, multiple cars to unlock, and increasingly difficult chase scenarios, this adrenaline-fueled driving experience tests your reflexes and driving skills as you attempt to escape from the ever-persistent law enforcement on your tail.",
        thumbnail: "games/Police-Chase-Drifter-Online-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "cyberpunk"],
        gameUrl: "https://www.onlinegames.io/games/2021/3/police-chase-drifter/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "survival-race",
        title: "Survival Race",
        description: "Race against other players in this intense multiplayer survival racing game! Navigate deadly obstacle courses, avoid hazards, and outrun your opponents to be the last racer standing. With simple controls, challenging levels, and competitive gameplay, this action-packed racing experience offers thrilling moments as you dash, jump, and slide your way to victory against competitors from around the world.",
        thumbnail: "games/Survival-Race-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "cartoon"],
        gameUrl: "https://playhop.com/app/288720?utm_source=distrib&skip-guard=1&header=no&utm_medium=cristian-ovidiu",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Survival Race is an exciting multiplayer racing game where you compete against other players on challenging obstacle courses. Each race is a battle for survival where only the fastest and most skilled racers make it to the finish line.",
            controls: "Use WASD or arrow keys to move your character. Press SPACE to jump over obstacles. Collect power-ups to gain advantages over other racers and avoid traps that will slow you down or eliminate you from the race."
        }
    },
    {
        id: "henry-stickmin-escaping-prison",
        title: "Henry Stickmin: Escaping the Prison",
        description: "Help Henry Stickmin escape from prison in this hilarious choice-based adventure! Choose different escape routes and tools, each leading to unique and often comical outcomes. With multiple branching paths, dozens of fail states, and genuinely funny scenarios, this interactive stickman adventure delivers laugh-out-loud moments and surprising twists as you attempt to execute the perfect prison break.",
        thumbnail: "games/Henry-Stickmin-Escaping-the-Prison-Online-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["cartoon", "adventure"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/flash/escaping-the-prison/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Henry Stickmin: Escaping the Prison is a choice-based adventure game where you help the protagonist break out of prison. Choose your escape route carefully, as each decision leads to different outcomes - some successful, many hilariously unsuccessful.",
            controls: "Use your mouse to click on different options presented on screen. Timing is important in some scenarios, so be ready to click at the right moment. The game features multiple endings based on your choices, encouraging replays to discover all possible outcomes."
        }
    },
    {
        id: "crazy-strike-force",
        title: "Crazy Strike Force",
        description: "Command elite soldiers in this action-packed tactical shooter! Lead your strike team through intense combat missions against heavily armed enemies across various challenging environments. With an arsenal of weapons to unlock, multiple squad members to control, and strategic gameplay elements, this military combat experience delivers high-octane firefights that will test your tactical decision-making and combat skills.",
        thumbnail: "games/Crazy-Strike-Force-lg.jpg",
        category: ["action", "shooting"],
        theme: ["adventure", "scifi"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity/crazy-strike-force/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Crazy Strike Force puts you in command of an elite tactical unit tasked with completing high-risk combat missions. Coordinate your team, utilize various weapons and equipment, and eliminate hostile forces while achieving mission objectives.",
            controls: "Use WASD keys to move your character. Mouse to aim and left-click to shoot. Press R to reload, F to interact with objects, and SHIFT to run. Switch between squad members using number keys 1-4. Tactical planning and proper use of cover are essential for mission success."
        }
    },
    {
        id: "basket-hoop",
        title: "Basket Hoop",
        description: "Test your basketball shooting skills in this addictive sports challenge! Swipe to shoot basketballs through hoops of varying distances and difficulties. With physics-based gameplay, progressive challenges, and satisfying scoring mechanics, this basketball arcade experience offers a perfect blend of casual fun and skill-based gameplay that will keep you coming back to perfect your shooting technique.",
        thumbnail: "games/Basket-Hoop-lg.jpg",
        category: ["sports", "casual"],
        theme: ["minimalist", "classic"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/construct/311/basket-hoop/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Basket Hoop is a physics-based basketball shooting game that challenges your timing and accuracy. Progress through increasingly difficult levels featuring moving hoops, obstacles, and special challenges that test your shooting precision.",
            controls: "Click and drag to aim your shot, then release to shoot the basketball. The strength of your shot depends on how far you pull back. Adjust your angle and power based on the distance to the hoop. Some levels include moving targets and time constraints for added challenge."
        }
    },
    {
        id: "tribals-io",
        title: "Tribals.io",
        description: "Battle for tribal supremacy in this multiplayer survival arena! Gather resources, craft weapons, build shelters, and form alliances as you compete against other players in a hostile prehistoric world. With real-time combat, territory control, and technological progression, this tribal warfare experience offers intense multiplayer action where only the strongest and most strategic tribes will survive and thrive.",
        thumbnail: "games/Tribals.io-lg.jpg",
        category: ["multiplayer", "action"],
        theme: ["adventure", "fantasy"],
        gameUrl: "https://tribals.io/",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Tribals.io is a multiplayer survival game set in a prehistoric world where players form tribes, gather resources, and battle for territory. Work together with allies to build bases, craft weapons, and defend against rival tribes in an ever-evolving battlefield.",
            controls: "Use WASD or arrow keys to move your character. Left-click to attack or interact with objects. Right-click to block or use special abilities. Press E to gather resources, Q for tribe menu, and TAB to view the scoreboard. Communication and teamwork are key to tribal success."
        }
    },
    {
        id: "spacebar-clicker",
        title: "Spacebar Clicker",
        description: "Challenge your tapping speed in this addictive spacebar clicking game! Compete for the highest clicks per second, unlock upgrades to boost your clicking power, and climb the global leaderboards. With simple mechanics, satisfying visual feedback, and progressive rewards, this minimalist clicking challenge offers a surprisingly engaging experience that will test your finger speed and endurance. #games #clicker #spacebar #idle #incremental #challenge #fingerspeed #tapgame #speedclicking #cps",
        thumbnail: "games/Spacebar-Clicker-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["minimalist", "classic"],
        gameUrl: "https://www.onlinegames.io/games/2024/more/spacebar-clicker/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 84,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Spacebar Clicker is a simple yet addictive clicking game that challenges you to achieve the highest possible clicks per second (CPS). This minimal game focuses on pure speed and timing, with upgrades and achievements to unlock as you progress.",
            controls: "Press the SPACEBAR as quickly as possible to register clicks. The game tracks your clicks per second (CPS) and displays your current and best scores. Earn points to unlock upgrades that increase your clicking power and efficiency. Challenge yourself to beat your own records or compete with friends for the highest score."
        }
    },
    {
        id: "minecraft-classic",
        title: "Minecraft Classic",
        description: "Experience the original version of the world's most popular sandbox building game! Place and break blocks to construct anything you can imagine in this simplified browser version of the iconic voxel world. With creative mode, unlimited resources, and the nostalgic original graphics, this classic version delivers the pure, unfiltered building experience that started the global phenomenon and revolutionized gaming forever. #games #minecraft #sandbox #building #blocks #creative #voxel #exploration #crafting #classic",
        thumbnail: "games/Minecraft-Classic-Game-lg.jpg",
        category: ["casual", "multiplayer"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2024/cube/classicube/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 95,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Minecraft Classic is the original version of the iconic sandbox building game. This browser-playable version captures the essence of early Minecraft, allowing players to place and break blocks in a procedurally generated world with unlimited resources and creative freedom.",
            controls: "Use WASD keys to move and SPACE to jump. Left-click to break blocks, right-click to place blocks. Use the mouse to look around and the scroll wheel to cycle through available block types. Press E to open your inventory with all available blocks. This version focuses on building and exploration without survival elements or crafting mechanics of the full game."
        }
    },
    {
        id: "a-small-world-cup",
        title: "A Small World Cup",
        description: "Compete in an exciting miniaturized soccer tournament with simplified controls and fast-paced matches! Choose your favorite national team and guide them through challenging matches against AI opponents on the path to world cup glory. With intuitive controls, quick matches, and charming miniature players, this compact soccer simulation offers the thrill of international competition in a pocket-sized format perfect for quick play sessions. #games #soccer #worldcup #football #sports #tournament #miniature #arcade #quickplay #competition",
        thumbnail: "games/a-small-world-cp-lg.jpg",
        category: ["sports", "casual"],
        theme: ["cartoon", "minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/more2/a-small-world-cup/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "A Small World Cup is a compact soccer game that simulates an international tournament with miniaturized players and simplified rules. Select from various national teams and compete through group stages and knockout rounds to lift the trophy in this charming take on the world's biggest sporting event.",
            controls: "Use arrow keys or WASD to move your active player. Press SPACE or Z to pass the ball, X or SHIFT to shoot. Holding the shoot button charges a more powerful shot. Tap C to switch to the player closest to the ball when defending. The game features simple physics and controls designed for fast-paced, arcade-style soccer matches that last just a few minutes each."
        }
    },
    {
        id: "get-on-top",
        title: "Get on Top",
        description: "Battle a friend in this hilarious physics-based wrestling game! Control your floppy character's arms and legs as you attempt to lift yourself up while pushing your opponent down in a test of coordination and strategy. With simple controls but challenging gameplay, bizarre physics, and laugh-out-loud moments, this two-player party game delivers endless entertainment as you and your friend contort your characters in increasingly ridiculous ways to claim the top position. #games #physics #wrestling #2player #party #competition #funny #ragdoll #coop #localmp",
        thumbnail: "games/Get-on-Top-lg.jpg",
        category: ["multiplayer", "casual"],
        theme: ["cartoon", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2024/code/6/get-on-top/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Get on Top is a physics-based wrestling game where two players battle on the same keyboard. Control your character's limbs to climb on top of your opponent while they try to do the same to you. The wacky physics and simple controls create hilarious situations as players contort their characters in a struggle for dominance.",
            controls: "Player 1: Use W, A, D to control the red character's left arm, right arm, and legs respectively. Player 2: Use UP, LEFT, RIGHT arrow keys to control the blue character's left arm, right arm, and legs. Coordinate your limb movements to gain leverage and push your opponent down while lifting yourself up. The first player to get their head above their opponent's for a set time wins the round."
        }
    },
    {
        id: "ragdoll-football-2-players",
        title: "Ragdoll Football 2 Players",
        description: "Engage in chaotic football matches with hilariously uncoordinated ragdoll physics! Control your floppy athlete in this 2-player party game as you attempt to score goals while wrestling with intentionally awkward movement mechanics. With unpredictable physics, slapstick collisions, and competitive gameplay, this comedic sports game delivers endless laughs as you and a friend flail wildly across the field in pursuit of football glory. #games #football #ragdoll #physics #2player #funny #soccer #party #sports #coop",
        thumbnail: "games/Ragdoll-Football-2-Players-lg.jpg",
        category: ["sports", "multiplayer"],
        theme: ["cartoon", "classic"],
        gameUrl: "https://html5.gamedistribution.com/d28ab37fbee149289d4c3d92106e2921/?gd_sdk_referrer_url=https://www.onlinegames.io/ragdoll-football-2-players/",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-26",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Ragdoll Football 2 Players is a comical sports game where physics-based ragdoll characters attempt to play soccer with hilariously unpredictable results. Play against a friend on the same keyboard as you both struggle to control your floppy athletes in a match that's more about laughter than athletic skill.",
            controls: "Player 1: Use WASD to move the blue player. W jumps, A moves left, D moves right, and S performs a sliding tackle. Player 2: Use arrow keys to control the red player with the same functions. Press SPACE or ENTER to kick the ball when close enough. The deliberately challenging physics make precise movements difficult, creating funny moments as players stumble, fall, and collide while trying to score goals."
        }
    },
    {
        id: "ovo-game",
        title: "OvO Game",
        description: "Master precision platforming in this challenging and addictive parkour adventure! Guide your nimble character through increasingly difficult levels filled with spikes, moving platforms, and gravity-defying obstacles. With crisp controls, minimalist visuals, and cleverly designed levels that require perfect timing and spatial awareness, this demanding platformer offers a satisfying test of skill for players seeking a genuine challenge. #games #platformer #parkour #precision #obstacles #speedrun #challenge #minimalist #jumps #speedrunning",
        thumbnail: "games/OvO-Game-lg.jpg",
        category: ["action", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://www.onlinegames.io/games/2023/ovo/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-27",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "OvO is a precision platformer that challenges players to navigate through carefully designed levels with perfect timing and accuracy. The game features a simple visual style but complex level design that tests your platforming skills to their limits.",
            controls: "Use arrow keys or WASD to move your character. Press UP or W to jump, and DOWN or S to drop from platforms. Wall-jumping and precise landings are essential for progress. Each level introduces new mechanics and obstacles, requiring you to master different movement techniques. The game tracks your completion time for each level, encouraging speedrunning and perfecting your routes."
        }
    },
    {
        id: "fnaf-2",
        title: "Five Nights at Freddy's 2",
        description: "Survive five terrifying nights in this sequel to the hit horror game! Monitor security cameras, manage limited resources, and defend yourself against an expanded cast of hostile animatronic characters that have new patterns and behaviors. With increased tension, new game mechanics including a flashlight and mask, and an even more unsettling atmosphere, this nerve-wracking survival horror experience will test your nerves and strategic planning as you uncover the dark secrets hidden within Freddy Fazbear's Pizza. #games #horror #survival #jumpscares #fnaf #strategy #nightshift #animatronics #tension #fear",
        thumbnail: "games/FNaF-2-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["horror", "cyberpunk"],
        gameUrl: "https://www.onlinegames.io/games/2024/w1/five-nights-at-freddys-2/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-27",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Five Nights at Freddy's 2 is a suspenseful horror game where you work as a night security guard at a renovated Freddy Fazbear's Pizza. Unlike the first game, you now have no doors to protect yourself and must deal with a larger cast of animatronic characters using different defensive tactics.",
            controls: "Use the mouse to navigate security cameras and monitor the restaurant. The flashlight (controlled by clicking or holding F) can be used to illuminate dark areas and temporarily stun certain animatronics. When threatened, quickly put on your Freddy Fazbear mask (by pressing SPACE) to fool most animatronics into thinking you're one of them. You must balance using these tools while managing limited power to survive until 6 AM each night."
        }
    },
    {
        id: "fps-simulator",
        title: "FPS Simulator",
        description: "Experience intense first-person combat in this action-packed shooting simulator! Engage enemies across diverse environments, from urban settings to open battlefields, using a variety of realistic weapons and tactical equipment. With smooth controls, satisfying gunplay, and challenging AI opponents, this immersive first-person shooter delivers adrenaline-pumping firefights that will test your aim, reflexes, and strategic thinking in the heat of simulated combat. #games #fps #shooter #action #combat #military #tactical #guns #firstperson #simulation",
        thumbnail: "games/Fps-simulator-lg.jpg",
        category: ["action", "shooting"],
        theme: ["adventure", "scifi"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity3/fps-simulator/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-27",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "FPS Simulator puts you in the boots of a skilled combat operative tasked with completing various missions across different environments. The game offers realistic weapons handling, tactical gameplay, and challenging scenarios that test your shooting skills and strategic thinking.",
            controls: "Use WASD to move your character and mouse to look around. Left-click to fire your weapon, right-click to aim down sights for increased accuracy. Press R to reload, SHIFT to run, CTRL to crouch, and SPACE to jump. Switch weapons using the number keys 1-5 or mouse wheel. Press F to interact with objects and E to pick up weapons or items. Take cover behind objects and use tactical positioning to outmaneuver enemies."
        }
    },
    {
        id: "pac-man-30th-anniversary",
        title: "Pac-Man 30th Anniversary",
        description: "Celebrate three decades of gaming history with this special edition of the arcade classic! Navigate mazes as the iconic yellow character, eating dots and avoiding colorful ghosts in this faithful recreation of the groundbreaking original. With the addition of new mazes, special power-ups, and enhanced visuals while maintaining the addictive core gameplay, this anniversary edition pays tribute to one of the most influential and recognizable video games of all time. #games #pacman #arcade #classic #maze #retro #anniversary #80s #nostalgia #chomping",
        thumbnail: "games/Pac-Man-30th-Anniversary-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["retro", "classic"],
        gameUrl: "https://www.onlinegames.io/games/2024/more/tapman/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-27",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Pac-Man 30th Anniversary celebrates three decades of the iconic arcade game with enhanced visuals and new features while preserving the classic gameplay that made it a cultural phenomenon. Navigate through mazes, collect dots, and avoid ghosts in this special edition of the beloved game.",
            controls: "Use arrow keys to move Pac-Man through the maze. Collect all dots to complete each level while avoiding the colored ghosts. Eat power pellets (larger dots) to temporarily turn ghosts blue, allowing you to eat them for extra points. Special fruits appear periodically for bonus points. The game features the classic mazes along with new anniversary designs that offer fresh challenges while maintaining the timeless Pac-Man experience."
        }
    },
    {
        id: "supercar-driving-2",
        title: "Supercar Driving 2",
        description: "Experience the thrill of driving exotic supercars in this high-fidelity racing simulator! Take control of meticulously detailed luxury vehicles as you speed through diverse environments including urban streets, countryside roads, and professional race tracks. With realistic physics, stunning visuals, and a variety of supercars to unlock and customize, this premium driving experience delivers the perfect balance of arcade accessibility and simulation depth for automotive enthusiasts. #games #racing #supercars #driving #simulator #cars #luxury #speed #drifting #openworld",
        thumbnail: "games/supercardriving-2-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/unity2/super-car-driving/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-27",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Supercar Driving 2 puts you behind the wheel of the world's most exclusive and powerful supercars in a variety of driving environments. Experience the thrill of controlling vehicles with exceptional speed, handling, and acceleration across different driving scenarios from casual cruising to intense racing.",
            controls: "Use arrow keys or WASD to control your vehicle: W/UP for acceleration, S/DOWN for braking/reverse, A/LEFT and D/RIGHT for steering. Press SHIFT to activate nitro boost for temporary speed increases. SPACE toggles the handbrake for executing drifts. C changes camera views, and M accesses the map. The game features different driving modes including free roam, time trials, and racing competitions with adjustable difficulty settings."
        }
    },
    {
        id: "dta-6-online",
        title: "DTA 6 Online",
        description: "Command powerful tanks in this explosive strategic combat game! Engage in intense tank battles across varied terrain, upgrade your arsenal, and outsmart opponents with tactical maneuvers. With destructible environments, multiple tank classes, and challenging missions, this action-packed tank warfare experience tests your combat skills and strategic thinking as you dominate the battlefield with heavy firepower and tactical precision. #games #tanks #strategy #action #warfare #battles #military #shooter #tactical #combat",
        thumbnail: "games/dta-6-online-lg.jpg",
        category: ["action", "shooting"],
        theme: ["adventure", "scifi"],
        gameUrl: "https://playhop.com/app/285639?utm_source=distrib&skip-guard=1&header=no&utm_medium=cristian-ovidiu",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-28",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "DTA 6 Online puts you in control of advanced battle tanks in a war-torn world where strategic combat prowess determines victory. Choose from various tank types, each with unique strengths and weaknesses, and engage in missions that require both tactical planning and quick reflexes.",
            controls: "Use WASD or arrow keys to maneuver your tank across the battlefield. Mouse to aim your turret, left-click to fire main cannon. Number keys 1-4 switch between different ammunition types. Press SPACE to activate special abilities or deploy countermeasures. R reloads your cannon, and E interacts with objects. Use cover effectively and approach each engagement with careful planning for maximum battlefield success."
        }
    },
    {
        id: "tank-arena",
        title: "Tank Arena",
        description: "Battle in frenetic tank combat arenas against players from around the world! Maneuver your customizable tank through multi-level battlegrounds, collect power-ups, and eliminate enemy vehicles with an arsenal of devastating weapons. With fast-paced gameplay, various tank classes, and competitive multiplayer modes, this action-packed tank shooter delivers explosive battles and strategic depth as you fight to climb the global leaderboards. #games #tanks #multiplayer #arena #combat #shooter #battle #strategy #competition #arcade",
        thumbnail: "games/Tank-Arena-Online-lg.jpg",
        category: ["action", "multiplayer"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/construct/293/tank-arena/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-28",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Tank Arena is a multiplayer tank battle game where players compete in fast-paced matches across various arena environments. Customize your tank, form teams with other players, and participate in different game modes including deathmatch, capture the flag, and control point battles.",
            controls: "Use WASD or arrow keys to move your tank. Mouse aims your turret, left-click fires your primary weapon, and right-click uses secondary weapons or abilities. Collect power-ups scattered throughout the arena to gain temporary advantages like increased speed, damage, or special weapons. Communication and teamwork are essential in team-based modes, while quick reflexes and smart positioning are vital for success in all game types."
        }
    },
    {
        id: "stickman-destruction",
        title: "Stickman Destruction",
        description: "Cause spectacular chaos in this physics-based destruction simulator! Launch stickman characters from various vehicles and contraptions to create the most spectacular crashes and dismemberments possible. With realistic physics, multiple vehicles to unlock, and increasingly challenging destruction scenarios, this outrageous demolition game delivers satisfying mayhem as you aim for maximum damage and high scores through creative destruction. #games #stickman #destruction #physics #ragdoll #crashes #vehicles #stunts #demolition #mayhem",
        thumbnail: "games/Stickman-Destruction-lg.jpg",
        category: ["action", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://www.onlinegames.io/games/2021/unity3/stickman-destruction/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-28",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Stickman Destruction is a physics-based game where the goal is to cause as much damage as possible to your stickman character and vehicles. Launch your stickman from various vehicles and watch as the realistic physics engine creates spectacular crashes, earning points based on the amount and creativity of destruction achieved.",
            controls: "Use arrow keys or WASD to control your vehicle before launching. Press SPACE to accelerate and build momentum. Hit ENTER at the right moment to eject your stickman for maximum destruction potential. The game features different environments with unique obstacles and opportunities for creative crashes. Earn points to unlock new vehicles with different physics properties and destruction potential."
        }
    },
    {
        id: "obby-find-sprunki",
        title: "Obby: Find Sprunki",
        description: "Embark on a challenging platforming adventure to find the elusive Sprunki! Navigate through increasingly difficult obstacle courses filled with moving platforms, deadly traps, and precision jumps across colorful environments. With progressively complex level design, special abilities to unlock, and hidden collectibles, this engaging obstacle challenge tests your timing, reflexes, and platforming skills as you overcome various hazards in your quest to find the mysterious Sprunki. #games #obby #platformer #parkour #obstacles #challenge #adventure #jumping #precision #colorful",
        thumbnail: "games/obby-find-sprunki-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["cartoon", "adventure"],
        gameUrl: "https://playhop.com/app/387693?utm_source=distrib&is-united-page=1&skip-guard=1&header=no&utm_medium=cristian-ovidiu&clid=8531463",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-03-28",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Obby: Find Sprunki is a challenging obstacle course platformer where you navigate through increasingly difficult levels to find the mythical creature Sprunki. Each level features unique obstacles, themes, and challenges that test your platforming skills to their limits.",
            controls: "Use WASD or arrow keys to move your character. Press SPACE to jump, with jump height controlled by how long you hold the button. Double jump by pressing SPACE twice in succession. Some levels feature special abilities activated with E or F keys, like temporary flight or speed boosts. Checkpoints save your progress throughout each level, allowing you to retry from strategic points after falling or hitting obstacles."
        }
    },
    {
        id: "edys-car-simulator",
        title: "Edy's Car Simulator",
        description: "Explore an open world in this immersive driving simulation! Choose from a garage of detailed vehicles and drive freely through diverse environments including cities, countryside, and challenging off-road terrain. With realistic physics, day-night cycles, and various driving challenges to complete, this comprehensive car simulator offers an engaging automotive experience for casual drives or completing exciting missions across a vast open world. #games #driving #simulator #cars #openworld #racing #exploration #physics #vehicles #realistic",
        thumbnail: "games/Edys-Car-Simulator-Online-lg.jpg",
        category: ["racing", "casual"],
        theme: ["adventure", "minimalist"],
        gameUrl: "https://www.onlinegames.io/games/2022/unity/edys-car-simulator/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-28",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Edy's Car Simulator offers a realistic driving experience in an expansive open world environment. Select from various vehicle types including sports cars, off-road vehicles, and everyday commuters, each with unique handling characteristics and capabilities suited for different terrains and driving styles.",
            controls: "Use WASD or arrow keys for vehicle control: W/UP accelerates, S/DOWN brakes and reverses, A/LEFT and D/RIGHT steer. Press SHIFT for nitro boost, CTRL to switch between low and high gear for off-road driving. C cycles through camera views (first-person, third-person, hood view). L toggles headlights, and P activates parking brake. The game features both free-roam exploration and structured missions that test different driving skills."
        }
    },
    {
        id: "deadshot-io",
        title: "Deadshot.io",
        description: "Battle in intense multiplayer sniper duels against players worldwide! Take your position, spot enemies, and eliminate them with precision shots before they find you. With realistic ballistics, various maps with strategic positions, and upgradeable equipment, this competitive sniper shooter delivers heart-pounding action as you hone your marksmanship and tactical awareness to climb the global leaderboards. #games #multiplayer #sniper #shooter #fps #battle #io #tactical #precision #competitive",
        thumbnail: "games/Deadshot-io-lg.jpg",
        category: ["shooting", "multiplayer"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://deadshot.io/",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-29",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Deadshot.io is a multiplayer sniper duel game where precision and positioning are key to victory. Players face off in various environments, using cover and tactical awareness to spot enemies while remaining hidden themselves. Upgrade your equipment, master different maps, and compete against players from around the world.",
            controls: "Use WASD or arrow keys to move your character to different positions. Right-click or hold SHIFT to enter scope mode for precise aiming. Left-click to fire your weapon when ready. Press SPACE to jump or climb certain surfaces. R reloads your weapon, and Q switches between your primary and secondary weapons. The number keys 1-3 access different equipment. Staying still improves aim stability, while moving makes you harder to spot. Learn the maps to find optimal sniping positions and watch for subtle movement from enemy players."
        }
    },
    {
        id: "sprunki-warm-like-fire",
        title: "Sprunki: Warm Like Fire",
        description: "Join Sprunki on a heartwarming platforming adventure through a magical winter world! Guide the adorable character through snow-covered landscapes, solve environmental puzzles, and collect flame essences to restore warmth to the frozen land. With charming visuals, soothing music, and progressively challenging gameplay, this cozy platformer delivers a delightful experience as you help Sprunki overcome obstacles and bring back the warmth of friendship and fire. #games #platformer #adventure #puzzle #cute #winter #cozy #sprunki #warming #indie",
        thumbnail: "games/sprunki-warm-like-fire-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["cartoon", "adventure"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/more/sprunki-warm-like-fire/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-03-29",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Sprunki: Warm Like Fire follows the journey of the lovable character Sprunki as they venture through a frozen world to restore warmth and light. This charming platformer combines puzzle elements with adventure as you navigate through increasingly complex winter landscapes and challenges.",
            controls: "Use arrow keys or WASD to move Sprunki through the world. Press SPACE to jump, with double-jump available after collecting the proper upgrade. E or Z interacts with objects and characters in the environment. Hold SHIFT to run when available. Collect flame essences throughout each level to restore warmth to frozen areas, which unlocks new paths and abilities. The game features a gradual progression system where new moves and abilities are unlocked as you advance through the story."
        }
    },
    {
        id: "idle-breakout",
        title: "Idle Breakout",
        description: "Reinvent the classic brick-breaking formula with idle gaming mechanics! Launch balls that continuously bounce and break bricks while you collect currency to purchase upgrades and automatic features. With an endless progression system, various brick types, special power-ups, and offline progress, this addictive idle game offers a satisfying blend of active gameplay and passive progress as you optimize your ball-launching setup for maximum brick-breaking efficiency. #games #idle #breakout #bricks #incremental #ballgame #arcade #classic #upgrade #strategy",
        thumbnail: "games/Play-Idle-Breakout-lg.jpg",
        category: ["casual", "puzzle"],
        theme: ["minimalist", "retro"],
        gameUrl: "https://www.onlinegames.io/games/2024/more/idle-breakout/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-29",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Idle Breakout combines the classic brick-breaking gameplay with modern idle game mechanics. Launch balls that automatically bounce and break bricks while earning currency for upgrades, allowing for both active play and passive progress even when you're away from the game.",
            controls: "Click or tap to launch balls initially. As you earn currency from breaking bricks, spend it on upgrades in the shop menu by clicking the icons on the right side of the screen. Purchase additional balls, increase ball power, speed, and special abilities like critical hits or multi-balls. The game continues to progress even when closed, with offline earnings calculated upon return. Strategy involves balancing different types of upgrades to maximize brick breaking efficiency and currency generation."
        }
    },
    {
        id: "drift-hunters",
        title: "Drift Hunters",
        description: "Master the art of drifting in this comprehensive driving simulation! Control detailed sports cars across various tracks designed specifically for perfecting drift techniques and earning points. With realistic physics, extensive vehicle customization, and progressively challenging courses, this drift-focused driving experience offers depth and satisfaction as you fine-tune your cars and skills to achieve the perfect controlled slide through every corner. #games #drift #racing #cars #simulation #tuning #motorsport #driving #sportscar #customization",
        thumbnail: "games/Drift-Hunters-Game-lg.jpg",
        category: ["racing", "action"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://www.onlinegames.io/games/2023/unity3/drift-hunters/index.html",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-29",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Drift Hunters is a realistic drifting simulator that focuses on the art of controlled sliding through corners. Choose from a variety of iconic drift cars, customize their performance and appearance, and master different tracks while earning points for executing perfect drifts.",
            controls: "Use WASD or arrow keys to control your vehicle: W/UP accelerates, S/DOWN brakes and reverses, A/LEFT and D/RIGHT steer. SPACE activates the handbrake, which is essential for initiating drifts. Shift up gears with SHIFT and down with CTRL. Proper drift technique involves approaching corners at the right speed, using momentary handbrake pulls, countersteering during the drift, and modulating throttle to maintain the perfect angle. Earn drift points based on speed, angle, and drift duration, which can be spent on new cars and upgrades."
        }
    },
    {
        id: "hole-io",
        title: "Hole.io",
        description: "Grow your hungry hole by devouring everything in sight in this addictive multiplayer game! Control a moving black hole that consumes objects, people, and even buildings to increase in size and dominate the map. With simple controls, competitive gameplay against other players, and the satisfying progression of growing from a tiny hole to city-consuming vortex, this unique .io game delivers frantic fun as you strategically consume everything in your path to become the biggest hole. #games #io #multiplayer #battle #casual #blackhole #destruction #city #growing #strategy",
        thumbnail: "games/Hole-io-Online-lg.jpg",
        category: ["multiplayer", "casual"],
        theme: ["minimalist", "adventure"],
        gameUrl: "https://voodoo.io/hole",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-29",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Hole.io is a multiplayer game where you control a moving black hole that grows by consuming objects in a city environment. Compete against other player-controlled holes to become the largest void in a limited time period, swallowing everything from trash cans to entire buildings as you grow.",
            controls: "Use WASD or arrow keys to move your hole around the map. Your hole can only consume objects smaller than its current size. As you swallow items, your hole grows larger, allowing you to consume bigger objects and potentially other players' holes. A timer counts down the match duration, and the player with the largest hole at the end wins. Strategic play involves targeting dense areas of appropriately-sized objects, avoiding larger holes that could consume you, and planning your growth path across the city."
        }
    },
    {
        id: "burnout-city",
        title: "Burnout City",
        description: "Tear through an open urban environment in this high-octane driving experience! Push your vehicles to the limit with extreme stunts, drifts, and explosive crashes through a destructible city landscape. With a variety of cars to unlock, challenging missions, and complete freedom to explore, this adrenaline-pumping driving game delivers non-stop action and spectacular vehicular mayhem. #games #driving #racing #stunts #crashes #cars #action #arcade #openworld #city",
        thumbnail: "games/burnoutcity-lg.jpg",
        category: ["racing", "action"],
        theme: ["adventure", "urban"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/unity/burnout-city/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 94,
        dateAdded: "2024-03-30",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Burnout City is a high-octane driving game that focuses on extreme stunts, drifting, and spectacular crashes. Players can explore a fully destructible urban environment, compete in various challenges, and unlock an expanding garage of vehicles to master.",
            controls: "Use WASD or arrow keys to control your vehicle. W/UP accelerates, S/DOWN brakes and reverses, A/LEFT and D/RIGHT steer. Press SPACE to activate handbrake for drifting. SHIFT enables nitro boost for temporary speed increases. E activates crash mode, where you can cause maximum destruction for points. R resets your vehicle if you get stuck. Various stunts can be performed by launching off ramps while using different combinations of controls. Complete missions to unlock new areas of the city and additional vehicles."
        }
    },
    {
        id: "vex-3",
        title: "Vex 3",
        description: "Overcome increasingly challenging obstacles in this precision platformer! Guide your stick figure character through deadly traps, moving hazards, and precise jumps that test your timing and reflexes. With smooth controls, progressively difficult levels, and a variety of challenging environments, this demanding platformer offers a satisfying challenge that rewards persistence and mastery of movement mechanics. #games #platformer #precision #hardcore #stickman #obstacles #challenging #speedrun #difficult #puzzle",
        thumbnail: "games/VEX-3-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["minimalist", "challenging"],
        gameUrl: "https://html5.gamedistribution.com/762c932b4db74c6da0c1d101b2da8be6/?gd_sdk_referrer_url=https://www.onlinegames.io/vex-3/",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-30",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Vex 3 is a challenging platformer that tests your precision and timing. Guide your stick figure character through increasingly difficult levels filled with spikes, saw blades, moving platforms, and other deadly obstacles. The game rewards persistence and practice as you master each level's unique challenges.",
            controls: "Use WASD or arrow keys to control your character: A/LEFT and D/RIGHT move horizontally, W/UP or SPACE to jump. Double-jump is available by pressing jump again while in mid-air. Wall jumping can be performed by jumping toward a wall and then jumping again while in contact with it. Sliding is done by pressing S/DOWN while running. Timing is crucial for navigating past moving obstacles, and precise control is needed for making difficult jumps. The game features checkpoints throughout levels, allowing you to restart from these points when you fail."
        }
    },
    {
        id: "watermelon-game",
        title: "Watermelon Game",
        description: "Create giant fruit in this addictive physics-based merging puzzle! Drop fruits into a container where same-sized fruits combine into larger ones when they touch. With simple one-touch controls, satisfying combinations, and the challenging goal of creating the elusive watermelon, this casual puzzle offers surprisingly strategic gameplay as you carefully plan each drop to avoid overflowing the container. #games #puzzle #physics #casual #merging #fruit #relaxing #strategy #addictive #combination",
        thumbnail: "games/Watermelon-Game-Online-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["minimalist", "colorful"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/construct/321/watermelon-game/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 96,
        dateAdded: "2024-03-30",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Watermelon Game is a physics-based puzzle where players drop fruits into a container, merging same-sized fruits to create larger ones. Starting with small cherries, players work their way up the fruit hierarchy, with the ultimate goal of creating a watermelon. The challenge comes from managing the limited space in the container.",
            controls: "Click or tap to drop the current fruit into the container. You can move your cursor or finger left and right to position where the fruit will fall. When two fruits of the same type touch, they merge into the next larger fruit type. The progression goes: Cherry → Strawberry → Grape → Orange → Persimmon → Apple → Pear → Peach → Pineapple → Melon → Watermelon. Plan your drops carefully to avoid filling the container to the top line, which ends the game. The longer you play and the larger the fruits you create, the higher your score will be."
        }
    },
    {
        id: "snow-rider-3d",
        title: "Snow Rider 3D",
        description: "Race down endless snowy slopes in this exhilarating downhill skiing game! Maneuver through challenging terrain, perform impressive jumps and tricks, and avoid obstacles at high speeds. With multiple characters to unlock, stunning 3D winter environments, and increasingly difficult runs, this thrilling winter sports experience delivers fast-paced excitement and the rush of extreme skiing from the comfort of your device. #games #skiing #winter #racing #sports #3d #downhill #snowboard #extreme #tricks",
        thumbnail: "games/Snow-Rider-3D-lg.jpg",
        category: ["racing", "action"],
        theme: ["winter", "adventure"],
        gameUrl: "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/?gd_sdk_referrer_url=https://www.onlinegames.io/snow-rider-3d",
        isFeatured: false,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-30",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Snow Rider 3D puts you on the slopes of stunning winter mountains for an intense downhill skiing experience. Race down procedurally generated courses with increasing difficulty, perform tricks off jumps, and navigate through forests, caves, and other challenging terrain.",
            controls: "Use A/LEFT and D/RIGHT arrow keys to steer your character down the slopes. Press SPACE to jump when approaching ramps or obstacles. While in the air, press various combinations of arrow keys to perform tricks that earn extra points. Hold S/DOWN to crouch and increase speed. The longer you survive without crashing, the faster you'll go and the more challenging the course becomes. Collect coins along the way to unlock new characters and equipment with different attributes for speed, handling, and trick ability."
        }
    },
    {
        id: "henry-stickmin-stealing-the-diamond",
        title: "Henry Stickmin: Stealing the Diamond",
        description: "Experience hilarious stick figure heist adventures in this interactive comedy game! Help Henry Stickmin attempt to steal a valuable diamond through a series of choice-based scenarios with multiple outcomes. With dozens of fail states, cultural references, and genuinely funny moments, this choose-your-own-adventure style game delivers laugh-out-loud entertainment as you discover the many ways Henry's heist can go spectacularly wrong (or occasionally right). #games #stickman #comedy #adventure #choices #henry #heist #interactive #funny #animation",
        thumbnail: "games/Henry-Stikmin-Stealing-the-Diamond-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["cartoon", "comedy"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/flash/stealing-the-diamond/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-30",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Henry Stickmin: Stealing the Diamond is an interactive comedy adventure where you guide the stick figure protagonist through a diamond heist. The game presents you with choices at key moments, leading to different paths and outcomes, many of which result in hilarious failure scenarios.",
            controls: "Use your mouse to click on your chosen options when presented with multiple choices. Each decision branches the story in different directions, with some leading to success and many others leading to amusing failure animations. There are three main approaches to the heist: Sneaky, Aggressive, and Epic, each with their own set of challenges and potential outcomes. The game features multiple endings depending on your choices throughout the adventure, encouraging replay to discover all the possible scenarios and references."
        }
    },
    {
        id: "henry-stickmin-infiltrating-the-airship",
        title: "Henry Stickmin: Infiltrating the Airship",
        description: "Join Henry Stickmin on his most ambitious heist yet as he attempts to infiltrate a high-security airship! Make critical decisions at key moments, choosing from multiple hilarious options that lead to dozens of unique outcomes. With branching storylines, clever references, and the series' signature slapstick humor, this interactive adventure delivers endless entertainment as you discover all the chaotic ways Henry's airship infiltration can unfold. #games #stickman #comedy #adventure #choices #henry #heist #interactive #funny #animation",
        thumbnail: "games/Henry-Stikmin-Infiltrating-the-Airship-lg.jpg",
        category: ["action", "puzzle"],
        theme: ["cartoon", "comedy"],
        gameUrl: "https://cloud.onlinegames.io/games/2025/flash/infiltrating-the-airship/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 94,
        dateAdded: "2024-03-31",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Henry Stickmin: Infiltrating the Airship is part of the popular stick figure adventure series where you guide Henry through another outlandish heist. This time, Henry targets an airborne criminal headquarters, with multiple paths to infiltrate and numerous possible outcomes based on your choices.",
            controls: "Use your mouse to click on the options presented at key decision points throughout the game. Each choice branches the story in different directions, with some leading to success and many others resulting in comical failure sequences. The game features four main infiltration methods to begin with, each leading to different storylines and challenges. There are multiple achievements and endings to discover, encouraging multiple playthroughs to see all the content and references hidden throughout the game."
        }
    },
    {
        id: "squad-shooter",
        title: "Squad Shooter",
        description: "Command a tactical squad in intense firefights against enemy forces! Position your team members strategically, utilize their unique abilities, and coordinate attacks to overcome increasingly challenging opposition. With squad-based combat mechanics, weapon upgrades, and mission variety across urban environments, this team-focused shooter delivers satisfying tactical gameplay that rewards planning, positioning, and coordinated execution. #games #shooter #tactical #squad #team #military #strategy #combat #fps #mission",
        thumbnail: "games/Squad-Shooter-lg.jpg",
        category: ["shooting", "action"],
        theme: ["military", "urban"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/unity2/squad-shooter/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-03-31",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Squad Shooter is a tactical team-based shooter where you command a small unit of specialized soldiers through urban combat scenarios. Each mission requires careful planning, strategic positioning, and coordinated attacks to overcome enemy forces who are often better equipped or positioned.",
            controls: "Use WASD or arrow keys to move your active character. Left mouse button fires your weapon, right mouse button aims down sights for more accurate shooting. Press 1-4 number keys to select different squad members, each with unique abilities activated with the E key. SPACE makes characters take cover behind nearby objects. TAB opens the tactical map where you can issue commands to your squad members by selecting them and right-clicking on locations. R reloads your weapon, and C toggles between crouching and standing. Effective use of cover, flanking maneuvers, and proper utilization of each team member's special abilities are crucial for success."
        }
    },
    {
        id: "block-blast",
        title: "Block Blast",
        description: "Match colorful blocks in this addictive puzzle game with explosive chain reactions! Arrange falling blocks to create matches of three or more same-colored pieces that disappear in satisfying bursts. With special power-up blocks, challenging game modes, and increasingly difficult levels, this vibrant matching puzzle delivers endless entertainment as you strategize to create massive cascading combos for maximum points and progression. #games #puzzle #match3 #blocks #colorful #chain #reactions #casual #combos #tetris",
        thumbnail: "games/block-blast-lg.jpg",
        category: ["puzzle", "casual"],
        theme: ["colorful", "minimalist"],
        gameUrl: "https://cloud.onlinegames.io/games/2024/unity3/block-blast/index-og.html",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-03-31",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Block Blast is a colorful match-three puzzle game where blocks fall from the top of the screen and must be arranged to create matches of three or more same-colored blocks. When matches are made, the blocks disappear in a satisfying explosion, and any blocks above them fall down, potentially creating chain reactions of matches.",
            controls: "Use A/LEFT and D/RIGHT arrow keys to move the falling blocks horizontally. Press S/DOWN to make blocks fall faster. W/UP rotates blocks when playing with shaped pieces. Special power-up blocks are created when making matches of four or more blocks: a match of four creates a bomb block that clears surrounding blocks when matched, five in a row creates a lightning block that clears an entire row, and five in an L-shape creates a rainbow block that clears all blocks of the same color. The game features multiple modes including Classic (play until the screen fills up), Timed (score as many points as possible in a limited time), and Challenge (complete specific objectives)."
        }
    },
    {
        id: "run-3d",
        title: "Run 3D",
        description: "Sprint through endless futuristic tunnels in this fast-paced endless runner! Navigate rotating passages, leap over gaps, and slide under obstacles while collecting coins at breakneck speeds. With stunning 3D visuals, increasing difficulty, and character upgrades, this addictive running game delivers exhilarating gameplay that tests your reflexes and timing as you strive to beat your distance record through mind-bending gravity-shifting tunnels. #games #runner #endless #3d #parkour #obstacle #tunnel #futuristic #reflex #speed",
        thumbnail: "games/run-3d-online-lg.jpg",
        category: ["action", "casual"],
        theme: ["sci-fi", "minimalist"],
        gameUrl: "https://html5.gamedistribution.com/e103db40071a4af38aab2061bf799455/?gd_sdk_referrer_url=https://www.onlinegames.io/run-3d/",
        isFeatured: false,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-31",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Run 3D is an endless runner where you navigate through rotating 3D tunnels that twist and turn in zero gravity. Run across walls, ceilings, and floors as you avoid gaps and obstacles in a surreal space environment that constantly shifts and changes direction.",
            controls: "Use A/LEFT and D/RIGHT arrow keys to move sideways. Press SPACE or W/UP to jump over gaps and obstacles. S/DOWN makes your character slide under obstacles. The game features gravity-defying mechanics where you can run on any surface of the tunnel, including walls and ceilings. Collect coins during your run to unlock new characters with different abilities and attributes. The difficulty increases the further you progress, with more complex tunnel configurations, faster speeds, and more challenging obstacle patterns. Focus on learning the rhythm of movements required for different tunnel sections to maximize your distance."
        }
    },
    {
        id: "run-away-3",
        title: "Run Away 3",
        description: "Escape from dangerous pursuits in this thrilling running adventure sequel! Dash through diverse environments, dodging obstacles, collecting power-ups, and outrunning relentless pursuers. With multiple characters to unlock, challenging mission-based progression, and increasingly difficult chase sequences, this action-packed runner delivers heart-pounding excitement as you strategically navigate hazards while fleeing from dangers that are always just steps behind you. #games #runner #chase #escape #obstacle #parkour #action #adventure #mission #pursuit",
        thumbnail: "games/Run-Away-3-lg.jpg",
        category: ["action", "racing"],
        theme: ["adventure", "urban"],
        gameUrl: "https://html5.gamedistribution.com/72b93213518244a5b9160348a91ec194/?gd_sdk_referrer_url=https://www.onlinegames.io/run-away-3/",
        isFeatured: false,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-03-31",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        gameInfo: {
            introduction: "Run Away 3 is the third installment in this popular escape series where you must run from pursuers through challenging obstacle courses. The game features story-driven missions across various environments, with your character constantly fleeing from different threats while navigating complex terrain.",
            controls: "Use A/LEFT and D/RIGHT arrow keys to move between three lanes. Press SPACE or W/UP to jump over obstacles. S/DOWN makes your character slide under barriers or duck low-hanging obstacles. Double tap LEFT or RIGHT to perform a quick dodge in that direction. Collect coins during your escape to unlock new characters and power-ups. Special power-ups include shields (protects from one hit), magnets (attracts coins), boosters (temporary speed increase), and time-slowdown (makes avoiding obstacles easier). Each level features unique challenges and environments, with bosses or special pursuers at key points that require specific strategies to escape from."
        }
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