# Lotto Number Generator

## Overview

A modern and stylish web application to generate lottery numbers, with options for bonus numbers, easy copying of results, and multi-language support (English/Spanish).

## Current Task

### Plan - Internationalization (i18n)

1.  **Create Translation Files**:
    *   Create a `locales` directory with `en.json` and `es.json`.
    *   Populate JSON files with key-value pairs for all UI text strings.
2.  **Implement Language Switcher**:
    *   Add a language switcher UI to `index.html`.
    *   Add `data-i18n-key` attributes to all translatable HTML elements.
3.  **Implement Translation Logic**:
    *   Create a new `i18n.js` module to handle language loading and application.
    *   Fetch and apply translations based on user selection.
    *   Persist the selected language in `localStorage`.
    *   Detect browser language for initial setup.
4.  **Integrate and Verify**:
    *   Ensure all components, including dynamic text in the `LottoGenerator`, are translated.
    *   Thoroughly test language switching and all existing features.
5.  **Deployment**:
    *   Commit all new and modified files to git and push to the remote repository.

### Design and Features

*   **UI Components:**
    *   A main "Generate" button.
    *   A display area for multiple sets of generated numbers.
    *   A toggle switch for light/dark mode.
    *   A checkbox to include a bonus number.
    *   "Copy" buttons for each number set.
    *   A language switcher for English and Spanish.
*   **Styling:**
    *   A sophisticated, modern, and bold design.
    *   Fully responsive for mobile and web and accessible (A11Y) design.
*   **Functionality:**
    *   Generates 5 sets of lottery numbers, with an optional bonus number.
    *   Allows users to copy number sets to the clipboard.
    *   Supports switchable light and dark themes with preference persistence.
    *   **Supports internationalization (Korean as default, English and Spanish available), including `locales/ko.json`.**
*   **Contact Form:**
    *   A simple contact form integrated with Formspree (endpoint: `https://formspree.io/f/meekdzok`).
    *   Includes fields for Name, Email, and Message, allowing users to send partnership inquiries.
    *   Styled consistently with the application's glassmorphism theme.
