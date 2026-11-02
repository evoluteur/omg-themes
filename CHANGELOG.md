# Changelog

Versions are git tags (`v2.0.0`...). Projects that link to the hosted files can
pin one, see "Pinning a version" in the README.

## 2.0.1 (2026-11-01)

- The theme picker highlights the theme you pick (it used to stay on the
  theme the page loaded with).

## 2.0.0 (2026-11-01)

Breaking:

- Density is a `data-density` attribute on `<html>` instead of a class on
  `<body>`. Project CSS written as `body.small ...` must become
  `[data-density="small"] ...`. `id="omg-body"` and `class="medium"` on
  `<body>` are no longer needed.
- Removed the unused `huge` density.
- Removed dark-theme rules left over from other projects (`.r-form`,
  `#response`, the colored panes, `#age`/`#height`/`#weight`, the video
  blocks, `.error`/`.prompt`...).
- Demo-page styles moved from `core.css` to `demo.css`, which isn't shared.
- omg.js is exposed as `window.OMG`. `setupPage`, `setTheme` and `setDensity`
  are still available as globals.

Changes:

- Themes only set colors (CSS custom properties on `:root`) and their
  background images; the shared rules are in `core.css`.
- The saved theme and density are applied as soon as omg.js runs, so pages no
  longer flash the default theme.
- Works when `localStorage` is unavailable.
- Buttons and inputs follow the density font size.
- Font falls back to sans-serif.

## 1.0.0

The three themes (light, dark, evol-blue) and four densities, as used by
tarot-reading, mandala-maker and healing-frequencies before 2.0.0.
