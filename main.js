const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = 'Toggle Dark Mode';
    }
    localStorage.setItem('theme', theme);
};

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Check for saved theme or system preference on initial load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    }
});

class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers());

    const result = document.createElement('div');
    result.setAttribute('class', 'result');

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --button-background: var(--button-background, #ffdd57);
        --button-text-color: var(--button-text-color, #333);
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      button {
        padding: 15px 30px;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 30px;
        border: none;
        border-radius: 10px;
        background: var(--button-background);
        color: var(--button-text-color);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
      }
      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
      .result {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .lotto-row {
        display: flex;
        gap: 15px;
      }
      .number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(button);
    wrapper.appendChild(result);

    this.resultContainer = result;
  }

  getNumberColor(number) {
      if (number <= 10) return '#f1c40f'; // Yellow
      if (number <= 20) return '#3498db'; // Blue
      if (number <= 30) return '#e74c3c'; // Red
      if (number <= 40) return '#95a5a6'; // Gray
      return '#2ecc71'; // Green
  }

  generateNumbers() {
    this.resultContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const numbers = new Set();
      while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
      }

      const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

      const row = document.createElement('div');
      row.setAttribute('class', 'lotto-row');

      for (const number of sortedNumbers) {
        const numberDiv = document.createElement('div');
        numberDiv.setAttribute('class', 'number');
        numberDiv.textContent = number;
        numberDiv.style.backgroundColor = this.getNumberColor(number);
        row.appendChild(numberDiv);
      }
      this.resultContainer.appendChild(row);
    }
  }
}

customElements.define('lotto-generator', LottoGenerator);
