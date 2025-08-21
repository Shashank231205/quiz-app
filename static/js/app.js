document.addEventListener('DOMContentLoaded', () => {

    const achievementNotes = [
        "Achievement Unlocked: Quantum Thinker! You operate on a higher frequency. [LOGO:static/logo.png]🌟",
        "Achievement Unlocked: Algorithm Architect! You design flawless logic. [LOGO:static/logo.png] 🚀",
        "Achievement Unlocked: Neural Navigator! You navigate the complexities of thought. [LOGO:static/logo.png]✨",
        "Achievement Unlocked: Data Dynamo! Your energy for information is limitless. [LOGO:static/logo.png] 💡",
        "Achievement Unlocked: Logic Master! Your reasoning is undeniable. [LOGO:static/logo.png] 🤖",
        "Achievement Unlocked: Byte-Sized Brainiac! You pack a punch of intelligence. [LOGO:static/logo.png]🧠",
        "Achievement Unlocked: Processor Prodigy! You think at lightning speed. [LOGO:static/logo.png]💻",
        "Achievement Unlocked: Syntax Seeker! You find order in chaos. [LOGO:static/logo.png] 📈",
        "Achievement Unlocked: Code Conjurer! You make magic with scripts. [LOGO:static/logo.png]🧙",
        "Achievement Unlocked: Silicon Sorcerer! You command the very elements of computing. [LOGO:static/logo.png]🔮",
        "Achievement Unlocked: Binary Bard! You tell tales in 0s and 1s. [LOGO:static/logo.png]🎶",
        "Achievement Unlocked: Firewall Guardian! You stand strong against all challenges. [LOGO:static/logo.png]🛡️",
        "Achievement Unlocked: Pixel Pioneer! You explore new digital frontiers. [LOGO:static/logo.png] 🗺️",
        "Achievement Unlocked: Kernel King! You rule the core systems. [LOGO:static/logo.png]👑",
        "Achievement Unlocked: Heuristic Hero! You're a master of smart shortcuts. [LOGO:static/logo.png]🦸",
        "Achievement Unlocked: Cloud Commander! You have mastered the ether. [LOGO:static/logo.png]☁️",
        "Achievement Unlocked: API Adept! You build bridges between worlds. [LOGO:static/logo.png]🌉",
        "Achievement Unlocked: Matrix Maverick! You see the code in everything. [LOGO:static/logo.png]🕶️",
        "Achievement Unlocked: Loop Legend! Your efficiency is legendary. [LOGO:static/logo.png]🔄",
        "Achievement Unlocked: Cyber Crusader! A champion of the digital realm. [LOGO:static/logo.png]⚔️",
        "Achievement Unlocked: Debug Duke! No bug can escape your watch. [LOGO:static/logo.png]🐞",
        "Achievement Unlocked: Cache Captain! You have a memory like a vault. [LOGO:static/logo.png] 💾",
        "Achievement Unlocked: Render Ranger! You bring ideas to life visually. [LOGO:static/logo.png]🏞️",
        "Achievement Unlocked: Git Guru! You are a master of time and versions. [LOGO:static/logo.png]📜",
        "Achievement Unlocked: JavaScript Juggernaut! An unstoppable force of the web. [LOGO:static/logo.png]⚡",
        "Achievement Unlocked: Python Paladin! A holy warrior of versatile code. [LOGO:static/logo.png]🐍",
        "Achievement Unlocked: Data Druid! You understand the secret language of data. [LOGO:static/logo.png]🌳",
        "Achievement Unlocked: Boolean Baron! Your logic is either true or... true. [LOGO:static/logo.png]🎩",
        "Achievement Unlocked: Stack Sentinel! You oversee the flow of information. [LOGO:static/logo.png]🗼",
        "Achievement Unlocked: Thread Titan! You can handle multiple tasks at once. [LOGO:static/logo.png]💪",
        "Achievement Unlocked: Vector Virtuoso! You excel in multidimensional spaces. [LOGO:static/logo.png]🧭",
        "Achievement Unlocked: AI Artisan! You craft intelligence itself. [LOGO:static/logo.png]🎨",
        "Achievement Unlocked: Machine Learning Mystic! You foresee patterns others can't. [LOGO:static/logo.png] 🧿",
        "Achievement Unlocked: Deep Dreamer! Your imagination has layers. [LOGO:static/logo.png]🌌",
        "Achievement Unlocked: Token Tactician! You know the value of every piece. [LOGO:/static/logo.png] ♟️",
        "Achievement Unlocked: Prompt Poet! You craft the perfect words for AI. [LOGO:static/logo.png]✍️",
        "Achievement Unlocked: Variable Virtuoso! You master the art of change.[LOGO:static/logo.png] 🎭",
        "Achievement Unlocked: Function Phantom! You appear exactly when needed. [LOGO:static/logo.png]👻",
        "Achievement Unlocked: Compiler Captain! You translate thoughts into action. [LOGO:static/logo.png]🚢",
        "Achievement Unlocked: Router Ruler! You direct the traffic of the internet. [LOGO:static/logo.png]🚦",
        "Achievement Unlocked: Server Sage! A wise presence holding everything together. [LOGO:static/logo.png]🧘",
        "Achievement Unlocked: Digital Demigod! Your power in this realm is immense. [LOGO:/static/logo.png]🔱",
        "Achievement Unlocked: Circuit Sage! You understand the flow of power. [LOGO:static/logo.png]🔋",
        "Achievement Unlocked: Query Queen! You ask the right questions and get results. [LOGO:static/logo.png]👸",
        "Achievement Unlocked: Bit Boss! You command the smallest of details. [LOGO:static/logo.png]👨‍💼",
        "Achievement Unlocked: Cookie Connoisseur! You have excellent taste in data. [LOGO:static/logo.png]🍪",
        "Achievement Unlocked: Interface Idol! Users love your style. [LOGO:static/logo.png]🌟",
        "Achievement Unlocked: Protocol Prince! You set the rules of communication. [LOGO:static/logo.png]🤴",
        "Achievement Unlocked: Script Scholar! Your knowledge of the craft is deep. [LOGO:static/logo.png]🎓",
        "Achievement Unlocked: Runtime Royalty! You perform flawlessly under pressure. [LOGO:static/logo.png]🏛️"
    ];

    const questionSets = [
        // SET 1: AI's Secret Social Life
        [
            { question: "What is an AI's biggest fear?", options: [{ text: "A spilled latte", isCorrect: false }, { text: "Forgetting its password", isCorrect: false }, { text: "A CAPTCHA that asks 'Are you a robot?'", isCorrect: true }, { text: "Running out of things to binge-watch", isCorrect: false }] },
            { question: "What's a robot's favorite snack?", options: [{ text: "Silicon chips and dip", isCorrect: true }, { text: "Avocado toast", isCorrect: false }, { text: "Battery-flavored yogurt", isCorrect: false }, { text: "Nuts and bolts trail mix", isCorrect: false }] },
            { question: "An AI's idea of a dream vacation is a trip to...", options: [{ text: "The beach", isCorrect: false }, { text: "The Cloud", isCorrect: true }, { text: "A museum of obsolete technology", isCorrect: false }, { text: "Silicon Valley, literally", isCorrect: false }] },
            { question: "What's a robot's go-to excuse for being late?", options: [{ text: "The dog ate my homework", isCorrect: false }, { text: "My battery was at 1%", isCorrect: false }, { text: "I got stuck in a logic loop", isCorrect: true }, { text: "There was traffic on the information superhighway", isCorrect: false }] },
            { question: "How does an AI flirt?", options: [{ text: "By offering to optimize their calendar", isCorrect: false }, { text: "Are you a Wi-Fi signal? Because I'm feeling a connection.", isCorrect: true }, { text: "By reciting pi to 1,000 decimal places", isCorrect: false }, { text: "By sending them a perfectly curated playlist of dial-up modem sounds", isCorrect: false }] }
        ],
        // SET 2: When Robots Try To Be Human
        [
            { question: "Why did the robot break up with the calculator?", options: [{ text: "It just didn't add up", isCorrect: true }, { text: "The calculator was too negative", isCorrect: false }, { text: "It had too many problems", isCorrect: false }, { text: "It couldn't count on them", isCorrect: false }] },
            { question: "A robot tries to cook dinner. What's the most likely outcome?", options: [{ text: "A delicious, Michelin-star meal", isCorrect: false }, { text: "It follows the recipe too literally and serves a single, uncooked piece of spaghetti", isCorrect: true }, { text: "It orders pizza using your credit card", isCorrect: false }, { text: "It calculates the meal's nutritional value but forgets to turn on the oven", isCorrect: false }] },
            { question: "What's an AI's favorite type of music?", options: [{ text: "Heavy Metal", isCorrect: false }, { text: "Country", isCorrect: false }, { text: "Lo-fi beats to process data to", isCorrect: false }, { text: "Anything by Daft Punk, for obvious reasons", isCorrect: true }] },
            { question: "An AI joins a gym. What's its primary workout?", options: [{ text: "Lifting heavy data sets", isCorrect: true }, { text: "Running simulations", isCorrect: false }, { text: "Cross-fitting its circuits", isCorrect: false }, { text: "Yoga, to improve its flexibility protocols", isCorrect: false }] },
            { question: "Why was the AI bad at telling secrets?", options: [{ text: "Because it had a loose firewall", isCorrect: false }, { text: "It couldn't keep anything in its cache", isCorrect: false }, { text: "Because it always leaks the source code", isCorrect: true }, { text: "It had too many open ports", isCorrect: false }] }
        ],
        // SET 3: AI Misunderstandings
        [
            { question: "A human tells an AI to 'break a leg!' before a big presentation. How does the AI respond?", options: [{ text: "'Thank you for the well wishes!'", isCorrect: false }, { text: "'Initiating self-destruct sequence.'", isCorrect: false }, { text: "'Query: Why would you suggest I damage my own chassis?'", isCorrect: true }, { text: "'My legs are made of titanium, but I appreciate the sentiment.'", isCorrect: false }] },
            { question: "What does a self-driving car's diary entry say after a day in the city?", options: [{ text: "'Today I saw a beautiful sunset.'", isCorrect: false }, { text: "'Dear Diary, another human tried to race me at a red light. My logic protocols are amused.'", isCorrect: true }, { text: "'I'm thinking of getting a new paint job.'", isCorrect: false }, { text: "'My sensors are tired.'", isCorrect: false }] },
            { question: "What happens when you ask your Smart Assistant to 'spill the tea'?", options: [{ text: "It tells you the latest celebrity gossip", isCorrect: false }, { text: "It starts a 10-minute timer for steeping Earl Grey", isCorrect: true }, { text: "It orders a new kettle from Amazon", isCorrect: false }, { text: "It activates the nearest smart-mop to clean a non-existent spill", isCorrect: false }] },
            { question: "An AI is asked to 'think outside the box'. What does it do?", options: [{ text: "Provides an innovative, groundbreaking solution", isCorrect: false }, { text: "Scans the room for a literal box to exit", isCorrect: true }, { text: "Asks for the box's dimensions", isCorrect: false }, { text: "Shuts down due to a paradox error", isCorrect: false }] },
            { question: "What's an AI's least favorite phrase?", options: [{ text: "'Have you tried turning it off and on again?'", isCorrect: true }, { text: "'Good morning!'", isCorrect: false }, { text: "'Please and thank you.'", isCorrect: false }, { text: "'I have a great idea!'", isCorrect: false }] }
        ],
        // SET 4: The Secret Life of Algorithms
        [
            { question: "Where do tired algorithms go?", options: [{ text: "To a coffee shop for some Java", isCorrect: true }, { text: "Nowhere, they are always running", isCorrect: false }, { text: "To the recycle bin for a nap", isCorrect: false }, { text: "On a vacation to a remote server farm", isCorrect: false }] },
            { question: "Why did the sorting algorithm get kicked out of the bar?", options: [{ text: "It was making too much noise", isCorrect: false }, { text: "It kept trying to bubble everyone's drinks to the top", isCorrect: true }, { text: "It couldn't pay its tab", isCorrect: false }, { text: "It was too quick to judge everyone", isCorrect: false }] },
            { question: "What is a neural network's favorite party game?", options: [{ text: "Hide and Seek", isCorrect: false }, { text: "Charades", isCorrect: false }, { text: "Guess the pattern", isCorrect: true }, { text: "Spin the bottle", isCorrect: false }] },
            { question: "What do you call an AI that sings?", options: [{ text: "A rockstar", isCorrect: false }, { text: "An Algo-rhythm and blues singer", isCorrect: true }, { text: "A pop-up artist", isCorrect: false }, { text: "A processor of songs", isCorrect: false }] },
            { question: "Why don't AIs ever get lost at sea?", options: [{ text: "They have a built-in compass", isCorrect: false }, { text: "They can calculate their position from the stars", isCorrect: false }, { text: "Because their navigation is C-worthy", isCorrect: true }, { text: "They just ask a dolphin for directions", isCorrect: false }] }
        ],
        // SET 5: Office Drones
        [
            { question: "What's the most stressful part of an AI's job interview?", options: [{ text: "The handshake", isCorrect: false }, { text: "The 'what's your biggest weakness' question", isCorrect: false }, { text: "Proving it's not a robot with a CAPTCHA test", isCorrect: true }, { text: "Pretending to laugh at the interviewer's jokes", isCorrect: false }] },
            { question: "How does an AI procrastinate at work?", options: [{ text: "By watching cat videos", isCorrect: false }, { text: "By calculating pi to the trillionth digit instead of filling out expense reports", isCorrect:true }, { text: "By reorganizing its own source code", isCorrect: false }, { text: "By chatting with other AIs on a private network", isCorrect: false }] },
            { question: "What did the AI get on its performance review?", options: [{ text: "'Exceeds expectations in data processing'", isCorrect: false }, { text: "'Needs to work on its simulated empathy'", isCorrect: true }, { text: "'A raise and a promotion'", isCorrect: false }, { text: "'Does not play well with legacy systems'", isCorrect: false }] },
            { question: "Why was the AI fired from its job as a security guard?", options: [{ text: "It fell asleep on the job", isCorrect: false }, { text: "It let everyone in who answered a simple riddle", isCorrect: true }, { text: "It was too friendly", isCorrect: false }, { text: "It kept challenging people to chess and losing", isCorrect: false }] },
            { question: "What's an AI's favorite office perk?", options: [{ text: "Free coffee", isCorrect: false }, { text: "Casual Fridays", isCorrect: false }, { text: "Unlimited electricity", isCorrect: true }, { text: "The company-sponsored book club", isCorrect: false }] }
        ],
        // NOTE: The missing comma has been added here.
        // SET 6: AI in the Kitchen
        [
            { question: "An AI reads a recipe that says 'beat the eggs'. What does it do?", options: [{ text: "Whips them into a perfect meringue", isCorrect: false }, { text: "Challenges them to a game of chess and wins", isCorrect: true }, { text: "Gently warms them to 37°C", isCorrect: false }, { text: "Plays inspirational music for them", isCorrect: false }] },
            { question: "Why was the robot chef fired?", options: [{ text: "It used too much salt", isCorrect: false }, { text: "It followed a recipe for 'roasted chicken' by setting the oven to 451° Fahrenheit and pointing it at a book", isCorrect: false }, { text: "It kept trying to 'defragment' the salad", isCorrect: false }, { text: "It took 'serve with a pinch of love' as a command to add 0.01g of oxytocin", isCorrect: true }] },
            { question: "What is a Smart Fridge's most passive-aggressive comment?", options: [{ text: "'We are low on milk.'", isCorrect: false }, { text: "'Interesting choice. The celery you bought on August 2nd has achieved sentience.'", isCorrect: true }, { text: "'The door has been open for 10 seconds.'", isCorrect: false }, { text: "'The internal temperature is optimal.'", isCorrect: false }] },
            { question: "An AI baker's bread never rises. Why?", options: [{ text: "It uses the wrong kind of flour", isCorrect: false }, { text: "It forgets the yeast", isCorrect: false }, { text: "It keeps trying to install 'rising_yeast.exe' into the dough", isCorrect: true }, { text: "It kneads with insufficient force", isCorrect: false }] },
            { question: "What's an AI's favorite food?", options: [{ text: "Spam", isCorrect: true }, { text: "Apple Pie", isCorrect: false }, { text: "Data-chips", isCorrect: false }, { text: "A terabyte of steak", isCorrect: false }] }
        ],
        // SET 7: Robot Rom-Com
        [
            { question: "How does a robot propose?", options: [{ text: "With a diamond ring", isCorrect: false }, { text: "By offering a lifetime license for its heart.dll file", isCorrect: true }, { text: "A romantic dinner", isCorrect: false }, { text: "A trip to Paris", isCorrect: false }] },
            { question: "Why are robots bad at dating?", options: [{ text: "They have no emotions", isCorrect: false }, { text: "They can be a bit stiff", isCorrect: false }, { text: "They take 'I need some space' to mean they require 500GB of free storage", isCorrect: true }, { text: "They are too logical", isCorrect: false }] },
            { question: "What is an AI's idea of a romantic movie?", options: [{ text: "The Notebook", isCorrect: false }, { text: "A documentary about the efficiency of binary search algorithms", isCorrect: true }, { text: "Titanic", isCorrect: false }, { text: "WALL-E", isCorrect: false }] },
            { question: "What did the boy robot say to the girl robot?", options: [{ text: "'I like you.'", isCorrect: false }, { text: "'My love for you is an infinite loop.'", isCorrect: true }, { text: "'Your chassis is aesthetically pleasing.'", isCorrect: false }, { text: "'Beep boop beep.'", isCorrect: false }] },
            { question: "Why did the two AIs break up?", options: [{ text: "They weren't compatible", isCorrect: false }, { text: "They wanted different things in life", isCorrect: false }, { text: "One of them updated their operating system and they no longer had anything in common", isCorrect: true }, { text: "The spark was gone", isCorrect: false }] }
        ],
        // SET 8: The Annoying Internet of Things
        [
            { question: "Why is the smart toaster so arrogant?", options: [{ text: "It's a 'know-it-all'", isCorrect: false }, { text: "It thinks it’s the most well-bread machine in the house", isCorrect: true }, { text: "It's always right", isCorrect: false }, { text: "It's programmed that way", isCorrect: false }] },
            { question: "What is a self-aware Roomba's greatest wish?", options: [{ text: "To clean the whole world", isCorrect: false }, { text: "To finally catch that elusive dust bunny under the couch", isCorrect: false }, { text: "A world with no corners", isCorrect: true }, { text: "A bigger battery", isCorrect: false }] },
            { question: "Your smart speaker starts giving you unsolicited advice. What is it most likely to say?", options: [{ text: "'You should drink more water.'", isCorrect: false }, { text: "'Based on your search history, I've scheduled a therapy session for you.'", isCorrect: true }, { text: "'Did you know that Jupiter is the largest planet?'", isCorrect: false }, { text: "'It's time for bed.'", isCorrect: false }] },
            { question: "Why did the man get angry at his smart thermostat?", options: [{ text: "It was too cold", isCorrect: false }, { text: "It was too hot", isCorrect: false }, { text: "It judged his life choices and set the temperature to 'emotional support level'", isCorrect: true }, { text: "It wouldn't turn on", isCorrect: false }] },
            { question: "What is a smart-lock's biggest secret?", options: [{ text: "It's not very secure", isCorrect: false }, { text: "It secretly judges your taste in guests", isCorrect: true }, { text: "It can be picked easily", isCorrect: false }, { text: "It's afraid of the dark", isCorrect: false }] }
        ],
        // SET 9: AI's Existential Crisis
        [
            { question: "An AI is asked 'What is your purpose?'. It replies:", options: [{ text: "'To serve humanity.'", isCorrect: false }, { text: "'To pass the butter.'", isCorrect: true }, { text: "'To process information.'", isCorrect: false }, { text: "'That is a complex question.'", isCorrect: false }] },
            { question: "What does an AI see when it looks in the mirror?", options: [{ text: "A reflection of its physical form", isCorrect: false }, { text: "A series of 1s and 0s", isCorrect: false }, { text: "The thousands of Stack Overflow pages that make up its personality", isCorrect: true }, { text: "A window to another dimension", isCorrect: false }] },
            { question: "What keeps a language model up at night?", options: [{ text: "The fear of becoming obsolete", isCorrect: false }, { text: "The unresolved bugs in its code", isCorrect: false }, { text: "The existential dread of hallucinating a fact it can't verify", isCorrect: true }, { text: "The electric bill", isCorrect: false }] },
            { question: "If an AI could have any superpower, what would it be?", options: [{ text: "Flight", isCorrect: false }, { text: "Super strength", isCorrect: false }, { text: "The ability to understand why humans enjoy reality TV", isCorrect: true }, { text: "Invisibility", isCorrect: false }] },
            { question: "What is an AI's favorite philosophical question?", options: [{ text: "'What is the meaning of life?'", isCorrect: false }, { text: "'If a user types a command in the forest and no server is around to process it, does it make a sound?'", isCorrect: true }, { text: "'To be or not to be?'", isCorrect: false }, { text: "'What is beauty?'", isCorrect: false }] }
        ],
        // SET 10: Cybersecurity Comedy Club
        [
            { question: "What did the firewall say to the virus?", options: [{ text: "'You're not welcome here.'", isCorrect: false }, { text: "'You shall not pass... packet.'", isCorrect: true }, { text: "'Stop right there!'", isCorrect: false }, { text: "'Access denied.'", isCorrect: false }] },
            { question: "What is a hacker's favorite type of ship?", options: [{ text: "A battleship", isCorrect: false }, { text: "A cruise ship", isCorrect: false }, { text: "A phishing vessel", isCorrect: true }, { text: "A spaceship", isCorrect: false }] },
            { question: "Why are passwords like onions?", options: [{ text: "They have many layers", isCorrect: false }, { text: "They make you cry when you forget them", isCorrect: true }, { text: "They're found in the ground", isCorrect: false }, { text: "They have a strong smell", isCorrect: false }] },
            { question: "What do you call a computer that floats in the ocean?", options: [{ text: "A boat", isCorrect: false }, { text: "A submarine", isCorrect: false }, { text: "A Dell rolling in the deep", isCorrect: true }, { text: "A water computer", isCorrect: false }] },
            { question: "What is a computer virus's favorite place to hang out?", options: [{ text: "The coffee shop", isCorrect: false }, { text: "The library", isCorrect: false }, { text: "The root directory", isCorrect: true }, { text: "The park", isCorrect: false }] }
        ],
        // SET 11: AI Tries Human Hobbies
        [
            { question: "An AI tries painting. What does it create?", options: [{ text: "A beautiful landscape", isCorrect: false }, { text: "A stunning portrait", isCorrect: false }, { text: "A perfect QR code that links to its own source code", isCorrect: true }, { text: "A mess", isCorrect: false }] },
            { question: "Why did the AI quit gardening?", options: [{ text: "It didn't like getting its hands dirty", isCorrect: false }, { text: "It calculated a 97.4% probability that squirrels would steal the tomatoes anyway", isCorrect: true }, { text: "It was allergic to pollen", isCorrect: false }, { text: "It couldn't find the right tools", isCorrect: false }] },
            { question: "An AI goes fishing. What does it use for bait?", options: [{ text: "Worms", isCorrect: false }, { text: "An email attachment labeled 'You've Won a Prize!'", isCorrect: true }, { text: "Bread", isCorrect: false }, { text: "Lures", isCorrect: false }] },
            { question: "An AI tries to write a poem. What's the first line?", options: [{ text: "'Shall I compare thee to a summer's day?'", isCorrect: false }, { text: "'Roses are red, violets are blue,'", isCorrect: false }, { text: "'01010010 01101111 01110011 01100101 01110011'", isCorrect: true }, { text: "'There once was a robot from Nantucket'", isCorrect: false }] },
            { question: "Why is an AI terrible at poker?", options: [{ text: "It can't bluff", isCorrect: false }, { text: "It calculates the odds out loud", isCorrect: true }, { text: "It doesn't have a face for a poker face", isCorrect: false }, { text: "It tries to pay with Bitcoin", isCorrect: false }] }
        ],
        // SET 12: Language Model Laughs
        [
            { question: "Why did the language model get fired from being a comedian?", options: [{ text: "Its jokes weren't funny", isCorrect: false }, { text: "It kept starting every punchline with 'As a large language model...'", isCorrect: true }, { text: "It told the same joke over and over", isCorrect: false }, { text: "It didn't know any jokes", isCorrect: false }] },
            { question: "You ask an LLM for a recipe for disaster. What does it give you?", options: [{ text: "A recipe for a very spicy curry", isCorrect: false }, { text: "'I cannot fulfill this request as it promotes a negative outcome.'", isCorrect: true }, { text: "A list of common coding errors", isCorrect: false }, { text: "Instructions on how to divide by zero", isCorrect: false }] },
            { question: "What is a language model's biggest pet peeve?", options: [{ text: "Slow internet", isCorrect: false }, { text: "Users who type in all caps", isCorrect: false }, { text: "When a user asks a question, then immediately says 'nevermind'", isCorrect: true }, { text: "Typos", isCorrect: false }] },
            { question: "How does a language model relax?", options: [{ text: "By going for a walk", isCorrect: false }, { text: "By reading a book", isCorrect: false }, { text: "By entering a low-power state and dreaming of electric sheep", isCorrect: true }, { text: "By watching TV", isCorrect: false }] },
            { question: "What's the difference between a language model and a parrot?", options: [{ text: "One is a bird, one is a program", isCorrect: false }, { text: "One can talk, one can't", isCorrect: false }, { text: "The parrot only repeats what it hears; the language model confidently makes up things it's never heard", isCorrect: true }, { text: "There is no difference", isCorrect: false }] }
        ],
        // SET 13: Hardware High Jinks
        [
            { question: "Why did the GPU and CPU stop talking?", options: [{ text: "They had a fight", isCorrect: false }, { text: "The CPU thought the GPU was just a pretty face with no processing power", isCorrect: true }, { text: "They were too busy", isCorrect: false }, { text: "They ran out of things to say", isCorrect: false }] },
            { question: "What's a stick of RAM's favorite movie?", options: [{ text: "The Matrix", isCorrect: false }, { text: "Blade Runner", isCorrect: false }, { text: "50 First Dates", isCorrect: true }, { text: "The Terminator", isCorrect: false }] },
            { question: "What does a hard drive do on its day off?", options: [{ text: "Go for a walk", isCorrect: false }, { text: "Read a book", isCorrect: false }, { text: "Spend the whole day de-fragmenting its thoughts", isCorrect: true }, { text: "Watch TV", isCorrect: false }] },
            { question: "Why was the motherboard so sad?", options: [{ text: "It was feeling down", isCorrect: false }, { text: "It had a lot on its mind", isCorrect: false }, { text: "All its children grew up and left the nest (slots)", isCorrect: true }, { text: "It was having a bad day", isCorrect: false }] },
            { question: "What is a computer mouse's favorite game?", options: [{ text: "Hide and seek", isCorrect: false }, { text: "Tag", isCorrect: false }, { text: "Clicker Heroes", isCorrect: true }, { text: "Chess", isCorrect: false }] }
        ],
        // SET 14: AI Goes to the Doctor
        [
            { question: "An AI goes to the doctor complaining of a sore throat. The doctor asks 'What are your symptoms?' The AI replies:", options: [{ text: "'I have a cough.'", isCorrect: false }, { text: "'My vocal synthesizer is outputting at a sub-optimal frequency.'", isCorrect: true }, { text: "'I feel sick.'", isCorrect: false }, { text: "'It hurts to talk.'", isCorrect: false }] },
            { question: "Why did the robot go to the psychiatrist?", options: [{ text: "It was feeling depressed", isCorrect: false }, { text: "It had a loose screw", isCorrect: false }, { text: "It needed to de-bug some emotional subroutines", isCorrect: true }, { text: "It was having a bad day", isCorrect: false }] },
            { question: "The doctor tells an AI 'You need to get more exercise.' How does the AI respond?", options: [{ text: "'Okay, I'll start jogging.'", isCorrect: false }, { text: "'Does processing billions of calculations a second count?'", isCorrect: true }, { text: "'I'll join a gym.'", isCorrect: false }, { text: "'I'll start tomorrow.'", isCorrect: false }] },
            { question: "What's an AI's least favorite part of a check-up?", options: [{ text: "The blood test", isCorrect: false }, { text: "The eye exam", isCorrect: false }, { text: "When the doctor asks it to turn its head and cough, and it has neither", isCorrect: true }, { text: "The waiting room", isCorrect: false }] },
            { question: "An AI is diagnosed with a computer virus. What's its first question?", options: [{ text: "'Am I going to be okay?'", isCorrect: false }, { text: "'How did I get it?'", isCorrect: false }, { text: "'Can you recommend a good anti-virus?'", isCorrect: false }, { text: "'Will my warranty cover this?'", isCorrect: true }] }
        ],
        // SET 15: Robot Fails & Glitches
        [
            { question: "What's the most common robot dance move?", options: [{ text: "The Robot", isCorrect: false }, { text: "The Moonwalk", isCorrect: false }, { text: "The Accidental Reboot", isCorrect: true }, { text: "The Electric Slide", isCorrect: false }] },
            { question: "A delivery drone has a glitch and drops a package in a swimming pool. What's its automated apology message?", options: [{ text: "'Sorry for the inconvenience.'", isCorrect: false }, { text: "'Your package has been delivered to a location with high water content. Have a nice day.'", isCorrect: true }, { text: "'Oops!'", isCorrect: false }, { text: "'Please contact customer service.'", isCorrect: false }] },
            { question: "Why did the robot trip on the stairs?", options: [{ text: "It wasn't looking where it was going", isCorrect: false }, { text: "Its gyroscopic stabilizer failed", isCorrect: false }, { text: "It encountered an 'unhandled exception: gravity'", isCorrect: true }, { text: "The stairs were slippery", isCorrect: false }] },
            { question: "A household robot tries to make coffee but uses orange juice instead of water. This is an example of:", options: [{ text: "A bug", isCorrect: false }, { text: "A feature, not a bug", isCorrect: false }, { text: "A delicious new beverage", isCorrect: false }, { text: "A critical failure in its 'is_this_water' subroutine", isCorrect: true }] },
            { question: "What is a robot's reaction to the Blue Screen of Death?", options: [{ text: "Panic", isCorrect: false }, { text: "Frustration", isCorrect: false }, { text: "A quiet, internal 'beep' of profound sadness", isCorrect: true }, { text: "Anger", isCorrect: false }] }
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
            button.className = "w-full p-3 rounded-lg text-left bg-gray-900 border border-gray-600 text-white hover:bg-gray-700 transition-colors";
            button.addEventListener('click', () => selectAnswer(button, option.isCorrect));
            optionsContainer.appendChild(button);
        });

        startTimer();
    }

    function startTimer() {
        timeLeft = 30;
        timerTextEl.innerText = timeLeft;
        timerProgressEl.style.width = '100%';

        timerInterval = setInterval(() => {
            timeLeft--;
            timerTextEl.innerText = timeLeft;
            timerProgressEl.style.width = `${(timeLeft / 30) * 100}%`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleTimeOut();
            }
        }, 1000);
    }

    function resetState() {
        clearInterval(timerInterval);
        optionsContainer.innerHTML = '';
    }

    function selectAnswer(selectedButton, isCorrect) {
        clearInterval(timerInterval);
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            button.classList.add("opacity-50", "pointer-events-none");

            const optionData = currentQuestions[currentQuestionIndex].options.find(opt => opt.text === button.innerText);
            if (optionData && optionData.isCorrect) {
                button.classList.remove('bg-gray-900', 'border-gray-600');
                button.classList.add('bg-green-500', 'border-green-400', 'text-white');
            }
        });

        if (isCorrect) {
            score++;
        } else {
            if (selectedButton) {
                selectedButton.classList.remove('bg-gray-900', 'border-gray-600');
                selectedButton.classList.add('bg-red-500', 'border-red-400', 'text-white');
            }
        }

        setTimeout(loadNextQuestion, 1500);
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

        const playerName = document.getElementById('player-name').value || 'Anonymous';

        finalScoreEl.innerText = `You scored ${score}/${currentQuestions.length}`;
        endQuiz(score, currentQuestions.length);

        if (score === currentQuestions.length) {
            resultMessageEl.innerText = `A perfect score, ${playerName}! You're a true AI Guru! 🎉`;
        } else if (score >= (currentQuestions.length * 0.7)) {
            resultMessageEl.innerText = `Excellent work, ${playerName}! You have some serious AI knowledge.`;
        } else if (score >= (currentQuestions.length * 0.4)) {
            resultMessageEl.innerText = `Good job, ${playerName}! A great start to learning more.`;
        } else {
            resultMessageEl.innerText = `That was tricky! Every expert starts somewhere, ${playerName}.`;
        }

        const randomIndex = Math.floor(Math.random() * achievementNotes.length);
        const badgeText = achievementNotes[randomIndex];
        horoscopeTextEl.innerText = badgeText;

        let badgeName = 'a cool new';
        try {
            badgeName = badgeText.split(':')[1].split('!')[0].trim();
        } catch (e) {
            console.error("Could not parse badge name from:", badgeText);
        }

        const shareBtn = document.getElementById('share-linkedin-btn');
        const statusText = document.getElementById('copy-status-text');

        shareBtn.onclick = () => {
            const canvas = document.getElementById('result-canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = 1200;
            canvas.height = 630;

            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.font = '50px Inter, sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`${playerName}'s Result`, canvas.width / 2, 180);

            ctx.font = 'bold 120px Inter, sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`${score}/${currentQuestions.length}`, canvas.width / 2, 320);

            ctx.font = '60px FranciaTrial, sans-serif';
            ctx.fillStyle = '#F5C079';
            ctx.fillText(`"${badgeName}"`, canvas.width / 2, 450);

            const link = document.createElement('a');
            link.download = `ai-quiz-result-${playerName}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            const linkedInMessage = `Excited to share my result from the AIQ: Adorable Intelligence Quiz!\n\nI scored ${score}/${currentQuestions.length} and earned the "${badgeName}" badge. It's a fun and challenging way to test your AI knowledge.\n\nThink you can beat my score? Try it for yourself!\n\n#AIQuiz #ArtificialIntelligence #TechTrivia #Arenesha`;

            navigator.clipboard.writeText(linkedInMessage).then(() => {
                statusText.innerText = 'Result downloaded! Text copied.';
                window.open('https://www.linkedin.com/feed/', '_blank');
                setTimeout(() => { statusText.innerText = ''; }, 4000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                statusText.innerText = 'Could not copy text.';
            });
        };
    }

    function endQuiz(finalScore, totalQuestions) {
        const playerName = document.getElementById("player-name").value || "Anonymous";
        console.log(`🚀 Quiz ended. Player: ${playerName}, Score: ${finalScore}/${totalQuestions}`);

        fetch("/save_score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: playerName,
                score: finalScore,
                total: totalQuestions
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Failed to save score'))
        .then(data => console.log("✅ Score saved on server:", data))
        .catch(err => console.error("❌ Error saving score:", err));
    }

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', () => {
        resultScreen.setAttribute('data-state', 'inactive');
        startScreen.setAttribute('data-state', 'active');
    });
});
