// --- BASE DE DONNÉES CONSOLIDÉE (140 Mots de la Ville sur 7 Niveaux) ---
const fruitsData = [
    // NIVEAU 1 : Transports, Axes & Orientation (20 mots)
    { en: "City", fr: "Ville / Grande ville", emoji: "🏙️", level: 1 },
    { en: "Street", fr: "Rue", emoji: "🛣️", level: 1 },
    { en: "Sidewalk", fr: "Trottoir", emoji: "🚶", level: 1 },
    { en: "Crosswalk", fr: "Passage piéton", emoji: "🚸", level: 1 },
    { en: "Traffic light", fr: "Feu de signalisation", emoji: "🚦", level: 1 },
    { en: "Square", fr: "Place (publique)", emoji: "🟩", level: 1 },
    { en: "Bridge", fr: "Pont", emoji: "🌉", level: 1 },
    { en: "Bus stop", fr: "Arrêt de bus", emoji: "🚌", level: 1 },
    { en: "Subway station", fr: "Station de métro", emoji: "🚇", level: 1 },
    { en: "Train station", fr: "Gare", emoji: "🚉", level: 1 }, // 🟢 Corrigé
    { en: "Parking lot", fr: "Parking", emoji: "🅿️", level: 1 },
    { en: "Park", fr: "Parc", emoji: "🌳", level: 1 },
    { en: "Bench", fr: "Banc", emoji: "🪑", level: 1 },
    { en: "Fountain", fr: "Fontaine", emoji: "⛲", level: 1 }, // 🟢 Corrigé
    { en: "Avenue", fr: "Avenue", emoji: "🛣️", level: 1 },
    { en: "Road", fr: "Route", emoji: "🚗", level: 1 },
    { en: "Corner", fr: "Coin / Angle de rue", emoji: "📐", level: 1 },
    { en: "Map", fr: "Plan / Carte de la ville", emoji: "🗺️", level: 1 },
    { en: "Sign", fr: "Panneau de signalisation / Enseigne", emoji: "🪧", level: 1 },
    { en: "Bicycle lane", fr: "Piste cyclable", emoji: "🚲", level: 1 },

    // NIVEAU 2 : Administration & Services publics (20 mots)
    { en: "City hall", fr: "Mairie / Hôtel de ville", emoji: "🏛️", level: 2 },
    { en: "Police station", fr: "Commissariat de police", emoji: "👮", level: 2 },
    { en: "Fire station", fr: "Caserne de pompiers", emoji: "🚒", level: 2 },
    { en: "Post office", fr: "Bureau de poste", emoji: "🏣", level: 2 },
    { en: "Hospital", fr: "Hôpital", emoji: "🏥", level: 2 },
    { en: "Pharmacy", fr: "Pharmacie", emoji: "💊", level: 2 },
    { en: "Bank", fr: "Banque", emoji: "🏦", level: 2 },
    { en: "Library", fr: "Bibliothèque (publique)", emoji: "📚", level: 2 },
    { en: "School", fr: "École", emoji: "🏫", level: 2 },
    { en: "University", fr: "Université", emoji: "🎓", level: 2 },
    { en: "Courthouse", fr: "Tribunal", emoji: "⚖️", level: 2 },
    { en: "Tourist office", fr: "Office de tourisme", emoji: "ℹ️", level: 2 },
    { en: "Public toilet", fr: "Toilettes publiques", emoji: "🚾", level: 2 },
    { en: "Cemetery", fr: "Cimetière", emoji: "🪦", level: 2 },
    { en: "Prison", fr: "Prison", emoji: "⛓️", level: 2 },
    { en: "Community center", fr: "Centre culturel / Maison sociale", emoji: "👥", level: 2 },
    { en: "Embassy", fr: "Ambassade", emoji: "🏢", level: 2 },
    { en: "Clinic", fr: "Clinique", emoji: "🩺", level: 2 },
    { en: "Gas station", fr: "Station-service", emoji: "⛽", level: 2 },
    { en: "Charging station", fr: "Borne de recharge électrique", emoji: "🔌", level: 2 },

    // NIVEAU 3 : Commerces & Magasins (Shopping) (20 mots)
    { en: "Shop", fr: "Magasin / Boutique", emoji: "🛍️", level: 3 },
    { en: "Supermarket", fr: "Supermarché", emoji: "🛒", level: 3 },
    { en: "Bakery", fr: "Boulangerie", emoji: "🥖", level: 3 },
    { en: "Butchery", fr: "Boucherie", emoji: "🥩", level: 3 },
    { en: "Pastry shop", fr: "Pâtisserie", emoji: "🍰", level: 3 },
    { en: "Fishmonger's", fr: "Poissonnerie", emoji: "🐟", level: 3 },
    { en: "Grocery store", fr: "Épicerie", emoji: "🍏", level: 3 },
    { en: "Bookstore", fr: "Librairie (commerce)", emoji: "📚", level: 3 },
    { en: "Clothing store", fr: "Magasin de vêtements", emoji: "👕", level: 3 },
    { en: "Shoe shop", fr: "Magasin de chaussures", emoji: "👟", level: 3 },
    { en: "Jewelry store", fr: "Bijouterie", emoji: "💎", level: 3 },
    { en: "Toy shop", fr: "Magasin de jouets", emoji: "🧸", level: 3 },
    { en: "Florist", fr: "Fleuriste", emoji: "💐", level: 3 },
    { en: "Pet shop", fr: "Animalerie", emoji: "🐶", level: 3 },
    { en: "Shopping mall", fr: "Centre commercial", emoji: "🏢", level: 3 },
    { en: "Market", fr: "Marché", emoji: "🍉", level: 3 },
    { en: "Hairdresser", fr: "Salon de coiffure", emoji: "✂️", level: 3 },
    { en: "Department store", fr: "Grand magasin", emoji: "🏬", level: 3 },
    { en: "Flea market", fr: "Brocante / Marché aux puces", emoji: "🪵", level: 3 },
    { en: "Newsagent's", fr: "Marchand de journaux / Librairie-presse", emoji: "📰", level: 3 },

    // NIVEAU 4 : Culture, Loisirs & Divertissement (20 mots)
    { en: "Cinema", fr: "Cinéma", emoji: "🎬", level: 4 },
    { en: "Theater", fr: "Théâtre", emoji: "🎭", level: 4 },
    { en: "Museum", fr: "Musée", emoji: "🏛️", level: 4 },
    { en: "Art gallery", fr: "Galerie d'art", emoji: "🖼️", level: 4 },
    { en: "Stadium", fr: "Stade", emoji: "🏟️", level: 4 },
    { en: "Swimming pool", fr: "Piscine", emoji: "🏊", level: 4 },
    { en: "Gym", fr: "Salle de sport", emoji: "🏋️", level: 4 },
    { en: "Playground", fr: "Plaine de jeux", emoji: "🛝", level: 4 },
    { en: "Zoo", fr: "Zoo", emoji: "🦁", level: 4 },
    { en: "Aquarium", fr: "Aquarium", emoji: "🐠", level: 4 },
    { en: "Amusement park", fr: "Parc d'attractions", emoji: "🎡", level: 4 },
    { en: "Bowling alley", fr: "Bowling", emoji: "🎳", level: 4 },
    { en: "Casino", fr: "Casino", emoji: "🎰", level: 4 },
    { en: "Nightclub", fr: "Boîte de nuit / Discothèque", emoji: "🪩", level: 4 },
    { en: "Hotel", fr: "Hôtel", emoji: "🏨", level: 4 },
    { en: "Youth hostel", fr: "Auberge de jeunesse", emoji: "🎒", level: 4 },
    { en: "Skatepark", fr: "Skatepark", emoji: "🛹", level: 4 },
    { en: "Concert hall", fr: "Salle de concert", emoji: "🎤", level: 4 },
    { en: "Opera house", fr: "Opéra (Bâtiment)", emoji: "🎼", level: 4 },
    { en: "Botanical garden", fr: "Jardin botanique", emoji: "🌺", level: 4 },

    // NIVEAU 5 : Restauration & Vie Urbaine Quotidienne (20 mots)
    { en: "Restaurant", fr: "Restaurant", emoji: "🍽️", level: 5 },
    { en: "Café", fr: "Café (Lieu)", emoji: "☕", level: 5 },
    { en: "Bar", fr: "Bar", emoji: "🍺", level: 5 },
    { en: "Pub", fr: "Pub", emoji: "🍻", level: 5 },
    { en: "Pizzeria", fr: "Pizzeria", emoji: "🍕", level: 5 },
    { en: "Fast food", fr: "Fast-food", emoji: "🍔", level: 5 },
    { en: "Food truck", fr: "Camion-restaurant", emoji: "🚚", level: 5 },
    { en: "Ice cream parlor", fr: "Glacier", emoji: "🍦", level: 5 },
    { en: "Terrace", fr: "Terrasse", emoji: "⛱️", level: 5 },
    { en: "Bistro", fr: "Bistro", emoji: "🍷", level: 5 },
    { en: "Menu", fr: "Menu / Carte", emoji: "📜", level: 5 },
    { en: "Waiter", fr: "Serveur", emoji: "🤵", level: 5 },
    { en: "Customer", fr: "Client", emoji: "👤", level: 5 },
    { en: "Bill", fr: "Addition", emoji: "💵", level: 5 },
    { en: "Boulevard", fr: "Boulevard", emoji: "🛣️", level: 5 },
    { en: "Alley", fr: "Ruelle / Allée", emoji: "🏘️", level: 5 },
    { en: "Food court", fr: "Zone de restauration (Mall)", emoji: "🍱", level: 5 },
    { en: "Canteen", fr: "Cantine", emoji: "🍽️", level: 5 },
    { en: "Cafeteria", fr: "Cafétéria", emoji: "☕", level: 5 },
    { en: "Brewery", fr: "Brasserie", emoji: "🍺", level: 5 },

    // NIVEAU 6 : Histoire, Religion & Architecture Monumentale (20 mots)
    { en: "Castle", fr: "Château", emoji: "🏰", level: 6 },
    { en: "Palace", fr: "Palais", emoji: "🏛️", level: 6 },
    { en: "Cathedral", fr: "Cathédrale", emoji: "⛪", level: 6 },
    { en: "Church", fr: "Église", emoji: "⛪", level: 6 },
    { en: "Chapel", fr: "Chapelle", emoji: "⛪", level: 6 },
    { en: "Mosque", fr: "Mosquée", emoji: "🕌", level: 6 }, // 🟢 Corrigé
    { en: "Temple", fr: "Temple", emoji: "🛕", level: 6 },
    { en: "Synagogue", fr: "Synagogue", emoji: "🕍", level: 6 },
    { en: "Monument", fr: "Monument", emoji: "🗿", level: 6 },
    { en: "Statue", fr: "Statue", emoji: "🗽", level: 6 },
    { en: "Tower", fr: "Tour", emoji: "🗼", level: 6 },
    { en: "Ruins", fr: "Ruines / Vestiges", emoji: "🏚️", level: 6 }, // 🟢 Corrigé
    { en: "Historic center", fr: "Centre historique / Vieille ville", emoji: "🏘️", level: 6 },
    { en: "Skyscraper", fr: "Gratte-ciel", emoji: "🏢", level: 6 },
    { en: "Arch", fr: "Arc (Ex: Arc de triomphe)", emoji: "🏛️", level: 6 },
    { en: "Clock tower", fr: "Tour de l'horloge / Beffroi", emoji: "🕰️", level: 6 },
    { en: "Lighthouse", fr: "Phare", emoji: "🗼", level: 6 },
    { en: "Obelisk", fr: "Obélisque", emoji: "🪨", level: 6 },
    { en: "Plaza", fr: "Esplanade / Grande place piétonne", emoji: "🏢", level: 6 },
    { en: "Footbridge", fr: "Passerelle (Piétonne)", emoji: "🌉", level: 6 },

    // NIVEAU 7 : Banlieue, Industrie & Périphérie (La grande métropole) (20 mots)
    { en: "Suburb", fr: "Banlieue", emoji: "🏡", level: 7 },
    { en: "Neighborhood", fr: "Quartier / Voisinage", emoji: "🏘️", level: 7 },
    { en: "Factory", fr: "Usine", emoji: "🏭", level: 7 },
    { en: "Port", fr: "Port / Havre", emoji: "🚢", level: 7 },
    { en: "Airport", fr: "Aéroport", emoji: "✈️", level: 7 },
    { en: "Industrial zone", fr: "Zone industrielle", emoji: "🏗️", level: 7 },
    { en: "Warehouse", fr: "Entrepôt", emoji: "📦", level: 7 },
    { en: "Office building", fr: "Immeuble de bureaux", emoji: "🏢", level: 7 },
    { en: "Construction site", fr: "Chantier de construction", emoji: "🚧", level: 7 },
    { en: "Highway", fr: "Autoroute", emoji: "🛣️", level: 7 },
    { en: "Toll", fr: "Péage", emoji: "🪙", level: 7 },
    { en: "Car wash", fr: "Car wash / Lavage auto", emoji: "🧼", level: 7 },
    { en: "Recycling center", fr: "Déchetterie / Centre de recyclage", emoji: "♻️", level: 7 },
    { en: "Power plant", fr: "Centrale électrique", emoji: "⚡", level: 7 },
    { en: "Train tracks", fr: "Voies ferrées / Rails", emoji: "🛤️", level: 7 },
    { en: "Suburbia", fr: "Zone résidentielle périurbaine", emoji: "🏡", level: 7 },
    { en: "Financial district", fr: "Quartier des affaires", emoji: "📊", level: 7 },
    { en: "Alleyway", fr: "Impasse / Ruelle sombre", emoji: "🚪", level: 7 },
    { en: "Canal", fr: "Canal (Urbain)", emoji: "🛶", level: 7 },
    { en: "Outskirts", fr: "Périphérie / Abords de la ville", emoji: "🗺️", level: 7 }
];

// --- ÉTATS GÉNÉRAUX & STATISTIQUES ---
let currentStreak = 0, maxStreak = 0, totalPoints = 0;
let highScores = { quiz: 0, speak: 0, timeattack: 0 };
let favoriteFruits = [];
let errorHistory = []; 
let unlockedBadges = []; 
let audioSpeed = 1.0;
let filterOnlyFavs = false;
let searchDirection = 'EN_FR';
let globalAudioCtx = null; 
let selectedVocabularyLevel = 1; 

// --- CONFIGURATION DES BADGES ---
const badgesDatabase = [
    { id: "first_perfect", title: "Sans Faute !", desc: "Faire un 10/10 en QCM", icon: "🏅", color: "bg-yellow-500" },
    { id: "streak_15", title: "Inarrêtable", desc: "Atteindre une série de 15 bonnes réponses", icon: "🔥", color: "bg-orange-500" },
    { id: "time_20", title: "Chasseur de Chrono", desc: "Marquer 20 points en Time Attack", icon: "⚡", color: "bg-cyan-500" },
    { id: "polyglotte", title: "Polyglotte", desc: "Débloquer de nouveaux quartiers", icon: "🗣️", color: "bg-purple-500" }
];

function getNextExerciseWord() {
    const currentLevelWords = fruitsData.filter(f => f.level === parseInt(selectedVocabularyLevel));
    const currentLevelErrors = errorHistory.filter(err => err.level === parseInt(selectedVocabularyLevel));
    if (currentLevelErrors.length > 0 && Math.random() < 0.35) {
        return currentLevelErrors[Math.floor(Math.random() * currentLevelErrors.length)];
    }
    return currentLevelWords[Math.floor(Math.random() * currentLevelWords.length)];
}

function checkAndUnlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem('oe_unlocked_badges_city', JSON.stringify(unlockedBadges));
        triggerConfetti();
        if(typeof renderBadgesUI === 'function') renderBadgesUI();
    }
}

// --- MODULE AUDIO ---
let preferredVoice = null;
function initVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;
    let bestVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en') && (voice.name.includes('Google') || voice.name.includes('Natural') || voice.name.includes('Neural') || voice.name.includes('Premium')));
    if (!bestVoice) bestVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en') && !voice.name.includes('Desktop'));
    if (!bestVoice) bestVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en'));
    if (bestVoice) preferredVoice = bestVoice;
}
if ('speechSynthesis' in window) {
    if (window.speechSynthesis.onvoiceschanged !== undefined) window.speechSynthesis.onvoiceschanged = initVoices;
    initVoices();
}

function setAudioSpeed(speed) {
    audioSpeed = speed;
    const btnNormal = document.getElementById('speed-normal');
    const btnSlow = document.getElementById('speed-slow');
    if (btnNormal && btnSlow) {
        if (speed === 1.0) {
            btnNormal.className = "px-2 py-1 bg-brandBlue text-white rounded font-bold";
            btnSlow.className = "px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-1";
        } else {
            btnNormal.className = "px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded font-bold";
            btnSlow.className = "px-2 py-1 bg-brandBlue text-white rounded flex items-center gap-1";
        }
    }
}

function playAudio(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = audioSpeed;
        if (!preferredVoice) initVoices();
        if (preferredVoice) utterance.voice = preferredVoice;
        window.speechSynthesis.speak(utterance);
    } else {
        const encodedText = encodeURIComponent(text.toLowerCase());
        const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodedText}`;
        const audio = new Audio(audioUrl);
        audio.playbackRate = audioSpeed;
        audio.play().catch(e => console.log("Audio failure:", e));
    }
}

function playSoundEffect(type) {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    if (!globalAudioCtx) globalAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (globalAudioCtx.state === 'suspended') globalAudioCtx.resume();
    const osc = globalAudioCtx.createOscillator();
    const gain = globalAudioCtx.createGain();
    osc.connect(gain); gain.connect(globalAudioCtx.destination);
    if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, globalAudioCtx.currentTime);
        osc.frequency.setValueAtTime(659.25, globalAudioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, globalAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, globalAudioCtx.currentTime + 0.3);
        osc.start(); osc.stop(globalAudioCtx.currentTime + 0.3);
    } else if (type === 'fail') {
        osc.frequency.setValueAtTime(196.00, globalAudioCtx.currentTime);
        osc.frequency.setValueAtTime(146.83, globalAudioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, globalAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, globalAudioCtx.currentTime + 0.4);
        osc.start(); osc.stop(globalAudioCtx.currentTime + 0.4);
    }
}

function triggerConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#F58634', '#52B788', '#1C3D5A', '#FFD166'][Math.floor(Math.random() * 4)];
        confetti.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
        confetti.style.animationDelay = Math.random() * 1.2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// --- CARNET DE REVISIONS ---
function registerError(fruitObj) {
    if (!errorHistory.some(f => f.en === fruitObj.en)) {
        errorHistory.push(fruitObj);
        localStorage.setItem('oe_error_history_city', JSON.stringify(errorHistory));
    }
}
function removeError(englishName) {
    errorHistory = errorHistory.filter(f => f.en !== englishName);
    localStorage.setItem('oe_error_history_city', JSON.stringify(errorHistory));
}

function getUserPlayerLevel() {
    return Math.floor(totalPoints / 150) + 1;
}

// --- ADAPTATION DES GRADES (Urbanisme & Métropole) ---
function updateLevelAndTitle() {
    const pLevel = getUserPlayerLevel();
    const levelEl = document.getElementById('user-level');
    const titleEl = document.getElementById('user-title');
    if (levelEl) levelEl.innerText = pLevel;

    let title = "Novice Urbain";
    if (pLevel >= 3) title = "Citadin Curieux";
    if (pLevel >= 6) title = "Guide Local";
    if (pLevel >= 9) title = "Urbaniste Émérite";
    if (pLevel >= 12) title = "Explorateur des Métropoles";
    if (pLevel >= 15) title = "Maire de la Ville";

    if (titleEl) titleEl.innerText = title;
    if (typeof updateLevelLockUI === 'function') updateLevelLockUI();
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('oe_dark_mode', isDark);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = isDark ? "fa-solid fa-sun text-yellow-300" : "fa-solid fa-moon text-yellow-300";
}

function resetStats() {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser toutes vos statistiques et votre progression Ville ?")) {
        const keysToRemove = ['oe_total_points_city', 'oe_high_quiz_city', 'oe_high_speak_city', 'oe_high_timeattack_city', 'oe_max_streak_city', 'oe_fav_city', 'oe_error_history_city', 'oe_unlocked_badges_city'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
        totalPoints = 0; highScores = { quiz: 0, speak: 0, timeattack: 0 }; maxStreak = 0; currentStreak = 0; errorHistory = []; unlockedBadges = []; favoriteFruits = [];
        document.getElementById('total-points').innerText = totalPoints;
        document.getElementById('streak-count').innerText = currentStreak;
        document.getElementById('stat-high-quiz').innerText = 0;
        document.getElementById('stat-high-speak').innerText = 0;
        document.getElementById('stat-high-timeattack').innerText = 0;
        document.getElementById('stat-max-streak').innerText = 0;
        updateLevelAndTitle();
        if (typeof renderDict === 'function') renderDict();
        if (typeof updateFlashcard === 'function') updateFlashcard();
        if (typeof renderBadgesUI === 'function') renderBadgesUI();
        if (typeof renderErrorHistory === 'function') renderErrorHistory();
        alert("Statistiques Municipales réinitialisées !");
    }
}

function saveStats() {
    localStorage.setItem('oe_total_points_city', totalPoints);
    localStorage.setItem('oe_high_quiz_city', highScores.quiz);
    localStorage.setItem('oe_high_speak_city', highScores.speak); 
    localStorage.setItem('oe_high_timeattack_city', highScores.timeattack);
    localStorage.setItem('oe_max_streak_city', maxStreak);
}

function loadStats() {
    totalPoints = parseInt(localStorage.getItem('oe_total_points_city')) || 0;
    highScores.quiz = parseInt(localStorage.getItem('oe_high_quiz_city')) || 0;
    highScores.speak = parseInt(localStorage.getItem('oe_high_speak_city')) || 0; 
    highScores.timeattack = parseInt(localStorage.getItem('oe_high_timeattack_city')) || 0;
    maxStreak = parseInt(localStorage.getItem('oe_max_streak_city')) || 0;
    favoriteFruits = JSON.parse(localStorage.getItem('oe_fav_city')) || [];
    errorHistory = JSON.parse(localStorage.getItem('oe_error_history_city')) || [];
    unlockedBadges = JSON.parse(localStorage.getItem('oe_unlocked_badges_city')) || [];
    
    if (localStorage.getItem('oe_dark_mode') === 'true') {
        document.documentElement.classList.add('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = "fa-solid fa-sun text-yellow-300";
    }
    const totalPointsEl = document.getElementById('total-points');
    if (totalPointsEl) totalPointsEl.innerText = totalPoints;
    updateLevelAndTitle();
}