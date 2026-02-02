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

## Current Task: Enhance Personalized Number Generation

### Problem

The current "Personalized Story & Numbers" feature lacks transparency. Users input their name and birthdate but are given a set of numbers with a generic "cosmic energy" story. There is no clear explanation of how the inputs are connected to the outputs, which diminishes the user's perception of value.

### Plan

The plan is to make the number generation process transparent and meaningful by creating a compelling narrative that shows the user how their personal information is used to craft their lucky numbers.

1.  **[Completed] Create `blueprint.md`:** Document the project's purpose, features, and the plan for the current change.
2.  **[Completed] Modify UI in `index.html`:** Add a new container within the `personalized-result` div to display the "calculation steps" or the "story" of how the numbers were generated.
3.  **[Completed] Modify logic in `main.js`:**
    -   Break down the calculation into understandable "lucky numbers" derived from the name and birthday (e.g., "Name Number," "Destiny Numbers").
    -   Use these derived numbers as the core of the generated lotto numbers.
    -   Construct a narrative that explains each step of the process.
4.  **[Completed] Update `PersonalizedResultDisplay` custom element:** Modify the custom element to display the new, more detailed story and the numbers.
