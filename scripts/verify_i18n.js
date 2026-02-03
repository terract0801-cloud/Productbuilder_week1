const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'locales');
const baseLocale = 'en.json';

const baseKeys = new Set(Object.keys(JSON.parse(fs.readFileSync(path.join(localesDir, baseLocale), 'utf8'))));
const localeFiles = fs.readdirSync(localesDir).filter(file => file.endsWith('.json') && file !== baseLocale);

let missingKeys = false;

for (const localeFile of localeFiles) {
    const localePath = path.join(localesDir, localeFile);
    const localeData = JSON.parse(fs.readFileSync(localePath, 'utf8'));
    const localeKeys = new Set(Object.keys(localeData));

    const missing = [...baseKeys].filter(key => !localeKeys.has(key));

    if (missing.length > 0) {
        missingKeys = true;
        console.error(`Missing keys in ${localeFile}:`);
        for (const key of missing) {
            console.error(`  - ${key}`);
        }
    }
}

if (missingKeys) {
    process.exit(1);
} else {
    console.log('All i18n keys are present in all locale files.');
}
