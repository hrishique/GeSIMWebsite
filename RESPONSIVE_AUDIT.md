# GeSIM Website — Responsive Audit

**Date:** 2026-08-04
**Scope:** every file under `src/pages/` + `src/components/` + `src/index.css` + `src/App.css`, plus the `max-width-container` utility.
**Method:** read-only survey. No code changes at time of writing.
**Purpose:** post-launch cleanup checklist. Work through this once v1 is live.

## Breakpoints in play

Tailwind defaults: `sm=640` · `md=768` · `lg=1024` · `xl=1280`.
Almost every mobile-vs-desktop switch in this codebase happens at `lg` (1024), which leaves **tablets (768–1023 px) always rendering the mobile layout**.

---

## 🔴 Critical — visible breakage on real devices

### 1. `body { overflow-x: hidden }` in `src/index.css:20` is masking bugs, not fixing them
This one line hides every other horizontal-overflow issue in the codebase. Any time users see "content looks off but I can't scroll to it," that's this.
**Fix:** remove it temporarily, then walk through each break at 320 / 375 / 414 / 768 / 1024 / 1440 to find the real overflowing children, and fix each root cause.

### 2. Hero section is locked to a 220vh scroll rig — `src/components/HeroSection.jsx:43`
`h-[220vh]` runs the phone-rise + inner-screen-scroll + text-swap choreography over a viewport-height-relative timeline. On **mobile landscape** (viewport ~375h) 220vh = 825 px total scroll; the "hold + screen scroll" segment (0.12–0.7) has ~495 px to play the whole home screen animation, and the phone renders at `sm:w-[min(390px,36vh)]` = **135 px wide** — visually unreadable.
**Fix:** on `< lg`, drop the sticky choreography entirely and render a simple two-block hero (headline + static phone image), OR raise the container to a taller vh + wider phone floor.

### 3. Footer store badges — `src/components/Footer.jsx:41-79` — 320 px overflow
`flex-nowrap` + 3 badges at `h-[34px]` = ~110 px each × 3 + gap 16 px = **~350 px** on a 320 px viewport. Overflows.
**Fix:** allow `flex-wrap`, or drop to `h-[28px]` on `<xs`, or gate the 3rd badge behind a breakpoint.

### 4. Article-detail top bar — `src/pages/ArticleDetailPage.jsx:21-45`
`flex items-center justify-between` with 3 children: [Back] · [Category • Date • 8min read] · [Share]. The middle chunk has no wrap handling. On <520 px it collides with the buttons and overflows.
**Fix:** stack the middle metadata below on mobile, or drop it into a second row below the button pair.

### 5. `HorizontalScrollSection.jsx` — SSR/hydration mismatch risk — line 8-10
`useState(typeof window !== 'undefined' ? window.matchMedia(...).matches : false)` is fine for CSR-only Vite (which this is), but the pattern is fragile if you ever move to SSR/SSG. Also, between the initial render and the `useEffect` `mq.addEventListener`, rapid window resizes can produce a flash of the wrong layout.
**Fix:** wrap the switch in a CSS-only `hidden lg:block` / `lg:hidden` pair and keep the JS matchMedia only for `useScroll` opt-out. Same output, half the failure modes.

---

## 🟠 High — works but degrades badly at certain widths

### 6. Marquee card widths force overflow at 320 px — `src/components/BenefitsMarquee.jsx:78-80`
Cards are `w-[320px]` / `w-[340px]` with `whitespace-nowrap` heading. Longest heading "Book cheaper flights & hotels" at 20px semibold ≈ 320+ px wide → **heading gets clipped by `text-ellipsis`** on 320 px viewports.
**Fix:** allow the heading to wrap to 2 lines on `<sm`, then enforce 1-line only from `sm:` up. Or ship shorter mobile headings.

### 7. AboutPage blue card phone at exactly 1024 px — `src/pages/AboutPage.jsx`
`hidden lg:block absolute top-0 -left-6 h-[440px]` phone. At the `lg` breakpoint (1024 px exactly), the card is ~740 px wide with phone taking ~250 px on the left; the text column has 500 px, but heading `text-[44px]` + description at `max-w-[520px]` risks touching the phone.
**Fix:** either bump the switch to `xl:` (1280+) or reserve more grid width for the phone column.

### 8. PosterMarquee desktop — `src/components/PosterMarquee.jsx:16-21`
`w-screen h-screen object-contain` on a fixed-aspect Figma export. On 16:10 laptops (1440×900) the image gets massive side letterboxing (~250 px each side of dead white).
**Fix:** use `object-cover` with a `min-h` floor, or crop the source poster to a wider aspect.

### 9. Newsletter card heading — `src/pages/BlogPage.jsx:141`
`whitespace-nowrap text-[clamp(18px,6vw,30px)] ... md:text-[42px]`. On mobile the clamp saves it, but at exactly `md:` (768), `md:text-[42px] whitespace-nowrap` = "Privacy, delivered monthly." at 42px bold = ~500 px width. The card's right-half is `md:pl-[47%] md:pr-10` on a ~700 px wide card = ~330 px available → clipped.
**Fix:** drop `whitespace-nowrap` from `md:` up, or lower the `md:` size to 32-34px.

### 10. Hero page-2 text — `src/components/HeroSection.jsx:91-107`
"Built for the way world connects today" at `text-[36px] sm:text-[48px] lg:text-[54px]` — on 320px this wraps to 3-4 lines and pushes the 3 chip labels below the viewport fold when the phone occupies most of the sticky container.
**Fix:** cap heading at `text-[28px]` on `<sm` and split "Built for the way / world connects today" onto two intentional lines.

### 11. DocsPage sidebar sticky offset — `src/pages/DocsPage.jsx:54`
`sticky top-24` (96px) hardcodes the nav height. Navbar is currently `py-4` + `h-9 md:h-9` logo + border = ~65-72 px, so 96 px is a decent buffer, but any nav padding change will make the sidebar visibly overlap or float.
**Fix:** compute from CSS var `--nav-h` or use `top: calc(1rem + var(--nav-h))`.

### 12. Missing tablet (`md:`) layouts everywhere
Almost every layout switch is `lg:` — nothing is designed for the 768-1023 px range. Bento becomes a 1-col stack, ScrollShowcase becomes 1-col, PosterMarquee becomes a small centered image. Tablets in portrait get a bad experience.
**Fix:** for high-value sections (Bento, Hero, ScrollShowcase), add a `md:` intermediate — 2 cols instead of 1 or 3.

---

## 🟡 Medium — brittle or maintenance risk

### 13. FAQ has two duplicated cards — `src/components/FAQ.jsx:55-82` and `130-157`
The "Still have questions?" card is written twice — once for desktop (`hidden lg:flex`), once for mobile (`block lg:hidden`). Any copy change requires editing both.
**Fix:** one component with responsive positioning; move it into a grid-order or reorder via CSS.

### 14. BentoGrid — mobile stack and desktop grid are entirely separate — `src/components/BentoGrid.jsx:34` vs `43`
Different assets, different markup. Alt text drift already exists (mobile says "instant mobile data", desktop says "Stay connected with instant mobile data"). If copy changes on one, the other rots.
**Fix:** extract card data into an array, render with responsive width/aspect.

### 15. Fixed pixel widths pattern (`w-[340px]`, `w-[500px]`, etc.)
Everywhere in the marquees, cards, and modals. Any user with browser zoom, custom font size, or a translated language (German is ~30% longer) will hit overflow.
**Fix:** prefer `min-w`/`max-w` with fluid `w-full` inside, or use container queries where available.

### 16. `App.css` is dead code — `src/App.css:1-185`
`.counter`, `.hero`, `#next-steps`, `#docs`, `#center`, `#spacer`, `.ticks` — none referenced anywhere in `src/`. Vite template leftovers.
**Fix:** delete the file, remove the import.

### 17. No responsive images
Every `<img>` serves the same asset to a 320-px phone and a 4K desktop. Mobile bento images are ~1400-1700 px wide but display at ~350 px. Wasted bandwidth on cellular.
**Fix:** either use `<picture>` with `<source media="(max-width:768px)">` pointing at smaller variants, or use `srcset` + `sizes`. The `public/assets/mobile/` folder structure suggests intent — but the smaller variants aren't currently being served.

### 18. No `prefers-reduced-motion` handling
The two marquees (`.animate-marquee-slow`, `.animate-benefits-marquee`) and the framer-motion sequences in HeroSection / ScrollShowcase run at full motion for users who've opted out.
**Fix:** add `@media (prefers-reduced-motion: reduce)` in CSS to pause marquees; pass `useReducedMotion()` from framer-motion to gate the sequences.

### 19. Modal size caps + inner padding — `ContactModal.jsx:28`, `DownloadModal.jsx:22`, `InteractiveESimModal.jsx:50`
`max-w-md/lg` + `p-8` inner. On 320 px viewports with `p-4` outer, content area is ~256 px — form inputs at 100% width fit, but the eSIM modal's country grid (`grid-cols-2` at ~118 px each) truncates flag names.
**Fix:** reduce inner padding to `p-6` on `<sm`, and consider `overflow-y-auto max-h-[85vh]` on modal bodies so tall modals don't get cut off in landscape.

### 20. HeroSection phone uses `vw` — `src/components/HeroSection.jsx:115`
`w-[72vw]` — on Windows browsers, `vw` includes the scrollbar (17 px on non-overlay scrollbars), which triggers horizontal scroll for exactly the scrollbar width. Currently masked by the `overflow-x: hidden` on body.
**Fix:** switch to `%` based on parent, or use `w-[72%]`.

---

## 🟢 Low — cosmetic / polish

| # | Issue | Location |
|---|---|---|
| 21 | Typo: "whats you email id?" | `src/pages/BlogPage.jsx:155` |
| 22 | Typo: "Built for the way world connects today" (missing "the") | `src/components/HeroSection.jsx:92` |
| 23 | No `min-h` on DocsPage active-topic content — content swap causes layout jump | `src/pages/DocsPage.jsx:91` |
| 24 | BlogPage grid `md:grid-cols-2 lg:grid-cols-3` — only 1 article renders, leaves visible empty grid cells on desktop | `src/pages/BlogPage.jsx:66` |
| 25 | `dark-pill-button` uses `transform: translateY(-2px)` on hover — sub-pixel jitter on trackpad scroll | `src/index.css:99` |
| 26 | `-webkit-scrollbar` styles only work in Chromium/Safari — Firefox users see default scrollbar | `src/index.css:32-44` |
| 27 | Mobile menu doesn't lock focus inside itself (a11y) — Tab can escape into the hidden page beneath | `src/components/Navbar.jsx` |

---

## Recommended fix order

**Phase 1 — Ship stoppers (1-2 hours)**
- [ ] #3 Footer badge overflow (add `flex-wrap`)
- [ ] #4 Article-detail header bar (stack on mobile)
- [ ] #6 Marquee heading clipping on 320
- [ ] #9 Newsletter heading clipping at md
- [ ] #16 Delete `App.css` and its import
- [ ] #21, #22 Typos

**Phase 2 — Real device fidelity (½ day)**
- [ ] #1 Remove `overflow-x: hidden`, then walk breakpoints and fix each surfaced overflow at root
- [ ] #2 Rebuild hero on `<lg` as a static layout
- [ ] #10 Hero page-2 mobile sizing
- [ ] #12 Add `md:` layouts to Bento + ScrollShowcase

**Phase 3 — Maintenance & polish (½ day)**
- [ ] #13, #14 Deduplicate FAQ card and Bento content
- [ ] #15 Fluid-widths pass on marquees + cards
- [ ] #17 `<picture>` responsive-images pass (biggest performance win)
- [ ] #18 `prefers-reduced-motion`
- [ ] #27 Mobile-menu focus trap

**Estimated total effort to reach "clean at every breakpoint 320-1920 with no horizontal scroll and consistent tablet experience":** roughly **1 focused day of engineering**.

---

## Test matrix to run before checking a phase off

For each fix, verify at these widths in Chrome DevTools device toolbar (no horizontal scroll, no clipped content):

- **320** (iPhone SE / small Android)
- **375** (iPhone 12/13/14 mini)
- **414** (iPhone Plus / Pixel XL)
- **768** (iPad portrait)
- **1024** (iPad landscape / small laptop)
- **1280** (standard laptop)
- **1440** (MacBook 15")
- **1920** (external monitor)

Also test:
- Landscape mobile (rotate 375×667 to 667×375)
- Browser zoom at 110% and 125%
- Chrome + Safari + Firefox (Firefox for scrollbar issue #26)
