# Lotto Number Generator Blueprint

## Overview

This document outlines the features, design, and development plan for the Lotto Number Generator application. The goal is to create a visually appealing and intuitive tool that provides users with various strategies for generating lottery numbers.

## Core Features

- **Multiple Generation Strategies:**
  - **Statistical Stability:** Based on the historical frequency of numbers.
  - **Recent Trends:** Focuses on "hot" numbers from recent draws.
  - **Long Shot:** Picks "cold" numbers that haven't appeared in a while.
  - **Personalized Combo:** Generates combinations based on a user's lucky number.
  - **Personalized Story & Numbers:** Creates a unique set of numbers based on the user's name and birthdate.
- **AI-Powered Recommendations:** The strategies are presented as AI-powered, giving users a sense of advanced analysis.
- **Modern UI/UX:**
  - Dark/Light theme switcher.
  - Responsive design for mobile and web.
  - Interactive elements and clean layout.
- **Internationalization (i18n):** Support for multiple languages (English, Spanish, Korean).

## Design Principles

- **Visual Appeal:** Use modern design elements like gradients, shadows, and icons to create a premium feel.
- **Intuitive Navigation:** Easy-to-understand layout and clear instructions.
- **Interactivity:** Engaging UI components that respond to user actions.
- **Accessibility (A11Y):** Implement accessibility standards to ensure the app is usable by everyone.

## Completed Tasks

### Fix i18n "Missing Key" Errors and Overhaul UI/UX
- **Problem:** The UI had "Missing key" errors due to an incomplete English translation file, and the overall design was inconsistent.
- **Solution:**
  - **[Completed]** Populated `en.json` with all necessary keys.
  - **[Completed]** Overhauled `style.css` to create a unified, card-based layout for all generator sections.
  - **[Completed]** Styled the emotion keywords as interactive tags.
  - **[Completed]** Updated `main.js` to support the new styling.

### Implemented AI-Powered Dynamic Story Generation
- **Problem:** The personalized story feature, while improved, still lacked a dynamic, AI-like quality and didn't fully explain the "why" behind the numbers.
- **Solution:** Overhauled the feature to simulate AI-powered, dynamic story generation.
    - **[Completed]** Created a `numberMeanings` data structure, assigning a unique symbolic meaning to each number from 1 to 45.
    - **[Completed]** Implemented a new `generatePersonalizedStoryAndNumbers` function that combines a user's personal data with story templates and the new number meanings. This ensures that a different, unique story is generated with every request.
    - **[Completed]** The UI now presents not only the story but also a detailed breakdown of each number and its specific meaning, providing the requested explanation and a more engaging, AI-driven experience.
- **Previous Step:** The earlier story-driven algorithm, which tied stories to specific dates, served as a foundation for this more advanced implementation.

## Current Task: Enhance Emotion-Based Generator UX

### Description
To make the keyword selection process more engaging and increase the variety of generated numbers, the emotion-based generator will be enhanced with a new interactive "journey."

### Plan
1.  **[In-Progress] Update `blueprint.md`:** Document the new enhancement for the emotion-based generator.
2.  **[Pending] Expand Keywords in `main.js`:**
    -   Restructure the `emotionKeywords` object to be a nested, categorized list (e.g., Positive, Reflective, Ambitious).
    -   Significantly expand the number of keywords to provide more variety.
3.  **[Pending] Create Interactive Journey in `main.js`:**
    -   Modify the `handleEmotionForm` function to dynamically build a multi-step UI.
    -   First, display the keyword categories to the user.
    -   Upon selecting a category, display the associated keywords.
4.  **[Pending] Enhance UI in `style.css`:**
    -   Add styles for the new category selection buttons.
    -   Add fade-in animations to make the appearance of keywords smoother.
5.  **[Pending] Adjust `index.html`:** Make minor adjustments to the `emotion-generator-section` to accommodate the new dynamic UI.
6.  **[Pending] Verify Changes:** Ensure the new interactive journey is functional, intuitive, and visually polished.
