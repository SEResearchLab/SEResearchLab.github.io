/**
 * PowerPoint (.pptx) & Google Slides Presentation Generator
 * Uses pptxgenjs to build high-fidelity presentations with Option 04 branding
 * across all visual nuances.
 */

import pptxgen from 'pptxgenjs';
import { ALL_COLOR_NUANCES, getLockupSvg, svgStringToPngDataUrl } from './logoGenerators';

export interface SlideNuanceTheme {
  id: string;
  name: string;
  category: 'dark' | 'light';
  bgHex: string; // 6 chars hex without #
  primaryTextHex: string;
  subtitleTextHex: string;
  accentOrangeHex: string;
  accentWarmHex: string;
  cardBgHex: string;
  cardBorderHex: string;
  description: string;
}

export const SLIDE_NUANCE_THEMES: SlideNuanceTheme[] = [
  {
    id: 'midnight-navy',
    name: 'Midnight Navy (Auditorium Signature)',
    category: 'dark',
    bgHex: '07101B',
    primaryTextHex: 'FFFFFF',
    subtitleTextHex: '94A3B8',
    accentOrangeHex: 'F97316',
    accentWarmHex: 'FB923C',
    cardBgHex: '0E1D33',
    cardBorderHex: '1E3E62',
    description: 'Deep midnight canvas with luminous pulse accent, ideal for dim conference halls.',
  },
  {
    id: 'academic-white',
    name: 'Crisp Academic White (Symposium & Defense)',
    category: 'light',
    bgHex: 'FFFFFF',
    primaryTextHex: '0B192C',
    subtitleTextHex: '475569',
    accentOrangeHex: 'EA580C',
    accentWarmHex: 'F97316',
    cardBgHex: 'F8FAFC',
    cardBorderHex: 'E2E8F0',
    description: 'High-contrast pure white for bright lecture theatres, printouts, and defense committees.',
  },
  {
    id: 'dark-slate',
    name: 'Dark Slate Tech (Developer Conference)',
    category: 'dark',
    bgHex: '0F172A',
    primaryTextHex: 'F8FAFC',
    subtitleTextHex: '94A3B8',
    accentOrangeHex: 'FF6B35',
    accentWarmHex: 'FFA07A',
    cardBgHex: '1E293B',
    cardBorderHex: '334155',
    description: 'Modern technical charcoal-slate for industry engineering summits and hacker keynotes.',
  },
  {
    id: 'editorial-paper',
    name: 'Warm Editorial Paper (Workshop & Seminar)',
    category: 'light',
    bgHex: 'FAF8F5',
    primaryTextHex: '111827',
    subtitleTextHex: '4B5563',
    accentOrangeHex: 'D97706',
    accentWarmHex: 'F59E0B',
    cardBgHex: 'F3EFEA',
    cardBorderHex: 'E5DECE',
    description: 'Refined warm parchment tones for academic retreats, journals, and interactive workshops.',
  },
  {
    id: 'solar-amber',
    name: 'Solar Amber Gradient (Keynote Kickoff)',
    category: 'dark',
    bgHex: '1A0B02',
    primaryTextHex: 'FFFFFF',
    subtitleTextHex: 'FED7AA',
    accentOrangeHex: 'F97316',
    accentWarmHex: 'FB923C',
    cardBgHex: '2C1405',
    cardBorderHex: '7C2D12',
    description: 'High-energy solar amber glow for opening keynote announcements and lab unveilings.',
  },
];

async function addNuanceSlideDeck(
  pres: pptxgen,
  theme: SlideNuanceTheme,
  isSection: boolean = false
) {
  const logoNuance = ALL_COLOR_NUANCES.find(
    (n) => (theme.category === 'light' ? n.isLightBg : !n.isLightBg)
  ) || ALL_COLOR_NUANCES[0];

  const markSvg = getLockupSvg('mark', logoNuance, { size: 400 });
  const horizontalSvg = getLockupSvg('horizontal', logoNuance, { width: 800, height: 220 });
  const emblemSvg = getLockupSvg('badge', logoNuance, { size: 500 });

  const [markPng, horizontalPng, emblemPng] = await Promise.all([
    svgStringToPngDataUrl(markSvg, 512, 512),
    svgStringToPngDataUrl(horizontalSvg, 1024, 280),
    svgStringToPngDataUrl(emblemSvg, 600, 600),
  ]);

  if (isSection) {
    const dividerSlide = pres.addSlide();
    dividerSlide.background = { color: theme.bgHex };

    dividerSlide.addText(`SERESEARCH LAB IDENTITY SYSTEM`, {
      x: 0.8,
      y: 2.2,
      w: 11.5,
      h: 0.5,
      fontSize: 14,
      fontFace: 'Arial',
      color: theme.accentOrangeHex,
      bold: true,
      charSpacing: 3,
    });

    dividerSlide.addText(theme.name, {
      x: 0.8,
      y: 2.8,
      w: 11.5,
      h: 1.2,
      fontSize: 40,
      fontFace: 'Arial Black',
      color: theme.primaryTextHex,
      bold: true,
    });

    dividerSlide.addText(theme.description, {
      x: 0.8,
      y: 4.2,
      w: 10,
      h: 0.8,
      fontSize: 16,
      fontFace: 'Arial',
      color: theme.subtitleTextHex,
    });

    dividerSlide.addImage({
      data: markPng,
      x: 10.5,
      y: 2.5,
      w: 2.2,
      h: 2.2,
    });
  }

  // --- SLIDE 1: Keynote Title Slide ---
  const slide1 = pres.addSlide();
  slide1.background = { color: theme.bgHex };

  slide1.addImage({
    data: horizontalPng,
    x: 0.8,
    y: 0.7,
    w: 3.4,
    h: 0.95,
  });

  slide1.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 2.2,
    w: 3.8,
    h: 0.4,
    rectRadius: 0.1,
    fill: { color: theme.cardBgHex },
    line: { color: theme.accentOrangeHex, width: 1 },
  });
  slide1.addText('KEYNOTE • ICSE / FSE SPECIAL SESSION', {
    x: 0.9,
    y: 2.2,
    w: 3.6,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Arial',
    color: theme.accentOrangeHex,
    bold: true,
    charSpacing: 2,
    align: 'center',
  });

  slide1.addText('Why Great Code Is Born From Empathy, Not Just Compilers', {
    x: 0.8,
    y: 2.8,
    w: 11.5,
    h: 2.1,
    fontSize: 42,
    fontFace: 'Arial Black',
    color: theme.primaryTextHex,
    bold: true,
    lineSpacingMultiple: 1.1,
  });

  slide1.addText('Human & Social Aspects of Software Engineering: Socio-Technical Dynamics & DevEx', {
    x: 0.8,
    y: 5.0,
    w: 11.5,
    h: 0.6,
    fontSize: 18,
    fontFace: 'Arial',
    color: theme.subtitleTextHex,
    bold: true,
  });

  slide1.addShape(pres.ShapeType.line, {
    x: 0.8,
    y: 6.1,
    w: 11.7,
    h: 0,
    line: { color: theme.cardBorderHex, width: 1 },
  });

  slide1.addText('Prof. Alex Rivera, Ph.D. & The SEResearch Team', {
    x: 0.8,
    y: 6.3,
    w: 6.0,
    h: 0.4,
    fontSize: 13,
    fontFace: 'Arial',
    color: theme.primaryTextHex,
    bold: true,
  });

  slide1.addText('SEResearch Lab • seresearch.org/lab', {
    x: 7.0,
    y: 6.3,
    w: 5.5,
    h: 0.4,
    fontSize: 13,
    fontFace: 'Arial',
    color: theme.accentOrangeHex,
    bold: true,
    align: 'right',
  });

  // --- SLIDE 2: Research Pillars ---
  const slide2 = pres.addSlide();
  slide2.background = { color: theme.bgHex };

  slide2.addText('RESEARCH PILLARS', {
    x: 0.8,
    y: 0.6,
    w: 6.0,
    h: 0.3,
    fontSize: 12,
    fontFace: 'Arial',
    color: theme.accentOrangeHex,
    bold: true,
    charSpacing: 2,
  });

  slide2.addText('Exploring The Human Dimension of Systems', {
    x: 0.8,
    y: 0.9,
    w: 10.0,
    h: 0.7,
    fontSize: 28,
    fontFace: 'Arial Black',
    color: theme.primaryTextHex,
    bold: true,
  });

  slide2.addImage({
    data: markPng,
    x: 11.5,
    y: 0.6,
    w: 1.0,
    h: 1.0,
  });

  const pillars = [
    {
      num: '01',
      title: 'Developer Experience (DevEx)',
      desc: 'Cognitive load optimization, tooling friction reduction, and deep flow state preservation in daily workflow.',
    },
    {
      num: '02',
      title: 'Social & Team Dynamics',
      desc: 'Peer code review psychological safety, constructive feedback semantics, and empathy in distributed teams.',
    },
    {
      num: '03',
      title: 'Socio-Technical Systems',
      desc: 'Conway’s Law in microservice scale: how organizational communication models dictate software modularity.',
    },
    {
      num: '04',
      title: 'Cognitive Well-Being',
      desc: 'Burnout mitigation, sustainable engineering pacing, mental health diagnostics, and focus shielding.',
    },
  ];

  const colWidth = 2.75;
  const gap = 0.23;
  const startX = 0.8;

  pillars.forEach((p, idx) => {
    const cardX = startX + idx * (colWidth + gap);

    slide2.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: 1.9,
      w: colWidth,
      h: 4.4,
      rectRadius: 0.15,
      fill: { color: theme.cardBgHex },
      line: { color: theme.cardBorderHex, width: 1 },
    });

    slide2.addText(p.num, {
      x: cardX + 0.25,
      y: 2.1,
      w: 0.8,
      h: 0.35,
      fontSize: 13,
      fontFace: 'Arial',
      color: theme.accentOrangeHex,
      bold: true,
    });

    slide2.addText(p.title, {
      x: cardX + 0.25,
      y: 2.55,
      w: colWidth - 0.5,
      h: 1.1,
      fontSize: 16,
      fontFace: 'Arial Black',
      color: theme.primaryTextHex,
      bold: true,
      lineSpacingMultiple: 1.1,
    });

    slide2.addText(p.desc, {
      x: cardX + 0.25,
      y: 3.7,
      w: colWidth - 0.5,
      h: 2.3,
      fontSize: 12,
      fontFace: 'Arial',
      color: theme.subtitleTextHex,
      lineSpacingMultiple: 1.2,
    });
  });

  slide2.addText('SEResearch Lab • Empirical Software Engineering Research', {
    x: 0.8,
    y: 6.7,
    w: 8.0,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Arial',
    color: theme.subtitleTextHex,
  });

  // --- SLIDE 3: Empirical Findings ---
  const slide3 = pres.addSlide();
  slide3.background = { color: theme.bgHex };

  slide3.addText('EMPIRICAL FINDINGS', {
    x: 0.8,
    y: 0.6,
    w: 6.0,
    h: 0.3,
    fontSize: 12,
    fontFace: 'Arial',
    color: theme.accentOrangeHex,
    bold: true,
    charSpacing: 2,
  });

  slide3.addText('The Quantitative Impact of Empathy in Engineering', {
    x: 0.8,
    y: 0.9,
    w: 11.0,
    h: 0.7,
    fontSize: 28,
    fontFace: 'Arial Black',
    color: theme.primaryTextHex,
    bold: true,
  });

  const stats = [
    { value: '-42%', label: 'Review Cycle Time', sub: 'When reviewers provide empathetic context rather than terse rejection.' },
    { value: '3.1x', label: 'Psychological Safety', sub: 'Teams actively modeling blameless post-mortems and open inquiries.' },
    { value: '+68%', label: 'Long-term Retention', sub: 'Engineers reporting continuous flow states and shielded cognitive focus.' },
  ];

  stats.forEach((s, idx) => {
    const sWidth = 3.75;
    const sX = 0.8 + idx * (sWidth + 0.22);

    slide3.addShape(pres.ShapeType.roundRect, {
      x: sX,
      y: 1.85,
      w: sWidth,
      h: 2.2,
      rectRadius: 0.15,
      fill: { color: theme.cardBgHex },
      line: { color: theme.cardBorderHex, width: 1 },
    });

    slide3.addText(s.value, {
      x: sX + 0.3,
      y: 2.05,
      w: sWidth - 0.6,
      h: 0.7,
      fontSize: 34,
      fontFace: 'Arial Black',
      color: theme.accentOrangeHex,
      bold: true,
    });

    slide3.addText(s.label, {
      x: sX + 0.3,
      y: 2.75,
      w: sWidth - 0.6,
      h: 0.4,
      fontSize: 15,
      fontFace: 'Arial',
      color: theme.primaryTextHex,
      bold: true,
    });

    slide3.addText(s.sub, {
      x: sX + 0.3,
      y: 3.15,
      w: sWidth - 0.6,
      h: 0.8,
      fontSize: 11,
      fontFace: 'Arial',
      color: theme.subtitleTextHex,
    });
  });

  // Bottom quote card
  slide3.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 4.3,
    w: 11.7,
    h: 2.1,
    rectRadius: 0.15,
    fill: { color: theme.cardBgHex },
    line: { color: theme.accentOrangeHex, width: 1 },
  });

  slide3.addText('“Software is never merely syntax and binary execution. Every line of code is an artifact of human conversation, cognitive stress, social empathy, and organizational structure.”', {
    x: 1.1,
    y: 4.5,
    w: 11.1,
    h: 1.2,
    fontSize: 16,
    fontFace: 'Arial',
    color: theme.primaryTextHex,
    italic: true,
    lineSpacingMultiple: 1.2,
  });

  slide3.addText('— SEResearch Lab Manifesto • Human-Centered Software Systems', {
    x: 1.1,
    y: 5.75,
    w: 11.1,
    h: 0.4,
    fontSize: 12,
    fontFace: 'Arial',
    color: theme.accentOrangeHex,
    bold: true,
  });

  // --- SLIDE 4: Conclusion & Lab Emblem ---
  const slide4 = pres.addSlide();
  slide4.background = { color: theme.bgHex };

  slide4.addImage({
    data: emblemPng,
    x: 1.2,
    y: 1.4,
    w: 4.5,
    h: 4.5,
  });

  slide4.addText('SERESEARCH LAB', {
    x: 6.2,
    y: 1.5,
    w: 6.0,
    h: 0.3,
    fontSize: 12,
    fontFace: 'Arial',
    color: theme.accentOrangeHex,
    bold: true,
    charSpacing: 3,
  });

  slide4.addText('Join Our Research Community', {
    x: 6.2,
    y: 1.8,
    w: 6.5,
    h: 0.8,
    fontSize: 32,
    fontFace: 'Arial Black',
    color: theme.primaryTextHex,
    bold: true,
  });

  slide4.addText('We partner with university faculties, open source foundations, and engineering organizations worldwide to study developer flourishing.', {
    x: 6.2,
    y: 2.7,
    w: 6.2,
    h: 0.8,
    fontSize: 14,
    fontFace: 'Arial',
    color: theme.subtitleTextHex,
    lineSpacingMultiple: 1.2,
  });

  const contactPoints = [
    { label: 'Website & Papers:', value: 'https://seresearch.org' },
    { label: 'Collaboration & Inquiries:', value: 'research@seresearch.org' },
    { label: 'Open Data & Replications:', value: 'github.com/seresearch-lab' },
    { label: 'Academic Seminars:', value: 'Every Thursday, 14:00 UTC' },
  ];

  contactPoints.forEach((cp, idx) => {
    const yPos = 3.65 + idx * 0.58;

    slide4.addShape(pres.ShapeType.ellipse, {
      x: 6.2,
      y: yPos + 0.08,
      w: 0.14,
      h: 0.14,
      fill: { color: theme.accentOrangeHex },
    });

    slide4.addText(`${cp.label} `, {
      x: 6.45,
      y: yPos,
      w: 2.5,
      h: 0.4,
      fontSize: 12,
      fontFace: 'Arial',
      color: theme.primaryTextHex,
      bold: true,
    });

    slide4.addText(cp.value, {
      x: 8.8,
      y: yPos,
      w: 3.8,
      h: 0.4,
      fontSize: 12,
      fontFace: 'Arial',
      color: theme.accentOrangeHex,
    });
  });

  slide4.addText('Thank You! Questions & Discussion Welcomed.', {
    x: 6.2,
    y: 6.1,
    w: 6.2,
    h: 0.5,
    fontSize: 15,
    fontFace: 'Arial Black',
    color: theme.primaryTextHex,
    bold: true,
  });
}

export async function exportNuancePresentationPptx(
  themeId: string,
  fileName?: string
): Promise<void> {
  const theme = SLIDE_NUANCE_THEMES.find((t) => t.id === themeId) || SLIDE_NUANCE_THEMES[0];
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'SEResearch Lab';
  pres.company = 'SEResearch Laboratory';
  pres.title = `SEResearch Lab Keynote Presentation - ${theme.name}`;

  await addNuanceSlideDeck(pres, theme, false);

  const safeName = fileName || `SEResearch-Lab-Slides-${theme.id}.pptx`;
  await pres.writeFile({ fileName: safeName });
}

export async function exportMasterPresentationPptx(
  fileName: string = 'SEResearch-Lab-Conference-Slides-All-Nuances.pptx'
): Promise<void> {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'SEResearch Lab';
  pres.company = 'SEResearch Laboratory';
  pres.title = 'SEResearch Lab Complete Slide Deck Suite (All Nuances)';

  const coverSlide = pres.addSlide();
  coverSlide.background = { color: '07101B' };

  coverSlide.addText('SERESEARCH LAB IDENTITY SYSTEM', {
    x: 1.0,
    y: 2.0,
    w: 11.0,
    h: 0.5,
    fontSize: 15,
    fontFace: 'Arial',
    color: 'F97316',
    bold: true,
    charSpacing: 3,
  });

  coverSlide.addText('Official Conference Slide Master Deck', {
    x: 1.0,
    y: 2.5,
    w: 11.0,
    h: 1.2,
    fontSize: 44,
    fontFace: 'Arial Black',
    color: 'FFFFFF',
    bold: true,
  });

  coverSlide.addText('Contains complete presentation sets across all 5 visual nuances:\n• Midnight Navy (Auditorium)\n• Crisp Academic White (Symposium & Defense)\n• Dark Slate Tech (Industry Keynote)\n• Warm Editorial Paper (Workshop & Seminar)\n• Solar Amber Gradient (Opening Keynote)', {
    x: 1.0,
    y: 3.9,
    w: 11.0,
    h: 2.2,
    fontSize: 16,
    fontFace: 'Arial',
    color: 'CBD5E1',
    lineSpacingMultiple: 1.3,
  });

  for (const theme of SLIDE_NUANCE_THEMES) {
    await addNuanceSlideDeck(pres, theme, true);
  }

  await pres.writeFile({ fileName });
}
