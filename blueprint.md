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
    *   An interactive accordion UI on strategy cards to show detailed explanations without cluttering the interface.
    *   A main "Generate" button and a display area for number sets.
    *   Social sharing buttons (Facebook, Twitter, KakaoTalk, Copy Link) that appear after number generation.
    *   Toggle switches for light/dark mode.
    *   "Copy" buttons for each number set for easy use.
*   **Internationalization:** Supports Korean (default), English, and Spanish.
*   **User Engagement:** 
    *   Includes a Formspree-powered contact form and a Disqus comment section.
    *   **Social Sharing:** Encourages viral growth by allowing users to easily share the site on major platforms.
*   **SEO & Crawlability:** Includes a `robots.txt` for crawlers and a `sitemap.xml` for site discovery.

## GEO (Generative Engine Optimization) & UX Refinement

Implemented advanced optimization techniques to make the website's content more understandable to AI models, while simultaneously improving the user experience by removing redundancy.

*   **Invisible Structured Data (Schema Markup):**
    *   A comprehensive JSON-LD script remains in the `<head>` of `index.html`.
    *   This script uses `Organization`, `WebSite`, and **`FAQPage`** schemas to provide explicit, machine-readable information about the site and its content for AI crawlers and search engines. This is the core of the GEO strategy and is preserved.

*   **Interactive Content Delivery (Improved UX):**
    *   **Removed Redundancy:** The static, visible "Q&A" section was removed to avoid duplicating the information present in the strategy selection cards.
    *   **Accordion UI:** Replaced the static text with an interactive accordion. Users can now click a small info icon (`i`) on any strategy card to smoothly expand a detailed explanation. This keeps the main UI clean and provides information on demand.
    *   **JavaScript & CSS:** Implemented the accordion functionality using JavaScript to toggle an `.active` class and CSS for smooth transitions and styling of the hidden/visible content.

*   **Semantic HTML for Data:**
    *   The generated lottery numbers are rendered inside a semantic `<table>` element, which clearly communicates the tabular nature of the data to crawlers and AI.
*   **Full Internationalization:**
    *   All UI elements, including the new expandable descriptions, are fully internationalized across English, Spanish, and Korean.