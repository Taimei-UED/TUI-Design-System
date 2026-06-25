---
name: wiz-idm-design
description: Use this skill to generate well-branded interfaces and assets for Wiz iDM (Taimei's clinical data-management app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick map:
- `readme.md` — brand context, content fundamentals, visual foundations, iconography, full manifest.
- `styles.css` — global CSS entry (link this one file); pulls in `tokens/*`.
- `tokens/` — colours, typography, spacing/radius/shadow, fonts.
- `assets/logo/`, `assets/icons/` — brand marks and the `Icon` set.
- `components/` — React primitives; each has a `.d.ts` + `.prompt.md`.
- `foundations/` — foundation specimen cards.
- `ui_kits/wiz-idm/` — click-through app recreation (Home, Manual Check, Verification).

Core rules of thumb: white/grey neutral canvas, one Brand Blue (`rgb(0,73,205)`)
for action, gradient reserved for the logo/hero, Inter for all type +
a native monospace stack for IDs, soft card shadow or hairline ring, 8px control radius, the
sparkle icon marks AI actions, no emoji.
