# Slide set

Five 16:9 slides (1280 × 720) matching the conference decks described on the brand page:
Title Keynote, Research Pillars, Empirical Findings, Big Quote and Closing.

All five share `Slides.jsx` and its `<Frame>` wrapper. `Frame` takes `theme="dark"` (nuance 1,
Classic Identity Dark — the default keynote theme) or `theme="light"` (nuance 2, Crisp Light — the
projector-safe theme used by the supplied poster). The remaining three projection themes from the
brand page are available as `data-theme` scopes in `tokens/themes.css`.

Slide rules:
- The 132 × 5 px tangerine rule sits above every title; nothing else competes with it.
- Titles are Outfit 600–700 at 54–62 px with −0.035em tracking; body never below 15 px.
- The footer carries the lab name left and the URL right, in mono, at 12 px.
- One accent colour per slide. The INF/UFRGS mark appears on the first and last slide only.
