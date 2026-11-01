# OMG-Themes

Multiple themes for OMG Brand.

3 themes: Light, Dark, Blue

![Light theme](screenshots/omg-light.png)
![Dark theme](screenshots/omg-dark.png)
![Blue theme](screenshots/omg-blue.png)

## Using the themes in a project

Projects ([tarot-reading](https://github.com/evoluteur/tarot-reading), [mandala-maker](https://github.com/evoluteur/mandala-maker)) keep their own copy of the shared files: `css/core.css`, `css/densities.css`, `css/themes/*` and `js/omg.js` (`css/demo.css` is only for this repo's demo page). Don't edit the copies. Instead:

- Run `npm run sync:themes` in the project to refresh them from this repo (`scripts/sync-omg-themes.sh`, expects `omg-themes` next to the project or its path as argument).
- Put project-specific tweaks in the project's `css/overrides.css`, loaded right after the density stylesheet. `omg.js` sets `data-theme` and `data-density` on `<html>`, so per-theme rules can be written as `:where(html[data-theme="dark"]) a { ... }` (`:where` keeps the specificity low, like the theme files, so the project's own stylesheets can still override them).
- Fix or improve anything shared here, then sync.

A theme is a set of CSS custom properties on `:root` (`--text`, `--page-bg`, `--link`, `--btn-bg`, `--h1-gradient`...) plus its background images; the rules that use them are in `css/core.css`. Projects can use the same variables, e.g. `color: var(--link)`.

The JS is exposed as `window.OMG` (`OMG.setupPage()`, `OMG.setTheme("light")`, `OMG.setDensity("small")`, `OMG.version`). `setupPage`, `setTheme` and `setDensity` also still work as globals.

### Linking instead of copying

A project can also load everything straight from the hosted copy (no sync step, always up to date), as [healing-frequencies](https://github.com/evoluteur/healing-frequencies) does. Set the base URL before loading `omg.js` (the same-origin GitHub Pages hosting means no CORS issue):

```html
<script>
  window.OMG_THEMES_BASE = "https://evoluteur.github.io/omg-themes/";
  window.OMG_DEFAULT_THEME = "evol-blue"; // optional, defaults to "dark"
</script>
<link id="omg-core-css" rel="stylesheet" href="https://evoluteur.github.io/omg-themes/css/core.css" />
<link id="omg-theme-css" rel="stylesheet" />
<script src="https://evoluteur.github.io/omg-themes/js/omg.js"></script>
```

Then add `<div id="omg-theme-picker"></div>` and call `OMG.setupPage()` on load. Project styles loaded after the theme link can use `html[data-theme="dark"]` etc. Trade-offs: needs network (also on localhost), and a PWA's first offline visit won't have the theme files until they have been cached once.

### Pinning a version

The GitHub Pages copy is always the latest `master`, so a breaking change there reaches linked projects right away. To stay on a version, load the files from [jsDelivr](https://www.jsdelivr.com/), which serves this repo's git tags:

```html
<script>
  window.OMG_THEMES_BASE = "https://cdn.jsdelivr.net/gh/evoluteur/omg-themes@2.0.0/";
</script>
<link id="omg-core-css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/evoluteur/omg-themes@2.0.0/css/core.css" />
<link id="omg-theme-css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/evoluteur/omg-themes@2.0.0/js/omg.js"></script>
```

`@2` follows the latest 2.x. This is a different origin from GitHub Pages, which is fine for stylesheets and scripts; a service worker caching them gets opaque responses. Projects that sync copies can pin too: `git -C ../omg-themes checkout v2.0.0` before `npm run sync:themes`.

Changes and breaking changes for each version are in [CHANGELOG.md](CHANGELOG.md). To release, bump `version` in `js/omg.js`, add the CHANGELOG entry, commit, then `git tag -a vX.Y.Z -m "X.Y.Z"` and `git push --tags`.

(c) 2026 [Olivier Giulieri](https://evoluteur.github.io/).
