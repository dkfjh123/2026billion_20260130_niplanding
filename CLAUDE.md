# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for **노아이디어피자 (NO IDEA PIZZA)**, a Korean artisan pizza brand. The site targets MZ generation customers and potential franchise partners, emphasizing the brand's "American Vintage Hip" aesthetic.

## Tech Stack

- **HTML5** with Tailwind CSS (CDN)
- **Vanilla JavaScript** (ES6+)
- **GSAP** with ScrollTrigger for scroll animations
- **Lucide Icons** (CDN)
- **EmailJS** for client-side form handling (sends to `dkfjh1234@gmail.com`)

## Development Commands

```bash
# Local development - serve from nip_landing_page_html directory
# Any static file server works, e.g.:
npx serve nip_landing_page_html
# or
python -m http.server 8000 --directory nip_landing_page_html
```

No build step required - all dependencies loaded via CDN.

## Project Structure

```
nip_landingpage/
├── nip_landing_page_html/    # Main landing page
│   ├── index.html            # Single-page HTML with all sections
│   ├── style.css             # Custom animations and scrollbar styles
│   └── script.js             # GSAP animations, nav scroll, form handling
├── nip_assets/               # Brand assets (logos, videos, images)
│   └── menu/                 # Menu item photos
├── 노아이디어피자_브랜드_가이드라인.md   # Brand guidelines (Korean)
├── 노아이디어피자_브랜드_데이터.json    # Structured brand/menu data
├── 노아이디어피자_랜딩페이지_PRD.md     # Product requirements document
└── landing_ref/              # Reference materials
```

## Brand Design System

| Element | Value |
|---------|-------|
| Primary Color | `#0055FF` (Signature Blue) |
| Secondary | White `#FFFFFF`, Off-white `#F8F8F8` |
| Accent | Yellow `#FFDD00`, Red `#FF4444` |
| Display Font | `Anton` |
| Body Font | `Pretendard`, `Inter` |

## Key Implementation Details

### Tailwind Configuration
Custom colors and fonts are configured inline via `tailwind.config` in `index.html`:
- `brand-blue`, `brand-light`, `brand-dark`
- `accent-yellow`, `accent-red`
- Font families: `font-sans` (Pretendard), `font-display` (Anton)

### Navigation Behavior
The sticky nav uses `mix-blend-difference` for contrast over the hero video, switching to solid white background on scroll (handled in `script.js`).

### Asset Paths
All assets use relative paths from `nip_landing_page_html/`:
- Videos/images: `../nip_assets/`
- Menu images: `../nip_assets/menu/`

### EmailJS Integration
Form submission is mocked in `script.js`. To enable real emails:
1. Get EmailJS credentials (Service ID, Template ID, Public Key)
2. Uncomment `emailjs.init()` and `emailjs.send()` in script.js

## Content Source

Brand copy, menu data, and store information are documented in:
- `노아이디어피자_브랜드_데이터.json` - Structured JSON with complete menu, prices, store info
- `노아이디어피자_브랜드_가이드라인.md` - Brand voice, tone, and visual identity guidelines

When updating content, reference these files for accurate information.
