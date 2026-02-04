const ICONS = {
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y1="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>`,
    kakao: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.125 2 11.25c0 2.75 1.25 5.25 3.375 6.938L4 22l4.75-2.5C10.25 20.25 11.125 20.5 12 20.5c5.523 0 10-4.125 10-9.25S17.523 2 12 2z"/></svg>`,
    link: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>`
};

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = ICONS.moon;
    } else {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = ICONS.sun;
    }
    localStorage.setItem('theme', theme);
};

const getNumberColor = (number) => {
    if (number <= 10) return 'linear-gradient(135deg, #ffb88c, #de6262)';
    if (number <= 20) return 'linear-gradient(135deg, #4facfe, #00f2fe)';
    if (number <= 30) return 'linear-gradient(135deg, #ff416c, #ff4b2b)';
    if (number <= 40) return 'linear-gradient(135deg, #a1c4fd, #c2e9fb)';
    return 'linear-gradient(135deg, #56ab2f, #a8e063)';
};

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});



// --- AI Strategy Generator ---

class StrategyResultDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.copyNumbers = this.copyNumbers.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        const numbers = JSON.parse(this.getAttribute('numbers'));
        const explanation = this.getAttribute('explanation');
        const title = this.getAttribute('title');

        let headerHtml = '';
        if (title && title.trim() !== '' || explanation && explanation.trim() !== '') {
            headerHtml = `
                <div class="result-header">
                    ${title && title.trim() !== '' ? `<h3 class="result-title">${title}</h3>` : ''}
                    ${explanation && explanation.trim() !== '' ? `<p class="explanation">${explanation}</p>` : ''}
                </div>
            `;
        }

        this.shadowRoot.innerHTML = `
            <style>
                .result-wrapper {
                    padding: 0.8rem;
                    background: transparent;
                    border-radius: 0;
                    text-align: center;
                    animation: fadeIn 0.5s ease-in-out;
                    margin-bottom: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    position: relative;
                    box-shadow: none;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .result-header {
                    width: 100%;
                }
                .result-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 0.3rem;
                    color: var(--text-color);
                }
                .numbers-table {
                    border-collapse: collapse;
                    margin: 0.5rem 0;
                }
                .number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: white;
                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                    box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.4);
                    margin: 0 4px;
                }
                .explanation {
                    font-style: italic;
                    opacity: 0.9;
                    font-size: 0.85rem;
                    padding: 0 0.5rem;
                    color: var(--text-color);
                }
                .copy-btn-result {
                    background: none;
                    border: none;
                    color: var(--text-color);
                    cursor: pointer;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    padding: 3px;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .copy-btn-result:hover {
                    background: var(--component-background);
                    box-shadow: 0 0 8px 2px var(--glow-color);
                }
                .copy-btn-result svg {
                    width: 16px;
                    height: 16px;
                }
            </style>
            <div class="result-wrapper">
                ${headerHtml}
                <table class="numbers-table">
                    <tbody>
                        <tr>
                            ${numbers.map(num => `<td><div class="number" style="background: ${getNumberColor(num)}">${num}</div></td>`).join('')}
                        </tr>
                    </tbody>
                </table>
                <button class="copy-btn-result" title="${window.getTranslation ? window.getTranslation('copyButton') : 'Copy'}">${ICONS.copy}</button>
            </div>
        `;
        const copyButton = this.shadowRoot.querySelector('.copy-btn-result');
        if (copyButton) {
            copyButton.addEventListener('click', () => this.copyNumbers(numbers, copyButton));
        }
    }

    connectedCallback() {
        this.render();
        document.addEventListener('languageChanged', this.render);
    }

    disconnectedCallback() {
        document.removeEventListener('languageChanged', this.render);
    }
    
    copyNumbers(numbers, button) {
        let textToCopy = numbers.join(', ');
        navigator.clipboard.writeText(textToCopy).then(() => {
            button.innerHTML = ICONS.check;
            setTimeout(() => {
                button.innerHTML = ICONS.copy;
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy numbers: ', err);
        });
    }
}
customElements.define('strategy-result-display', StrategyResultDisplay);

function generateStrategyNumbers(strategy, userNumbers = [], numbersToExclude = new Set()) {
    let selectedNumbers = new Set();
    let explanation = '';
    let title = '';

    const allPossibleNumbers = Array.from({ length: 45 }, (_, i) => i + 1);

    // Filter out numbers that should be excluded
    const availableNumbers = allPossibleNumbers.filter(num => !numbersToExclude.has(num));

    function getRandomUniqueNumbers(pool, count, currentExclusions) {
        let result = new Set();
        let currentPool = [...pool].filter(num => !currentExclusions.has(num));

        // Shuffle the current pool to get random numbers from it
        for (let i = currentPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentPool[i], currentPool[j]] = [currentPool[j], currentPool[i]];
        }

        // Try to pick from the specific pool first
        for (let i = 0; i < currentPool.length && result.size < count; i++) {
            result.add(currentPool[i]);
        }

        // If not enough, fill with random unique numbers from general availableNumbers
        let fillFromAvailable = availableNumbers.filter(num => !result.has(num) && !currentExclusions.has(num));
        while (result.size < count && fillFromAvailable.length > 0) {
            const randomIndex = Math.floor(Math.random() * fillFromAvailable.length);
            const randomNumber = fillFromAvailable.splice(randomIndex, 1)[0];
            result.add(randomNumber);
        }

        // Final fallback if still not enough (should ideally not happen if availableNumbers is >= 6)
        while (result.size < count) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!result.has(randomNumber) && !currentExclusions.has(randomNumber)) {
                selectedNumbers.add(randomNumber);
            }
        }
        return Array.from(result);
    }

    const popularNumbersPool = [7, 14, 21, 28, 35, 1, 10, 20, 30, 40, 45];
    const hotNumbersPool = [5, 12, 19, 26, 33, 42, 4, 11, 18, 25, 32];
    const coldNumbersPool = [9, 16, 23, 31, 38, 44, 2, 13, 24, 34, 43];


    switch (strategy) {
        case 'statistical':
            title = window.getTranslation('strategy1Title');
            explanation = window.getTranslation('strategy1Explanation');
            selectedNumbers = new Set(getRandomUniqueNumbers(popularNumbersPool, 6, numbersToExclude));
            break;
        case 'trends':
            title = window.getTranslation('strategy2Title');
            explanation = window.getTranslation('strategy2Explanation');
            selectedNumbers = new Set(getRandomUniqueNumbers(hotNumbersPool, 6, numbersToExclude));
            break;
        case 'longshot':
            title = window.getTranslation('strategy3Title');
            explanation = window.getTranslation('strategy3Explanation');
            selectedNumbers = new Set(getRandomUniqueNumbers(coldNumbersPool, 6, numbersToExclude));
            break;
        case 'personal':
            title = window.getTranslation('strategy4Title');
            explanation = window.getTranslation('strategy4Explanation').replace('{numbers}', userNumbers.join(', '));
            userNumbers.forEach(num => selectedNumbers.add(num));
            
            let personalFillPool = availableNumbers.filter(num => !selectedNumbers.has(num)); // Use availableNumbers that also respects numbersToExclude

            while (selectedNumbers.size < 6) {
                if (personalFillPool.length === 0) {
                    // Fallback to all possible numbers if personalFillPool runs out
                    const randomNumber = Math.floor(Math.random() * 45) + 1;
                    if (!selectedNumbers.has(randomNumber)) { // Ensure uniqueness even in fallback
                        selectedNumbers.add(randomNumber);
                    }
                } else {
                    const randomIndex = Math.floor(Math.random() * personalFillPool.length);
                    const randomNumber = personalFillPool.splice(randomIndex, 1)[0];
                    selectedNumbers.add(randomNumber);
                }
            }
            break;
    }

    return {
        numbers: Array.from(selectedNumbers).sort((a, b) => a - b),
        explanation,
        title
    };
}

function createShareButtons(container) {

    const shareContainer = document.createElement('div');

    shareContainer.className = 'share-container';



    const shareTitle = document.createElement('p');

    shareTitle.className = 'share-title';

    shareTitle.textContent = window.getTranslation ? window.getTranslation('shareTitle') : 'Share the good luck!'; // Temp text

    shareContainer.appendChild(shareTitle);



    const buttonsWrapper = document.createElement('div');

    buttonsWrapper.className = 'share-buttons-wrapper';

    

    const siteUrl = 'https://productbuilder-week1-2gy.pages.dev/';

    const shareText = window.getTranslation ? window.getTranslation('shareText') : 'I got my lucky numbers from this AI Lotto Generator!'; // Temp text



    const networks = [

        { name: 'facebook', icon: ICONS.facebook, color: '#1877F2' },

        { name: 'twitter', icon: ICONS.twitter, color: '#1DA1F2' },

        { name: 'kakao', icon: ICONS.kakao, color: '#FEE500' },

        { name: 'link', icon: ICONS.link, color: '#cccccc' }

    ];



    networks.forEach(network => {

        const button = document.createElement('button');

        button.className = 'share-btn';

        button.innerHTML = network.icon;

        button.style.setProperty('--glow-color', network.color + '80'); // Add transparency to glow

        

        button.addEventListener('click', () => {

            switch(network.name) {

                case 'facebook':

                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank');

                    break;

                case 'twitter':

                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');

                    break;

                case 'kakao':

                    if (window.Kakao && Kakao.isInitialized()) {

                        Kakao.Share.sendDefault({

                            objectType: 'feed',

                            content: {

                                title: window.getTranslation ? window.getTranslation('appTitle') : 'AI Lotto Generator',

                                description: shareText,

                                imageUrl: 'https://productbuilder-week1-2gy.pages.dev/social-share.jpg', // Replace with actual image

                                link: {

                                    mobileWebUrl: siteUrl,

                                    webUrl: siteUrl,

                                },

                            },

                            buttons: [

                                {

                                    title: window.getTranslation ? window.getTranslation('ctaButton') : 'Try it out!',

                                    link: {

                                        mobileWebUrl: siteUrl,

                                        webUrl: siteUrl,

                                    },

                                },

                            ],

                        });

                    }

                    break;

                case 'link':

                    navigator.clipboard.writeText(siteUrl).then(() => {

                        button.innerHTML = ICONS.check;

                        setTimeout(() => {

                            button.innerHTML = ICONS.link;

                        }, 2000);

                    }).catch(err => console.error('Failed to copy link', err));

                    break;

            }

        });

        buttonsWrapper.appendChild(button);

    });



    shareContainer.appendChild(buttonsWrapper);

    container.appendChild(shareContainer);

}



function handleStrategyForm() {

    const strategyForm = document.getElementById('strategy-form');

    if (!strategyForm) return;



    const resultContainer = document.getElementById('strategy-result-container');

    const personalNumberInput = document.getElementById('personal-number');

    const strategyRadioButtons = strategyForm.querySelectorAll('input[name="strategy"]');



    const updatePersonalNumberPlaceholder = () => {

        const selectedStrategy = strategyForm.querySelector('input[name="strategy"]:checked').value;

        const personalCard = document.querySelector('label.strategy-option input[value="personal"] + .strategy-card');

        

        if (selectedStrategy === 'personal') {

            personalNumberInput.placeholder = window.getTranslation('personalNumberPlaceholder');

            personalNumberInput.style.display = 'block';

            if (personalCard) personalCard.style.minHeight = 'auto';

        } else {

            personalNumberInput.placeholder = '';

            personalNumberInput.value = '';

            personalNumberInput.style.display = 'none';

            if (personalCard) personalCard.style.minHeight = '150px';

        }

    };



    strategyForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(strategyForm);

        const strategy = formData.get('strategy');

        

        let userNumbers = [];

        if (strategy === 'personal') {

            const inputValue = personalNumberInput.value.trim();

            if (!inputValue) {

                alert(window.getTranslation('personalNumberNoInput'));

                return;

            }

            

            const parts = inputValue.split(',').map(part => parseInt(part.trim(), 10));

            const uniqueNumbers = [...new Set(parts)].filter(num => !isNaN(num) && num >= 1 && num <= 45);

            

            if (uniqueNumbers.length === 0 || uniqueNumbers.length > 6) {

                alert(window.getTranslation('personalNumberInvalid'));

                return;

            }

            userNumbers = uniqueNumbers;

        }



                resultContainer.innerHTML = '';



                



                const resultsWrapper = document.createElement('div');



                resultsWrapper.className = 'results-wrapper-container';



        



                let allGeneratedNumbers = new Set();



                



                for (let i = 0; i < 5; i++) {



                    const numbersToExcludeForThisSet = (strategy === 'personal') 



                        ? new Set([...allGeneratedNumbers, ...userNumbers]) 



                        : allGeneratedNumbers;



        



                    const result = generateStrategyNumbers(strategy, userNumbers, numbersToExcludeForThisSet);



                    



                    const resultDisplay = document.createElement('strategy-result-display');



                    resultDisplay.setAttribute('numbers', JSON.stringify(result.numbers));



                    resultDisplay.setAttribute('title', result.title);



                    resultDisplay.setAttribute('explanation', result.explanation);



                    resultsWrapper.appendChild(resultDisplay);



        



                    result.numbers.forEach(num => allGeneratedNumbers.add(num));



                }



        



                const donghaengButton = document.createElement('button');



                donghaengButton.classList.add('go-to-lotto-btn');



                donghaengButton.textContent = window.getTranslation('goToDonghaengLotto');



                donghaengButton.onclick = () => window.open('https://dhlottery.co.kr/common.do?method=main', '_blank', 'noopener,noreferrer');



                resultsWrapper.appendChild(donghaengButton);



        



                createShareButtons(resultsWrapper);



        



                resultContainer.appendChild(resultsWrapper);

    });



    strategyRadioButtons.forEach(radio => {

        radio.addEventListener('change', updatePersonalNumberPlaceholder);

    });



    updatePersonalNumberPlaceholder();

    document.addEventListener('languageChanged', updatePersonalNumberPlaceholder);

}



const dateStories = {
    '1-1': {
        title: "The First Dawn",
        story: "Born on the first day of a new year, your story is one of new beginnings, fresh starts, and limitless potential. Like the first ray of sunshine after a long night, you bring hope and inspiration. Your journey is about setting new paths and leading the way.",
        keywords: ["new", "beginning", "first", "leader", "potential"]
    },
    '2-14': {
        title: "The Heart's Compass",
        story: "Born on Valentine's Day, your life is guided by the heart. You possess a deep capacity for love, connection, and empathy. Your path is to build bridges between people and to spread compassion.",
        keywords: ["love", "heart", "connection", "compassion", "relationships"]
    },
    '3-20': {
        title: "The Spring's Awakening",
        story: "Born on the first day of Spring, you are a force of nature, a symbol of growth and renewal. You have the ability to bring ideas to life and to inspire change. Your journey is one of creation and transformation.",
        keywords: ["growth", "renewal", "creation", "nature", "transformation"]
    },
    '10-31': {
        title: "The Veil Thinner",
        story: "Born on Halloween, you walk between worlds. You have a keen sense of intuition and a natural curiosity for the mysteries of life. Your path is to explore the unknown and to reveal hidden truths.",
        keywords: ["mystery", "intuition", "magic", "spirit", "unknown"]
    },
    '12-25': {
        title: "The Giver of Light",
        story: "Born on Christmas Day, you carry a special light within you. Your presence brings joy, warmth, and a sense of celebration to others. Your journey is about sharing your gifts and illuminating the world.",
        keywords: ["joy", "light", "gift", "celebration", "share"]
    },
    // Monthly fallback stories
    '1': { story: "As a January child, you are a natural leader, resilient and ambitious, with a spirit that guides you through the winter cold." },
    '2': { story: "As a February child, you are an imaginative and compassionate soul, with a heart as deep as the winter waters." },
    '3': { story: "As a March child, you are a vibrant and energetic force, heralding the arrival of spring with your every step." },
    '4': { story: "As an April child, you embody the spirit of renewal, with a personality that blossoms like the first flowers of the season." },
    '5': { story: "As a May child, you are a bringer of joy and abundance, with a warm heart that nurtures and provides." },
    '6': { story: "As a June child, you are a social butterfly, radiating the warmth and light of the summer sun." },
    '7': { story: "As a July child, you are a passionate and emotional being, with a fiery spirit that commands attention." },
    '8': { story: "As an August child, you are a confident and charismatic leader, shining as brightly as the late summer sun." },
    '9': { story: "As a September child, you are a wise and artistic soul, with a calm demeanor that reflects the changing of the seasons." },
    '10': { story: "As an October child, you are a balanced and charming individual, with a love for beauty and harmony." },
    '11': { story: "As a November child, you are a determined and intuitive person, with a mysterious aura that draws others in." },
    '12': { story: "As a December child, you are a festive and generous spirit, with a love for celebration and togetherness." }
};

function getPersonalizedStory(month, day) {
    const specificDate = `${month}-${day}`;
    if (dateStories[specificDate]) {
        return dateStories[specificDate];
    }
    return dateStories[String(month)];
}


function generatePersonalizedNumbers(name, month, day, year, storyData) {
    const numbers = new Set();

    // 1. Core numbers from birth date
    numbers.add(day);
    if (numbers.size < 6 && !numbers.has(month)) {
        numbers.add(month);
    }

    // 2. Name number
    const nameNumber = (name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 45) + 1;
    if (numbers.size < 6 && !numbers.has(nameNumber)) {
        numbers.add(nameNumber);
    }
    
    // 3. Year sum
    const yearSum = String(year).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    if (numbers.size < 6 && !numbers.has(yearSum) && yearSum > 0 && yearSum <= 45) {
        numbers.add(yearSum);
    }

    // 4. Keyword-based numbers
    if (storyData && storyData.keywords) {
        for (const keyword of storyData.keywords) {
            if (numbers.size >= 6) break;
            const keywordNumber = (keyword.length % 45) + 1;
            if (!numbers.has(keywordNumber)) {
                numbers.add(keywordNumber);
            }
        }
    }

    // 5. Fill with seeded randoms
    const seed = year + month + day + name.length;
    let currentSeed = seed;
    const seededRandom = () => {
        const x = Math.sin(currentSeed++) * 10000;
        return x - Math.floor(x);
    };

    while (numbers.size < 6) {
        const randomNumber = Math.floor(seededRandom() * 45) + 1;
        if (!numbers.has(randomNumber)) {
            numbers.add(randomNumber);
        }
    }

    return Array.from(numbers).sort((a, b) => a - b);
}


function handlePersonalizedForm() {


    const personalizedForm = document.getElementById('personalized-form');





    if (!personalizedForm) {


        return;


    }





    const resultContainer = document.getElementById('personalized-result');


    const nameInput = document.getElementById('user-name');


    const birthDateInput = document.getElementById('birth-date');





    personalizedForm.addEventListener('submit', (e) => {


        e.preventDefault();





        const name = nameInput.value.trim();


        const birthDate = birthDateInput.value;





        if (!name || !birthDate) {


            alert(window.getTranslation ? window.getTranslation('personalizedNoInput') : 'Please enter your name and birthdate.');


            return;


        }





        const date = new Date(birthDate);


        const year = date.getFullYear();


        const month = date.getMonth() + 1;


        const day = date.getDate();





        const resultData = generatePersonalizedStoryAndNumbers(name, month, day, year);


        


        resultContainer.innerHTML = '';


        const resultDisplay = document.createElement('personalized-result-display');


        resultDisplay.setAttribute('title', resultData.title);


        resultDisplay.setAttribute('story', resultData.story);


        resultDisplay.setAttribute('numbers', JSON.stringify(resultData.numbers));


        resultDisplay.setAttribute('explanations', JSON.stringify(resultData.explanations));





        resultContainer.appendChild(resultDisplay);


    });


}








const numberMeanings = {


    1: "represents new beginnings, leadership, and the power to manifest your desires.",


    2: "symbolizes balance, partnership, and the importance of harmony in your relationships.",


    3: "is the number of creativity, self-expression, and communication. It encourages you to share your voice.",


    4: "is about stability, hard work, and building a solid foundation for your dreams.",


    5: "vibrates with the energy of freedom, adventure, and embracing change.",


    6: "represents love, family, and the responsibility of caring for others.",


    7: "is the number of luck, spiritual awakening, and introspection. It asks you to trust your intuition.",


    8: "symbolizes abundance, power, and financial success. It's a sign of material achievement.",


    9: "is about completion, wisdom, and humanitarianism. It encourages you to serve others.",


    10: "represents the completion of a cycle and the beginning of a new one. It's a number of great potential.",


    11: "is a master number of intuition, spiritual insight, and connection to the divine.",


    12: "symbolizes creative and intellectual energy, encouraging you to think outside the box.",


    13: "is a number of transformation and rebirth. It asks you to release the old to make way for the new.",


    14: "represents moderation, balance, and the need to find harmony in all things.",


    15: "is a number of charm, wit, and a magnetic personality. It brings opportunities for joy.",


    16: "symbolizes the tower of spiritual awakening, a sudden insight that changes everything.",


    17: "is the number of the star, representing hope, inspiration, and a bright future.",


    18: "is connected to the moon, illusion, and the power of your subconscious mind.",


    19: "is the number of the sun, representing success, vitality, and a joyful life.",


    20: "symbolizes judgment and the awakening to a new level of consciousness.",


    21: "is the number of the world, representing completion, integration, and fulfillment.",


    22: "is a master number of building dreams in the material world. It's about practical manifestation.",


    23: "is a royal star number, promising success and protection from the heavens.",


    24: "represents harmony in the family and the joy of domestic life.",


    25: "is a number of spiritual wisdom gained through experience.",


    26: "symbolizes the flow of abundance and the connection between the spiritual and material worlds.",


    27: "is a number of compassion, humanitarianism, and a desire to heal the world.",


    28: "represents wealth, ambition, and the ability to lead others.",


    29: "is a number of intuition and knowing, of trusting the messages from your soul.",


    30: "symbolizes communication, creativity, and a joyful expression of your talents.",


    31: "is a number of focus, determination, and the practical application of your skills.",


    32: "represents the power of communication to create and build.",


    33: "is a master number of teaching, healing, and selfless service to humanity.",


    34: "is a number of intuition and insight, especially in practical matters.",


    35: "represents the creative use of freedom to bring about positive change.",


    36: "symbolizes the compassionate and creative expression of the heart.",


    37: "is a number of good fortune, especially in partnerships and collaborations.",


    38: "represents the healing power of love and compassion.",


    39: "symbolizes the joy of living and the celebration of life's blessings.",


    40: "is a number of discipline, hard work, and the patient building of your dreams.",


    41: "is a number of powerful intuition and the ability to manifest your visions.",


    42: "represents the joy of service and the satisfaction of helping others.",


    43: "is a number of practicality, and the ability to turn ideas into reality.",


    44: "is a master number of discipline and the power to create lasting change in the world.",


    45: "symbolizes the completion of a great cycle and the wisdom gained from experience."


};





function generatePersonalizedStoryAndNumbers(name, month, day, year) {


    const numbers = new Set();


    const explanations = [];


    const storyData = getPersonalizedStory(month, day); // from previous implementation





    // 1. Core numbers from birth date


    numbers.add(day);


    if (!numbers.has(month)) numbers.add(month);





    // 2. Name number


    const nameNumber = (name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 45) + 1;


    if (!numbers.has(nameNumber)) numbers.add(nameNumber);





    // 3. Year sum


    const yearSum = String(year).split('').reduce((acc, digit) => acc + parseInt(digit), 0);


    if (!numbers.has(yearSum) && yearSum > 0 && yearSum <= 45) {


        numbers.add(yearSum);


    }


    


    // 4. Fill with seeded randoms


    const seed = year + month + day + name.length + new Date().getTime(); // Add timestamp for more randomness


    let currentSeed = seed;


    const seededRandom = () => {


        const x = Math.sin(currentSeed++) * 10000;


        return x - Math.floor(x);


    };





    while (numbers.size < 6) {


        const randomNumber = Math.floor(seededRandom() * 45) + 1;


        if (!numbers.has(randomNumber)) {


            numbers.add(randomNumber);


        }


    }





    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);





    // Create explanations for each number


    sortedNumbers.forEach(num => {


        explanations.push({


            number: num,


            meaning: numberMeanings[num] || "is a mysterious cosmic number, full of untapped potential."


        });


    });





    const storyTemplates = [


        `On the special day of your birth, ${name}, the universe wove a unique tapestry of fate. The numbers it selected for you are not random; each holds a piece of your story.`,


        `From the moment you arrived, ${name}, your journey has been written in the stars. These numbers are a reflection of your path, each with a secret to share.`,


        `Hello, ${name}. Your birth on ${month}/${day}/${year} created a unique cosmic signature. The numbers that have aligned for you are a key to unlocking your potential.`


    ];





    const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];





    return {


        title: storyData.title || "Your Cosmic Blueprint",


        story: storyData.story ? `${storyData.story} ${randomTemplate}` : randomTemplate,


        numbers: sortedNumbers,


        explanations: explanations


    };


}








const emotionKeywords = {


    'Positive': {


        happy: { base: 7, description: "Vibrates with the energy of Jupiter, signifying luck and expansion." },


        joyful: { base: 2, description: "Radiates pure delight and celebration." },


        grateful: { base: 11, description: "Taps into the Moon's energy, enhancing intuition and gratitude." },


        excited: { base: 13, description: "Channels the fiery spirit of Mars, bringing passion and drive." },


        optimistic: { base: 1, description: "Represents the dawn of new beginnings, full of hope and potential." },


        proud: { base: 19, description: "Stands tall with the confidence of past successes." },


        blissful: { base: 29, description: "Is a state of perfect happiness and great joy." },


        enthusiastic: { base: 31, description: "Overflows with eager enjoyment and interest." },


    },


    'Reflective': {


        calm: { base: 22, description: "Reflects the serene influence of Venus, promoting harmony and balance." },


        peaceful: { base: 33, description: "Holds a master vibration of tranquility and spiritual awareness." },


        relaxed: { base: 4, description: "Is free from tension and anxiety." },


        thoughtful: { base: 15, description: "Engages in deep, quiet thinking." },


        serene: { base: 28, description: "Is calm, peaceful, and untroubled; tranquil." },


        contemplative: { base: 37, description: "Involves deep, reflective thought." },


        nostalgic: { base: 25, description: "Evokes a sentimental longing for the past." },


        introspective: { base: 43, description: "Focuses on the examination of one's own thoughts and feelings." }


    },


    'Ambitious': {


        confident: { base: 8, description: "Draws on the strength of Saturn, building structure and self-assurance." },


        adventurous: { base: 5, description: "Embodies the quick-witted nature of Mercury, sparking curiosity and discovery." },


        daring: { base: 17, description: "Is adventurous and willing to take risks." },


        bold: { base: 21, description: "Shows a willingness to take risks; confident and courageous." },


        determined: { base: 36, description: "Is firm in purpose and unwavering." },


        focused: { base: 41, description: "Directs a great deal of attention towards a particular aim." },


        powerful: { base: 44, description: "Has great power or strength." },


        successful: { base: 10, description: "Accomplishes a desired aim or result." }


    },


    'Playful': {


        creative: { base: 3, description: "Is fueled by the Sun's radiant power, inspiring originality and expression." },


        loving: { base: 6, description: "Connects with the gentle heart of the Earth, fostering compassion and connection." },


        silly: { base: 12, description: "Having or showing a lack of common sense or judgment; absurd and foolish." },


        whimsical: { base: 18, description: "Is playfully quaint or fanciful, especially in an appealing and amusing way." },


        energetic: { base: 24, description: "Shows or involves great activity or vitality." },


        spontaneous: { base: 30, description: "Is open, natural, and uninhibited." },


        mischievous: { base: 34, description: "Causes or shows a fondness for causing trouble in a playful way." },


        flirty: { base: 42, description: "Is playfully romantic and charming." }


    }


};





class EmotionResultDisplay extends HTMLElement {





    constructor() {





        super();





        this.attachShadow({ mode: 'open' });





    }











    connectedCallback() {





        const explanations = JSON.parse(this.getAttribute('explanations'));





        const numbers = JSON.parse(this.getAttribute('numbers'));











        this.shadowRoot.innerHTML = `





            <style>





                .emotion-result-display {





                    background: rgba(0,0,0,0.2);





                    padding: 2rem;





                    border-radius: 15px;





                    text-align: center;





                    animation: fadeIn 0.8s ease-in-out;





                    border: 1px solid var(--component-border-color, rgba(255, 255, 255, 0.2));





                }





                .explanations {





                    text-align: left;





                    margin-bottom: 2rem;





                }





                .explanation-item {





                    background: rgba(0,0,0,0.15);





                    padding: 1rem;





                    border-radius: 10px;





                    margin-bottom: 1rem;





                }





                .explanation-item strong {





                    font-size: 1.5rem;





                    color: #4facfe;





                }





                .personalized-numbers {





                    display: flex;





                    justify-content: center;





                    align-items: center;





                    gap: 1rem;





                    flex-wrap: wrap;





                }





                .number {





                    display: flex;





                    align-items: center;





                    justify-content: center;





                    width: 55px;





                    height: 55px;





                    border-radius: 50%;





                    font-size: 1.8rem;





                    font-weight: 600;





                    color: white;





                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);





                    box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.4);





                }





                @keyframes fadeIn {





                    from { opacity: 0; transform: translateY(20px); }





                    to { opacity: 1; transform: translateY(0); }





                }





            </style>





            <div class="emotion-result-display">





                <div class="explanations">





                    ${explanations.map(ex => `





                        <div class="explanation-item">





                            <p><strong>${ex.number}:</strong> ${ex.text}</p>





                        </div>





                    `).join('')}





                </div>





                <div class="personalized-numbers">





                    ${numbers.map(num => `<div class="number" style="background: ${getNumberColor(num)}">${num}</div>`).join('')}





                </div>





            </div>





        `;





    }





}





customElements.define('emotion-result-display', EmotionResultDisplay);








class PersonalizedResultDisplay extends HTMLElement {


    constructor() {


        super();


        this.attachShadow({ mode: 'open' });


    }





    connectedCallback() {


        const title = this.getAttribute('title');


        const story = this.getAttribute('story');


        const numbers = JSON.parse(this.getAttribute('numbers'));


        const explanations = JSON.parse(this.getAttribute('explanations'));





        this.shadowRoot.innerHTML = `


            <style>


                /* ... existing styles ... */


                .personalized-result-display {


                    background: rgba(0,0,0,0.2);


                    padding: 2rem;


                    border-radius: 15px;


                    text-align: center;


                    animation: fadeIn 0.8s ease-in-out;


                    border: 1px solid var(--component-border-color, rgba(255, 255, 255, 0.2));


                }


                .result-title {


                    font-size: 1.8rem;


                    font-weight: 700;


                    margin-bottom: 1rem;


                    color: var(--text-color);


                }


                .personalized-story {


                    font-size: 1.2rem;


                    font-style: italic;


                    line-height: 1.6;


                    margin-bottom: 2rem;


                    color: var(--text-color, #f0f0f0);


                    opacity: 0.9;


                }


                .personalized-numbers {


                    display: flex;


                    justify-content: center;


                    align-items: center;


                    gap: 1rem;


                    flex-wrap: wrap;


                    margin-bottom: 2rem;


                }


                .number {


                    display: flex;


                    align-items: center;


                    justify-content: center;


                    width: 55px;


                    height: 55px;


                    border-radius: 50%;


                    font-size: 1.8rem;


                    font-weight: 600;


                    color: white;


                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);


                    box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.4);


                }


                .explanations-grid {


                    display: grid;


                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));


                    gap: 1.5rem;


                    text-align: left;


                }


                .explanation-item {


                    background: rgba(0,0,0,0.15);


                    padding: 1rem;


                    border-radius: 10px;


                }


                .explanation-item .number-meaning {


                    font-size: 1.5rem;


                    font-weight: 700;


                    color: #4facfe;


                    margin-right: 0.5rem;


                }


                @keyframes fadeIn {


                    from { opacity: 0; transform: translateY(20px); }


                    to { opacity: 1; transform: translateY(0); }


                }


            </style>


            <div class="personalized-result-display">


                <h3 class="result-title">${title}</h3>


                <p class="personalized-story">"${story}"</p>


                <div class="personalized-numbers">


                    ${numbers.map(num => `<div class="number" style="background: ${getNumberColor(num)}">${num}</div>`).join('')}


                </div>


                <div class="explanations-grid">


                    ${explanations.map(ex => `


                        <div class="explanation-item">


                            <span class="number-meaning">${ex.number}:</span>


                            <span>${ex.meaning}</span>


                        </div>


                    `).join('')}


                </div>


            </div>


        `;


    }


}


customElements.define('personalized-result-display', PersonalizedResultDisplay);

function handleEmotionForm() {
    const emotionKeywordsContainer = document.getElementById('emotion-keywords');
    const emotionForm = document.getElementById('emotion-form');
    const emotionResultContainer = document.getElementById('emotion-result');

    if (!emotionKeywordsContainer || !emotionForm) return;

    let selectedEmotions = new Set(); // To store selected emotions

    const renderCategories = () => {
        emotionKeywordsContainer.innerHTML = ''; // Clear previous content
        emotionResultContainer.innerHTML = ''; // Clear results
        emotionForm.querySelector('[data-i18n-key="emotionGenerateButton"]').style.display = 'none';

        const categoryWrapper = document.createElement('div');
        categoryWrapper.className = 'emotion-categories';

        const categoryQuestion = document.createElement('h3');
        categoryQuestion.textContent = window.getTranslation('emotionCategoryQuestion');
        categoryWrapper.appendChild(categoryQuestion);

        Object.keys(emotionKeywords).forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.className = 'category-btn';
            button.type = 'button'; // Prevent form submission
            button.onclick = () => renderKeywords(category);
            categoryWrapper.appendChild(button);
        });

        emotionKeywordsContainer.appendChild(categoryWrapper);
    };

    const renderKeywords = (category) => {
        emotionKeywordsContainer.innerHTML = ''; // Clear categories
        emotionForm.querySelector('[data-i18n-key="emotionGenerateButton"]').style.display = 'block';

        const keywordWrapper = document.createElement('div');
        keywordWrapper.className = 'emotion-keywords-list fade-in';

        const backButton = document.createElement('button');
        backButton.textContent = window.getTranslation('backButton');
        backButton.className = 'back-btn';
        backButton.type = 'button';
        backButton.onclick = renderCategories;
        keywordWrapper.appendChild(backButton);

        const keywords = emotionKeywords[category];
        for (const key in keywords) {
            const label = document.createElement('label');
            label.className = 'emotion-keyword-label';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'emotions';
            checkbox.value = key;
            checkbox.checked = selectedEmotions.has(key); // Set checked state based on selectedEmotions
            checkbox.onchange = (e) => {
                if (e.target.checked) {
                    selectedEmotions.add(key);
                } else {
                    selectedEmotions.delete(key);
                }
            };
            
            const span = document.createElement('span');
            span.textContent = key.charAt(0).toUpperCase() + key.slice(1);

            label.appendChild(checkbox);
            label.appendChild(span);
            keywordWrapper.appendChild(label);
        }
        
        emotionKeywordsContainer.appendChild(keywordWrapper);
    };

    emotionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Use the selectedEmotions Set directly
        const selectedKeywords = Array.from(selectedEmotions);

        if (selectedKeywords.length === 0) {
            alert('Please select at least one emotion.');
            return;
        }

        const numbers = new Set();
        const explanations = [];
        
        // Find the full keyword data from the nested structure
        const allKeywords = Object.values(emotionKeywords).reduce((acc, val) => ({ ...acc, ...val }), {});

        selectedKeywords.forEach((key, index) => {
            if (numbers.size >= 6) return;
            const keywordData = allKeywords[key];
            if (!keywordData) return;

            // Ensure unique number generation within the current context
            let newNumber = (keywordData.base + index * selectedKeywords.length) % 45 + 1;
            while (numbers.has(newNumber)) {
                newNumber = (newNumber + 1) % 45 + 1;
                if (newNumber === 0) newNumber = 1;
            }
            numbers.add(newNumber);
            explanations.push({
                number: newNumber,
                text: `Derived from your feeling of <strong>${key}</strong>, which ${keywordData.description}`
            });
        });

        const seed = selectedKeywords.reduce((acc, key) => acc + (allKeywords[key]?.base || 0), 0);
        let currentSeed = seed;
        const seededRandom = () => {
            const x = Math.sin(currentSeed++) * 10000;
            return x - Math.floor(x);
        };

        let cosmicCount = 1;
        while (numbers.size < 6) {
            const randomNumber = Math.floor(seededRandom() * 45) + 1;
            if (!numbers.has(randomNumber)) {
                numbers.add(randomNumber);
                 explanations.push({
                    number: randomNumber,
                    text: `This is your <strong>Cosmic Number ${cosmicCount++}</strong>, a random cosmic energy drawn to the synergy of your chosen emotions.`
                });
            }
        }
        
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        emotionResultContainer.innerHTML = '';
        const resultDisplay = document.createElement('emotion-result-display');
        resultDisplay.setAttribute('explanations', JSON.stringify(explanations));
        resultDisplay.setAttribute('numbers', JSON.stringify(sortedNumbers));
        emotionResultContainer.appendChild(resultDisplay);
    });

    renderCategories(); // Initial render
    document.addEventListener('languageChanged', renderCategories);
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
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

        await window.languagePromise; // Wait for the initial language to be loaded
        console.log("Language promise resolved.");
        console.log("Translations object:", window.translations);

        // Theme initialization
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

        // Strategy card accordion
        const infoIcons = document.querySelectorAll('.info-icon');
        const strategyCards = document.querySelectorAll('.strategy-card');

        infoIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault(); // Stop the label from triggering the radio input
                e.stopPropagation(); // Stop event bubbling

                const clickedCard = e.target.closest('.strategy-card');
                const isActive = clickedCard.classList.contains('active');

                // Close all other cards
                strategyCards.forEach(card => {
                    card.classList.remove('active');
                });

                // If the clicked card wasn't already active, open it
                if (!isActive) {
                    clickedCard.classList.add('active');
                }
            });
        });

        handleStrategyForm();
        handlePersonalizedForm();
        handleEmotionForm();
    } catch (error) {
        console.error("An error occurred during initial page load:", error);
    }
});