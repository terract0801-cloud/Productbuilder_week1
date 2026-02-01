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

## Current Task: Comprehensive SEO Optimization

The goal is to implement comprehensive SEO optimizations based on Google's and Naver's guidelines to make the website "SEO perfect."

### Plan:

1.  **[DONE] Analyze Current `index.html` for basic SEO elements:**
    *   Checked for existing `<title>` tag.
    *   Confirmed `<meta name="description">` tag is MISSING.
    *   Confirmed `<meta name="keywords">` tag is MISSING.
    *   Confirmed Open Graph (OG) and Twitter Card meta tags are MISSING.
    *   Checked for proper heading structure (`<h1>`, `<h2>`, etc.) - Acceptable.
    *   Checked for `alt` attributes on images - No direct `<img>` tags, SVGs handled via JS (acceptable for decorative).
    *   Confirmed `viewport` meta tag is PRESENT and correct.
    *   Confirmed `charset` meta tag is PRESENT and correct.
    *   Confirmed `lang` attribute on `<html>` is PRESENT but hardcoded to "en", needs to be dynamic.
2.  **[DONE] Improve `index.html` Metadata:**
    *   **[DONE] TASK 2.1:** Modified `<title>` tag to be more descriptive and dynamic using i18n. (Already done by previous tasks/user)
    *   **[DONE] TASK 2.2:** Added `<meta name="description">` tag using i18n for dynamic content. (Already done by previous tasks/user)
    *   **[DONE] TASK 2.3:** Added `<meta name="keywords">` tag (Naver specific) using i18n. (Already done by previous tasks/user)
    *   **[DONE] TASK 2.4:** Added Open Graph (OG) meta tags (e.g., `og:title`, `og:description`, `og:image`, `og:url`, `og:type`) using i18n. (Already done by previous tasks/user, TODOs left for user to update URLs)
    *   **[DONE] TASK 2.5:** Added Twitter Card meta tags (e.g., `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`). (Already done by previous tasks/user, TODOs left for user to update URLs)
    *   **[DONE] TASK 2.6:** Make `lang` attribute on `<html>` dynamic based on the active language from `i18n.js`. (Already handled by `i18n.js` itself).
3.  **[DONE] Refine HTML Structure (Semantic HTML):**
    *   **[DONE] TASK 3.1:** Wrapped main content in `<main>` tags. Heading hierarchy and semantic element usage are now optimal for a single-page app.
4.  **[DONE] Crawlability & Indexability:**
    *   **[DONE] TASK 4.1:** Created `robots.txt` file to allow crawling of essential assets.
    *   **[DONE] TASK 4.2:** Added `rel="noopener noreferrer"` to external links for security and SEO. (Donghaeng Lottery button in `main.js` and Disqus comments link in `index.html`).
