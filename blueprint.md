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
*   **Internationalization:** Supports Korean (default), English), and Spanish.
*   **User Engagement:** Includes a Formspree-powered contact form and a Disqus comment section.

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
*   **Internationalization:** Supports Korean (default), English), and Spanish.
*   **User Engagement:** Includes a Formspree-powered contact form and a Disqus comment section.
*   **SEO & Crawlability:** Includes a `robots.txt` for crawlers and a `sitemap.xml` for site discovery.

## GEO (Generative Engine Optimization)

Implemented advanced optimization techniques to make the website's content more understandable and citable for AI models like ChatGPT, Gemini, etc.

*   **Structured Data (Schema Markup):**
    *   Added a comprehensive JSON-LD script to the `<head>` of `index.html`.
    *   **`Organization` Schema:** Clearly identifies the website as an organization named "Lotto Number Generator."
    *   **`WebSite` Schema:** Defines the site's name, description, and supported languages.
    *   **`FAQPage` Schema:** Provides explicit questions and answers for each of the four number generation strategies, making it easy for AI to pull this information for user queries.

*   **Semantic HTML & Content Strategy:**
    *   **Q&A Content Section:** Added a new, visible section on the main page formatted as a Question & Answer session. This section uses semantic `<article>`, `<h2>`, and `<h3>` tags to directly explain how each AI strategy works, mirroring the `FAQPage` schema.
    *   **Semantic Data Tables:** Modified the JavaScript (`main.js`) to render the generated lottery numbers inside a `<table>` element instead of a `<div>`. This clearly communicates the tabular nature of the data to crawlers and AI.

*   **Internationalization for GEO:**
    *   All new Q&A content was fully internationalized, with corresponding keys added to the `en.json`, `es.json`, and `ko.json` locale files. This ensures the GEO improvements are effective across all supported languages.