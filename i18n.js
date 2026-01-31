let translations = {};

async function setLanguage(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load translation file for ${lang}`);
        }
        translations = await response.json();
        applyTranslations();
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        // Update active class on buttons
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        document.getElementById('lang-es').classList.toggle('active', lang === 'es');
        document.getElementById('lang-ko').classList.toggle('active', lang === 'ko');

    } catch (error) {
        console.error(error);
        // Fallback to English if a language fails to load
        if (lang !== 'en') {
            setLanguage('en');
        }
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        element.textContent = translations[key] || `Missing key: ${key}`;
    });
    // Manually set title as it's not a standard element
    document.title = translations.appTitle || 'Lotto Number Generator';
    
    // Dispatch a custom event to notify other components of the language change
    document.dispatchEvent(new CustomEvent('languageChanged'));
}

function getTranslation(key) {
    return translations[key] || `Missing key: ${key}`;
}


document.addEventListener('DOMContentLoaded', () => {
    const langEnButton = document.getElementById('lang-en');
    const langEsButton = document.getElementById('lang-es');
    const langKoButton = document.getElementById('lang-ko');

    langEnButton.addEventListener('click', () => setLanguage('en'));
    langEsButton.addEventListener('click', () => setLanguage('es'));
    langKoButton.addEventListener('click', () => setLanguage('ko'));

    const initialLang = localStorage.getItem('language') || 'ko';
    setLanguage(initialLang);
});

// We need a way for other scripts to access translations, especially for dynamic content.
// A simple solution is to make a function globally available.
window.getTranslation = getTranslation;
