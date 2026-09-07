/**
 * Zip Exporter for SEResearch Lab Assets
 * Packages all 4 lockup formats across all color nuances into a clean .zip download.
 */

import JSZip from 'jszip';
import {
  ALL_COLOR_NUANCES,
  LockupType,
  getLockupSvg,
  svgStringToPngDataUrl,
} from './logoGenerators';

export interface ExportProgressCallback {
  (current: number, total: number, message: string): void;
}

/**
 * Downloads a ZIP archive of all variants for a specific lockup format
 */
export async function downloadLockupZip(
  lockup: LockupType,
  onProgress?: ExportProgressCallback
): Promise<void> {
  const zip = new JSZip();
  const folderName = `SEResearch-Lab-${lockup}-lockups`;
  const folder = zip.folder(folderName);
  if (!folder) return;

  const total = ALL_COLOR_NUANCES.length * 2;
  let count = 0;

  for (const nuance of ALL_COLOR_NUANCES) {
    // 1. Vector SVG
    const svgStr = getLockupSvg(lockup, nuance, { includeBackground: false });
    const svgBgStr = getLockupSvg(lockup, nuance, { includeBackground: true });
    
    folder.file(`${lockup}-${nuance.id}-transparent.svg`, svgStr);
    folder.file(`${lockup}-${nuance.id}-with-bg.svg`, svgBgStr);
    count++;
    if (onProgress) {
      onProgress(count, total, `Generating SVG for ${nuance.name}...`);
    }

    // 2. High-Res PNG (2048px)
    let pngWidth = 2048;
    let pngHeight = 2048;
    if (lockup === 'horizontal') {
      pngWidth = 2400;
      pngHeight = 660;
    } else if (lockup === 'stacked') {
      pngWidth = 1800;
      pngHeight = 1260;
    }

    const pngDataUrl = await svgStringToPngDataUrl(svgBgStr, pngWidth, pngHeight, nuance.bgHex);
    const base64Data = pngDataUrl.replace(/^data:image\/png;base64,/, '');
    folder.file(`${lockup}-${nuance.id}-2k.png`, base64Data, { base64: true });
    count++;
    if (onProgress) {
      onProgress(count, total, `Rendering 2K PNG for ${nuance.name}...`);
    }
  }

  // Add Readme
  folder.file(
    'README.txt',
    `SEResearch Lab Brand Assets\nLockup: ${lockup.toUpperCase()}\nIdentity: Option 04 (Human Logic & Pulse Wave)\nExplores Human and Social Aspects of Software Engineering.\nContains SVG vectors and 2048px PNG rasters for all color nuances.`
  );

  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SEResearch-Lab-${lockup}-All-Nuances.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Downloads a Complete Brand Kit ZIP with all 4 lockups in all nuances
 */
export async function downloadCompleteBrandKitZip(
  onProgress?: ExportProgressCallback
): Promise<void> {
  const zip = new JSZip();
  const root = zip.folder('SEResearch-Lab-Complete-Brand-Kit');
  if (!root) return;

  const lockups: LockupType[] = ['mark', 'horizontal', 'stacked', 'badge'];
  const total = lockups.length * ALL_COLOR_NUANCES.length * 2;
  let count = 0;

  for (const lockup of lockups) {
    const lockupFolder = root.folder(lockup);
    if (!lockupFolder) continue;

    for (const nuance of ALL_COLOR_NUANCES) {
      const svgStr = getLockupSvg(lockup, nuance, { includeBackground: false });
      const svgBgStr = getLockupSvg(lockup, nuance, { includeBackground: true });

      lockupFolder.file(`${lockup}-${nuance.id}-transparent.svg`, svgStr);
      lockupFolder.file(`${lockup}-${nuance.id}-canvas.svg`, svgBgStr);
      count++;

      let pngWidth = 2048;
      let pngHeight = 2048;
      if (lockup === 'horizontal') {
        pngWidth = 2400;
        pngHeight = 660;
      } else if (lockup === 'stacked') {
        pngWidth = 1800;
        pngHeight = 1260;
      }

      const pngDataUrl = await svgStringToPngDataUrl(svgBgStr, pngWidth, pngHeight, nuance.bgHex);
      const base64Data = pngDataUrl.replace(/^data:image\/png;base64,/, '');
      lockupFolder.file(`${lockup}-${nuance.id}-2k.png`, base64Data, { base64: true });
      count++;

      if (onProgress) {
        onProgress(count, total, `Packaging ${lockup.toUpperCase()} - ${nuance.name}...`);
      }
    }
  }

  // Master Documentation
  root.file(
    'BRAND_GUIDELINES_SUMMARY.txt',
    `SERESEARCH LAB (Software Engineering Research Laboratory)
===========================================================
Official Identity: Option 04 "Human Logic & Pulse Wave"
Core Mission: Exploring the Human and Social Aspects of Software Engineering

DIRECTORY STRUCTURE:
/mark/        -> Mark Symbol Only (< > brackets with radiant empathy pulse wave)
/horizontal/  -> Horizontal Lockup (Mark + SEResearch Lab + Tagline)
/stacked/     -> Stacked Lockup (Centered Mark + Brand Title + Subtitle)
/badge/       -> Lab Emblem / Academic Crest (Circular seal for conferences & certificates)

COLOR PALETTES:
- Primary Midnight Navy: #0B192C (Intellectual structure, compiler depth)
- Radiant Tangerine:    #F97316 (Human empathy, collaboration spark)
- Ember Warmth:         #FB923C (Connecting social nodes)
- Oceanic Slate:        #1E3E62 (Code bracket geometry)

USABILITY:
- Vector SVGs are scalable to any billboard or paper size without degradation.
- 2K PNG rasters are pre-rendered with optimal color gamut for web and slide decks.
- Always maintain minimum clearspace equal to the height of the empathy pulse node.
`
  );

  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'SEResearch-Lab-Complete-Brand-Kit-All-Nuances.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
