# UI kit — Brand Portal

A recreation of the lab's public identity page, **https://seresearchlab.github.io/lab_brand.html**, the only
web surface supplied with this brief. All copy is verbatim from that page; nothing has been rewritten.

## Screens
`index.html` is a single scrolling page with five interactive regions:

| File | Region | Interaction |
|---|---|---|
| `Nav.jsx` | Sticky navigation | Active-section underline, smooth scroll |
| `Hero.jsx` | Hero + download CTAs | — |
| `ColorArchitecture.jsx` | Four core colour cards + 7-row nuance table | Click a swatch to "copy" the hex (toast) |
| `LogoSuite.jsx` | Lockup download centre | Switch lockup (4) × preview canvas (4) |
| `SlidesSection.jsx` | 16:9 keynote preview + mockup specs | Switch between the 5 projection themes |
| `DownloadHub.jsx` | Download packages + footer | — |

## Notes
- Composed entirely from the published components (`Button`, `Card`, `Tag`, `SectionHeader`, `Logo`, `DataTable`).
- The "Lab Emblem (Crest)" lockup is approximated as mark + wordmark inside a rule box: the brand page
  generates it client-side and the crest artwork was not in the supplied assets.
- Downloads are inert; buttons are present for fidelity.
