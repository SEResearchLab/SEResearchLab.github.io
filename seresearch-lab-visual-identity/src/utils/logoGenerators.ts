/**
 * Logo and Lockup SVG / Image Generators for SEResearch Lab
 * Option 04: Human Logic & Pulse Wave
 * Supports: Mark Only, Horizontal Lockup, Stacked Lockup, Lab Emblem (Crest)
 */

export interface ColorNuanceConfig {
  id: string;
  name: string;
  category: 'primary' | 'monochrome' | 'inverted' | 'special';
  primaryBlue: string;
  secondaryBlue: string;
  accentOrange: string;
  accentWarm: string;
  bgHex: string;
  isLightBg: boolean;
  tagline: string;
}

export const ALL_COLOR_NUANCES: ColorNuanceConfig[] = [
  {
    id: 'classic-dark',
    name: 'Classic Identity (Midnight Dark)',
    category: 'primary',
    primaryBlue: '#0B192C',
    secondaryBlue: '#1E3E62',
    accentOrange: '#F97316',
    accentWarm: '#FB923C',
    bgHex: '#050C1A',
    isLightBg: false,
    tagline: 'Deep Midnight Navy & Radiant Tangerine on Dark Canvas',
  },
  {
    id: 'classic-light',
    name: 'Classic Identity (Clean White)',
    category: 'primary',
    primaryBlue: '#0B192C',
    secondaryBlue: '#1E3E62',
    accentOrange: '#F97316',
    accentWarm: '#FB923C',
    bgHex: '#FFFFFF',
    isLightBg: true,
    tagline: 'Deep Midnight Navy & Radiant Tangerine on Pure White',
  },
  {
    id: 'solar-rigor-dark',
    name: 'Solar Rigor (Oceanic Dark)',
    category: 'primary',
    primaryBlue: '#071224',
    secondaryBlue: '#0F2537',
    accentOrange: '#EA580C',
    accentWarm: '#F97316',
    bgHex: '#040913',
    isLightBg: false,
    tagline: 'Deep Oceanic Ink & Solar Flare on Midnight',
  },
  {
    id: 'cyber-humanist-dark',
    name: 'Cyber Humanist (Cobalt Dark)',
    category: 'primary',
    primaryBlue: '#101B33',
    secondaryBlue: '#203254',
    accentOrange: '#FF6B35',
    accentWarm: '#FFA07A',
    bgHex: '#0A0F1F',
    isLightBg: false,
    tagline: 'Cobalt Night & Sunset Coral on Dark',
  },
  {
    id: 'nordic-empathy-paper',
    name: 'Nordic Empathy (Warm Editorial Paper)',
    category: 'primary',
    primaryBlue: '#111827',
    secondaryBlue: '#1F2937',
    accentOrange: '#F59E0B',
    accentWarm: '#FBBF24',
    bgHex: '#FAF8F5',
    isLightBg: true,
    tagline: 'Slate Indigo & Warm Golden Ochre on Editorial Paper',
  },
  {
    id: 'mono-navy-light',
    name: 'Monochrome Midnight (Formal Print)',
    category: 'monochrome',
    primaryBlue: '#0B192C',
    secondaryBlue: '#0B192C',
    accentOrange: '#0B192C',
    accentWarm: '#1E3E62',
    bgHex: '#FFFFFF',
    isLightBg: true,
    tagline: 'Single Ink Deep Navy for Academic Papers & Formal Print',
  },
  {
    id: 'mono-white-dark',
    name: 'Monochrome Stencil (Pure White)',
    category: 'monochrome',
    primaryBlue: '#FFFFFF',
    secondaryBlue: '#E2E8F0',
    accentOrange: '#FFFFFF',
    accentWarm: '#CBD5E1',
    bgHex: '#050C1A',
    isLightBg: false,
    tagline: 'Pure White Stencil for Video Watermarks & Dark Overlays',
  },
  {
    id: 'inverted-white-orange',
    name: 'Inverted High-Contrast (White & Orange)',
    category: 'inverted',
    primaryBlue: '#FFFFFF',
    secondaryBlue: '#CBD5E1',
    accentOrange: '#F97316',
    accentWarm: '#FB923C',
    bgHex: '#07101B',
    isLightBg: false,
    tagline: 'Crisp White Code Brackets with Radiant Orange Vitality',
  },
  {
    id: 'pure-solar-orange',
    name: 'Pure Solar Amber Accent',
    category: 'special',
    primaryBlue: '#EA580C',
    secondaryBlue: '#C2410C',
    accentOrange: '#F97316',
    accentWarm: '#FED7AA',
    bgHex: '#1A0B02',
    isLightBg: false,
    tagline: 'High-Energy Solar Orange for Conference Badges & Decals',
  },
];

export type LockupType = 'mark' | 'horizontal' | 'stacked' | 'badge';

/**
 * Generates clean standalone SVG string for Mark Only
 */
export function generateMarkSvg(
  nuance: ColorNuanceConfig,
  size: number = 200,
  includeBackground: boolean = false
): string {
  const bracketColor = nuance.isLightBg && nuance.category !== 'monochrome' && nuance.category !== 'inverted'
    ? nuance.primaryBlue
    : (nuance.secondaryBlue || nuance.primaryBlue);

  const gradId = `pulse-grad-${nuance.id}`;
  const bgRect = includeBackground ? `<rect width="200" height="200" rx="16" fill="${nuance.bgHex}" />` : '';

  return `<svg width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradId}" x1="38" y1="100" x2="162" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${nuance.accentOrange}" />
      <stop offset="50%" stop-color="${nuance.accentWarm}" />
      <stop offset="100%" stop-color="${nuance.accentOrange}" />
    </linearGradient>
  </defs>
  ${bgRect}
  <!-- Left Code Bracket < -->
  <path d="M 52 70 L 25 100 L 52 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
  <!-- Right Code Bracket > -->
  <path d="M 148 70 L 175 100 L 148 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
  <!-- Human Vitality Pulse Wave -->
  <path d="M 38 100 L 70 100 L 82 72 L 95 132 L 110 88 L 120 114 L 130 100 L 162 100" stroke="url(#${gradId})" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" />
  <!-- Empathy Peak Node -->
  <circle cx="95" cy="56" r="9" fill="${nuance.accentWarm}" />
  <circle cx="95" cy="56" r="4" fill="${nuance.isLightBg && nuance.category === 'monochrome' ? nuance.primaryBlue : '#FFFFFF'}" />
  <!-- Social Connection Node -->
  <circle cx="110" cy="74" r="6" fill="${nuance.accentOrange}" />
</svg>`;
}

/**
 * Generates clean standalone SVG string for Horizontal Lockup
 */
export function generateHorizontalSvg(
  nuance: ColorNuanceConfig,
  width: number = 800,
  height: number = 220,
  includeBackground: boolean = false
): string {
  const bracketColor = nuance.isLightBg && nuance.category !== 'monochrome' && nuance.category !== 'inverted'
    ? nuance.primaryBlue
    : (nuance.secondaryBlue || nuance.primaryBlue);

  const mainTextColor = nuance.isLightBg ? '#0F172A' : '#FFFFFF';
  const subTextColor = nuance.isLightBg ? '#475569' : '#CBD5E1';
  const gradId = `pulse-grad-h-${nuance.id}`;
  const bgRect = includeBackground ? `<rect width="800" height="220" rx="16" fill="${nuance.bgHex}" />` : '';

  return `<svg width="${width}" height="${height}" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradId}" x1="38" y1="100" x2="162" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${nuance.accentOrange}" />
      <stop offset="50%" stop-color="${nuance.accentWarm}" />
      <stop offset="100%" stop-color="${nuance.accentOrange}" />
    </linearGradient>
  </defs>
  ${bgRect}
  <!-- Mark Symbol (Centered Vertically at Left) -->
  <g transform="translate(40, 10)">
    <!-- Left Bracket -->
    <path d="M 52 70 L 25 100 L 52 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Right Bracket -->
    <path d="M 148 70 L 175 100 L 148 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Vitality Wave -->
    <path d="M 38 100 L 70 100 L 82 72 L 95 132 L 110 88 L 120 114 L 130 100 L 162 100" stroke="url(#${gradId})" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Empathy Node -->
    <circle cx="95" cy="56" r="9" fill="${nuance.accentWarm}" />
    <circle cx="95" cy="56" r="4" fill="${nuance.isLightBg && nuance.category === 'monochrome' ? nuance.primaryBlue : '#FFFFFF'}" />
    <circle cx="110" cy="74" r="6" fill="${nuance.accentOrange}" />
  </g>

  <!-- Typography Lockup -->
  <g transform="translate(260, 0)">
    <!-- Brand Title -->
    <text x="0" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Outfit', 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" letter-spacing="-0.03em">
      <tspan fill="${nuance.accentOrange}">SEResearch</tspan>
      <tspan fill="${mainTextColor}"> Lab</tspan>
    </text>
    <!-- Tagline Subtitle -->
    <text x="2" y="154" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" fill="${subTextColor}" letter-spacing="0.01em">
      Human &amp; Social Aspects of Software Engineering
    </text>
  </g>
</svg>`;
}

/**
 * Generates clean standalone SVG string for Stacked Lockup
 */
export function generateStackedSvg(
  nuance: ColorNuanceConfig,
  width: number = 600,
  height: number = 420,
  includeBackground: boolean = false
): string {
  const bracketColor = nuance.isLightBg && nuance.category !== 'monochrome' && nuance.category !== 'inverted'
    ? nuance.primaryBlue
    : (nuance.secondaryBlue || nuance.primaryBlue);

  const mainTextColor = nuance.isLightBg ? '#0F172A' : '#FFFFFF';
  const subTextColor = nuance.isLightBg ? '#475569' : '#CBD5E1';
  const gradId = `pulse-grad-s-${nuance.id}`;
  const bgRect = includeBackground ? `<rect width="600" height="420" rx="20" fill="${nuance.bgHex}" />` : '';

  return `<svg width="${width}" height="${height}" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradId}" x1="38" y1="100" x2="162" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${nuance.accentOrange}" />
      <stop offset="50%" stop-color="${nuance.accentWarm}" />
      <stop offset="100%" stop-color="${nuance.accentOrange}" />
    </linearGradient>
  </defs>
  ${bgRect}
  <!-- Mark Symbol Centered at Top -->
  <g transform="translate(200, 30)">
    <!-- Left Bracket -->
    <path d="M 52 70 L 25 100 L 52 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Right Bracket -->
    <path d="M 148 70 L 175 100 L 148 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Pulse Line -->
    <path d="M 38 100 L 70 100 L 82 72 L 95 132 L 110 88 L 120 114 L 130 100 L 162 100" stroke="url(#${gradId})" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Empathy Node -->
    <circle cx="95" cy="56" r="9" fill="${nuance.accentWarm}" />
    <circle cx="95" cy="56" r="4" fill="${nuance.isLightBg && nuance.category === 'monochrome' ? nuance.primaryBlue : '#FFFFFF'}" />
    <circle cx="110" cy="74" r="6" fill="${nuance.accentOrange}" />
  </g>

  <!-- Typography Centered -->
  <g transform="translate(300, 290)" text-anchor="middle">
    <!-- Brand Title -->
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Outfit', 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-0.03em">
      <tspan fill="${nuance.accentOrange}">SEResearch</tspan>
      <tspan fill="${mainTextColor}"> Lab</tspan>
    </text>
    <!-- Tagline Subtitle -->
    <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" fill="${subTextColor}" letter-spacing="0.02em">
      Human &amp; Social Aspects of Software Engineering
    </text>
  </g>
</svg>`;
}

/**
 * Generates clean standalone SVG string for Lab Emblem (Academic Seal / Crest)
 */
export function generateEmblemSvg(
  nuance: ColorNuanceConfig,
  size: number = 400,
  includeBackground: boolean = false
): string {
  const bracketColor = nuance.isLightBg && nuance.category !== 'monochrome' && nuance.category !== 'inverted'
    ? nuance.primaryBlue
    : (nuance.secondaryBlue || nuance.primaryBlue);

  const mainTextColor = nuance.isLightBg ? '#0F172A' : '#FFFFFF';
  const ringBorder = nuance.accentOrange;
  const innerBg = nuance.isLightBg ? '#FFFFFF' : '#040913';
  const gradId = `pulse-grad-emb-${nuance.id}`;
  const bgRect = includeBackground ? `<rect width="400" height="400" rx="24" fill="${nuance.bgHex}" />` : '';

  return `<svg width="${size}" height="${size}" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradId}" x1="38" y1="100" x2="162" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${nuance.accentOrange}" />
      <stop offset="50%" stop-color="${nuance.accentWarm}" />
      <stop offset="100%" stop-color="${nuance.accentOrange}" />
    </linearGradient>
    <path id="textCircleTop" d="M 50 200 A 150 150 0 0 1 350 200" fill="none" />
    <path id="textCircleBottom" d="M 350 200 A 150 150 0 0 1 50 200" fill="none" />
  </defs>
  ${bgRect}

  <!-- Outer Ring Badge -->
  <circle cx="200" cy="200" r="185" stroke="${ringBorder}" stroke-width="4" stroke-dasharray="10 6" fill="${innerBg}" />
  <circle cx="200" cy="200" r="172" stroke="${bracketColor}" stroke-width="2" fill="none" />

  <!-- Top Circular Text -->
  <text font-family="-apple-system, BlinkMacSystemFont, 'Outfit', 'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="900" fill="${mainTextColor}" letter-spacing="4">
    <textPath href="#textCircleTop" startOffset="50%" text-anchor="middle">
      SERESEARCH LAB • ACADEMIC
    </textPath>
  </text>

  <!-- Bottom Circular Text -->
  <text font-family="-apple-system, BlinkMacSystemFont, 'JetBrains Mono', 'Segoe UI Mono', monospace" font-size="13" font-weight="800" fill="${nuance.accentOrange}" letter-spacing="3">
    <textPath href="#textCircleBottom" startOffset="50%" text-anchor="middle">
      HUMAN &amp; SOCIAL ASPECTS OF SE
    </textPath>
  </text>

  <!-- Central Mark Symbol -->
  <g transform="translate(100, 100)">
    <!-- Left Bracket -->
    <path d="M 52 70 L 25 100 L 52 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Right Bracket -->
    <path d="M 148 70 L 175 100 L 148 130" stroke="${bracketColor}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Pulse Line -->
    <path d="M 38 100 L 70 100 L 82 72 L 95 132 L 110 88 L 120 114 L 130 100 L 162 100" stroke="url(#${gradId})" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Empathy Node -->
    <circle cx="95" cy="56" r="9" fill="${nuance.accentWarm}" />
    <circle cx="95" cy="56" r="4" fill="${nuance.isLightBg && nuance.category === 'monochrome' ? nuance.primaryBlue : '#FFFFFF'}" />
    <circle cx="110" cy="74" r="6" fill="${nuance.accentOrange}" />
  </g>

  <!-- Small Stars / Separators -->
  <circle cx="48" cy="200" r="4" fill="${nuance.accentOrange}" />
  <circle cx="352" cy="200" r="4" fill="${nuance.accentOrange}" />
</svg>`;
}

/**
 * Master dispatcher to get SVG string for any lockup and nuance
 */
export function getLockupSvg(
  lockup: LockupType,
  nuance: ColorNuanceConfig,
  options: { size?: number; width?: number; height?: number; includeBackground?: boolean } = {}
): string {
  const includeBg = options.includeBackground ?? false;
  switch (lockup) {
    case 'mark':
      return generateMarkSvg(nuance, options.size || 200, includeBg);
    case 'horizontal':
      return generateHorizontalSvg(nuance, options.width || 800, options.height || 220, includeBg);
    case 'stacked':
      return generateStackedSvg(nuance, options.width || 600, options.height || 420, includeBg);
    case 'badge':
      return generateEmblemSvg(nuance, options.size || 400, includeBg);
    default:
      return generateMarkSvg(nuance, 200, includeBg);
  }
}

/**
 * Converts an SVG string to a high-resolution PNG data URL
 */
export async function svgStringToPngDataUrl(
  svgString: string,
  width: number = 2048,
  height: number = 2048,
  backgroundColor?: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas 2D context not available'));
        return;
      }

      if (backgroundColor) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };

    img.src = url;
  });
}
