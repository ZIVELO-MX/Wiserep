# WiseRep — Design Proposal

> Precision training on a clean canvas — navy blue, active blue, and structured forms

**Theme:** light + dark mode

WiseRep presents a focused fitness-tracking design language: a near-white canvas (`#F8FAFC`), an oversized phone mockup as the visual anchor in the hero, and a disciplined chromatic vocabulary built around a single active blue. The two-tone headline convention (blue for the action word, dark slate for the rest) makes the value proposition scannable in a glance. The system uses two typefaces: **Plus Jakarta Sans** for display and headings (expressive, geometric, wide x-height), and **Geist Sans** for all UI and body copy (technical, neutral, screen-optimized). Surfaces are clean and low-shadow; a uniform `rounded-xl` / `rounded-2xl` radius gives buttons, cards, and tags a structured, modern feel that makes tracking feel practical rather than clinical.

---

## Tokens — Colors

| Name          | Value     | Token              | Role                                                                                                               |
|---------------|-----------|--------------------|-------------------------------------------------------------------------------------------------------------------|
| WiseRep Blue  | `#2563EB` | `--blue-primary`   | **Primary.** CTA buttons, active links, progress indicators, icon accents. The dominant chromatic color across all pages. Tagged `[Gymoss]` — shared brand color with the full Gymoss ecosystem. |
| Blue Hover    | `#1D4ED8` | `--blue-hover`     | Hover and pressed state for primary blue elements.                                                                 |
| Blue Soft     | `#EFF6FF` | `--blue-soft`      | Low-emphasis background for badges, chips, input highlights. Pairs with WiseRep Blue text.                        |
| Gymoss Ink    | `#1E3A8A` | `--blue-ink`       | **Secondary.** Dark brand blue used for the Gymoss ecosystem section background, high-emphasis headlines, and the logo wordmark. |
| Success Green | `#16A34A` | `--color-success`  | Positive feedback, workout completion, weight PR indicators.                                                       |
| Warning Amber | `#D97706` | `--color-warning`  | Load alerts, near-limit indicators, cautionary states.                                                             |
| Danger Red    | `#DC2626` | `--color-danger`   | Errors, pain/discomfort feedback, overload warnings.                                                               |
| Slate         | `#0F172A` | `--text-main`      | Primary text, dark surface backgrounds (footer). The dominant non-white color in headings and body copy.           |
| Granite       | `#475569` | `--text-secondary` | Supporting body copy, descriptions, secondary labels.                                                              |
| Fog           | `#94A3B8` | `--text-muted`     | Placeholders, captions, muted labels. Also used for footer text on dark surfaces.                                  |
| Border        | `#E2E8F0` | `--border`         | Card borders, section dividers, input outlines.                                                                    |
| Surface Soft  | `#F1F5F9` | `--surface-soft`   | Secondary card backgrounds, inputs, alternate section surfaces.                                                    |
| Background    | `#F8FAFC` | `--bg`             | Dominant page background and alternating section canvas.                                                           |
| White         | `#FFFFFF` | `--surface`        | Primary card surface, modal backgrounds, hero card insets.                                                         |

### Dark Mode Overrides (`prefers-color-scheme: dark`)

| Token              | Light       | Dark        |
|--------------------|-------------|-------------|
| `--bg`             | `#F8FAFC`   | `#0F172A`   |
| `--surface`        | `#FFFFFF`   | `#1E293B`   |
| `--surface-soft`   | `#F1F5F9`   | `#1E293B`   |
| `--text-main`      | `#0F172A`   | `#F1F5F9`   |
| `--text-secondary` | `#475569`   | `#94A3B8`   |
| `--text-muted`     | `#94A3B8`   | `#475569`   |
| `--border`         | `#E2E8F0`   | `#334155`   |

---

## Tokens — Typography

### Plus Jakarta Sans — Display & Headings · `--font-jakarta`

- **Weights:** 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Sizes:** 36px, 40px, 48px, 60px
- **Line height:** 1.15–1.25 for display, 1.2 for section headings
- **Role:** All `h1`, `h2`, and display-sized text. Wide x-height and slightly rounded geometric forms give headings personality without sacrificing legibility. Loaded from Google Fonts.
- **Fallback:** DM Sans, Nunito Sans, system-ui

### Geist Sans — UI & Body · `--font-geist-sans`

- **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line height:** 1.4–1.6
- **Role:** Navigation, body copy, labels, buttons, card descriptions, captions. Technical and neutral — optimized for screen rendering at small sizes. Loaded from Google Fonts.
- **Fallback:** system-ui, -apple-system, sans-serif

### Type Scale

| Role        | Size           | Tailwind Class          | Font     | Weight |
|-------------|----------------|-------------------------|----------|--------|
| Display     | 60px / 3.75rem | `text-6xl`              | Jakarta  | 800    |
| Heading XL  | 48px / 3rem    | `text-5xl`              | Jakarta  | 700    |
| Heading L   | 36px / 2.25rem | `text-4xl`              | Jakarta  | 700    |
| Heading M   | 30px / 1.875rem| `text-3xl`              | Jakarta  | 700    |
| Subheading  | 20px / 1.25rem | `text-xl`               | Geist    | 500    |
| Body        | 16px / 1rem    | `text-base`             | Geist    | 400    |
| Body SM     | 14px / 0.875rem| `text-sm`               | Geist    | 400    |
| Caption     | 12px / 0.75rem | `text-xs`               | Geist    | 500–600 + uppercase + tracking |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px (Tailwind default)

**Density:** comfortable — training happens in real time, UI should not feel cramped

### Border Radius

| Element        | Value      | Tailwind       |
|----------------|------------|----------------|
| Cards          | 16px       | `rounded-2xl`  |
| Buttons        | 12px       | `rounded-xl`   |
| Badges / chips | full       | `rounded-full` |
| App mockup     | 16–28px    | `rounded-2xl` / `rounded-[28px]` |
| Phone frame    | 40px       | `rounded-[40px]` |
| Inputs         | 12px       | `rounded-xl`   |

### Layout

- **Page max-width:** 1152px (`max-w-6xl`)
- **Section padding:** `py-20 px-4 sm:px-6`
- **Section gap:** 80px (py-20 = 5rem = 80px)
- **Card padding:** `p-6` (24px) — `p-8` (32px) for pricing
- **Element gap:** `gap-5` (20px) — `gap-6` (24px) for grids

---

## Components

### Logo Lockup

**Role:** Site identity in header and footer

Logo mark: blue square (`#2563EB`) with a white traced W path, `rounded-lg` (8px radius). Wordmark: 'WiseRep' in Geist Sans Bold next to the icon. Dark mode wordmark is white. Header size: 36px mark + ~22px text. Footer size: 32px mark + ~19px text.

### Header CTA Button (filled)

**Role:** Primary action in navigation bar

Filled WiseRep Blue (`#2563EB`) background, white text 'Empezar' in Geist SemiBold 14px. `rounded-lg` (8px), 8px vertical / 16px horizontal padding. Hover: `#1D4ED8`.

### Ghost Nav Link

**Role:** Secondary navigation items

No background, Granite (`#475569`) text, Geist Medium 14px, no underline. Hover: WiseRep Blue (`#2563EB`).

### Two-Tone Display Headline

**Role:** Hero page title

48–60px Plus Jakarta Sans ExtraBold, line-height 1.2. First phrase ('Entrena mejor,') in Slate (`#0F172A`), second phrase ('repetición por repetición.') in WiseRep Blue (`#2563EB`). Left-aligned on desktop, center on mobile.

### Hero CTA — Primary

**Role:** Main hero conversion button

Filled WiseRep Blue background, white Geist SemiBold 16px, `rounded-xl` (12px), `px-8 py-3`. Shadow: `shadow-sm`.

### Hero CTA — Secondary (outline)

**Role:** Secondary hero action

White surface, `border border-[#E2E8F0]`, Slate text, `rounded-xl`. Hover: border transitions to WiseRep Blue.

### Feature Card

**Role:** Carousel item showcasing a single app feature

`bg-[#F8FAFC]` (light) / `bg-[#1E293B]` (dark), `border border-[#E2E8F0]`, `rounded-2xl`, `p-6`. Emoji icon 24px, title in Geist SemiBold, description in Geist Regular 14px / Granite. Hover: border fades toward blue.

### Step Card (How It Works)

**Role:** Numbered process step

Number badge: `bg-[#2563EB]` `rounded-2xl` 48×48px, white Geist Bold. Title: Geist SemiBold 18px / Slate. Description: Geist Regular 14px / Granite. Connector line between steps in desktop: 1px `#E2E8F0`.

### Pricing Card — Default

**Role:** Non-highlighted plan tier

`bg-[#F8FAFC]` / `border-[#E2E8F0]` / `rounded-2xl` / `p-8`. Title: Geist Bold 20px / Slate. CTA: filled WiseRep Blue button.

### Pricing Card — Highlighted (Premium)

**Role:** Recommended plan tier

`bg-[#2563EB]` / `border-[#2563EB]` / `rounded-2xl` / `p-8` / `shadow-xl shadow-blue-200`. All text in white/blue-100/blue-200 shades. CTA: white button with WiseRep Blue text.

### App Phone Mockup

**Role:** Visual product showcase in hero

270px wide phone frame in `#0F172A` with `rounded-[40px]`, dynamic island. Screen: `bg-[#F8FAFC]` with `rounded-[28px]`. Contains a realistic workout session UI: exercise name, sets/weight tracking, rest timer, "¿Cómo se sintió?" feedback. Glow: diffused `bg-[#2563EB]/20 blur-3xl` behind phone.

### Feature Carousel

**Role:** Scrollable feature card strip

Overflow-x auto with `snap-x snap-mandatory`, hidden scrollbar. Cards `w-64 sm:w-72`. Arrow buttons (prev/next) with `rounded-full border border-[#E2E8F0]`. Dot indicators: active dot `w-5 h-1.5 bg-[#2563EB]`, inactive `w-1.5 h-1.5 bg-[#CBD5E1]`. Infinite loop: wrap-around uses `behavior: "instant"` scroll to avoid reverse sweep.

### Gymoss Ecosystem Section

**Role:** Brand module showcase

Full-width dark section: `bg-[#1E3A8A]`. White headline, `text-blue-200` body. Module grid showing WiseRep (active, white pill) and future modules (ghost pills with "Próximamente" label). White CTA button with Gymoss Ink text.

---

## Do's and Don'ts

### Do

- Use `rounded-xl` (12px) on all buttons and inputs — `rounded-2xl` (16px) on cards
- Apply the two-tone headline pattern: WiseRep Blue for the action/outcome phrase, Slate for the rest
- Use Plus Jakarta Sans Bold/ExtraBold at `text-4xl`+ for section headings
- Use `#2563EB` for all primary CTAs — it is the single CTA color across the entire system
- Keep alternating section backgrounds between `#FFFFFF` and `#F8FAFC` to create visual rhythm
- Add `dark:` variants using the defined dark palette for every non-fixed surface
- The Gymoss section (`#1E3A8A`) and Footer (`#0F172A`) are always dark — do not add dark: overrides there

### Don't

- Don't use box-shadows heavier than `shadow-sm` on cards — keep surfaces light
- Don't introduce new chromatic colors — the blue + green/amber/red semantic palette is complete
- Don't use Plus Jakarta Sans below `text-2xl` — use Geist for body and UI text
- Don't use raw hex values in JSX — reference the design tokens defined in `globals.css`
- Don't place WiseRep Blue text on the Gymoss Ink background — use white or `#93C5FD` instead
- Don't add hard-coded `light:` overrides inside the Gymoss section or Footer — they are always dark surfaces

---

## Surfaces

| Level | Name          | Light Value | Dark Value  | Purpose                                              |
|-------|---------------|-------------|-------------|------------------------------------------------------|
| 0     | Background    | `#F8FAFC`   | `#0F172A`   | Dominant page canvas and alternating section surface |
| 1     | Surface       | `#FFFFFF`   | `#1E293B`   | Cards, modals, primary content containers            |
| 2     | Surface Soft  | `#F1F5F9`   | `#1E293B`   | Secondary backgrounds, inputs, nested cards          |
| 3     | Gymoss Ink    | `#1E3A8A`   | `#1E3A8A`   | Fixed dark surface — Gymoss ecosystem section        |
| 4     | Slate         | `#0F172A`   | `#0F172A`   | Fixed dark surface — footer                          |

---

## Elevation

Minimal shadow usage. Depth is communicated through color contrast (white card on `#F8FAFC` bg) and border definition rather than drop shadows. The only exceptions:

- `shadow-sm` on primary CTA buttons (barely perceptible lift)
- `shadow-xl shadow-blue-200` on the highlighted Premium pricing card (deliberate emphasis)
- `shadow-2xl shadow-[#0F172A]/40` on the phone mockup frame (product showcase anchor)

---

## Imagery

The visual language is anchored by a single high-fidelity phone mockup in the hero, rendered in CSS (no images). The mockup shows a live workout session with realistic WiseRep app UI: exercise names, weight tracking numbers, rest timer, and feedback buttons. No lifestyle photography, no stock imagery, no abstract illustrations. The logo SVG (`wiserep_logo_traced.svg`) is the only static graphic asset. Section backgrounds provide all depth through color blocking. The Gymoss section uses a solid Gymoss Ink (`#1E3A8A`) block with a module grid overlay.

---

## Layout

Single-column, centered max-width layout (1152px / `max-w-6xl`). The header is a sticky bar: logo left, nav center, contact link + filled CTA right. The hero is a two-column flex row on desktop (copy left, phone mockup right), stacked on mobile. Sections follow in sequence: Features carousel → How It Works steps grid → Pricing 3-column grid → Gymoss block → Footer 4-column grid. Section backgrounds alternate between `#FFFFFF` and `#F8FAFC` to create rhythm. The Gymoss section breaks the alternation with a dark `#1E3A8A` block. Section gaps are `py-20` (80px) throughout.

---

## CSS Custom Properties

```css
:root {
  /* Colors */
  --blue-primary: #2563EB;    /* WiseRep Blue [Gymoss] */
  --blue-hover: #1D4ED8;
  --blue-soft: #EFF6FF;
  --blue-ink: #1E3A8A;        /* Gymoss Ink */
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-danger: #DC2626;

  /* Surfaces / Text */
  --bg: #F8FAFC;
  --surface: #FFFFFF;
  --surface-soft: #F1F5F9;
  --text-main: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --border: #E2E8F0;

  /* Typography */
  --font-display: var(--font-jakarta);     /* Plus Jakarta Sans */
  --font-sans: var(--font-geist-sans);     /* Geist Sans */

  /* Spacing */
  --section-padding-y: 5rem;   /* py-20 = 80px */
  --section-padding-x: 1.5rem; /* px-6 */
  --card-padding: 1.5rem;      /* p-6 */
  --element-gap: 1.25rem;      /* gap-5 */

  /* Radius */
  --radius-card: 1rem;         /* rounded-2xl = 16px */
  --radius-btn: 0.75rem;       /* rounded-xl = 12px */
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0F172A;
    --surface: #1E293B;
    --surface-soft: #1E293B;
    --text-main: #F1F5F9;
    --text-secondary: #94A3B8;
    --text-muted: #475569;
    --border: #334155;
  }
}
```

---

## Tailwind v4

```css
@theme {
  /* Brand colors */
  --color-wr-primary: #2563EB;
  --color-wr-primary-hover: #1D4ED8;
  --color-wr-primary-soft: #EFF6FF;
  --color-wr-ink: #1E3A8A;

  /* Semantic */
  --color-wr-success: #16A34A;
  --color-wr-warning: #D97706;
  --color-wr-danger: #DC2626;

  /* Neutrals */
  --color-wr-bg: #F8FAFC;
  --color-wr-surface: #FFFFFF;
  --color-wr-surface-soft: #F1F5F9;
  --color-wr-text: #0F172A;
  --color-wr-text-secondary: #475569;
  --color-wr-text-muted: #94A3B8;
  --color-wr-border: #E2E8F0;

  /* Typography */
  --font-display: var(--font-jakarta);
  --font-sans: var(--font-geist-sans);

  /* Radius */
  --radius-card: 1rem;
  --radius-btn: 0.75rem;
}
```

---

## Two-Tone Headline System

A signature convention across the site: the first phrase (the verb or outcome) uses WiseRep Blue (`#2563EB`) and the second phrase (the object, the brand, or the qualifier) uses Slate (`#0F172A`). The blue phrase is the shorter one — it signals action. The dark phrase anchors the sentence with context. On the Gymoss dark section, the split is white (first) + `#93C5FD` (second) to maintain contrast.

**Examples:**
- Hero: "Entrena mejor, [blue] repetición por repetición."
- Funciones: "Funciones [blue] que te ayudan a crecer."
- Gymoss: "Parte del [white] ecosistema Gymoss [blue-200]"

---

## Similar Brands

- **Strava** — Same single-column landing with dark hero accent section and bold numeric progress data
- **Whoop** — Same emphasis on structured white/dark sections and minimal-distraction training interface
- **Strong App** — Same mobile-first workout tracking UX with sets/reps/weight data density
- **Notion** — Same flat-shadowless white-canvas approach with colorful accent typography

---

## Quick Start

Apply this to a new section component:

```tsx
// Section heading (two-tone)
<h2 className="font-display text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
  Heading <span className="text-[#2563EB]">en azul.</span>
</h2>

// Card
<div className="bg-[#F8FAFC] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-2xl p-6">
</div>

// Primary button
<button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl">
  Acción
</button>

// Badge
<span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] dark:bg-[#1E3A8A]/50 px-3 py-1 rounded-full">
  Etiqueta
</span>
```
