
# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers.

## Current Task

### Plan

1.  **Add Dark Mode Toggle to `index.html`**:
    *   Add a button to the HTML to allow users to manually switch between light and dark modes.
2.  **Update `style.css` for Theming**:
    *   Introduce CSS variables for colors to easily manage themes.
    *   Create a `dark-mode` class that overrides the default light theme variables.
    *   Use the `@media (prefers-color-scheme: dark)` media query to automatically apply dark mode based on the user's system preference.
3.  **Update `main.js` for Theme Switching**:
    *   Add JavaScript to handle the theme toggle.
    *   The script will toggle a `dark-mode` class on the `body` element.
    *   The user's selected theme will be saved to `localStorage` to persist the choice across visits.
    *   The script will also check for a saved theme or system preference on page load.

### Design and Features

*   **UI Components:**
    *   A button to generate numbers.
    *   A display area for the generated numbers.
    *   A toggle switch for light/dark mode.
*   **Styling:**
    *   A clean and modern design.
    *   Visually distinct display for the generated numbers.
    *   Responsive layout for different screen sizes.
    *   Support for both light and dark color schemes.
*   **Functionality:**
    *   Generates 6 unique random numbers from 1 to 45.
    *   Sorts the numbers in ascending order before displaying them.
    *   Allows users to switch between light and dark themes.
    *   Remembers the user's theme preference.
