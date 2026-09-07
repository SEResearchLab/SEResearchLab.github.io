export interface LogoConcept {
  id: string;
  name: string;
  subtitle: string;
  conceptNumber: string;
  shortDescription: string;
  symbolism: {
    title: string;
    description: string;
  }[];
  primaryBlue: string;
  accentOrange: string;
  secondaryBlue: string;
  accentWarm: string;
  vectorId: 'loop' | 'monogram' | 'synapse' | 'pulse';
  aiImagePath?: string;
  tags: string[];
}

export type LockupMode = 'horizontal' | 'stacked' | 'badge' | 'icon';
export type CanvasBgTheme = 'midnight' | 'darkSlate' | 'lightClean' | 'warmPaper' | 'terminal';

export interface ColorNuance {
  name: string;
  hex: string;
  role: string;
  contrastOnDark: string;
  contrastOnLight: string;
  description: string;
}

export interface PalettePreset {
  id: string;
  name: string;
  tagline: string;
  primaryBlue: string;
  secondaryBlue: string;
  deepBlueDark: string;
  accentOrange: string;
  accentWarm: string;
  accentSoft: string;
}
