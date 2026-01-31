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

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
});

class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    this.generateBtn = document.createElement('button');
    this.generateBtn.classList.add('generate-btn');
    this.generateBtn.addEventListener('click', () => this.generateNumbers());
    
    const result = document.createElement('div');
    result.setAttribute('class', 'result');

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
      .generate-btn {
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        border-radius: 15px;
        color: var(--text-color);
        background: var(--component-background);
        border: 1px solid var(--component-border-color);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        transition: all 0.3s ease;
      }
      .generate-btn:hover {
        box-shadow: 0 0 20px 5px var(--glow-color);
      }
      .result {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
      }
      .lotto-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(255,255,255,0.05);
        border-radius: 15px;
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
        transition: all 0.3s ease;
      }
      .bonus-number {
        transform: scale(0.9);
        box-shadow: inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.3);
        border: 3px solid rgba(255,255,255,0.8);
      }
      .plus-icon {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-color);
        opacity: 0.8;
      }
      .copy-btn {
        background: none;
        border: none;
        color: var(--text-color);
        cursor: pointer;
        margin-left: auto;
        padding: 5px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      .copy-btn:hover {
        background: var(--component-background);
        box-shadow: 0 0 10px 3px var(--glow-color);
      }
      .copy-btn svg {
        width: 20px;
        height: 20px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(this.generateBtn);
    wrapper.appendChild(result);

    this.resultContainer = result;
    this.bonusCheckbox = document.getElementById('bonus-checkbox');
  }

    connectedCallback() {
        this.updateButtonText();
        // Listen for language changes to update dynamic text
        document.addEventListener('languageChanged', () => {
            this.updateButtonText();
        });
    }

    updateButtonText() {
        if (window.getTranslation) {
            this.generateBtn.textContent = window.getTranslation('generateButton');
        }
    }

  getNumberColor(number) {
    if (number <= 10) return 'linear-gradient(135deg, #ffb88c, #de6262)';
    if (number <= 20) return 'linear-gradient(135deg, #4facfe, #00f2fe)';
    if (number <= 30) return 'linear-gradient(135deg, #ff416c, #ff4b2b)';
    if (number <= 40) return 'linear-gradient(135deg, #a1c4fd, #c2e9fb)';
    return 'linear-gradient(135deg, #56ab2f, #a8e063)';
  }

  copyNumbers(numbers, bonusNumber, button) {
    let textToCopy = numbers.join(', ');
    if (bonusNumber) {
      textToCopy += ` + ${bonusNumber}`;
    }
    navigator.clipboard.writeText(textToCopy).then(() => {
      button.innerHTML = ICONS.check;
      setTimeout(() => {
        button.innerHTML = ICONS.copy;
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy numbers: ', err);
    });
  }

  generateNumbers() {
    this.updateButtonText();
    
    const includeBonus = this.bonusCheckbox.checked;
    this.resultContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const numbers = new Set();
      const numbersToGenerate = includeBonus ? 7 : 6;
      while (numbers.size < numbersToGenerate) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
      }

      const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

      const row = document.createElement('div');
      row.setAttribute('class', 'lotto-row');

      const mainNumbers = includeBonus ? sortedNumbers.slice(0, 6) : sortedNumbers;
      const bonusNumber = includeBonus ? sortedNumbers[6] : null;

      const numbersContainer = document.createElement('div');
      numbersContainer.style.display = 'flex';
      numbersContainer.style.gap = '1rem';
      numbersContainer.style.alignItems = 'center';

      for (const number of mainNumbers) {
        const numberDiv = document.createElement('div');
        numberDiv.setAttribute('class', 'number');
        numberDiv.textContent = number;
        numberDiv.style.background = this.getNumberColor(number);
        numbersContainer.appendChild(numberDiv);
      }

      row.appendChild(numbersContainer);

      if (bonusNumber) {
        const plusIcon = document.createElement('span');
        plusIcon.setAttribute('class', 'plus-icon');
        plusIcon.textContent = '+';
        row.appendChild(plusIcon);

        const bonusDiv = document.createElement('div');
        bonusDiv.setAttribute('class', 'number bonus-number');
        bonusDiv.textContent = bonusNumber;
        bonusDiv.style.background = this.getNumberColor(bonusNumber);
        row.appendChild(bonusDiv);
      }

      const copyButton = document.createElement('button');
      copyButton.setAttribute('class', 'copy-btn');
      copyButton.innerHTML = ICONS.copy;
      copyButton.title = window.getTranslation ? window.getTranslation('copyButton') : 'Copy';
      copyButton.addEventListener('click', () => this.copyNumbers(mainNumbers, bonusNumber, copyButton));
      row.appendChild(copyButton);

      this.resultContainer.appendChild(row);
    }
  }
}

customElements.define('lotto-generator', LottoGenerator);
