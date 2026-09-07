import { LogoConcept, PalettePreset, ColorNuance } from '../types';

export const LOGO_CONCEPTS: LogoConcept[] = [
  {
    id: 'socio-technical-loop',
    conceptNumber: '01',
    name: 'The Socio-Technical Loop',
    subtitle: 'Human Nodes & Code Brackets in Continuous Harmony',
    shortDescription:
      'Seamlessly blends code brackets { } with interconnected human silhouettes and social resonance nodes, illustrating the unbreakable feedback loop between developer happiness and software excellence.',
    symbolism: [
      {
        title: 'Bracket Gestalt',
        description: 'Outer deep-blue curvatures echo software syntax { } and terminal logic.',
      },
      {
        title: 'Empathic Core',
        description: 'Vibrant orange synaptic bridge symbolizes human collaboration, empathy, and developer well-being.',
      },
      {
        title: 'DevEx Flow State',
        description: 'Continuous ribbon design signifies effortless flow, psychological safety, and friction-free engineering.',
      },
    ],
    primaryBlue: '#0F2537',
    secondaryBlue: '#1E3E62',
    accentOrange: '#F97316',
    accentWarm: '#FB923C',
    vectorId: 'loop',
    aiImagePath: '/src/assets/images/seresearch_logo_nodes_1788730067430.jpg',
    tags: ['Community', 'DevEx', 'Collaboration', 'Syntax', 'Flow'],
  },
  {
    id: 'human-prism-monogram',
    conceptNumber: '02',
    name: 'The SE Human Prism',
    subtitle: 'Interlocking Monogram with Embedded Human Profiles',
    shortDescription:
      'A structural "SE" monogram where the negative space and intersecting contours reveal collaborating developer profiles illuminated by an energetic orange spark of ingenuity.',
    symbolism: [
      {
        title: 'Socio-Technical Foundation',
        description: 'Deep navy structural bars ground the mark with software architectural stability and empirical research rigor.',
      },
      {
        title: 'Human Dimension Prism',
        description: 'An orange refracted spark at the center represents the cognitive and emotional reality of programmers.',
      },
      {
        title: 'Social Synchrony',
        description: 'Paired organic curvature highlights peer review, mentoring, and team cohesion.',
      },
    ],
    primaryBlue: '#0B192C',
    secondaryBlue: '#153450',
    accentOrange: '#EA580C',
    accentWarm: '#F97316',
    vectorId: 'monogram',
    aiImagePath: '/src/assets/images/seresearch_logo_dark_1788730088487.jpg',
    tags: ['Monogram', 'Cognition', 'Architecture', 'Empirical', 'Teamwork'],
  },
  {
    id: 'collaborative-matrix',
    conceptNumber: '03',
    name: 'The Collaborative Matrix',
    subtitle: 'Geometric Network & Social Density in Code',
    shortDescription:
      'A faceted hexagonal crest with converging neural-style developer nodes, balancing scientific methodology with vibrant interpersonal dynamics.',
    symbolism: [
      {
        title: 'Scientific Hexagon',
        description: 'Geometric symmetry reflects empirical lab experimentation and data-driven developer insights.',
      },
      {
        title: 'Social Network Topography',
        description: 'Connected nodes display organizational dynamics, open source networks, and community contribution.',
      },
      {
        title: 'Orange Spark of Inspiration',
        description: 'Warm accents highlight creative problem-solving and psychological safety in teams.',
      },
    ],
    primaryBlue: '#071224',
    secondaryBlue: '#1E3A5F',
    accentOrange: '#FF6B35',
    accentWarm: '#FFA07A',
    vectorId: 'synapse',
    aiImagePath: '/src/assets/images/seresearch_logo_emblem_1788730077938.jpg',
    tags: ['Empirical', 'Social Graph', 'Ecosystem', 'Hexagonal', 'Science'],
  },
  {
    id: 'human-logic-pulse',
    conceptNumber: '04',
    name: 'Human Logic & Pulse Wave',
    subtitle: 'Software Engineering Syntax Meeting Human & Social Aspects',
    shortDescription:
      'A sleek dynamic mark merging code syntax brackets < > with an organic human vitality pulse rhythm, symbolizing human and social aspects as the living heartbeat of software engineering.',
    symbolism: [
      {
        title: 'Syntax & Engineering Anchor',
        description: 'Deep blue code brackets < > anchor the mark in software engineering rigor, systems architecture, and technical craft.',
      },
      {
        title: 'Human Vitality Wave',
        description: 'Radiant orange pulse line captures developer cognitive flow, empathy, well-being, and social connection.',
      },
      {
        title: 'Social Resonance Apex',
        description: 'Collaborative pulse peak with empathy nodes represents team cohesion, mentoring, and the human factors that elevate software engineering.',
      },
    ],
    primaryBlue: '#0B192C',
    secondaryBlue: '#1E3E62',
    accentOrange: '#F97316',
    accentWarm: '#FB923C',
    vectorId: 'pulse',
    aiImagePath: '/src/assets/images/seresearch_banner_1788730099672.jpg',
    tags: ['Human Aspects', 'Social Dynamics', 'Code Syntax', 'Flow', 'Empathy'],
  },
];

export const OFFICIAL_CONCEPT = LOGO_CONCEPTS[3];

export const PALETTE_PRESETS: PalettePreset[] = [
  {
    id: 'classic-identity',
    name: 'Classic Identity',
    tagline: 'Deep Midnight Navy & Radiant Tangerine',
    primaryBlue: '#0B192C',
    secondaryBlue: '#1E3E62',
    deepBlueDark: '#07101B',
    accentOrange: '#F97316',
    accentWarm: '#FB923C',
    accentSoft: '#FFEDD5',
  },
  {
    id: 'solar-rigor',
    name: 'Solar Rigor',
    tagline: 'Deep Oceanic Ink & Intense Solar Amber',
    primaryBlue: '#071224',
    secondaryBlue: '#0F2537',
    deepBlueDark: '#040913',
    accentOrange: '#EA580C',
    accentWarm: '#F97316',
    accentSoft: '#FED7AA',
  },
  {
    id: 'cyber-humanist',
    name: 'Cyber Humanist',
    tagline: 'Cobalt Night & Glowing Sunset Coral',
    primaryBlue: '#101B33',
    secondaryBlue: '#203254',
    deepBlueDark: '#0A0F1F',
    accentOrange: '#FF6B35',
    accentWarm: '#FFA07A',
    accentSoft: '#FFE4D6',
  },
  {
    id: 'nordic-empathy',
    name: 'Nordic Empathy',
    tagline: 'Slate Indigo & Warm Golden Ochre',
    primaryBlue: '#111827',
    secondaryBlue: '#1F2937',
    deepBlueDark: '#030712',
    accentOrange: '#F59E0B',
    accentWarm: '#FBBF24',
    accentSoft: '#FEF3C7',
  },
];

export const BLUE_NUANCES: ColorNuance[] = [
  {
    name: 'Abyssal Void',
    hex: '#07101B',
    role: 'Dark Canvas & Deepest Shadow',
    contrastOnDark: '1.2:1',
    contrastOnLight: '16.8:1',
    description: 'Grounding base tone representing software infrastructure depth.',
  },
  {
    name: 'Midnight Navy',
    hex: '#0B192C',
    role: 'Primary Brand Blue',
    contrastOnDark: '2.1:1',
    contrastOnLight: '14.5:1',
    description: 'The signature deep intellectual blue for typography and primary symbols.',
  },
  {
    name: 'Oceanic Slate',
    hex: '#1E3E62',
    role: 'Secondary Geometric Strata',
    contrastOnDark: '3.8:1',
    contrastOnLight: '8.4:1',
    description: 'Mid-depth blue for code brackets and structural elements.',
  },
  {
    name: 'Atmospheric Azure',
    hex: '#3B82F6',
    role: 'Technical Highlight',
    contrastOnDark: '6.5:1',
    contrastOnLight: '3.9:1',
    description: 'Vibrant technical accent for interface highlights and indicators.',
  },
];

export const ORANGE_NUANCES: ColorNuance[] = [
  {
    name: 'Solar Flare',
    hex: '#EA580C',
    role: 'Empathic Core & Strong Anchor',
    contrastOnDark: '5.2:1',
    contrastOnLight: '3.8:1',
    description: 'High-energy, focused orange representing human drive and intentionality.',
  },
  {
    name: 'Radiant Tangerine',
    hex: '#F97316',
    role: 'Primary Brand Orange Accent',
    contrastOnDark: '7.1:1',
    contrastOnLight: '3.1:1',
    description: 'The defining warm spark representing developer joy, collaboration, and social warmth.',
  },
  {
    name: 'Ember Glow',
    hex: '#FB923C',
    role: 'Human Nodes & Highlights',
    contrastOnDark: '9.4:1',
    contrastOnLight: '2.2:1',
    description: 'Luminous soft orange for community connections and gentle gradient transitions.',
  },
  {
    name: 'Warm Ochre Peach',
    hex: '#FFEDD5',
    role: 'Subtle Empathic Tint / Pill Fill',
    contrastOnDark: '15.2:1',
    contrastOnLight: '1.2:1',
    description: 'Ultra-soft warm tint for badges, tags, and subtle backdrop glows.',
  },
];

export const LAB_MISSION = {
  name: 'SEResearch Lab',
  fullTitle: 'Software Engineering Research Laboratory',
  coreFocus: 'Exploring the Human and Social Aspects of Software Engineering',
  taglines: [
    'Human & Social Aspects of Software Engineering',
    'Human-Centered Software Systems & Social Dynamics',
    'Decoding the Human Heartbeat Behind Clean Architecture',
  ],
  pillars: [
    {
      id: 'devex',
      title: 'Developer Experience (DevEx)',
      short: 'Flow State & Friction Elimination',
      desc: 'Measuring and enhancing cognitive load, developer tooling velocity, psychological safety, and day-to-day creative joy.',
      icon: 'HeartHandshake',
    },
    {
      id: 'social-dynamics',
      title: 'Social & Team Dimensions',
      short: 'Interpersonal Resonance & Culture',
      desc: 'Investigating communication patterns, code review dynamics, knowledge sharing, onboarding empathy, and remote collaboration.',
      icon: 'Users',
    },
    {
      id: 'socio-technical',
      title: 'Socio-Technical Systems',
      short: 'Conway’s Law & Ecosystem Health',
      desc: 'How organizational architecture shapes code architecture, and how software structures reciprocally shape human behavior.',
      icon: 'Network',
    },
    {
      id: 'wellbeing',
      title: 'Cognitive Well-being',
      short: 'Burnout Prevention & Flourishing',
      desc: 'Advancing research on developer mental health, focus preservation, asynchronous workflows, and sustainable engineering careers.',
      icon: 'Sparkles',
    },
  ],
};
