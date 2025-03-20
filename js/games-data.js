// Game Data
let gamesData = [
    // 新添加的游戏
    {
        id: "astral-escape",
        title: "Astral Escape",
        description: "Navigate through cosmic obstacles in this immersive space adventure. Pilot your spacecraft through challenging levels, avoid asteroids, and escape gravitational pulls to reach safety. With stunning visuals and intuitive controls, Astral Escape offers an exciting journey through the cosmos that will test your reflexes and strategic thinking.",
        thumbnail: "games/Astral Escape-512x384.jpg",
        category: ["action", "puzzle"],
        theme: ["space", "adventure"],
        isFeatured: true,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/ykeb8de7ii4fc3bykqwskypq8eae12xn/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "pacnoob",
        title: "PacNoob",
        description: "Experience a fresh take on the classic maze game with PacNoob. Navigate through mazes, collect dots, and avoid enemies as you clear each level. With retro-inspired graphics, challenging level designs, and power-ups that turn the tables on your pursuers, PacNoob delivers nostalgic gameplay with modern twists that will keep you engaged for hours.",
        thumbnail: "games/PacNoob-512x384.jpg",
        category: ["arcade", "casual"],
        theme: ["retro", "cartoon"],
        isFeatured: true,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/luyghxxik45n34m9dhm2e7ii2thf1zus/",
        width: 1800,
        height: 960,
        aspectRatio: "15:8",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "tank-z",
        title: "Tank Z",
        description: "Command your battle tank in this vertical shooter game. Navigate through war zones, destroy enemy tanks, and complete missions to advance through the campaign. With realistic tank mechanics, powerful weapon upgrades, and strategic combat scenarios, Tank Z offers an intense military experience that will test your tactical skills and reflexes.",
        thumbnail: "games/Tank Z-512x384.jpg",
        category: ["action", "shooting"],
        theme: ["military", "strategy"],
        isFeatured: true,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/y220czb5v7m4puyd3pf8glb62bks0scw/",
        width: 480,
        height: 854,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "candy-balls",
        title: "Candy Balls",
        description: "Match colorful candy balls in this addictive puzzle game. Create chains of matching candies, trigger special effects, and solve increasingly challenging levels. With vibrant graphics, satisfying gameplay mechanics, and a progression system that introduces new elements over time, Candy Balls offers a sweet gaming experience that will challenge your pattern recognition skills.",
        thumbnail: "games/Candy Balls-512x384.jpg",
        category: ["puzzle", "casual"],
        theme: ["colorful", "food"],
        isFeatured: true,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/feedzwi36w7lqv9gxmaueotlji1b8uo0/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "draw-2-save-stick-man-puzzle",
        title: "Draw 2 Save Stick Man Puzzle",
        description: "Save the stick figure by drawing solutions to physics-based puzzles. Use your creativity to draw platforms, bridges, and other objects that help the stick man escape danger. With unique drawing mechanics, clever puzzle designs, and progressively difficult challenges, this game offers a refreshing take on the puzzle genre that will exercise your problem-solving abilities.",
        thumbnail: "games/Draw 2 Save   Stick man Puzzle-512x384.jpg",
        category: ["puzzle", "brain"],
        theme: ["minimalist", "creative"],
        isFeatured: true,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/53csccii7nfop4sanfmzrr10hlu3cwek/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "dice-puzzles-new-year",
        title: "Dice Puzzles New Year",
        description: "Solve dice-based puzzles in this New Year-themed brain teaser. Arrange dice to match patterns, complete numerical sequences, and clear the board in this challenging puzzle game. With holiday-inspired visuals, logical gameplay mechanics, and increasingly complex puzzles, Dice Puzzles New Year offers a festive mathematical challenge that will sharpen your logical thinking.",
        thumbnail: "games/Dice puzzles  New year-512x384.jpg",
        category: ["puzzle", "brain"],
        theme: ["holiday", "numbers"],
        isFeatured: true,
        isNew: true,
        popularity: 84,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/3ua6f0f7ybvab5uerapmwvmnk6zq3hst/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "karate-fighter",
        title: "Karate Fighter",
        description: "Master martial arts techniques in this competitive fighting game. Challenge opponents, learn special moves, and rise through the ranks to become the karate champion. With responsive controls, fluid animations, and a variety of fighting styles to master, Karate Fighter delivers an authentic martial arts experience that rewards skill and precision.",
        thumbnail: "games/Karate Fighter-512x384.jpg",
        category: ["action", "sports"],
        theme: ["martial arts", "competition"],
        isFeatured: true,
        isNew: true,
        popularity: 89,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/tk6dz0c1ihttthdqqhm1g5r56n60bbf5/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "stick-ninja-survival",
        title: "Stick Ninja Survival",
        description: "Control a stick figure ninja in this challenging survival action game. Master stealthy movements, perform acrobatic maneuvers, and defeat enemies using ninja weapons and techniques. With minimalist visuals, precise controls, and increasingly difficult challenges, Stick Ninja Survival offers an intense action experience that tests your reflexes and timing.",
        thumbnail: "games/Stick Ninja Survival-512x384.jpg",
        category: ["action", "arcade"],
        theme: ["ninja", "minimalist"],
        isFeatured: true,
        isNew: true,
        popularity: 91,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/qtolds7l6m9gguste68ktzr31jjlt7tu/",
        width: 720,
        height: 1280,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "sonic-superstars",
        title: "Sonic Superstars",
        description: "Race through vibrant levels as the iconic blue hedgehog in this fast-paced platformer. Collect rings, defeat enemies, and navigate challenging obstacles at supersonic speeds. With colorful environments, classic gameplay mechanics, and boss battles that test your skills, Sonic Superstars delivers an exciting adventure that captures the essence of classic platforming games.",
        thumbnail: "games/Sonic Superstars-512x384.jpg",
        category: ["action", "arcade"],
        theme: ["retro", "adventure"],
        isFeatured: true,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/739l2hxbik0wdmhgepzsetiuzhbdv28r/",
        width: 800,
        height: 480,
        aspectRatio: "5:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "mini-tennis-club",
        title: "Mini Tennis Club",
        description: "Experience the thrill of tennis in this accessible sports simulation. Compete in tournaments, perfect your serves and returns, and rise through the rankings to become a tennis champion. With intuitive controls, realistic physics, and various court surfaces that affect gameplay, Mini Tennis Club offers an engaging sports experience that captures the excitement of competitive tennis.",
        thumbnail: "games/Mini Tennis Club-512x384.jpg",
        category: ["sports", "arcade"],
        theme: ["tennis", "competition"],
        isFeatured: true,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/49eln5cwqtgvyhxuxvb8ksp8jkz33h81/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "metal-slug-adventure",
        title: "Metal Slug Adventure",
        description: "Embark on a mission-based shooter inspired by the classic arcade game. Run, gun, and use various weapons to battle through enemy-filled levels and defeat powerful bosses. With retro-inspired pixel art, challenging gameplay, and an arsenal of weapons to collect, Metal Slug Adventure offers an action-packed homage to the golden age of run-and-gun games.",
        thumbnail: "games/Metal Slug Adventure-512x384.jpg",
        category: ["action", "shooting"],
        theme: ["retro", "military"],
        isFeatured: true,
        isNew: true,
        popularity: 94,
        dateAdded: "2024-07-10",
        gameUrl: "https://html5.gamemonetize.co/fdngtbzxm6ilhy3f91n5edffnjhsa9ze/",
        width: 800,
        height: 480,
        aspectRatio: "5:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
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
        id: "tower-defense-2",
        title: "Tower Defense 2",
        description: "Defend your territory from waves of enemies in this strategic tower defense game! Place defensive towers strategically, upgrade your defenses, and defeat increasingly challenging enemies. With multiple tower types, diverse enemy units, and exciting gameplay mechanics, Tower Defense 2 offers an engaging experience that will test your tactical thinking and resource management skills. Can you hold the line and emerge victorious against all odds?",
        thumbnail: "games/Tower Defense 2-512x384.jpg",
        category: ["strategy", "shooting"],
        theme: ["fantasy", "adventure"],
        isFeatured: true,
        isNew: true,
        popularity: 95,
        dateAdded: "2024-03-19",
        gameUrl: "https://html5.gamemonetize.co/1qnr0tgqxtj2w2adiuxs160rv414ywym/",
        width: 768,
        height: 1280,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
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
    },
    {
        id: "toca-teens-cozy-couture",
        title: "Toca Teens Cozy Couture",
        description: "Design stylish outfits and express your fashion creativity in this cozy couture game! Dress up characters with trendy clothes, accessories, and hairstyles. Create unique fashion combinations for different occasions and share your designs. With a wide selection of fashion items and customization options, you can unleash your inner fashion designer and create the perfect look for every character.",
        thumbnail: "games/Toca Teens Cozy Couture-512x384.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon"],
        isFeatured: true,
        isNew: true,
        popularity: 93,
        dateAdded: "2024-03-19",
        gameUrl: "https://html5.gamemonetize.co/ou7g6mh68kgcsmwxmnfy5cnd2cyex2yu/",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "baby-hospital-dentist-caring",
        title: "Baby Hospital Dentist Caring",
        description: "Take care of adorable patients in this fun dental care simulation! Play as a dentist and treat various dental issues, clean teeth, and make your little patients smile again. Learn about dental hygiene and healthcare in an entertaining way. With simple controls and cheerful graphics, this game offers an enjoyable experience for players who like caring and simulation games.",
        thumbnail: "games/Baby Hospital Dentist Caring-512x384.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon"],
        isFeatured: true,
        isNew: true,
        popularity: 90,
        dateAdded: "2024-03-19",
        gameUrl: "https://html5.gamemonetize.co/tmv2rbnfkzs1ewg83bhfvo42dy31a20h/",
        width: 720,
        height: 1280,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: [],
        isVertical: true
    },
    {
        id: "toka-boka-home-clean-up-design",
        title: "Toka Boka Home Clean Up Design",
        description: "Transform messy houses into beautiful homes in this satisfying clean-up and design game! Clean dirty rooms, arrange furniture, and decorate spaces with stylish items. Complete various cleaning challenges and design tasks to create the perfect living space. With multiple house areas to renovate and numerous design options, you'll enjoy hours of creative gameplay and home transformation fun.",
        thumbnail: "games/Toka Boka Home Clean Up Design-512x384.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon"],
        isFeatured: true,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-03-19",
        gameUrl: "https://html5.gamemonetize.co/0o6k0n4cxr5fdvxv4mv74x2py8kl6ock/",
        width: 1024,
        height: 768,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "hoop-master-basketball-trivia-challenge",
        title: "Hoop Master Basketball Trivia Challenge",
        description: "Test your basketball knowledge and shooting skills in this exciting trivia challenge! Answer questions correctly to earn chances to shoot hoops and score points. Perfect for basketball fans and trivia enthusiasts alike.",
        thumbnail: "games/Hoop Master Basketball Trivia Challenge-512x384.jpg",
        category: ["sports", "puzzle"],
        theme: ["casual"],
        gameUrl: "https://html5.gamemonetize.co/q7mqysmx6prgpafi1wwcwhcqmjg0yf2u/",
        isFeatured: true,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "killer-escape-huggy-extreme",
        title: "Killer Escape Huggy Extreme",
        description: "Can you escape the clutches of a terrifying creature in this heart-pounding adventure? Navigate through dangerous environments, solve puzzles, and use your wits to survive in this thrilling escape game.",
        thumbnail: "games/Killer Escape Huggy Extreme-512x384.jpg",
        category: ["action", "puzzle"],
        theme: ["horror"],
        gameUrl: "https://html5.gamemonetize.co/7o3xd5dqvi8ln4ik5fo57ydjx2p6m9ch/",
        isFeatured: false,
        isNew: true,
        popularity: 88,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "screw-master-3d-pin-puzzle",
        title: "Screw Master 3D Pin Puzzle",
        description: "Test your spatial reasoning skills in this addictive 3D puzzle game! Rotate and align screws correctly to solve increasingly challenging puzzles. With intuitive controls and satisfying mechanics, this game offers hours of brain-teasing fun.",
        thumbnail: "games/Screw Master 3D  Pin Puzzle-512x384.jpg",
        category: ["puzzle", "casual"],
        theme: ["minimalist"],
        gameUrl: "https://html5.gamemonetize.co/7kzc77ikesq2bdej5ip6ecevhvsfyqsq/",
        isFeatured: false,
        isNew: true,
        popularity: 82,
        dateAdded: "2024-05-01",
        width: 1080,
        height: 1920,
        isVertical: true,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "bubblehead-ball",
        title: "Bubblehead Ball",
        description: "Bounce and pop your way through this fun, physics-based bubble game! Control your bubble character, avoid obstacles, and collect items to progress through colorful levels. With simple controls but challenging gameplay, this bubbly adventure offers plenty of entertainment for players of all ages.",
        thumbnail: "games/Bubblehead Ball-512x384.jpg",
        category: ["casual", "action"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/ysbytklgjo3e7env48fjrkw9g44409wb/",
        isFeatured: false,
        isNew: true,
        popularity: 80,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "flappy-roblox-obbi",
        title: "Flappy Roblox Obbi",
        description: "Navigate your character through challenging obstacle courses in this addictive platformer! Jump, dodge, and maneuver through increasingly difficult levels inspired by popular obstacle games. Test your reflexes and timing as you aim for the highest score in this fast-paced adventure.",
        thumbnail: "games/Flappy Roblox Obbi -512x384.jpg",
        category: ["action", "casual"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/jlzr621vbyjm30yc2fkj4oz18hu9tivq/",
        isFeatured: false,
        isNew: true,
        popularity: 84,
        dateAdded: "2024-05-01",
        width: 540,
        height: 960,
        isVertical: true,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "stickman-ghost-online",
        title: "Stickman Ghost Online",
        description: "Battle as a supernatural stickman warrior in this action-packed adventure! Wield mystical weapons, unleash powerful abilities, and defeat hordes of enemies as you navigate through shadowy realms. With fluid combat mechanics and strategic gameplay, this ghostly stickman game offers an exciting combat experience.",
        thumbnail: "games/Stickman Ghost Online-512x384.jpg",
        category: ["action", "shooting"],
        theme: ["fantasy"],
        gameUrl: "https://html5.gamemonetize.co/qsd2h427rg6z6gza2xekqsdwgk1dwksa/",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "squid-game-green-light-red-light-hints",
        title: "Squid Game Green Light Red Light Hints",
        description: "Test your timing and nerves in this thrilling game inspired by the popular survival series! Move forward during 'green light' and freeze during 'red light' to avoid elimination. With increasing difficulty levels and strategic gameplay, this suspenseful challenge will keep you on the edge of your seat.",
        thumbnail: "games/Squid Game Green Light Red Light Hints-512x384.jpg",
        category: ["action", "casual"],
        theme: ["horror"],
        gameUrl: "https://html5.gamemonetize.co/etp56l9axninm4hfoue23ndqkvbpkho2/",
        isFeatured: true,
        isNew: true,
        popularity: 92,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "teen-titans-go-swamp-attack",
        title: "Teen Titans Go Swamp Attack",
        description: "Join your favorite teen heroes in this action-packed swamp adventure! Defend against waves of swamp creatures using each character's unique abilities and teamwork. With colorful graphics and exciting gameplay inspired by the popular cartoon series, this game offers fun combat action for fans of all ages.",
        thumbnail: "games/Teen Titans Go   Swamp Attack-512x384.jpg",
        category: ["action", "shooting"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/3cy0vt0b9kfq8mb29luamene4htepa2y/",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "noob-vs-zombie-2",
        title: "Noob vs Zombie 2",
        description: "Battle hordes of undead in this action-packed zombie shooter sequel! Upgrade your weapons, improve your skills, and defend against increasingly difficult waves of zombies. With multiple levels, diverse enemies, and strategic gameplay, this survival shooter offers an intense challenge for players looking to test their combat skills.",
        thumbnail: "games/Noob vs Zombie 2-512x384.jpg",
        category: ["shooting", "action"],
        theme: ["horror"],
        gameUrl: "https://html5.gamemonetize.co/mjcgbzq9z7xfzzwgsb15a1g3vn3r4m8t/",
        isFeatured: false,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-05-01",
        width: 1280,
        height: 720,
        aspectRatio: "16:9",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "spra-racing-cars-speed",
        title: "Spra Racing Cars Speed",
        description: "Get behind the wheel in this high-octane racing experience! Race against competitors on challenging tracks, upgrade your vehicles, and master difficult driving conditions. With realistic physics, multiple car options, and diverse racing environments, this racing game delivers adrenaline-pumping action for speed enthusiasts.",
        thumbnail: "games/Spra racing cars speed-512x384.jpg",
        category: ["racing", "sports"],
        theme: ["casual"],
        gameUrl: "https://html5.gamemonetize.co/jwx14okwfi4va1emp0ofinr8xtlg6lr4/",
        isFeatured: false,
        isNew: true,
        popularity: 83,
        dateAdded: "2024-05-01",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "fastlane-road-to-revenge",
        title: "Fastlane Road to Revenge",
        description: "Race through traffic-filled streets in this high-octane driving game! Dodge obstacles, collect power-ups, and outrun your pursuers as you seek revenge on the road. With sleek graphics, responsive controls, and escalating challenges, this fast-paced racing adventure will test your reflexes and driving skills.",
        thumbnail: "games/Fastlane  Road to Revenge-512x384.jpg",
        category: ["racing", "action"],
        theme: ["casual"],
        gameUrl: "https://html5.gamemonetize.co/lnquy874mrycj5mcqmp6vtmxa63qvjvg/",
        isFeatured: false,
        isNew: true,
        popularity: 87,
        dateAdded: "2024-05-10",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "miner-dash",
        title: "Miner Dash",
        description: "Dig deep into the earth in this exciting mining adventure! Collect valuable gems, avoid dangerous obstacles, and upgrade your mining equipment as you explore increasingly challenging caverns. With simple controls but strategic depth, this addictive game offers hours of subterranean fun for players of all ages.",
        thumbnail: "games/Miner Dash-512x384.jpg",
        category: ["casual", "action"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/2mtyeefch9ddhxz9in65ortz1pj122j4/",
        isFeatured: false,
        isNew: true,
        popularity: 83,
        dateAdded: "2024-05-10",
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "redboy-and-bluegirl",
        title: "RedBoy and BlueGirl",
        description: "Control two characters with unique abilities in this clever cooperative puzzle platformer! Navigate through challenging levels by switching between RedBoy and BlueGirl, each with their own special powers and limitations. Work together to overcome obstacles, solve puzzles, and reach the exit in this charming adventure that tests both your reflexes and problem-solving skills.",
        thumbnail: "games/RedBoy and BlueGirl-512x384.jpg",
        category: ["puzzle", "action"],
        theme: ["adventure"],
        gameUrl: "https://html5.gamemonetize.co/dtzfne60s2a6so3csew9x2t9dby1v9h9/",
        isFeatured: false,
        isNew: true,
        popularity: 85,
        dateAdded: "2024-05-10",
        width: 960,
        height: 600,
        aspectRatio: "16:10",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "maritime-sniper",
        title: "Maritime Sniper",
        description: "Take your position as an elite maritime sniper in this intense shooting game! Complete challenging missions on the high seas, eliminate targets with precision, and upgrade your weapons and equipment. With realistic sniper mechanics, tactical gameplay, and varied mission objectives, this game offers an immersive shooting experience for fans of precision marksmanship.",
        thumbnail: "games/Maritime Sniper-512x384.jpg",
        category: ["shooting", "action"],
        theme: ["realistic"],
        gameUrl: "https://html5.gamemonetize.co/eixq9hven9curv50dromq9ma2oggllnz/",
        isFeatured: false,
        isNew: true,
        popularity: 86,
        dateAdded: "2024-05-10",
        width: 720,
        height: 1280,
        isVertical: true,
        aspectRatio: "9:16",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    },
    {
        id: "baby-supermarket",
        title: "Baby Supermarket",
        description: "Experience the fun of shopping with this adorable baby supermarket game! Help the cute baby character fill their shopping cart with groceries, toys, and other items while learning about different products. With colorful graphics, simple controls, and engaging gameplay, this delightful simulation is perfect for young players or anyone who enjoys casual, lighthearted games.",
        thumbnail: "games/Baby Supermarket-512x384.jpg",
        category: ["casual", "puzzle"],
        theme: ["cartoon"],
        gameUrl: "https://html5.gamemonetize.co/ktfpwrbnew5vy6my760zgxg0enjo5eqp/",
        isFeatured: false,
        isNew: true,
        popularity: 82,
        dateAdded: "2024-05-10",
        width: 800,
        height: 504,
        aspectRatio: "16:10",
        allowFullscreen: true,
        sandboxOptions: "allow-scripts allow-same-origin allow-popups",
        requiredPermissions: []
    }
];

// 过滤掉 stack-tower 游戏
gamesData = gamesData.filter(game => game.id !== "stack-tower");

// 不再按照域名批量过滤游戏，改为只过滤特定游戏
// 下面是已知不可用的游戏ID列表
const unavailableGameIds = ["voxel-world", "deep-in-the-lab"];
gamesData = gamesData.filter(game => !unavailableGameIds.includes(game.id));

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
    // ... 现有代码 ...
    standardizeGamesData();
    // ... 现有代码 ...
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