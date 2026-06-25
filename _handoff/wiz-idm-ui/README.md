# @wiz/idm-ui

The **Wiz iDM Design System** as an installable React component library — design
tokens (CSS variables), 30+ components, and light/dark theming.

## Install

```bash
npm install @wiz/idm-ui
# peer deps: react >= 18, react-dom >= 18
```

## Use

```jsx
import '@wiz/idm-ui/styles.css';          // tokens + theme + Inter font (once, app root)
import { Button, Table, Badge } from '@wiz/idm-ui';

export function Example() {
  return <Button variant="primary" icon="Sparkling2Fill">Auto-check</Button>;
}
```

## Theming (light / dark)

All components read colors from CSS custom properties. Light is the default;
dark is a `[data-theme="dark"]` scope. Toggle on the root element:

```js
document.documentElement.dataset.theme = 'dark';   // or remove for light
```

No re-render or JS recolor needed — the variable swap re-themes everything.

## Fonts

`styles.css` loads **Inter** from Google Fonts (open-source, SIL OFL) and uses a
native monospace stack for code/IDs. To self-host (offline / CSP), vendor the
Inter `woff2` files and replace the `@import` in `tokens/fonts.css` with
`@font-face` rules.

## Components

`Logo` · `Button` · `IconButton` · `Link` · `Dropdown` · `PopoverMenu` / `MenuItem` ·
`Field` · `Input` · `Textarea` · `Select` · `Search` · `Checkbox` · `Radio` · `Switch` ·
`Badge` · `Tabs` · `Steps` / `StepItem` · `Table` · `List` / `ListItem` / `ListDivider` / `TreeList` ·
`Modal` · `Message` · `Snackbar` · `Upload` / `FileChip` ·
`Card` · `Divider` · `Avatar` · `TitleBar` · `TopNav` · `SideBar` / `SideBarItem` · `Icon`

Each component ships TypeScript types (the `.d.ts` props contract is the API spec).

## Build (for maintainers)

```bash
npm install
npm run build      # tsup → dist/ (ESM + CJS + .d.ts) and copies styles/
npm run typecheck
```

- `src/` — component sources (`.jsx`) + token CSS, organized by group.
- `tsup.config.ts` — ESM + CJS + type bundling; React kept external.
- `scripts/copy-css.mjs` — copies `styles.css` + `tokens/` into `styles/` for publish.

## Notes

- `Snackbar` intentionally uses fixed dark literals so it stays dark in both themes.
- Icons render single-color via `currentColor` — set `color` to recolor.
- A pixel-accurate visual + API reference (EN/中文, light/dark) lives in the
  design-system project's `guideline.html`.
