let translations = {};

let languagePromiseResolve;
const languagePromise = new Promise(resolve => {
    languagePromiseResolve = resolve;
});

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
        const langEn = document.getElementById('lang-en');
        const langEs = document.getElementById('lang-es');
        const langKo = document.getElementById('lang-ko');
        if(langEn && langEs && langKo) {
            langEn.classList.toggle('active', lang === 'en');
            langEs.classList.toggle('active', lang === 'es');
            langKo.classList.toggle('active', lang === 'ko');
        }

    } catch (error) {
        console.error(error);
        // Fallback to English if a language fails to load
        if (lang !== 'en') {
            await setLanguage('en');
        }
    } finally {
        if (typeof languagePromiseResolve === 'function') {
            languagePromiseResolve();
            languagePromiseResolve = null; // Ensure it only resolves once
        }
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        const translation = translations[key];
        if (translation) {
            element.textContent = translation;
        }
    });
    // Manually set title as it's not a standard element
    if (translations.appTitle) {
        document.title = translations.appTitle;
    }
    
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

    if(langEnButton && langEsButton && langKoButton) {
        langEnButton.addEventListener('click', () => setLanguage('en'));
        langEsButton.addEventListener('click', () => setLanguage('es'));
        langKoButton.addEventListener('click', () => setLanguage('ko'));
    }

    const initialLang = localStorage.getItem('language') || 'ko';
    setLanguage(initialLang);
});

// We need a way for other scripts to access translations and sync with loading.
window.getTranslation = getTranslation;
window.languagePromise = languagePromise;
window.translations = translations;
