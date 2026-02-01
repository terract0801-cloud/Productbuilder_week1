const ICONS = {
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
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

// LottoGenerator class is no longer used, but keeping for reference if needed.
// class LottoGenerator extends HTMLElement {
//   constructor() {
//     super();
//     const shadow = this.attachShadow({ mode: 'open' });

//     const wrapper = document.createElement('div');
//     wrapper.setAttribute('class', 'wrapper');

//     this.generateBtn = document.createElement('button');
//     this.generateBtn.classList.add('generate-btn');
//     this.generateBtn.addEventListener('click', () => this.generateNumbers());
    
//     const result = document.createElement('div');
//     result.setAttribute('class', 'result');

//     const style = document.createElement('style');
//     style.textContent = `
//       .wrapper {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 2rem;
//       }
//       .generate-btn {
//         padding: 0.8rem 2rem;
//         font-size: 1.2rem;
//         font-weight: 600;
//         font-family: 'Poppins', sans-serif;
//         cursor: pointer;
//         border-radius: 15px;
//         color: var(--text-color);
//         background: var(--component-background);
//         border: 1px solid var(--component-border-color);
//         box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//         backdrop-filter: blur(5px);
//         -webkit-backdrop-filter: blur(5px);
//         transition: all 0.3s ease;
//       }
//       .generate-btn:hover {
//         box-shadow: 0 0 20px 5px var(--glow-color);
//       }
//       .result {
//         display: flex;
//         flex-direction: column;
//         gap: 1.5rem;
//         width: 100%;
//       }
//       .lotto-row {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 1rem;
//         padding: 1rem;
//         background: rgba(255,255,255,0.05);
//         border-radius: 15px;
//       }
//       .number {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         width: 55px;
//         height: 55px;
//         border-radius: 50%;
//         font-size: 1.8rem;
//         font-weight: 600;
//         color: white;
//         text-shadow: 0 1px 3px rgba(0,0,0,0.3);
//         box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.4);
//         transition: all 0.3s ease;
//       }
//       .bonus-number {
//         transform: scale(0.9);
//         box-shadow: inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.3);
//         border: 3px solid rgba(255,255,255,0.8);
//       }
//       .plus-icon {
//         font-size: 1.5rem;
//         font-weight: 600;
//         color: var(--text-color);
//         opacity: 0.8;
//       }
//       .copy-btn {
//         background: none;
//         border: none;
//         color: var(--text-color);
//         cursor: pointer;
//         margin-left: auto;
//         padding: 5px;
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         transition: all 0.3s ease;
//       }
//       .copy-btn:hover {
//         background: var(--component-background);
//         box-shadow: 0 0 10px 3px var(--glow-color);
//       }
//       .copy-btn svg {
//         width: 20px;
//         height: 20px;
//       }
//     `;

//     shadow.appendChild(style);
//     shadow.appendChild(wrapper);
//     wrapper.appendChild(this.generateBtn);
//     wrapper.appendChild(result);

//     this.resultContainer = result;
//     this.bonusCheckbox = document.getElementById('bonus-checkbox');
//   }

//     connectedCallback() {
//         this.updateButtonText();
//         document.addEventListener('languageChanged', () => this.updateButtonText());
//     }

//     updateButtonText() {
//         if (window.getTranslation) {
//             this.generateBtn.textContent = window.getTranslation('generateButton');
//         }
//     }

//   copyNumbers(numbers, bonusNumber, button) {
//     let textToCopy = numbers.join(', ');
//     if (bonusNumber) {
//       textToCopy += ` + ${bonusNumber}`;
//     }
//     navigator.clipboard.writeText(textToCopy).then(() => {
//       button.innerHTML = ICONS.check;
//       setTimeout(() => {
//         button.innerHTML = ICONS.copy;
//       }, 1500);
//     }).catch(err => {
//       console.error('Failed to copy numbers: ', err);
//     });
//   }

//   generateNumbers() {
//     this.updateButtonText();
    
//     const includeBonus = this.bonusCheckbox.checked;
//     this.resultContainer.innerHTML = '';
//     for (let i = 0; i < 5; i++) {
//       const numbers = new Set();
//       const numbersToGenerate = includeBonus ? 7 : 6;
//       while (numbers.size < numbersToGenerate) {
//         numbers.add(Math.floor(Math.random() * 45) + 1);
//       }

//       const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
//       const row = document.createElement('div');
//       row.setAttribute('class', 'lotto-row');
//       const mainNumbers = includeBonus ? sortedNumbers.slice(0, 6) : sortedNumbers;
//       const bonusNumber = includeBonus ? sortedNumbers[6] : null;
//       const numbersContainer = document.createElement('div');
//       numbersContainer.style.display = 'flex';
//       numbersContainer.style.gap = '1rem';
//       numbersContainer.style.alignItems = 'center';

//       for (const number of mainNumbers) {
//         const numberDiv = document.createElement('div');
//         numberDiv.setAttribute('class', 'number');
//         numberDiv.textContent = number;
//         numberDiv.style.background = getNumberColor(number);
//         numbersContainer.appendChild(numberDiv);
//       }

//       row.appendChild(numbersContainer);

//       if (bonusNumber) {
//         const plusIcon = document.createElement('span');
//         plusIcon.setAttribute('class', 'plus-icon');
//         plusIcon.textContent = '+';
//         row.appendChild(plusIcon);

//         const bonusDiv = document.createElement('div');
//         bonusDiv.setAttribute('class', 'number bonus-number');
//         bonusDiv.textContent = bonusNumber;
//         bonusDiv.style.background = getNumberColor(bonusNumber);
//         row.appendChild(bonusDiv);
//       }

//       const copyButton = document.createElement('button');
//       copyButton.setAttribute('class', 'copy-btn');
//       copyButton.innerHTML = ICONS.copy;
//       copyButton.title = window.getTranslation ? window.getTranslation('copyButton') : 'Copy';
//       copyButton.addEventListener('click', () => this.copyNumbers(mainNumbers, bonusNumber, copyButton));
//       row.appendChild(copyButton);

//       this.resultContainer.appendChild(row);
//     }
//   }
// }
// customElements.define('lotto-generator', LottoGenerator);

// --- AI Strategy Generator ---

class StrategyResultDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.copyNumbers = this.copyNumbers.bind(this); // Bind this
    }

    // Helper to copy numbers, similar to LottoGenerator's
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

    connectedCallback() {
        const numbers = JSON.parse(this.getAttribute('numbers'));
        const explanation = this.getAttribute('explanation'); // Can be empty
        const title = this.getAttribute('title'); // Can be empty

        // Dynamically construct the header part only if title or explanation exists AND is not empty
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
                    padding: 0.8rem; /* Adjusted for tighter packing within the main box */
                    background: transparent; /* Make individual results blend into the parent wrapper */
                    border-radius: 0; /* No individual border-radius */
                    text-align: center;
                    animation: fadeIn 0.5s ease-in-out;
                    margin-bottom: 0.5rem; /* Subtle separation within the main box */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem; /* Smaller gap */
                    position: relative;
                    box-shadow: none; /* Remove individual box shadow */
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .result-header {
                    width: 100%;
                }
                .result-title {
                    font-size: 1.3rem; /* Further adjusted font size */
                    font-weight: 700;
                    margin-bottom: 0.3rem;
                    color: var(--text-color);
                }
                .numbers-container {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem; /* Further adjusted gap */
                    margin-bottom: 0.5rem;
                    flex-wrap: wrap;
                }
                .number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 45px; /* Adjusted size */
                    height: 45px; /* Adjusted size */
                    border-radius: 50%;
                    font-size: 1.5rem; /* Adjusted font size */
                    font-weight: 600;
                    color: white;
                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                    box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.4);
                }
                .explanation {
                    font-style: italic;
                    opacity: 0.9;
                    font-size: 0.85rem; /* Further adjusted font size */
                    padding: 0 0.5rem;
                    color: var(--text-color);
                }
                .copy-btn-result {
                    background: none;
                    border: none;
                    color: var(--text-color);
                    cursor: pointer;
                    position: absolute;
                    top: 5px; /* Adjusted position */
                    right: 5px; /* Adjusted position */
                    padding: 3px;
                    border-radius: 50%;
                    width: 30px; /* Adjusted size */
                    height: 30px; /* Adjusted size */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .copy-btn-result:hover {
                    background: var(--component-background);
                    box-shadow: 0 0 8px 2px var(--glow-color); /* Adjusted shadow */
                }
                .copy-btn-result svg {
                    width: 16px; /* Adjusted size */
                    height: 16px; /* Adjusted size */
                }
            </style>
            <div class="result-wrapper">
                ${headerHtml} <!-- Insert the conditional header -->
                <div class="numbers-container">
                    ${numbers.map(num => `<div class="number" style="background: ${getNumberColor(num)}">${num}</div>`).join('')}
                </div>
                <button class="copy-btn-result" title="${window.getTranslation ? window.getTranslation('copyButton') : 'Copy'}">${ICONS.copy}</button>
            </div>
        `;
        const copyButton = this.shadowRoot.querySelector('.copy-btn-result');
        if (copyButton) {
            copyButton.addEventListener('click', () => this.copyNumbers(numbers, copyButton));
        }
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
                result.add(randomNumber);
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

document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    // AI Strategy Form listener
    const strategyForm = document.getElementById('strategy-form');
    const resultContainer = document.getElementById('strategy-result-container');
    const personalNumberInput = document.getElementById('personal-number');
    const strategyRadioButtons = strategyForm.querySelectorAll('input[name="strategy"]'); // Fixed: missing closing parenthesis

    // Function to update placeholder for personal number input
    const updatePersonalNumberPlaceholder = () => {
        const selectedStrategy = strategyForm.querySelector('input[name="strategy"]:checked').value;
        const personalCard = document.querySelector('label.strategy-option input[value="personal"] + .strategy-card');
        
        if (selectedStrategy === 'personal') {
            personalNumberInput.placeholder = window.getTranslation('personalNumberPlaceholder');
            personalNumberInput.style.display = 'block'; // Show input
            // Adjust card height for personal strategy
            if (personalCard) personalCard.style.minHeight = 'auto';
        } else {
            personalNumberInput.placeholder = '';
            personalNumberInput.value = ''; // Clear value when not personal
            personalNumberInput.style.display = 'none'; // Hide input
            // Reset card height if not personal strategy
            if (personalCard) personalCard.style.minHeight = '150px'; // Adjust as needed
        }
    };

    if(strategyForm) {
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
                
                // Filter out non-numbers and duplicates, then check range
                const uniqueNumbers = [...new Set(parts)].filter(num => !isNaN(num) && num >= 1 && num >= 1 && num <= 45);
                
                if (uniqueNumbers.length === 0 || uniqueNumbers.length > 6) {
                    alert(window.getTranslation('personalNumberInvalid'));
                    return;
                }
                userNumbers = uniqueNumbers;
            }
    
            resultContainer.innerHTML = ''; // Clear previous results
            
            // Add a wrapper for better visual grouping of multiple results
            const resultsWrapper = document.createElement('div');
            resultsWrapper.style.display = 'flex';
            resultsWrapper.style.flexDirection = 'column';
            resultsWrapper.style.gap = '0.5rem'; // Adjusted gap between individual results for tighter packing
            resultsWrapper.style.marginTop = '1rem';
            resultsWrapper.style.padding = '1rem';
            resultsWrapper.style.background = 'var(--component-background)'; // Use component background
            resultsWrapper.style.borderRadius = '20px';
            resultsWrapper.style.boxShadow = 'inset 0 0 15px rgba(0,0,0,0.1)';

            let allGeneratedNumbers = new Set(); // To store all numbers generated across sets

            // Store the overall title and explanation once
            let overallTitle = '';
            let overallExplanation = '';
            let isFirstSet = true;
            
            for (let i = 0; i < 5; i++) {
                // For personal strategy, userNumbers is always included, so exclude those too for filling randoms
                const numbersToExcludeForThisSet = (strategy === 'personal') 
                    ? new Set([...allGeneratedNumbers, ...userNumbers]) 
                    : allGeneratedNumbers;

                const result = generateStrategyNumbers(strategy, userNumbers, numbersToExcludeForThisSet);
                
                // Set overall title and explanation only once from the first result
                if (isFirstSet) {
                    overallTitle = result.title;
                    overallExplanation = result.explanation;
                    isFirstSet = false;
                }

                const resultDisplay = document.createElement('strategy-result-display');
                resultDisplay.setAttribute('numbers', JSON.stringify(result.numbers));
                // Do not pass explanation and title to individual StrategyResultDisplay instances
                // resultDisplay.setAttribute('explanation', i === 0 ? result.explanation : '');
                // resultDisplay.setAttribute('title', i === 0 ? result.title : '');
                resultsWrapper.appendChild(resultDisplay);

                // Add newly generated numbers to the exclusion set for the next iteration
                result.numbers.forEach(num => allGeneratedNumbers.add(num));
            }

            // Create a header for the resultsWrapper to display the overall title and explanation once
            const wrapperHeader = document.createElement('div');
            wrapperHeader.style.textAlign = 'center';
            wrapperHeader.style.marginBottom = '1rem';
            wrapperHeader.innerHTML = `
                <h3 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-color);">${overallTitle}</h3>
                <p style="font-style: italic; opacity: 0.9; font-size: 1rem; color: var(--text-color);">${overallExplanation}</p>
            `;
            resultsWrapper.prepend(wrapperHeader); // Add header at the beginning of the wrapper

            resultContainer.appendChild(resultsWrapper);
        });

        // Add change listeners to radio buttons
        strategyRadioButtons.forEach(radio => {
            radio.addEventListener('change', updatePersonalNumberPlaceholder);
        });

        // Initial call to set correct placeholder/visibility on load
        updatePersonalNumberPlaceholder();
        // Also update placeholder if language changes
        document.addEventListener('languageChanged', updatePersonalNumberPlaceholder);
    }
});