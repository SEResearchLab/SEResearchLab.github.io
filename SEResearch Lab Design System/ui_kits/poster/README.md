# UI kit — A0 conference poster

A 1:1 rebuild of `SEResearchLab_Poster_A0-Portrait_Crisp-Light.pptx` (supplied in the mounted `assets/` folder).

Every coordinate, fill, type size and string in `Poster.jsx` was read out of that file's
`ppt/slides/slide1.xml`, not estimated. The design canvas is **3179 × 4493 px at 96 dpi**
(A0 portrait, 841 × 1189 mm); `index.html` scales it to a third for preview.

## Structure
- Navy masthead (706 px) with a 21 px tangerine band, lab lockup left, INF/UFRGS right
- Title block: 86 pt Outfit, authors in 26 pt Plus Jakarta Sans, venue line in 24 pt JetBrains Mono
- Warm-paper key-finding band with a 15 px orange left bar
- Eight numbered sections on a 3-column grid, 24 px gutter, 2 px `#D8DEE6` hairline panels
- Navy footer: references, contact line, INF mark, three QR plates

## Deliberate placeholders
The three QR plates are rendered as a checker fill: the original file embeds three QR PNGs whose
encoded URLs belong to a specific paper, so reproducing them here would be misleading. Replace with
real codes on use. The wide figure slot is a placeholder in the source too.
