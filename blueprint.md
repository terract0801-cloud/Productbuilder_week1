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

### Enhance Personalized Number Generation
- **Problem:** The "Personalized Story & Numbers" feature was opaque and did not provide a clear connection between user input and the generated numbers.
- **Solution:** The feature was updated to provide a transparent and meaningful narrative, explaining how the numbers are derived from the user's name and birthdate.
  - **[Completed]** Created `blueprint.md` for project documentation.
  - **[Completed]** Modified UI in `index.html`.
  - **[Completed]** Modified logic in `main.js` for transparent number generation.
  - **[Completed]** Updated `PersonalizedResultDisplay` custom element.

## Current Task: Implement Emotion-Based Number Generator

### Description

This new feature will allow users to select from a predefined list of emotion keywords and receive a set of 6 lottery numbers. The generation process will be explained to the user, making it feel "AI-like" and transparent.

### Plan

1.  **[Completed] Update `blueprint.md`:** Add the new feature "Emotion-Based Number Generator" to the blueprint and outline the plan.
2.  **[Completed] Update `index.html`:** Add a new section for the emotion-based generator, including a list of selectable keywords (checkboxes), a "Generate" button, and a result container.
3.  **[Completed] Update `main.js`:**
    -   Define a list of emotion keywords and their associated numerical values.
    -   Implement an event listener for the new "Generate" button.
    -   Create an "AI-like" algorithm to convert selected keywords into 6 unique lottery numbers.
    -   Generate a detailed explanation for each number.
    -   Create a new custom element `emotion-result-display` to display the results.
