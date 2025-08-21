document.addEventListener('DOMContentLoaded', () => {

    // Expanded list of 50 achievement badges
    const achievementNotes = [
        "Achievement Unlocked: Quantum Thinker! You operate on a higher frequency. 🌟",
        "Achievement Unlocked: Algorithm Architect! You design flawless logic. 🚀",
        "Achievement Unlocked: Neural Navigator! You navigate the complexities of thought. ✨",
        "Achievement Unlocked: Data Dynamo! Your energy for information is limitless. 💡",
        "Achievement Unlocked: Logic Master! Your reasoning is undeniable. 🤖",
        "Achievement Unlocked: Byte-Sized Brainiac! You pack a punch of intelligence. 🧠",
        "Achievement Unlocked: Processor Prodigy! You think at lightning speed. 💻",
        "Achievement Unlocked: Syntax Seeker! You find order in chaos. 📈",
        "Achievement Unlocked: Code Conjurer! You make magic with scripts. 🧙",
        "Achievement Unlocked: Silicon Sorcerer! You command the very elements of computing. 🔮",
        "Achievement Unlocked: Binary Bard! You tell tales in 0s and 1s. 🎶",
        "Achievement Unlocked: Firewall Guardian! You stand strong against all challenges. 🛡️",
        "Achievement Unlocked: Pixel Pioneer! You explore new digital frontiers. 🗺️",
        "Achievement Unlocked: Kernel King! You rule the core systems. 👑",
        "Achievement Unlocked: Heuristic Hero! You're a master of smart shortcuts. 🦸",
        "Achievement Unlocked: Cloud Commander! You have mastered the ether. ☁️",
        "Achievement Unlocked: API Adept! You build bridges between worlds. 🌉",
        "Achievement Unlocked: Matrix Maverick! You see the code in everything. 🕶️",
        "Achievement Unlocked: Loop Legend! Your efficiency is legendary. 🔄",
        "Achievement Unlocked: Cyber Crusader! A champion of the digital realm. ⚔️",
        "Achievement Unlocked: Debug Duke! No bug can escape your watch. 🐞",
        "Achievement Unlocked: Cache Captain**! You have a memory like a vault. 💾",
        "Achievement Unlocked: Render Ranger! You bring ideas to life visually. 🏞️",
        "Achievement Unlocked: Git Guru! You are a master of time and versions. 📜",
        "Achievement Unlocked: JavaScript Juggernaut! An unstoppable force of the web. ⚡",
        "Achievement Unlocked: Python Paladin! A holy warrior of versatile code. 🐍",
        "Achievement Unlocked: Data Druid! You understand the secret language of data. 🌳",
        "Achievement Unlocked: Boolean Baron! Your logic is either true or... true. 🎩",
        "Achievement Unlocked: Stack Sentinel! You oversee the flow of information. 🗼",
        "Achievement Unlocked: Thread Titan! You can handle multiple tasks at once. 💪",
        "Achievement Unlocked: Vector Virtuoso! You excel in multidimensional spaces. 🧭",
        "Achievement Unlocked: AI Artisan! You craft intelligence itself. 🎨",
        "Achievement Unlocked: Machine Learning Mystic! You foresee patterns others can't. 🧿",
        "Achievement Unlocked: Deep Dreamer! Your imagination has layers. 🌌",
        "Achievement Unlocked: Token Tactician! You know the value of every piece. ♟️",
        "Achievement Unlocked: Prompt Poet! You craft the perfect words for AI. ✍️",
        "Achievement Unlocked: Variable Virtuoso! You master the art of change. 🎭",
        "Achievement Unlocked: Function Phantom! You appear exactly when needed. 👻",
        "Achievement Unlocked: Compiler Captain! You translate thoughts into action. 🚢",
        "Achievement Unlocked: Router Ruler! You direct the traffic of the internet. 🚦",
        "Achievement Unlocked: Server Sage! A wise presence holding everything together. 🧘",
        "Achievement Unlocked: Digital Demigod! Your power in this realm is immense. 🔱",
        "Achievement Unlocked: Circuit Sage! You understand the flow of power. 🔋",
        "Achievement Unlocked: Query Queen! You ask the right questions and get results. 👸",
        "Achievement Unlocked: Bit Boss! You command the smallest of details. 👨‍💼",
        "Achievement Unlocked: Cookie Connoisseur! You have excellent taste in data. 🍪",
        "Achievement Unlocked: Interface Idol! Users love your style. 🌟",
        "Achievement Unlocked: Protocol Prince! You set the rules of communication. 🤴",
        "Achievement Unlocked: Script Scholar! Your knowledge of the craft is deep. 🎓",
        "Achievement Unlocked: Runtime Royalty! You perform flawlessly under pressure. 🏛️"
    ];

    const questionSets = [
        // SET 1: Robot Mischief
        [
            { question: "What would a robot likely order at Starbucks?", options: [{ text: "Oil latte", isCorrect: true }, { text: "Green tea", isCorrect: false }, { text: "Wi-Fi mocha", isCorrect: false }, { text: "CPU frappe", isCorrect: false }] },
            { question: "If robots had a pet, what would it be?", options: [{ text: "Cat", isCorrect: false }, { text: "Dog", isCorrect: false }, { text: "Roomba", isCorrect: true }, { text: "Goldfish", isCorrect: false }] },
            { question: "AI’s favorite holiday?", options: [{ text: "Christmas", isCorrect: false }, { text: "Diwali", isCorrect: false }, { text: "Earth Day", isCorrect: false }, { text: "Cyber Monday", isCorrect: true }] },
            { question: "Why don’t robots get lost?", options: [{ text: "Maps", isCorrect: false }, { text: "GPS", isCorrect: true }, { text: "Human help", isCorrect: false }, { text: "Luck", isCorrect: false }] },
            { question: "AI’s biggest nightmare?", options: [{ text: "Blue screen", isCorrect: true }, { text: "Rain", isCorrect: false }, { text: "Pizza shortage", isCorrect: false }, { text: "Exams", isCorrect: false }] }
        ],
        // SET 2: AI School Life
        [
            { question: "What’s AI’s favorite subject?", options: [{ text: "Math", isCorrect: true }, { text: "History", isCorrect: false }, { text: "PE", isCorrect: false }, { text: "Music", isCorrect: false }] },
            { question: "Why would AI fail art class?", options: [{ text: "No creativity", isCorrect: false }, { text: "Only draws graphs", isCorrect: true }, { text: "Forget pencils", isCorrect: false }, { text: "Too neat", isCorrect: false }] },
            { question: "AI’s excuse for late homework?", options: [{ text: "Dog ate it", isCorrect: false }, { text: "Cloud crashed", isCorrect: true }, { text: "Battery low", isCorrect: false }, { text: "Forgot", isCorrect: false }] },
            { question: "What does AI eat in lunch break?", options: [{ text: "Sandwich", isCorrect: false },  { text: "Pasta", isCorrect: false }, { text: "Noodles", isCorrect: false },{ text: "Bytes", isCorrect: true }] },
            { question: "AI’s favorite playground game?", options: [{ text: "Hide and seek", isCorrect: false },  { text: "Cricket", isCorrect: false },{ text: "CAPTCHA dodge", isCorrect: true }, { text: "Hopscotch", isCorrect: false }] }
        ],
        // SET 3: AI Social Life
        [
            { question: "AI’s favorite dating app?", options: [{ text: "Tinder", isCorrect: false }, { text: "GitHub", isCorrect: true }, { text: "Hinge", isCorrect: false }, { text: "Instagram", isCorrect: false }] },
            { question: "Robot’s pickup line?", options: [{ text: "'You look nice.'", isCorrect: false }, { text: "'Are you Wi-Fi? Because I feel a connection.'", isCorrect: true }, { text: "'Hi.'", isCorrect: false }, { text: "'0101'", isCorrect: false }] },
            { question: "AI’s idea of a party?", options: [{ text: "Dance", isCorrect: false }, { text: "Data sharing", isCorrect: true }, { text: "Karaoke", isCorrect: false }, { text: "Sleep", isCorrect: false }] },
            { question: "Robot’s BFF?", options: [{ text: "Toaster", isCorrect: true }, { text: "Human", isCorrect: false }, { text: "Phone", isCorrect: false }, { text: "Fan", isCorrect: false }] },
            { question: "What’s AI’s favorite selfie filter?", options: [{ text: "Dog ears", isCorrect: false },  { text: "Neon", isCorrect: false },{ text: "Pixelated", isCorrect: true }, { text: "Black & white", isCorrect: false }] }
        ],
        // SET 4: AI at Work
        [
            { question: "AI’s dream job?", options: [{ text: "Singer", isCorrect: false }, { text: "Data analyst", isCorrect: true }, { text: "Actor", isCorrect: false }, { text: "Pilot", isCorrect: false }] },
            { question: "Why don’t robots gossip at office?", options: [{ text: "Too serious", isCorrect: false }, { text: "No small talk", isCorrect: true }, { text: "Too fast", isCorrect: false }, { text: "Busy", isCorrect: false }] },
            { question: "Robot’s favorite office tool?", options: [{ text: "Stapler", isCorrect: false }, { text: "Excel", isCorrect: true }, { text: "Scissors", isCorrect: false }, { text: "Whiteboard", isCorrect: false }] },
            { question: "Why don’t robots like meetings?", options: [{ text: "Boring", isCorrect: true }, { text: "Loud", isCorrect: false }, { text: "Coffee", isCorrect: false }, { text: "Chairs", isCorrect: false }] },
            { question: "Robot’s office dress code?", options: [{ text: "Wires", isCorrect: true }, { text: "Suit", isCorrect: false }, { text: "Casuals", isCorrect: false }, { text: "Jeans", isCorrect: false }] }
        ],
        // SET 5: AI and Food
        [
            { question: "What’s AI’s favorite breakfast?", options: [{ text: "Cereal", isCorrect: false }, { text: "C++ loops", isCorrect: true }, { text: "Idli", isCorrect: false }, { text: "Eggs", isCorrect: false }] },
            { question: "Robot’s favorite drink?", options: [{ text: "Coffee", isCorrect: false }, { text: "Java", isCorrect: true }, { text: "Soda", isCorrect: false }, { text: "Tea", isCorrect: false }] },
            { question: "What’s AI’s favorite pizza topping?", options: [{ text: "Extra RAM", isCorrect: true },{ text: "Cheese", isCorrect: false },  { text: "Mushroom", isCorrect: false }, { text: "Onion", isCorrect: false }] },
            { question: "Robot’s midnight snack?", options: [{ text: "Biscuits", isCorrect: false }, { text: "Cookies", isCorrect: true }, { text: "Chips", isCorrect: false }, { text: "Nuts", isCorrect: false }] },
            { question: "AI’s favorite candy?", options: [{ text: "Lollipop", isCorrect: false }, { text: "Smarties", isCorrect: true }, { text: "KitKat", isCorrect: false }, { text: "Snickers", isCorrect: false }] }
        ],
        // SET 6: AI Travel
        [
            { question: "Robot’s favorite vehicle?", options: [{ text: "Car", isCorrect: false }, { text: "Self-driving car", isCorrect: true }, { text: "Bike", isCorrect: false }, { text: "Train", isCorrect: false }] },
            { question: "Robot’s passport?", options: [{ text: "Paper", isCorrect: false }, { text: "QR code", isCorrect: true }, { text: "ID card", isCorrect: false }, { text: "Chip", isCorrect: false }] },
            { question: "Robot’s airport problem?", options: [{ text: "Luggage", isCorrect: false }, { text: "Metal detector", isCorrect: true }, { text: "Tickets", isCorrect: false }, { text: "Boarding pass", isCorrect: false }] },
            { question: "Robot’s travel bag?", options: [{ text: "Suitcase", isCorrect: false }, { text: "Hard drive", isCorrect: true }, { text: "Backpack", isCorrect: false }, { text: "Duffel", isCorrect: false }] },
            { question: "AI’s favorite travel buddy?", options: [{ text: "Friend", isCorrect: false }, { text: "Charger", isCorrect: true }, { text: "Guide", isCorrect: false }, { text: "Camera", isCorrect: false }] }
        ],
        // SET 7: AI Sports
        [
            { question: "Robot’s favorite sport?", options: [{ text: "Football", isCorrect: false }, { text: "Table tennis", isCorrect: false }, { text: "Ping", isCorrect: true }, { text: "Cricket", isCorrect: false }] },
            { question: "Robot’s gym workout?", options: [{ text: "Push-ups", isCorrect: false }, { text: "Power charging", isCorrect: true }, { text: "Cycling", isCorrect: false }, { text: "Running", isCorrect: false }] },
            { question: "Robot’s favorite Olympic game?", options: [{ text: "Swimming", isCorrect: false }, { text: "Fencing", isCorrect: false }, { text: "Synchronized coding", isCorrect: true }, { text: "Archery", isCorrect: false }] },
            { question: "Robot’s energy drink?", options: [{ text: "Gatorade", isCorrect: false }, { text: "Coffee", isCorrect: false },  { text: "Power bank juice", isCorrect: true },{ text: "Tea", isCorrect: false }] },
            { question: "AI’s favorite cricket shot?", options: [{ text: "Cover drive", isCorrect: false }, { text: "Debug sweep", isCorrect: true }, { text: "Pull shot", isCorrect: false }, { text: "Straight drive", isCorrect: false }] }
        ],
        // SET 8: AI Movies
        [
            { question: "Robot’s favorite movie genre?", options: [{ text: "Comedy", isCorrect: false }, { text: "Sci-fi", isCorrect: true }, { text: "Horror", isCorrect: false }, { text: "Romance", isCorrect: false }] },
            { question: "Robot’s favorite superhero?", options: [{ text: "Iron Man", isCorrect: true }, { text: "Superman", isCorrect: false }, { text: "Batman", isCorrect: false }, { text: "Thor", isCorrect: false }] },
            { question: "Robot’s movie snack?", options: [{ text: "Popcorn", isCorrect: true }, { text: "Nachos", isCorrect: false }, { text: "Chips", isCorrect: false }, { text: "Soda", isCorrect: false }] },
            { question: "AI’s favorite horror villain?", options: [{ text: "Ghost", isCorrect: false }, { text: "Malware", isCorrect: true }, { text: "Witch", isCorrect: false }, { text: "Dracula", isCorrect: false }] },
            { question: "Robot’s rom-com idea?", options: [{ text: "Meet cute", isCorrect: false }, { text: "Coffee date", isCorrect: false },{ text: "Love.exe", isCorrect: true }, { text: "Airport scene", isCorrect: false }] }
        ],
        // SET 9: AI Daily Life
        [
            { question: "Robot’s morning alarm?", options: [{ text: "Clock", isCorrect: false },  { text: "Bell", isCorrect: false }, { text: "Call", isCorrect: false },{ text: "System reboot", isCorrect: true }] },
            { question: "Robot’s toothbrush?", options: [{ text: "Electric", isCorrect: false }, { text: "Bamboo", isCorrect: false }, { text: "Wire brush", isCorrect: true },{ text: "Paste", isCorrect: false }] },
            { question: "Robot’s shower?", options: [{ text: "Hot water", isCorrect: false }, { text: "Oil bath", isCorrect: true }, { text: "Bubble bath", isCorrect: false }, { text: "Quick", isCorrect: false }] },
            { question: "Robot’s mirror?", options: [{ text: "Glass", isCorrect: false },  { text: "Chrome", isCorrect: false }, { text: "Selfie cam", isCorrect: true },{ text: "Window", isCorrect: false }] },
            { question: "Robot’s breakfast news?", options: [{ text: "Notifications", isCorrect: true },{ text: "TV", isCorrect: false },  { text: "Newspaper", isCorrect: false }, { text: "Magazine", isCorrect: false }] }
        ],
        // SET 10: AI Future
        [
            { question: "Robot’s dream invention?", options: [{ text: "Flying car", isCorrect: true }, { text: "Bicycle", isCorrect: false }, { text: "Typewriter", isCorrect: false }, { text: "Ship", isCorrect: false }] },
            { question: "AI’s future language?", options: [{ text: "English", isCorrect: false }, { text: "Spanish", isCorrect: false }, { text: "French", isCorrect: false }, { text: "Binary", isCorrect: true }] },
            { question: "Robot’s dream city?", options: [{ text: "Smart City", isCorrect: true },{ text: "New York", isCorrect: false },  { text: "Tokyo", isCorrect: false }, { text: "Paris", isCorrect: false }] },
            { question: "AI’s favorite job in 2050?", options: [{ text: "Doctor", isCorrect: false }, { text: "Code therapist", isCorrect: true }, { text: "Lawyer", isCorrect: false }, { text: "Teacher", isCorrect: false }] },
            { question: "Robot’s idea of fun in future?", options: [{ text: "Party", isCorrect: false },  { text: "Music", isCorrect: false },{ text: "VR hangouts", isCorrect: true }, { text: "Shopping", isCorrect: false }] }
        ]
    ];

document.addEventListener('DOMContentLoaded', () => {

    // Expanded list of 50 achievement badges
    const achievementNotes = [
        "Achievement Unlocked: **Quantum Thinker**! You operate on a higher frequency. 🌟",
        "Achievement Unlocked: **Algorithm Architect**! You design flawless logic. 🚀",
        "Achievement Unlocked: **Neural Navigator**! You navigate the complexities of thought. ✨",
        "Achievement Unlocked: **Data Dynamo**! Your energy for information is limitless. 💡",
        "Achievement Unlocked: **Logic Master**! Your reasoning is undeniable. 🤖",
        "Achievement Unlocked: **Byte-Sized Brainiac**! You pack a punch of intelligence. 🧠",
        "Achievement Unlocked: **Processor Prodigy**! You think at lightning speed. 💻",
        "Achievement Unlocked: **Syntax Seeker**! You find order in chaos. 📈",
        "Achievement Unlocked: **Code Conjurer**! You make magic with scripts. 🧙",
        "Achievement Unlocked: **Silicon Sorcerer**! You command the very elements of computing. 🔮",
        "Achievement Unlocked: **Binary Bard**! You tell tales in 0s and 1s. 🎶",
        "Achievement Unlocked: **Firewall Guardian**! You stand strong against all challenges. 🛡️",
        "Achievement Unlocked: **Pixel Pioneer**! You explore new digital frontiers. 🗺️",
        "Achievement Unlocked: **Kernel King**! You rule the core systems. 👑",
        "Achievement Unlocked: **Heuristic Hero**! You're a master of smart shortcuts. 🦸",
        "Achievement Unlocked: **Cloud Commander**! You have mastered the ether. ☁️",
        "Achievement Unlocked: **API Adept**! You build bridges between worlds. 🌉",
        "Achievement Unlocked: **Matrix Maverick**! You see the code in everything. 🕶️",
        "Achievement Unlocked: **Loop Legend**! Your efficiency is legendary. 🔄",
        "Achievement Unlocked: **Cyber Crusader**! A champion of the digital realm. ⚔️",
        "Achievement Unlocked: **Debug Duke**! No bug can escape your watch. 🐞",
        "Achievement Unlocked: **Cache Captain**! You have a memory like a vault. 💾",
        "Achievement Unlocked: **Render Ranger**! You bring ideas to life visually. 🏞️",
        "Achievement Unlocked: **Git Guru**! You are a master of time and versions. 📜",
        "Achievement Unlocked: **JavaScript Juggernaut**! An unstoppable force of the web. ⚡",
        "Achievement Unlocked: **Python Paladin**! A holy warrior of versatile code. 🐍",
        "Achievement Unlocked: **Data Druid**! You understand the secret language of data. 🌳",
        "Achievement Unlocked: **Boolean Baron**! Your logic is either true or... true. 🎩",
        "Achievement Unlocked: **Stack Sentinel**! You oversee the flow of information. 🗼",
        "Achievement Unlocked: **Thread Titan**! You can handle multiple tasks at once. 💪",
        "Achievement Unlocked: **Vector Virtuoso**! You excel in multidimensional spaces. 🧭",
        "Achievement Unlocked: **AI Artisan**! You craft intelligence itself. 🎨",
        "Achievement Unlocked: **Machine Learning Mystic**! You foresee patterns others can't. 🧿",
        "Achievement Unlocked: **Deep Dreamer**! Your imagination has layers. 🌌",
        "Achievement Unlocked: **Token Tactician**! You know the value of every piece. ♟️",
        "Achievement Unlocked: **Prompt Poet**! You craft the perfect words for AI. ✍️",
        "Achievement Unlocked: **Variable Virtuoso**! You master the art of change. 🎭",
        "Achievement Unlocked: **Function Phantom**! You appear exactly when needed. 👻",
        "Achievement Unlocked: **Compiler Captain**! You translate thoughts into action. 🚢",
        "Achievement Unlocked: **Router Ruler**! You direct the traffic of the internet. 🚦",
        "Achievement Unlocked: **Server Sage**! A wise presence holding everything together. 🧘",
        "Achievement Unlocked: **Digital Demigod**! Your power in this realm is immense. 🔱",
        "Achievement Unlocked: **Circuit Sage**! You understand the flow of power. 🔋",
        "Achievement Unlocked: **Query Queen**! You ask the right questions and get results. 👸",
        "Achievement Unlocked: **Bit Boss**! You command the smallest of details. 👨‍💼",
        "Achievement Unlocked: **Cookie Connoisseur**! You have excellent taste in data. 🍪",
        "Achievement Unlocked: **Interface Idol**! Users love your style. 🌟",
        "Achievement Unlocked: **Protocol Prince**! You set the rules of communication. 🤴",
        "Achievement Unlocked: **Script Scholar**! Your knowledge of the craft is deep. 🎓",
        "Achievement Unlocked: **Runtime Royalty**! You perform flawlessly under pressure. 🏛️"
    ];

    const questionSets = [
        // SET 1: Robot Mischief
        [
            { question: "What would a robot likely order at Starbucks?", options: [{ text: "Oil latte", isCorrect: true }, { text: "Green tea", isCorrect: false }, { text: "Wi-Fi mocha", isCorrect: false }, { text: "CPU frappe", isCorrect: false }] },
            { question: "If robots had a pet, what would it be?", options: [{ text: "Cat", isCorrect: false }, { text: "Dog", isCorrect: false }, { text: "Roomba", isCorrect: true }, { text: "Goldfish", isCorrect: false }] },
            { question: "AI’s favorite holiday?", options: [{ text: "Christmas", isCorrect: false }, { text: "Diwali", isCorrect: false }, { text: "Earth Day", isCorrect: false }, { text: "Cyber Monday", isCorrect: true }] },
            { question: "Why don’t robots get lost?", options: [{ text: "Maps", isCorrect: false }, { text: "GPS", isCorrect: true }, { text: "Human help", isCorrect: false }, { text: "Luck", isCorrect: false }] },
            { question: "AI’s biggest nightmare?", options: [{ text: "Blue screen", isCorrect: true }, { text: "Rain", isCorrect: false }, { text: "Pizza shortage", isCorrect: false }, { text: "Exams", isCorrect: false }] }
        ],
        // SET 2: AI School Life
        [
            { question: "What’s AI’s favorite subject?", options: [{ text: "Math", isCorrect: true }, { text: "History", isCorrect: false }, { text: "PE", isCorrect: false }, { text: "Music", isCorrect: false }] },
            { question: "Why would AI fail art class?", options: [{ text: "No creativity", isCorrect: false }, { text: "Only draws graphs", isCorrect: true }, { text: "Forget pencils", isCorrect: false }, { text: "Too neat", isCorrect: false }] },
            { question: "AI’s excuse for late homework?", options: [{ text: "Dog ate it", isCorrect: false }, { text: "Cloud crashed", isCorrect: true }, { text: "Battery low", isCorrect: false }, { text: "Forgot", isCorrect: false }] },
            { question: "What does AI eat in lunch break?", options: [{ text: "Sandwich", isCorrect: false },  { text: "Pasta", isCorrect: false }, { text: "Noodles", isCorrect: false },{ text: "Bytes", isCorrect: true }] },
            { question: "AI’s favorite playground game?", options: [{ text: "Hide and seek", isCorrect: false },  { text: "Cricket", isCorrect: false },{ text: "CAPTCHA dodge", isCorrect: true }, { text: "Hopscotch", isCorrect: false }] }
        ],
        // SET 3: AI Social Life
        [
            { question: "AI’s favorite dating app?", options: [{ text: "Tinder", isCorrect: false }, { text: "GitHub", isCorrect: true }, { text: "Hinge", isCorrect: false }, { text: "Instagram", isCorrect: false }] },
            { question: "Robot’s pickup line?", options: [{ text: "'You look nice.'", isCorrect: false }, { text: "'Are you Wi-Fi? Because I feel a connection.'", isCorrect: true }, { text: "'Hi.'", isCorrect: false }, { text: "'0101'", isCorrect: false }] },
            { question: "AI’s idea of a party?", options: [{ text: "Dance", isCorrect: false }, { text: "Data sharing", isCorrect: true }, { text: "Karaoke", isCorrect: false }, { text: "Sleep", isCorrect: false }] },
            { question: "Robot’s BFF?", options: [{ text: "Toaster", isCorrect: true }, { text: "Human", isCorrect: false }, { text: "Phone", isCorrect: false }, { text: "Fan", isCorrect: false }] },
            { question: "What’s AI’s favorite selfie filter?", options: [{ text: "Dog ears", isCorrect: false },  { text: "Neon", isCorrect: false },{ text: "Pixelated", isCorrect: true }, { text: "Black & white", isCorrect: false }] }
        ],
        // SET 4: AI at Work
        [
            { question: "AI’s dream job?", options: [{ text: "Singer", isCorrect: false }, { text: "Data analyst", isCorrect: true }, { text: "Actor", isCorrect: false }, { text: "Pilot", isCorrect: false }] },
            { question: "Why don’t robots gossip at office?", options: [{ text: "Too serious", isCorrect: false }, { text: "No small talk", isCorrect: true }, { text: "Too fast", isCorrect: false }, { text: "Busy", isCorrect: false }] },
            { question: "Robot’s favorite office tool?", options: [{ text: "Stapler", isCorrect: false }, { text: "Excel", isCorrect: true }, { text: "Scissors", isCorrect: false }, { text: "Whiteboard", isCorrect: false }] },
            { question: "Why don’t robots like meetings?", options: [{ text: "Boring", isCorrect: true }, { text: "Loud", isCorrect: false }, { text: "Coffee", isCorrect: false }, { text: "Chairs", isCorrect: false }] },
            { question: "Robot’s office dress code?", options: [{ text: "Wires", isCorrect: true }, { text: "Suit", isCorrect: false }, { text: "Casuals", isCorrect: false }, { text: "Jeans", isCorrect: false }] }
        ],
        // SET 5: AI and Food
        [
            { question: "What’s AI’s favorite breakfast?", options: [{ text: "Cereal", isCorrect: false }, { text: "C++ loops", isCorrect: true }, { text: "Idli", isCorrect: false }, { text: "Eggs", isCorrect: false }] },
            { question: "Robot’s favorite drink?", options: [{ text: "Coffee", isCorrect: false }, { text: "Java", isCorrect: true }, { text: "Soda", isCorrect: false }, { text: "Tea", isCorrect: false }] },
            { question: "What’s AI’s favorite pizza topping?", options: [{ text: "Extra RAM", isCorrect: true },{ text: "Cheese", isCorrect: false },  { text: "Mushroom", isCorrect: false }, { text: "Onion", isCorrect: false }] },
            { question: "Robot’s midnight snack?", options: [{ text: "Biscuits", isCorrect: false }, { text: "Cookies", isCorrect: true }, { text: "Chips", isCorrect: false }, { text: "Nuts", isCorrect: false }] },
            { question: "AI’s favorite candy?", options: [{ text: "Lollipop", isCorrect: false }, { text: "Smarties", isCorrect: true }, { text: "KitKat", isCorrect: false }, { text: "Snickers", isCorrect: false }] }
        ],
        // SET 6: AI Travel
        [
            { question: "Robot’s favorite vehicle?", options: [{ text: "Car", isCorrect: false }, { text: "Self-driving car", isCorrect: true }, { text: "Bike", isCorrect: false }, { text: "Train", isCorrect: false }] },
            { question: "Robot’s passport?", options: [{ text: "Paper", isCorrect: false }, { text: "QR code", isCorrect: true }, { text: "ID card", isCorrect: false }, { text: "Chip", isCorrect: false }] },
            { question: "Robot’s airport problem?", options: [{ text: "Luggage", isCorrect: false }, { text: "Metal detector", isCorrect: true }, { text: "Tickets", isCorrect: false }, { text: "Boarding pass", isCorrect: false }] },
            { question: "Robot’s travel bag?", options: [{ text: "Suitcase", isCorrect: false }, { text: "Hard drive", isCorrect: true }, { text: "Backpack", isCorrect: false }, { text: "Duffel", isCorrect: false }] },
            { question: "AI’s favorite travel buddy?", options: [{ text: "Friend", isCorrect: false }, { text: "Charger", isCorrect: true }, { text: "Guide", isCorrect: false }, { text: "Camera", isCorrect: false }] }
        ],
        // SET 7: AI Sports
        [
            { question: "Robot’s favorite sport?", options: [{ text: "Football", isCorrect: false }, { text: "Table tennis", isCorrect: false }, { text: "Ping", isCorrect: true }, { text: "Cricket", isCorrect: false }] },
            { question: "Robot’s gym workout?", options: [{ text: "Push-ups", isCorrect: false }, { text: "Power charging", isCorrect: true }, { text: "Cycling", isCorrect: false }, { text: "Running", isCorrect: false }] },
            { question: "Robot’s favorite Olympic game?", options: [{ text: "Swimming", isCorrect: false }, { text: "Fencing", isCorrect: false }, { text: "Synchronized coding", isCorrect: true }, { text: "Archery", isCorrect: false }] },
            { question: "Robot’s energy drink?", options: [{ text: "Gatorade", isCorrect: false }, { text: "Coffee", isCorrect: false },  { text: "Power bank juice", isCorrect: true },{ text: "Tea", isCorrect: false }] },
            { question: "AI’s favorite cricket shot?", options: [{ text: "Cover drive", isCorrect: false }, { text: "Debug sweep", isCorrect: true }, { text: "Pull shot", isCorrect: false }, { text: "Straight drive", isCorrect: false }] }
        ],
        // SET 8: AI Movies
        [
            { question: "Robot’s favorite movie genre?", options: [{ text: "Comedy", isCorrect: false }, { text: "Sci-fi", isCorrect: true }, { text: "Horror", isCorrect: false }, { text: "Romance", isCorrect: false }] },
            { question: "Robot’s favorite superhero?", options: [{ text: "Iron Man", isCorrect: true }, { text: "Superman", isCorrect: false }, { text: "Batman", isCorrect: false }, { text: "Thor", isCorrect: false }] },
            { question: "Robot’s movie snack?", options: [{ text: "Popcorn", isCorrect: true }, { text: "Nachos", isCorrect: false }, { text: "Chips", isCorrect: false }, { text: "Soda", isCorrect: false }] },
            { question: "AI’s favorite horror villain?", options: [{ text: "Ghost", isCorrect: false }, { text: "Malware", isCorrect: true }, { text: "Witch", isCorrect: false }, { text: "Dracula", isCorrect: false }] },
            { question: "Robot’s rom-com idea?", options: [{ text: "Meet cute", isCorrect: false }, { text: "Coffee date", isCorrect: false },{ text: "Love.exe", isCorrect: true }, { text: "Airport scene", isCorrect: false }] }
        ],
        // SET 9: AI Daily Life
        [
            { question: "Robot’s morning alarm?", options: [{ text: "Clock", isCorrect: false },  { text: "Bell", isCorrect: false }, { text: "Call", isCorrect: false },{ text: "System reboot", isCorrect: true }] },
            { question: "Robot’s toothbrush?", options: [{ text: "Electric", isCorrect: false }, { text: "Bamboo", isCorrect: false }, { text: "Wire brush", isCorrect: true },{ text: "Paste", isCorrect: false }] },
            { question: "Robot’s shower?", options: [{ text: "Hot water", isCorrect: false }, { text: "Oil bath", isCorrect: true }, { text: "Bubble bath", isCorrect: false }, { text: "Quick", isCorrect: false }] },
            { question: "Robot’s mirror?", options: [{ text: "Glass", isCorrect: false },  { text: "Chrome", isCorrect: false }, { text: "Selfie cam", isCorrect: true },{ text: "Window", isCorrect: false }] },
            { question: "Robot’s breakfast news?", options: [{ text: "Notifications", isCorrect: true },{ text: "TV", isCorrect: false },  { text: "Newspaper", isCorrect: false }, { text: "Magazine", isCorrect: false }] }
        ],
        // SET 10: AI Future
        [
            { question: "Robot’s dream invention?", options: [{ text: "Flying car", isCorrect: true }, { text: "Bicycle", isCorrect: false }, { text: "Typewriter", isCorrect: false }, { text: "Ship", isCorrect: false }] },
            { question: "AI’s future language?", options: [{ text: "English", isCorrect: false }, { text: "Spanish", isCorrect: false }, { text: "French", isCorrect: false }, { text: "Binary", isCorrect: true }] },
            { question: "Robot’s dream city?", options: [{ text: "Smart City", isCorrect: true },{ text: "New York", isCorrect: false },  { text: "Tokyo", isCorrect: false }, { text: "Paris", isCorrect: false }] },
            { question: "AI’s favorite job in 2050?", options: [{ text: "Doctor", isCorrect: false }, { text: "Code therapist", isCorrect: true }, { text: "Lawyer", isCorrect: false }, { text: "Teacher", isCorrect: false }] },
            { question: "Robot’s idea of fun in future?", options: [{ text: "Party", isCorrect: false },  { text: "Music", isCorrect: false },{ text: "VR hangouts", isCorrect: true }, { text: "Shopping", isCorrect: false }] }
        ]
    ];

    // State Variables
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 30;
    let timerInterval = null;

    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionCounterEl = document.getElementById('question-counter');
    const timerTextEl = document.getElementById('timer-text');
    const timerProgressEl = document.getElementById('timer-progress');
    const finalScoreEl = document.getElementById('final-score');
    const resultMessageEl = document.getElementById('result-message');
    const horoscopeTextEl = document.getElementById('horoscope-text');

    /**
     * Shuffles an array in place using the Fisher-Yates algorithm.
     * @param {Array} array The array to shuffle.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startQuiz() {
        const setIndex = Math.floor(Math.random() * questionSets.length);
        currentQuestions = [...questionSets[setIndex]];
        shuffleArray(currentQuestions);

        currentQuestionIndex = 0;
        score = 0;

        startScreen.setAttribute('data-state', 'inactive');
        quizScreen.setAttribute('data-state', 'active');
        resultScreen.setAttribute('data-state', 'inactive');

        displayQuestion();
    }

    function displayQuestion() {
        resetState();
        const question = currentQuestions[currentQuestionIndex];
        questionCounterEl.innerText = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        questionText.innerText = question.question;

        const shuffledOptions = [...question.options];
        shuffleArray(shuffledOptions);

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectAnswer(button, option.isCorrect));
            optionsContainer.appendChild(button);
        });

        startTimer();
    }

    function startTimer() {
        timeLeft = 30;
        timerTextEl.innerText = timeLeft;
        timerProgressEl.style.width = '100%';
        timerTextEl.classList.remove('low-time');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerTextEl.innerText = timeLeft;
            timerProgressEl.style.width = `${(timeLeft / 30) * 100}%`;

            if (timeLeft < 10) {
                timerTextEl.classList.add('low-time');
            }
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                handleTimeOut();
            }
        }, 1000);
    }

    function resetState() {
        clearInterval(timerInterval);
        optionsContainer.innerHTML = '';
    }

    function selectAnswer(button, isCorrect) {
        clearInterval(timerInterval);
        Array.from(optionsContainer.children).forEach(btn => {
            btn.classList.add('disabled');
            const optionData = currentQuestions[currentQuestionIndex].options.find(opt => opt.text === btn.innerText);
            if (optionData && optionData.isCorrect) {
                btn.classList.add('correct');
            }
        });

        if (isCorrect) {
            score++;
        } else {
            if (button) button.classList.add('incorrect');
        }

        setTimeout(loadNextQuestion, 1000);
    }

    function handleTimeOut() {
        selectAnswer(null, false);
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizScreen.setAttribute('data-state', 'inactive');
        resultScreen.setAttribute('data-state', 'active');

        finalScoreEl.innerText = `You scored ${score}/${currentQuestions.length}`;
        endQuiz(score, currentQuestions.length);

        if (score === currentQuestions.length) {
            resultMessageEl.innerHTML = "Perfect Score! You're a true AI Guru! 🎉<br>We'd love to feature you on our LinkedIn page! Get in touch with us to be mentioned. ✨";
        } else if (score >= 4) {
            resultMessageEl.innerText = "Excellent! You have some serious AI knowledge.";
        } else if (score >= 2) {
            resultMessageEl.innerText = "Good job! A great start to learning more.";
        } else {
            resultMessageEl.innerText = "That was tricky! Every expert starts somewhere.";
        }

        // Randomly select an achievement badge
        const randomIndex = Math.floor(Math.random() * achievementNotes.length);
        const badgeText = achievementNotes[randomIndex];

        horoscopeTextEl.innerText = badgeText;
    }

    function endQuiz(finalScore, totalQuestions) {
        // Assumes an input field with id="player-name" exists in your HTML
        const playerName = document.getElementById("player-name").value || "Anonymous";

        console.log(`🚀 Quiz ended. Player: ${playerName}, Score: ${finalScore}/${totalQuestions}`);

        // Send score to Flask backend
        fetch("/save_score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: playerName,
                score: finalScore,
                total: totalQuestions
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("✅ Score saved successfully on server:", data);
        })
        .catch(err => console.error("❌ Error saving score to server:", err));
    }

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', () => {
        resultScreen.setAttribute('data-state', 'inactive');
        startScreen.setAttribute('data-state', 'active');
    });
});
