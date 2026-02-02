# Blueprint: AI-Powered Number Generator

## **Overview**

This is an AI-enhanced web application designed to provide users with unique and personalized "lucky numbers." It moves beyond simple random generation by incorporating user data, geographic context, and compelling narratives to create a fun, engaging, and shareable experience.

## **Implemented Features & Design**

### **Initial Setup & Core UI (v1.0)**

*   **Technology:** Framework-less HTML, CSS, and JavaScript.
*   **Layout:** A clean, modern, single-page interface with a central content area.
*   **Components:**
    *   Header with the application title.
    *   A main section for the number generation widgets.
    *   A footer for links to legal pages (Terms, Privacy).
*   **Styling:**
    *   **Font:** Uses the "Pretendard" web font for excellent readability.
    *   **Color Palette:** A simple and elegant scheme with a dark background (`#1a1a1a`), white text, and an accent color for interactive elements.
    *   **Effects:** Subtle box-shadows and transitions for a premium feel.
*   **Internationalization (i18n):** Basic structure implemented using `i18n.js` and JSON files for English, Spanish, and Korean to support future multilingual capabilities.

## **Current Plan: Personalized Number Generation (v1.1)**

This update will introduce a new feature that generates lucky numbers based on user-provided data, creating a personalized and story-driven experience.

1.  **[Completed] Update Blueprint:** Document the plan for the new "Personalized Number Generation" feature in `blueprint.md`.
2.  **[Completed] Modify HTML (`index.html`):**
    *   Add a new section with the ID `#personalized-generator-section` before the existing `strategy-section`.
    *   Inside this section, create a form with input fields for the user's name (`<input type="text">`) and birthdate (`<input type="date">`).
    *   Add a "Generate My Numbers" button (`<button>`) to trigger the process.
    *   Create a `div` with the ID `personalized-result` to display the generated story and numbers.
3.  **[Completed] Style New Elements (`style.css`):**
    *   Design the new input fields and button to match the existing modern aesthetic.
    *   Style the `#personalized-result` area to be visually distinct and engaging, perhaps with a subtle animation when the result appears.
    *   Ensure the new section is responsive and looks great on all screen sizes.
4.  **[Completed] Implement JavaScript Logic (`main.js`):**
    *   Add an event listener to the new "Generate" button.
    *   Create a function `generatePersonalizedNumbers()` that:
        *   Retrieves the name and birthdate from the input fields.
        *   Performs basic validation (e.g., ensure fields are not empty).
        *   Creates a unique story using a template string, incorporating the user's name and birthdate details (e.g., "From the energy of [Name]'s special day, [Year]/[Month]/[Day]...").
        *   Generates 6 unique lucky numbers (1-45 range) using an algorithm seeded by the user's data to make it feel personal and destined.
        *   Dynamically injects the generated story and numbers into the `#personalized-result` div with a fade-in animation for a better user experience.