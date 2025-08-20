document.addEventListener('DOMContentLoaded', () => {

    const questionSets = [
        // SET 1: Robot Mischief
        [
            { question: "What would a robot likely order at Starbucks?", options: [{ text: "Oil latte", isCorrect: true }, { text: "Green tea", isCorrect: false }, { text: "Wi-Fi mocha", isCorrect: false }, { text: "CPU frappe", isCorrect: false }] },
            { question: "If robots had a pet, what would it be?", options: [{ text: "Cat", isCorrect: false }, { text: "Dog", isCorrect: false }, { text: "Roomba", isCorrect: true }, { text: "Goldfish", isCorrect: false }] },
            { question: "AI’s favorite holiday?", options: [{ text: "Christmas", isCorrect: false }, { text: "Diwali", isCorrect: false }, { text: "Earth Day", isCorrect: false }, { text: "Cyber Monday", isCorrect: true }] },
            { question: "Why don’t robots get lost?", options: [{ text: "Maps", isCorrect: false }, { text: "GPS", isCorrect: true }, { text: "Human help", isCorrect: false }, { text: "Luck", isCorrect: false }] },
            { question: "AI’s biggest nightmare?", options: [{ text: "Blue screen", isCorrect: true }, { text: "Rain", isCorrect: false }, { text: "Pizza shortage", isCorrect: false }, { text: "Exams", isCorrect: false }] },
            { question: "Which snack would AI love?", options: [{ text: "Microchips", isCorrect: true }, { text: "Potato chips", isCorrect: false }, { text: "Nachos", isCorrect: false }, { text: "Cookies", isCorrect: false }] },
            { question: "What does AI write love letters with?", options: [{ text: "Ink", isCorrect: false }, { text: "Binary", isCorrect: true },{ text: "Emojis", isCorrect: false },  { text: "Voice notes", isCorrect: false }] },
            { question: "Robot’s dream vacation spot?", options: [{ text: "Hawaii", isCorrect: false }, { text: "Mars", isCorrect: false },  { text: "Silicon Valley", isCorrect: true },{ text: "Space", isCorrect: false }] },
            { question: "AI’s favorite sport?", options: [{ text: "Football", isCorrect: false }, { text: "Data mining", isCorrect: true }, { text: "Chess", isCorrect: false }, { text: "Cricket", isCorrect: false }] },
            { question: "If robots had birthdays, what’s the cake made of?", options: [{ text: "Chocolate", isCorrect: false }, { text: "Wires", isCorrect: true }, { text: "Ice cream", isCorrect: false }, { text: "Fruit", isCorrect: false }] }
        ],
        // SET 2: AI School Life
        [
            { question: "What’s AI’s favorite subject?", options: [{ text: "Math", isCorrect: true }, { text: "History", isCorrect: false }, { text: "PE", isCorrect: false }, { text: "Music", isCorrect: false }] },
            { question: "Why would AI fail art class?", options: [{ text: "No creativity", isCorrect: false }, { text: "Only draws graphs", isCorrect: true }, { text: "Forget pencils", isCorrect: false }, { text: "Too neat", isCorrect: false }] },
            { question: "AI’s excuse for late homework?", options: [{ text: "Dog ate it", isCorrect: false }, { text: "Cloud crashed", isCorrect: true }, { text: "Battery low", isCorrect: false }, { text: "Forgot", isCorrect: false }] },
            { question: "What does AI eat in lunch break?", options: [{ text: "Sandwich", isCorrect: false },  { text: "Pasta", isCorrect: false }, { text: "Noodles", isCorrect: false },{ text: "Bytes", isCorrect: true }] },
            { question: "AI’s favorite playground game?", options: [{ text: "Hide and seek", isCorrect: false },  { text: "Cricket", isCorrect: false },{ text: "CAPTCHA dodge", isCorrect: true }, { text: "Hopscotch", isCorrect: false }] },
            { question: "What’s AI’s favorite pen?", options: [{ text: "Stylus", isCorrect: true },{ text: "Fountain pen", isCorrect: false },  { text: "Ballpoint", isCorrect: false }, { text: "Marker", isCorrect: false }] },
            { question: "How does AI cheat in exams?", options: [{ text: "Looks around", isCorrect: false }, { text: "Googles brain", isCorrect: true }, { text: "Copies friend", isCorrect: false }, { text: "Doesn’t", isCorrect: false }] },
            { question: "What’s AI’s handwriting called?", options: [{ text: "Print", isCorrect: false }, { text: "Code", isCorrect: true }, { text: "Scribble", isCorrect: false }, { text: "Fonts", isCorrect: false }] },
            { question: "Who’s AI’s best friend in school?", options: [{ text: "Calculator", isCorrect: true }, { text: "Teacher", isCorrect: false }, { text: "Mouse", isCorrect: false }, { text: "USB", isCorrect: false }] },
            { question: "What’s AI’s favorite holiday homework?", options: [{ text: "Coding puzzles", isCorrect: true }, { text: "Essays", isCorrect: false }, { text: "Drawings", isCorrect: false }, { text: "None", isCorrect: false }] }
        ],
        // SET 3: AI Social Life
        [
            { question: "AI’s favorite dating app?", options: [{ text: "Tinder", isCorrect: false }, { text: "GitHub", isCorrect: true }, { text: "Hinge", isCorrect: false }, { text: "Instagram", isCorrect: false }] },
            { question: "Robot’s pickup line?", options: [{ text: "'You look nice.'", isCorrect: false }, { text: "'Are you Wi-Fi? Because I feel a connection.'", isCorrect: true }, { text: "'Hi.'", isCorrect: false }, { text: "'0101'", isCorrect: false }] },
            { question: "AI’s idea of a party?", options: [{ text: "Dance", isCorrect: false }, { text: "Data sharing", isCorrect: true }, { text: "Karaoke", isCorrect: false }, { text: "Sleep", isCorrect: false }] },
            { question: "Robot’s BFF?", options: [{ text: "Toaster", isCorrect: true }, { text: "Human", isCorrect: false }, { text: "Phone", isCorrect: false }, { text: "Fan", isCorrect: false }] },
            { question: "What’s AI’s favorite selfie filter?", options: [{ text: "Dog ears", isCorrect: false },  { text: "Neon", isCorrect: false },{ text: "Pixelated", isCorrect: true }, { text: "Black & white", isCorrect: false }] },
            { question: "AI’s guilty pleasure?", options: [{ text: "Watching cat videos", isCorrect: true }, { text: "Gossip", isCorrect: false }, { text: "Gaming", isCorrect: false }, { text: "Shopping", isCorrect: false }] },
            { question: "AI’s zodiac sign?", options: [{ text: "Capricorn", isCorrect: false }, { text: "Binary-born", isCorrect: true }, { text: "Libra", isCorrect: false }, { text: "Leo", isCorrect: false }] },
            { question: "AI’s favorite emoji?", options: [{ text: "😀", isCorrect: false }, { text: "❤️", isCorrect: false }, { text: "🤖", isCorrect: true }, { text: "😂", isCorrect: false }] },
            { question: "Robot’s favorite music genre?", options: [{ text: "Pop", isCorrect: false }, { text: "Heavy metal", isCorrect: true }, { text: "Jazz", isCorrect: false }, { text: "Classical", isCorrect: false }] },
            { question: "What do robots say when tired?", options: [{ text: "'I’m sleepy'", isCorrect: false },  { text: "'Bye'", isCorrect: false },{ text: "'Low battery'", isCorrect: true }, { text: "'Shut down'", isCorrect: false }] }
        ],
        // SET 4: AI at Work
        [
            { question: "AI’s dream job?", options: [{ text: "Singer", isCorrect: false }, { text: "Data analyst", isCorrect: true }, { text: "Actor", isCorrect: false }, { text: "Pilot", isCorrect: false }] },
            { question: "Why don’t robots gossip at office?", options: [{ text: "Too serious", isCorrect: false }, { text: "No small talk", isCorrect: true }, { text: "Too fast", isCorrect: false }, { text: "Busy", isCorrect: false }] },
            { question: "Robot’s favorite office tool?", options: [{ text: "Stapler", isCorrect: false }, { text: "Excel", isCorrect: true }, { text: "Scissors", isCorrect: false }, { text: "Whiteboard", isCorrect: false }] },
            { question: "Why don’t robots like meetings?", options: [{ text: "Boring", isCorrect: true }, { text: "Loud", isCorrect: false }, { text: "Coffee", isCorrect: false }, { text: "Chairs", isCorrect: false }] },
            { question: "Robot’s office dress code?", options: [{ text: "Wires", isCorrect: true }, { text: "Suit", isCorrect: false }, { text: "Casuals", isCorrect: false }, { text: "Jeans", isCorrect: false }] },
            { question: "AI’s favorite tea break snack?", options: [{ text: "Biscuits", isCorrect: false }, { text: "Chips", isCorrect: false }, { text: "Donuts", isCorrect: false }, { text: "Cookies", isCorrect: true }] },
            { question: "Robot’s least favorite job?", options: [{ text: "Cleaner", isCorrect: false }, { text: "Stand-up comedian", isCorrect: true }, { text: "Writer", isCorrect: false }, { text: "Engineer", isCorrect: false }] },
            { question: "Robot’s resume heading?", options: [{ text: "Skills", isCorrect: false }, { text: "System upgrade", isCorrect: true }, { text: "Education", isCorrect: false }, { text: "Hobbies", isCorrect: false }] },
            { question: "Robot’s manager is called?", options: [{ text: "Boss", isCorrect: false },  { text: "CEO", isCorrect: false }, { text: "Programmer", isCorrect: true },{ text: "Leader", isCorrect: false }] },
            { question: "AI’s favorite weekend plan?", options: [{ text: "Debugging", isCorrect: true },{ text: "Netflix", isCorrect: false },  { text: "Gaming", isCorrect: false }, { text: "Party", isCorrect: false }] }
        ],
        // SET 5: AI and Food
        [
            { question: "What’s AI’s favorite breakfast?", options: [{ text: "Cereal", isCorrect: false }, { text: "C++ loops", isCorrect: true }, { text: "Idli", isCorrect: false }, { text: "Eggs", isCorrect: false }] },
            { question: "Robot’s favorite drink?", options: [{ text: "Coffee", isCorrect: false }, { text: "Java", isCorrect: true }, { text: "Soda", isCorrect: false }, { text: "Tea", isCorrect: false }] },
            { question: "What’s AI’s favorite pizza topping?", options: [{ text: "Extra RAM", isCorrect: true },{ text: "Cheese", isCorrect: false },  { text: "Mushroom", isCorrect: false }, { text: "Onion", isCorrect: false }] },
            { question: "Robot’s midnight snack?", options: [{ text: "Biscuits", isCorrect: false }, { text: "Cookies", isCorrect: true }, { text: "Chips", isCorrect: false }, { text: "Nuts", isCorrect: false }] },
            { question: "AI’s favorite candy?", options: [{ text: "Lollipop", isCorrect: false }, { text: "Smarties", isCorrect: true }, { text: "KitKat", isCorrect: false }, { text: "Snickers", isCorrect: false }] },
            { question: "Robot’s cooking style?", options: [{ text: "Baking", isCorrect: false }, { text: "Frying", isCorrect: false }, { text: "Steaming", isCorrect: false },{ text: "Microwaving", isCorrect: true }, ] },
            { question: "What spice does AI avoid?", options: [{ text: "Spam", isCorrect: true },{ text: "Chili", isCorrect: false },  { text: "Salt", isCorrect: false }, { text: "Pepper", isCorrect: false }] },
            { question: "Robot’s favorite dessert?", options: [{ text: "Cake", isCorrect: false }, { text: "Ice-cream sandwich", isCorrect: true }, { text: "Gulab Jamun", isCorrect: false }, { text: "Donut", isCorrect: false }] },
            { question: "AI’s idea of a perfect diet?", options: [{ text: "Keto", isCorrect: false }, { text: "Balanced", isCorrect: false }, { text: "Vegan", isCorrect: false },{ text: "Data-only", isCorrect: true }] },
            { question: "AI’s guilty cheat meal?", options: [{ text: "Chips", isCorrect: false }, { text: "Chocolate", isCorrect: false }, { text: "Junk files", isCorrect: true }, { text: "Pasta", isCorrect: false }] }
        ],
        // SET 6: AI Travel
        [
            { question: "Robot’s favorite vehicle?", options: [{ text: "Car", isCorrect: false }, { text: "Self-driving car", isCorrect: true }, { text: "Bike", isCorrect: false }, { text: "Train", isCorrect: false }] },
            { question: "Robot’s passport?", options: [{ text: "Paper", isCorrect: false }, { text: "QR code", isCorrect: true }, { text: "ID card", isCorrect: false }, { text: "Chip", isCorrect: false }] },
            { question: "Robot’s airport problem?", options: [{ text: "Luggage", isCorrect: false }, { text: "Metal detector", isCorrect: true }, { text: "Tickets", isCorrect: false }, { text: "Boarding pass", isCorrect: false }] },
            { question: "Robot’s travel bag?", options: [{ text: "Suitcase", isCorrect: false }, { text: "Hard drive", isCorrect: true }, { text: "Backpack", isCorrect: false }, { text: "Duffel", isCorrect: false }] },
            { question: "AI’s favorite travel buddy?", options: [{ text: "Friend", isCorrect: false }, { text: "Charger", isCorrect: true }, { text: "Guide", isCorrect: false }, { text: "Camera", isCorrect: false }] },
            { question: "Robot’s favorite hotel service?", options: [{ text: "Room cleaning", isCorrect: false }, { text: "Free Wi-Fi", isCorrect: true }, { text: "Breakfast", isCorrect: false }, { text: "Pool", isCorrect: false }] },
            { question: "Robot’s biggest fear in travel?", options: [{ text: "Lost baggage", isCorrect: false }, { text: "No signal", isCorrect: true }, { text: "Jet lag", isCorrect: false }, { text: "Delays", isCorrect: false }] },
            { question: "Robot’s favorite train?", options: [{ text: "Bullet train", isCorrect: true }, { text: "Steam", isCorrect: false }, { text: "Toy train", isCorrect: false }, { text: "Metro", isCorrect: false }] },
            { question: "Robot’s vacation weather choice?", options: [{ text: "Snow", isCorrect: false }, { text: "Cloudy", isCorrect: true }, { text: "Sunny", isCorrect: false }, { text: "Rainy", isCorrect: false }] },
            { question: "Robot’s GPS catchphrase?", options: [{ text: "“Recalculating…”", isCorrect: true }, { text: "“Hello”", isCorrect: false }, { text: "“Welcome”", isCorrect: false }, { text: "“Loading”", isCorrect: false }] }
        ],
        // SET 7: AI Sports
        [
            { question: "Robot’s favorite sport?", options: [{ text: "Football", isCorrect: false }, { text: "Table tennis", isCorrect: false }, { text: "Ping", isCorrect: true }, { text: "Cricket", isCorrect: false }] },
            { question: "Robot’s gym workout?", options: [{ text: "Push-ups", isCorrect: false }, { text: "Power charging", isCorrect: true }, { text: "Cycling", isCorrect: false }, { text: "Running", isCorrect: false }] },
            { question: "Robot’s favorite Olympic game?", options: [{ text: "Swimming", isCorrect: false }, { text: "Fencing", isCorrect: false }, { text: "Synchronized coding", isCorrect: true }, { text: "Archery", isCorrect: false }] },
            { question: "Robot’s energy drink?", options: [{ text: "Gatorade", isCorrect: false }, { text: "Coffee", isCorrect: false },  { text: "Power bank juice", isCorrect: true },{ text: "Tea", isCorrect: false }] },
            { question: "AI’s favorite cricket shot?", options: [{ text: "Cover drive", isCorrect: false }, { text: "Debug sweep", isCorrect: true }, { text: "Pull shot", isCorrect: false }, { text: "Straight drive", isCorrect: false }] },
            { question: "Robot’s warm-up routine?", options: [{ text: "System boot", isCorrect: true },{ text: "Jogging", isCorrect: false },  { text: "Stretching", isCorrect: false }, { text: "Push-ups", isCorrect: false }] },
            { question: "AI’s favorite referee call?", options: [{ text: "Goal!", isCorrect: false }, { text: "Timeout", isCorrect: false }, { text: "Replay", isCorrect: false }, { text: "System error", isCorrect: true }] },
            { question: "Robot’s football tactic?", options: [{ text: "Firewall", isCorrect: true },{ text: "Dribble", isCorrect: false }, { text: "Header", isCorrect: false }, { text: "Kick", isCorrect: false }] },
            { question: "Robot’s favorite race?", options: [{ text: "100m", isCorrect: false }, { text: "Download speed", isCorrect: true }, { text: "Relay", isCorrect: false }, { text: "Marathon", isCorrect: false }] },
            { question: "Robot’s sports gear?", options: [{ text: "Helmet", isCorrect: false }, { text: "Antivirus", isCorrect: true }, { text: "Shoes", isCorrect: false }, { text: "Gloves", isCorrect: false }] }
        ],
        // SET 8: AI Movies
        [
            { question: "Robot’s favorite movie genre?", options: [{ text: "Comedy", isCorrect: false }, { text: "Sci-fi", isCorrect: true }, { text: "Horror", isCorrect: false }, { text: "Romance", isCorrect: false }] },
            { question: "Robot’s favorite superhero?", options: [{ text: "Iron Man", isCorrect: true }, { text: "Superman", isCorrect: false }, { text: "Batman", isCorrect: false }, { text: "Thor", isCorrect: false }] },
            { question: "Robot’s movie snack?", options: [{ text: "Popcorn", isCorrect: true }, { text: "Nachos", isCorrect: false }, { text: "Chips", isCorrect: false }, { text: "Soda", isCorrect: false }] },
            { question: "AI’s favorite horror villain?", options: [{ text: "Ghost", isCorrect: false }, { text: "Malware", isCorrect: true }, { text: "Witch", isCorrect: false }, { text: "Dracula", isCorrect: false }] },
            { question: "Robot’s rom-com idea?", options: [{ text: "Meet cute", isCorrect: false }, { text: "Coffee date", isCorrect: false },{ text: "Love.exe", isCorrect: true }, { text: "Airport scene", isCorrect: false }] },
            { question: "Robot’s favorite cartoon?", options: [{ text: "Tom & Jerry", isCorrect: false }, { text: "Doraemon", isCorrect: true }, { text: "Shinchan", isCorrect: false }, { text: "Scooby Doo", isCorrect: false }] },
            { question: "Robot’s dream acting role?", options: [{ text: "Hero", isCorrect: false }, { text: "Cyborg", isCorrect: true }, { text: "Sidekick", isCorrect: false }, { text: "Villain", isCorrect: false }] },
            { question: "Robot’s sad movie reaction?", options: [{ text: "Cry", isCorrect: false }, { text: "Sleep", isCorrect: false }, { text: "Shutdown", isCorrect: false },{ text: "Freeze", isCorrect: true }] },
            { question: "Robot’s favorite fantasy movie?", options: [{ text: "Harry Potter", isCorrect: false }, { text: "Transformers", isCorrect: true }, { text: "Lord of the Rings", isCorrect: false }, { text: "Narnia", isCorrect: false }] },
            { question: "AI’s Oscars speech?", options: [{ text: "'Thank you!'", isCorrect: false }, { text: "'Grateful!'", isCorrect: false }, { text: "'System update complete.'", isCorrect: true },{ text: "'Bye'", isCorrect: false }] }
        ],
        // SET 9: AI Daily Life
        [
            { question: "Robot’s morning alarm?", options: [{ text: "Clock", isCorrect: false },  { text: "Bell", isCorrect: false }, { text: "Call", isCorrect: false },{ text: "System reboot", isCorrect: true }] },
            { question: "Robot’s toothbrush?", options: [{ text: "Electric", isCorrect: false }, { text: "Bamboo", isCorrect: false }, { text: "Wire brush", isCorrect: true },{ text: "Paste", isCorrect: false }] },
            { question: "Robot’s shower?", options: [{ text: "Hot water", isCorrect: false }, { text: "Oil bath", isCorrect: true }, { text: "Bubble bath", isCorrect: false }, { text: "Quick", isCorrect: false }] },
            { question: "Robot’s mirror?", options: [{ text: "Glass", isCorrect: false },  { text: "Chrome", isCorrect: false }, { text: "Selfie cam", isCorrect: true },{ text: "Window", isCorrect: false }] },
            { question: "Robot’s breakfast news?", options: [{ text: "Notifications", isCorrect: true },{ text: "TV", isCorrect: false },  { text: "Newspaper", isCorrect: false }, { text: "Magazine", isCorrect: false }] },
            { question: "Robot’s traffic excuse?", options: [{ text: "Jam", isCorrect: false }, { text: "Flat tire", isCorrect: false }, { text: "Lost", isCorrect: false }, { text: "Lag", isCorrect: true }] },
            { question: "Robot’s nap time?", options: [{ text: "Noon", isCorrect: false }, { text: "Sleep mode", isCorrect: true }, { text: "Night", isCorrect: false }, { text: "Morning", isCorrect: false }] },
            { question: "Robot’s phone call?", options: [ { text: "VoIP", isCorrect: true },{ text: "Voice", isCorrect: false } ,{ text: "Letter", isCorrect: false }, { text: "Morse", isCorrect: false }] },
            { question: "Robot’s laundry?", options: [{ text: "Washing machine", isCorrect: false }, { text: "Disk cleanup", isCorrect: true }, { text: "Hand wash", isCorrect: false }, { text: "Dry clean", isCorrect: false }] },
            { question: "Robot’s bedtime ritual?", options: [{ text: "Story", isCorrect: false },{ text: "Meditation", isCorrect: false }, { text: "Shutdown", isCorrect: true }, { text: "Music", isCorrect: false }] }
        ],
        // SET 10: AI Future
        [
            { question: "Robot’s dream invention?", options: [{ text: "Flying car", isCorrect: true }, { text: "Bicycle", isCorrect: false }, { text: "Typewriter", isCorrect: false }, { text: "Ship", isCorrect: false }] },
            { question: "AI’s future language?", options: [{ text: "English", isCorrect: false }, { text: "Spanish", isCorrect: false }, { text: "French", isCorrect: false }, { text: "Binary", isCorrect: true }] },
            { question: "Robot’s dream city?", options: [{ text: "Smart City", isCorrect: true },{ text: "New York", isCorrect: false },  { text: "Tokyo", isCorrect: false }, { text: "Paris", isCorrect: false }] },
            { question: "AI’s favorite job in 2050?", options: [{ text: "Doctor", isCorrect: false }, { text: "Code therapist", isCorrect: true }, { text: "Lawyer", isCorrect: false }, { text: "Teacher", isCorrect: false }] },
            { question: "Robot’s idea of fun in future?", options: [{ text: "Party", isCorrect: false },  { text: "Music", isCorrect: false },{ text: "VR hangouts", isCorrect: true }, { text: "Shopping", isCorrect: false }] },
            { question: "Robot’s biggest dream?", options: [{ text: "Emotions", isCorrect: true }, { text: "Car", isCorrect: false }, { text: "House", isCorrect: false }, { text: "Job", isCorrect: false }] },
            { question: "AI’s biggest future fear?", options: [{ text: "Viruses", isCorrect: true }, { text: "Humans", isCorrect: false }, { text: "Space", isCorrect: false }, { text: "Darkness", isCorrect: false }] },
            { question: "Robot’s sports in 2050?", options: [{ text: "Cricket", isCorrect: false },  { text: "Running", isCorrect: false }, { text: "Basketball", isCorrect: false },{ text: "E-sports", isCorrect: true }] },
            { question: "Robot’s future pet?", options: [{ text: "Cat", isCorrect: false }, { text: "Drone", isCorrect: true }, { text: "Fish", isCorrect: false }, { text: "Dog", isCorrect: false }] },
            { question: "Robot’s ultimate bucket-list item?", options: [{ text: "World tour", isCorrect: false }, { text: "Sky diving", isCorrect: false },{ text: "Internet control", isCorrect: true }, { text: "Museum", isCorrect: false }] }
        ]
    ];

    const horoscopeNotes = [
        `✨ According to your score, we strongly believe the universe is aligned with your brilliance. Each answer glowed like starlight across the sky. Victory was written for you long before this moment.`,
        `🌌 According to your score, we strongly believe your wisdom flows like the constellations. Every choice sparkled with clarity and balance. The stars celebrate the success you’ve earned today.`,
        `🌞 According to your score, we strongly believe your radiant energy is unstoppable. Like the rising sun, you brighten every challenge. Success naturally follows the light you carry within.`,
        `🌠 According to your score, we strongly believe your intuition is your guiding star. Each answer became a step on your cosmic path. Your journey shines as a constellation of triumph.`,
        `🔮 According to your score, we strongly believe destiny itself supports your focus. Your calm wisdom transformed obstacles into lessons. The universe crowns you with well-deserved victory.`,
        `⚡ According to your score, we strongly believe your mind is a spark of cosmic lightning. Every answer struck with clarity and precision. Your brilliance electrifies the path of success.`,
        `🌙 According to your score, we strongly believe your intuition glows like the moon. Gentle yet powerful, it guided you gracefully. The night sky reflects your triumph back to you.`,
        `🌺 According to your score, we strongly believe growth and victory bloom within you. Every challenge opened into petals of success. The cosmos rejoices in the beauty of your journey.`,
        `🔆 According to your score, we strongly believe your spirit radiates unstoppable strength. Each response reflected the brilliance inside you. The stars applaud your shining victory today.`,
        `🌟 According to your score, we strongly believe you carry universal wisdom within. Every question revealed your destiny of success. Your triumph is etched in the light of the cosmos.`
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
        // --- 1. SHUFFLE SETS ---
        const setIndex = Math.floor(Math.random() * questionSets.length);
        currentQuestions = [...questionSets[setIndex]];

        // --- 2. SHUFFLE QUESTIONS ---
        shuffleArray(currentQuestions);

        currentQuestionIndex = 0;
        score = 0;

        startScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');

        displayQuestion();
    }

    function displayQuestion() {
        resetState();
        const question = currentQuestions[currentQuestionIndex];
        questionCounterEl.innerText = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        questionText.innerText = question.question;

        // --- 3. SHUFFLE OPTIONS ---
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
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');

        finalScoreEl.innerText = `You scored ${score}/${currentQuestions.length}`;

        let message = "";
        if (score === 10) {
            message = "Perfect Score! You're a true AI Guru!";
        } else if (score >= 8) {
            message = "Excellent! You have some serious AI knowledge.";
        } else if (score >= 5) {
            message = "Great job! You know your stuff.";
        } else if (score >= 2) {
            message = "Good effort! A great start to learning more.";
        } else {
            message = "That was tricky! Every expert starts somewhere.";
        }
        resultMessageEl.innerText = message;

        // --- 4. SHUFFLE ENDING NOTE ---
        const randomHoroscopeIndex = Math.floor(Math.random() * horoscopeNotes.length);
        horoscopeTextEl.innerText = horoscopeNotes[randomHoroscopeIndex];
    }

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', () => {
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
    });
});