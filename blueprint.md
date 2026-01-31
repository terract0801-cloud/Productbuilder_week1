# Lotto Number Generator

## Overview

A modern and stylish web application to generate lottery numbers, with options for bonus numbers and easy copying of results.

## Current Task

### Plan

1.  **Feature: Bonus Number**
    *   Add a checkbox to `index.html` to allow users to include a bonus number.
    *   Update `main.js` to generate 6 main numbers and 1 bonus number when the option is active.
    *   Style the bonus number differently to distinguish it from the main numbers.
2.  **Feature: Copy to Clipboard**
    *   Add a "Copy" icon/button next to each generated number set.
    *   Implement clipboard functionality in `main.js` using `navigator.clipboard.writeText`.
    *   Provide visual feedback to the user upon successful copy.
3.  **UI/UX Redesign**
    *   Update `style.css` and inline styles in `main.js` to create a more sophisticated and modern look.
    *   Introduce a new, vibrant color palette and improve typography (e.g., using Google Fonts).
    *   Incorporate icons for interactive elements (Copy, Theme Toggle).
    *   Refine layout, spacing, and add subtle animations and multi-layered shadow effects for a premium feel.
4.  **Deployment**
    *   Commit all changes to git and push to the remote repository.

### Design and Features

*   **UI Components:**
    *   A main "Generate" button.
    *   A display area for multiple sets of generated numbers.
    *   A toggle switch for light/dark mode.
    *   A checkbox to include a bonus number.
    *   "Copy" buttons for each number set.
*   **Styling:**
    *   A sophisticated, modern, and bold design.
    *   Vibrant color palette with gradients and textures.
    *   Expressive typography and clear visual hierarchy.
    *   Interactive icons and "glow" effects on buttons.
    *   Multi-layered drop shadows for a sense of depth.
    *   Fully responsive for mobile and web.
    *   Accessible (A11Y) design.
*   **Functionality:**
    *   Generates 5 sets of lottery numbers.
    *   Optionally includes a bonus number for each set.
    *   Sorts numbers in ascending order.
    *   Allows users to copy number sets to the clipboard.
    *   Supports switchable light and dark themes with preference persistence.
