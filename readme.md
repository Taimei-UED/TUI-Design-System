# Wiz iDM Design System

The design language for **Wiz | iDM** — the intelligent Data Management
desktop application by **Taimei** (泰美医疗), a clinical-trial / pharma SaaS
company. Wiz iDM is used by clinical data managers to run EDC studies, review
eCRF forms, execute Data Validation Plans (DVP), resolve queries and sign off
datasets for database lock. The "Wiz" sub-brand layers AI-assisted checking
(the sparkle motif) over a dense, professional data tool.

This project is the machine-readable system: tokens, fonts, reusable React
primitives, foundation specimen cards and a click-through UI kit. A compiler
bundles the components into `_ds_bundle.js` (namespace
`WizIDMDesignSystem_42e9e3`) and indexes the tokens.

## Source

- **Figma:** "Wiz Guideline.fig" — *Wiz Design Guideline ver 0.1* (Taimei,
  last updated 2026.6, author Jane Ju). Mounted read-only during authoring;
  not redistributed here. Tokens, components and icons were extracted from it.
- No codebase or live URL was provided.

The .fig pages: **Getting-Started** (cover), **Tokens** (Color, Typography,
Icons, Layouts, Shadow), **Component** (Basic / Content / Desktop / List /
Modal / Table elements).

---

## Content fundamentals

How Wiz iDM writes copy.

- **Voice:** product-functional and domain-precise. It names clinical
  artifacts directly — "Manual Check", "DVP", "eCRF", "Verification Plan",
  "Protocol ID", "queries", "sign-off". No marketing fluff inside the app.
- **Casing:** **Title Case** for navigation, section titles and buttons
  ("Manual Check", "New project", "Run verification"). Sentence case for
  helper text, descriptions and messages. `ALL CAPS` only for the Overline
  role and STATUS badges.
- **Tone:** neutral, instructional, reassuring. Messages state the fact and
  the consequence ("2 high-severity checks are still open in this dataset").
- **Person:** mostly impersonal/imperative ("Drag and Drop or Browse File",
  "Run verification"). Avoid "you/your" except in confirmations.
- **Buttons:** verb-first and short ("Export", "Auto-check", "Confirm",
  "Run now", "Save draft"). The AI action carries the sparkle icon.
- **Numbers & IDs:** monospace for identifiers and field names
  (`PRO.00001`, `AE.AESTDTC`). Counts are explicit ("9 open", "34/36").
- **Emoji:** none. Iconography does this job.
- **Vibe:** a calm, trustworthy instrument for regulated work — efficient,
  legible, lightly modern thanks to the clean Inter type + sparkle.

---

## Visual foundations

- **Colour:** white/grey neutral canvas (`--grey-20` page, white cards) with a
  single confident **Brand Blue** (`--brand-blue-70` = `rgb(0,73,205)`) for all
  primary action. Grey ramp 90→10 carries text, borders and surfaces. Signal
  colours (error red, warning amber, success green) plus a wider signal/accent
  set (orange, pink, purple, green-blue, light-blue) for STATUS tags and data
  viz. STATUS badges default to **purple on soft-purple**.
- **The one gradient:** reserved for the brand — the logo mark and hero/cover
  surfaces (`--grad-brand`, `--grad-hero`: navy → indigo → violet). Do **not**
  use gradients on buttons, cards or backgrounds elsewhere.
- **Type:** **Inter** (open-source, SIL OFL) for every type role — display
  wordmark, headings, body and labels; a native monospace stack for IDs
  and code. Headings are semibold; body regular. See the Typography spec.
- **Spacing:** 4px base step (`--space-xs` 4 → `--space-4xl` 64). Comfortable
  but dense — this is a data tool.
- **Radius:** soft, not pill. `sm` 8px on controls/buttons, `md` 12px on
  search & inputs containers, `lg` 16px on cards/modals, `xl`/`2xl` on large
  surfaces. Full-round only for avatars, dots and the version badge.
- **Elevation:** one signature **soft two-layer card shadow**
  (`--shadow-card`: `1px 2px 6px rgba(0,0,0,.04), 0px 1px 2px rgba(0,0,0,.06)`).
  Most cards instead use a **hairline inset ring** (`--ring-hairline`,
  `grey-40`). Pop/modal shadows are deeper but still soft. No hard or coloured
  shadows.
- **Borders:** 1px hairlines in the grey ramp; 2px only for focus / current
  step. Inputs use `grey-50`; focus switches to brand blue with a soft
  `brand-blue-10` glow ring.
- **Backgrounds:** flat colour, no textures or patterns. The only imagery is
  the brand gradient cover and the translucent mark watermark behind headers.
- **Animation:** restrained. 120–160ms ease on hover/background/width
  transitions (buttons, nav rows, sidebar collapse). No bounce, no decorative
  loops.
- **Hover states:** subtle surface shift — transparent → `grey-20`, or one step
  darker on filled controls (primary blue 70 → 80). Links underline on hover.
- **Press states:** one further step darker (primary → blue 90); no scale.
- **Selected states:** white pill with the card shadow on a grey track
  (segmented tabs, sidebar active row); soft `brand-blue-10` fill + blue text on
  pill tabs; blue underline on underline tabs.
- **Cards:** white, `lg` radius, hairline ring *or* soft card shadow — never
  both heavy. No coloured left-border accents.
- **Imagery vibe:** cool, blue-violet, slightly glassy (the cover blobs);
  otherwise the UI is image-light and content-forward.

---

## Iconography

- **System:** an outline ("line") icon set lifted from the .fig — it closely
  follows **Remix Icon** (line style, 24×24 grid, ~2px stroke, rounded joins).
  Extracted as real SVG path data, not redrawn.
- **Where:** `assets/icons/icon-data.js` (name → `{viewBox, body}`),
  rendered through `assets/icons/Icon.jsx` — `<Icon name="Home5Line" size={20} />`.
  Single-colour, painted with `currentColor`; recolour via CSS `color`.
  `assets/icons/Icon.d.ts` is the authoritative name list (22 glyphs:
  Home5Line, SearchLine, Settings3Line, Sparkling2Line/Fill, EditLine,
  DeleteBinLine, FileAddFill, FileExcel2Fill, FileWarningFill, CheckFill,
  ArrowDownSLine, ArrowRightSLine, ArrowUpDownLine, Filter3Line, CloseLine,
  UploadLine, RemixIconsLineDocumentFile/Folder, RemixIconsLineSystemStar,
  SidebarExpand, SidebarShrink).
- **The sparkle** (`Sparkling2Fill` / the 4-point star in the logo mark) is the
  **AI motif** — use it on AI-assisted actions ("Auto-check", "Run
  verification") and nowhere arbitrary.
- **Excel/file glyphs** colour-code by type (green Excel) in upload chips.
- **Emoji / unicode icons:** never. Use the icon set.
- **Logo:** `assets/logo/` — `wiz-mark-gradient.svg` (gradient glyph),
  `wiz-mark.svg` / `wiz-wordmark.svg` (currentColor source). Prefer the
  `Logo` component, which renders the gradient mark + "Wiz" wordmark + divider +
  `iDM` suffix. Never recolour the gradient mark.

---

## Index / manifest

Root
- `guideline.html` — **the full guideline website**: foundations + every
  component with a live preview and copy-ready JSX, plus a light/dark toggle.
  Open this for frontend hand-off. (App logic in `guideline.app.jsx`.)
- `styles.css` — global entry point (imports only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, and
  the generated `fig-tokens.css` (full Figma variable set incl. theme modes).
- `assets/` — `logo/` (brand marks), `icons/` (icon set + `Icon` component).
- `foundations/` — specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable React primitives (see below).
- `ui_kits/wiz-idm/` — click-through app recreation.
- `SKILL.md` — Agent-Skills entry point.

Components (namespace `WizIDMDesignSystem_42e9e3`)
- `brand/` — **Logo**
- `core/` — **Button**, **IconButton**, **Link**, **Dropdown**, **PopoverMenu**
- `forms/` — **Field**, **Input**, **Textarea**, **Select**, **Search**,
  **Checkbox**, **Radio**, **Switch**
- `data/` — **Badge** (status/tag), **Tabs**, **Steps** (+ **StepItem**), **Table**, **List** (+ **ListItem**, **ListDivider**, **TreeList**)
- `feedback/` — **Modal**, **Message**, **Snackbar**, **Upload** (+ **FileChip**)
- `layout/` — **Card**, **Divider**, **Avatar**, **TitleBar**
- `navigation/` — **TopNav**, **SideBar** (+ **SideBarItem**)
- `assets/icons/` — **Icon**

UI kits
- `ui_kits/wiz-idm/` — Home, Manual Check, Verification screens.

---

## Caveats

- **Inter** is loaded from Google Fonts (open-source, SIL OFL) — no font
  files are bundled. Code/IDs use the native `ui-monospace` stack.
- Accent colour **ramps** (each hue 100→10) in the .fig were summarised to a
  base hue + soft tint; the full 10-stop ramps weren't transcribed.
- `tokens/fig-tokens.css` carries the raw Figma variable collections including
  Material/MUI-derived modes; the curated brand tokens live in `colors.css` etc.
