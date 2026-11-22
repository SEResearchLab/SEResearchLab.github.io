# SEResearch Lab — Design System

The visual system for **SEResearch Lab**, a research group at the **Instituto de Informática, UFRGS**
(Porto Alegre, Brazil) working on the *human and social aspects of software engineering*: developer
cognitive load, psychological safety, code review behaviour and socio-technical team dynamics.

The identity the lab adopted is **Option 04 — "Human Logic & Pulse Wave"**: a pulse wave with a human
head node, cradled inside code brackets. In the lab's own words it unites "deep blue engineering rigor
with radiant orange developer empathy."

## Sources this system was built from

| Source | What it gave us |
|---|---|
| https://seresearchlab.github.io/lab_brand.html | The brand page itself: four core colours with full HEX/RGB/HSL/CMYK/Pantone specs, seven tested nuance palettes, the four official lockups, the five projection themes, the keynote title slide, and all download-hub copy. Every string in the Brand Portal UI kit is verbatim from here. |
| `assets/SEResearchLab_Poster_A0-Portrait_Crisp-Light.pptx` (mounted folder) | The A0 poster template. Type stack (Outfit / Plus Jakarta Sans / JetBrains Mono), the full colour ledger, the 12-column grid, the 2 px hairline card, the numbered-section pattern, and the pulse-wave mark as a 1200 px PNG. Coordinates in `ui_kits/poster/Poster.jsx` are read straight out of its `slide1.xml`. |
| `assets/SEResearchLab_Poster_A0-Portrait_Crisp-Light.pdf` | Print companion to the same poster (not machine-read — no PDF reader in this environment). |
| `assets/inf-logo-2.0.svg`, `assets/logo-inf-768x440.jpg` | INF/UFRGS institutional marks. |
| `assets/karina.jpg`, `assets/karinasq.jpg` | Member portraits. Not used in any kit — no people page was supplied. |

**Not supplied, and therefore not built:** the lab's actual public website (people, publications,
projects pages), any production codebase, and any Figma file. Nothing in this system invents those
surfaces. If you have them, hand them over and the coverage will grow.

## Surfaces covered

1. **Brand Portal** (`ui_kits/brand-portal/`) — the identity & download page, click-through.
2. **A0 conference poster** (`ui_kits/poster/`) — 1:1 rebuild of the supplied template.
3. **Keynote slides** (`slides/`) — five 16:9 slides matching the decks the brand page describes.

---

## CONTENT FUNDAMENTALS

**Register.** Academic, plain, unhedged. The lab writes like a methods section that has been edited for
a general reader: declarative sentences, concrete nouns, no throat-clearing. "Agents now open a
measurable share of pull requests in open-source projects, but code review was designed around a human
author who can be asked what they intended."

**Person.** Third person for findings, first-person plural for the lab's own choices and limits: "*We*
do not yet know how reviewers reallocate attention," "*we* triangulate with timestamps." Never "you" in
research copy. The brand page is the one exception — as marketing copy it says "Welcome to the official
identity specifications" and addresses the reader directly.

**Claims carry their evidence.** A number is never left alone. "68%" is immediately completed by "of
reviewers re-read agent-authored diffs at least twice before approving," and every table carries its
model spec: "Mixed-effects model with reviewer as a random effect; p-values Holm-corrected."

**Willingness to be wrong.** The tone is confident but explicitly falsifiable — "Three design
implications for review tooling, stated concretely enough to be disagreed with." Threats to validity
are stated in the lab's own voice, not buried.

**Casing.** Sentence case for headings on research surfaces ("Research questions", "Threats to
validity", "Study design & conceptual model"). The brand page uses Title Case for its marketing
headings ("Logo Suite Download Center", "Color Architecture & Nuance Specifications") — follow that
only on identity/marketing pages. UPPERCASE is reserved for mono micro-labels: `KEY FINDING`,
`REFERENCES`, `RQ1`, `01`.

**Punctuation.** Em dashes are used, sparingly, for the sentence's real turn: "Reviewers substitute
re-reading for asking." Middots separate metadata: "EMSE / ICSE 2027 · Poster track",
"Instituto de Informática · UFRGS". Ordinal superscripts mark author affiliations (¹, ²).
Numbers keep their units and precision as measured (18.2 min, 2.4×, p = 0.004, 1,204 PRs).

**Emoji.** The brand page's marketing section uses them as section bullets (📄 💻 🐙 👕 📦 📊 🌐).
**Do not carry that into research or product surfaces** — posters, slides, papers and UI use mono
labels and numerals instead. Treat emoji as a quirk of that one page, not a brand asset.

**Vibe.** Rigorous and warm at the same time — the identity's whole argument. Cold structure (brackets,
grids, mono numerals) carrying a human subject (the pulse, the head node, the orange).

---

## VISUAL FOUNDATIONS

**Colour.** Two colours do the work: Midnight Navy `#0B192C` and Radiant Tangerine `#F97316`, with
Oceanic Indigo `#1E3E62` and Ember Warmth `#FB923C` reserved for the mark itself. On light grounds the
accent shifts to Solar Flare `#EA580C` for contrast. Neutrals are a cool slate ramp
(`#F8FAFC → #334155`) plus one warm paper `#FAF8F5` that marks a highlighted block. Status colours exist
but are for state only. Orange is an accent, never a field: rules, numbers, bars, one button.
Seven tested nuance palettes ship as `data-theme` scopes in `tokens/themes.css`.

**Type.** Three faces, three jobs, no overlap. **Outfit** for display — headings, statistics, the
wordmark — set tight and negatively tracked (−0.05em at hero size, −0.012em at section size).
**Plus Jakarta Sans** for all running prose at 1.35 line height. **JetBrains Mono** for labels, section
numbers, venue lines, contact lines and every figure in a table; uppercase mono labels get 0.10–0.18em
tracking. Body never drops below 13 px on screen or 12 pt in print.

**Spacing and layout.** 4 px base unit, 12-column grid, 24 px gutter, shared by the poster and the
site. Cards are padded 24 px (36 px when they are the subject of the view). Sections are separated by
72 px. Prose is capped at ~68 characters. Layout is strictly rectangular and left-aligned; centring
appears only in figure placeholders and the stacked lockup. The only fixed element is the sticky
portal nav, which sits on a blurred navy scrim.

**Backgrounds.** Flat colour. No gradients, no photographic hero, no illustration, no texture, no
pattern. The identity's entire depth budget is spent on the mark. Full-bleed is used for exactly two
things: the navy masthead band and the navy footer band, each closed with a tangerine rule
(21 px on the A0 poster, 4–7 px on screen).

**Borders, corners, cards.** Square. `--radius-none` is the default and it is not negotiable — the only
rounded shapes in the system are the status `Badge` pill and the `Switch` track. A card is a 2 px
`#D8DEE6` hairline on white or warm paper, with no shadow. A highlighted card adds a 6–15 px solid
orange bar down its left edge. A numbered section opens with a 3 px orange rule spanning the column,
then the mono number, then the display title.

**Shadow and elevation.** Print-first: depth is hairline and fill, not shadow. `--shadow-card` is a
hover affordance; `--shadow-overlay` belongs to the modal only; `--shadow-focus` is a 3 px tangerine
glow. There is no inner-shadow system.

**Transparency and blur.** Two sanctioned uses: the sticky nav (`rgba(5,12,26,.88)` + 14 px backdrop
blur) and the modal scrim (`rgba(5,12,26,.62)`). On dark grounds, hairlines are
`rgba(248,250,252,.14)` rather than a grey. The mark may be dropped to 10% opacity as a slide
watermark. No protection gradients anywhere — because there is no photography to protect against;
labels sit on solid capsules or solid bands instead.

**Animation.** Restrained to opacity and colour, 90–260 ms, `cubic-bezier(.2,0,0,1)`. Hover changes
colour or lifts a card by shadow; it never scales, rotates or bounces. Press darkens by one ramp step
(`--orange-500 → --orange-600`) with no shrink. Tabs move the underline. Nothing loops, nothing
parallaxes, nothing animates on scroll.

**States.** Hover: accent darkens one step, neutral surfaces shift to `--surface-sunken`, links go
`#EA580C → #C2410C`. Focus: 3 px tangerine glow, never a removed outline. Disabled: 42% opacity,
`not-allowed`, colours unchanged. Selected: solid navy fill with `#F8FAFC` text, or a 3 px orange
underline for tabs.

**Imagery.** There is none in the supplied material beyond the two logos and two member portraits, and
the system does not fabricate any. Where a photograph or diagram belongs, the brand uses a labelled
placeholder on `#F5F7FA` inside a hairline, captioned in mono — see `04 Study design` on the poster.
If photography is added later, the poster's palette implies cool, high-key, un-graded images that sit
quietly beside the navy; do not add grain, duotone or warm filters without checking.

---

## ICONOGRAPHY

**What the sources contain.** No icon set, no icon font, no SVG sprite. The brand page and the poster
carry three glyph-like assets only: the **pulse-wave mark**, the **INF/UFRGS logo**, and three **QR
plates**. Everything else that reads as an icon is in fact typography — the section numbers `01…08` in
JetBrains Mono, the `RQ1`/`RQ2`/`RQ3` tags, the `<` `>` brackets of the mark itself.

**Unicode as iconography.** The brand leans on characters rather than glyphs: `·` (middot) as a
metadata separator, `—` as a structural dash, `×` for multipliers ("2.4×"), `¹ ²` for affiliations,
`†`/`—` for absent values in tables. Use these; they set in the brand's own fonts and survive print.

**Emoji.** Present on the brand page's marketing section (📄 💻 🐙 👕 📦 📊 🌐) as bullets. Confined
there. Never in research, product or slide surfaces.

**Substitution — flagged.** The components need a small number of true UI glyphs (copy, download,
external link) that no supplied source provides. This system links **Lucide 0.454.0 from CDN**
(`https://unpkg.com/lucide@0.454.0/dist/umd/lucide.min.js`) — 2 px stroke, square caps, geometric, which
matches the mark's own stroke logic. **This is a substitution, not a brand asset.** If the lab has an
icon set, send it and it will replace Lucide wholesale. Rules while it stands: outline only, never
filled; 16 px inside `IconButton`, 20 px standalone; `currentColor`; never used decoratively, never
paired with an emoji, never used where a mono label would say it more precisely.

**Never** draw a substitute for the pulse-wave mark. Use `assets/seresearch-mark.png`.

---

## FONT SUBSTITUTION — needs your input

No font binaries were supplied. The poster names **Outfit**, **Plus Jakarta Sans** and
**JetBrains Mono**; all three are on Google Fonts, so `tokens/fonts.css` loads them from the Google CDN
rather than declaring `@font-face` against local files. If the lab holds licensed copies (or wants
self-hosted binaries for offline print work), drop the `.woff2` files into `assets/fonts/` and
`tokens/fonts.css` becomes a set of real `@font-face` rules.

---

## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper, for use in Claude Code.
- `thumbnail.html` — homepage tile.

### `tokens/`
`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `borders.css` · `elevation.css` ·
`motion.css` · `themes.css` (the seven tested nuances as `data-theme` scopes).

### `components/` — 16 components in three groups
- **core/** — `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Switch`, `Tag`, `Badge`
- **surfaces/** — `Card`, `Callout`, `Dialog`, `Tabs`
- **brand/** — `Logo`, `SectionHeader`, `StatBlock`, `DataTable`

Each has a `.jsx`, a `.d.ts` props contract and a `.prompt.md` usage note; each directory has one
`@dsCard` HTML showing its states.

**Intentional additions.** No source defined a component inventory, so this is an authored set sized to
the three surfaces above. Four of the sixteen are not generic primitives but direct liftings of
repeated brand patterns — `Logo` (the lockup, so nobody redraws it), `SectionHeader` (the poster's
rule + number + title), `StatBlock` (the "68% / of reviewers…" unit) and `DataTable` (the results
table with its mono numerals and note line). Deliberately **not** built, because nothing in the sources
uses them: Toast, Avatar, Accordion, Breadcrumb, Pagination, Slider, Datepicker.

### `guidelines/` — 21 specimen cards
Colours (8): brand core, navy ramp, orange ramp, neutrals, semantic aliases, status, contrast pairs,
tested nuances. Type (5): display, body, mono, scale, pairing in use. Spacing (5): scale, grid,
borders & radii, elevation, motion. Brand (3): logo lockups, mark & clear space, institutional lockup.

### `ui_kits/`
- `brand-portal/` — `index.html`, `Nav.jsx`, `Hero.jsx`, `ColorArchitecture.jsx`, `LogoSuite.jsx`,
  `SlidesSection.jsx`, `DownloadHub.jsx`, `README.md`
- `poster/` — `index.html`, `Poster.jsx`, `README.md`

### `slides/`
`Slides.jsx` plus five tagged slides: title, pillars, findings, quote, closing.

### `templates/` — editable starting files
- `keynote-deck/KeynoteDeck.dc.html` — five 16:9 slides (title, pillars, findings, quote, closing).
- `conference-poster/ConferencePoster.dc.html` — the A0 portrait poster, 3179 × 4493 px.

Both are plain editable markup and both export to **.pptx** (and from there to Google Slides).
The poster exports as a single 3179 × 4493 px slide — set the page size to A0 (841 × 1189 mm) when
printing. `ds-base.js` in each folder points at this design system; a consuming project edits the one
`base` line in it.

### `assets/`
- `seresearch-mark.png` — the pulse-wave mark, extracted from the poster deck (1200 px raster).
  **The lab holds vector originals**; the brand page serves SVG lockups. Ask for the SVG.
- `inf-ufrgs-white.png` — INF/UFRGS mark, white, extracted from the poster deck.
- `inf-logo-2.0.svg`, `logo-inf-768x440.jpg` — INF/UFRGS marks as supplied.
- `karina.jpg`, `karinasq.jpg` — member portraits as supplied; unused.
