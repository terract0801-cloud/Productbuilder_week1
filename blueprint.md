# AI-Powered Lotto Number Generator

## Overview

A modern and stylish web application that generates lottery numbers. This app provides users with a unique experience by offering number recommendations based on four different data-driven strategies, moving beyond simple random generation. It features a sophisticated, responsive design with multi-language support and other advanced functionalities.

## Implemented Features

*   **Strategic Number Generation:** Users can choose from four different strategies to get their lottery numbers:
    1.  **Statistical Stability:** Recommends numbers that have historically appeared most frequently.
    2.  **Recent Trends:** Focuses on numbers that have been 'hot' in recent draws.
    3.  **Long Shot:** Suggests numbers that have been 'cold' and haven't appeared in a long time.
    4.  **Personalized Combo:** Allows the user to input their own lucky number and generates a combination that has the best 'chemistry' with it.
*   **AdSense Optimization:** Enhanced content quality, improved navigation, and added legal pages (`privacy.html`, `terms.html`).
*   **Modern UI/UX:**
    *   A main "Generate" button and a display area for number sets.
    *   Toggle switches for light/dark mode and bonus number inclusion.
    *   "Copy" buttons for each number set for easy use.
*   **Internationalization:** Supports Korean (default), English, and Spanish.
*   **User Engagement:** Includes a Formspree-powered contact form and a Disqus comment section.

## Current Task: Implement Strategic Lotto Number Generation

The current goal is to build the front-end interface and logic for the strategic number generation feature.

### Plan:

1.  **HTML Structure (`index.html`):**
    *   Create a dedicated section for the AI-powered recommendation feature.
    *   Add a title and descriptive text.
    *   Implement a form with four radio-button options, each representing a generation strategy.
    *   Include a number input field for the "Personalized Combo" strategy.
    *   Add a "Get Recommendation" button to trigger the generation.
    *   Define a result area to display the generated numbers and the reasoning behind the recommendation.
2.  **CSS Styling (`style.css`):**
    *   Apply a modern, clean, and intuitive style to the new strategy selection section.
    *   Design the radio buttons to be visually engaging, like selectable cards.
    *   Ensure the layout is fully responsive and consistent with the existing theme (light/dark modes).
    *   Style the results area to present the numbers and their "story" clearly.
3.  **JavaScript Logic (`main.js`):**
    *   Add an event listener to the recommendation button.
    *   Implement a function to generate lotto numbers based on the selected strategy. (Note: Since real historical data is not available, the logic will simulate the data for each strategy to demonstrate the feature).
    *   Create a `<lotto-result>` Web Component to dynamically render the results in a structured and reusable way. This component will display the chosen numbers and the explanatory text.
    *   Handle user input and basic validation (e.g., for the personalized number).