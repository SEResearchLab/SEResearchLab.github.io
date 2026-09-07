/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LOGO_CONCEPTS, PALETTE_PRESETS, OFFICIAL_CONCEPT } from './data/brandData';
import { LogoConcept, PalettePreset } from './types';
import { LogoViewer } from './components/LogoViewer';
import { PaletteExplorer } from './components/PaletteExplorer';
import { MockupShowcase } from './components/MockupShowcase';
import { BrandNarrative } from './components/BrandNarrative';
import { AssetGenerator } from './components/AssetGenerator';
import { StandaloneExporter } from './components/StandaloneExporter';
import { VectorLogo } from './components/VectorLogos';
import {
  Sparkles,
  Palette,
  Eye,
  BookOpen,
  Download,
  Check,
  Layers,
  Code2,
  Users2,
  Terminal,
  Globe,
  FileCode,
} from 'lucide-react';

export default function App() {
  const [selectedConcept, setSelectedConcept] = useState<LogoConcept>(OFFICIAL_CONCEPT);
  const [activePreset, setActivePreset] = useState<PalettePreset>(PALETTE_PRESETS[0]);
  const [customBlue, setCustomBlue] = useState<string>(PALETTE_PRESETS[0].primaryBlue);
  const [customOrange, setCustomOrange] = useState<string>(PALETTE_PRESETS[0].accentOrange);
  const [activeSection, setActiveSection] = useState<'studio' | 'assets' | 'palette' | 'mockups' | 'standalone' | 'narrative'>('studio');

  const handleApplyColor = (type: 'blue' | 'orange', hex: string) => {
    if (type === 'blue') {
      setCustomBlue(hex);
    } else {
      setCustomOrange(hex);
    }
  };

  return (
    <div className="min-h-screen bg-[#050C1A] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#F97316] selection:text-white">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#050C1A]/95 backdrop-blur-md border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Identity Lockup */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1528] border border-[#1E293B] flex items-center justify-center p-1.5 shadow-md">
              <VectorLogo
                vectorId={selectedConcept.vectorId}
                primaryBlue={customBlue}
                secondaryBlue="#1E3E62"
                accentOrange={customOrange}
                accentWarm="#FB923C"
                size={30}
              />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight font-['Outfit'] text-white flex items-center gap-2">
                SEResearch Lab
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 border border-orange-500/30">
                  Option 04 • Identity
                </span>
              </h1>
              <p className="text-[11px] font-medium text-[#94A3B8] hidden sm:block">
                Human & Social Aspects of Software Engineering
              </p>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <nav className="flex items-center bg-[#0B1528] p-1 rounded-xl border border-[#1E293B] text-xs">
            <button
              id="nav-btn-studio"
              onClick={() => setActiveSection('studio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold tracking-tight ${
                activeSection === 'studio'
                  ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#152442]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mark Studio</span>
            </button>

            <button
              id="nav-btn-assets"
              onClick={() => setActiveSection('assets')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold tracking-tight ${
                activeSection === 'assets'
                  ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#152442]'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Asset Generator</span>
            </button>

            <button
              id="nav-btn-mockups"
              onClick={() => setActiveSection('mockups')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold tracking-tight ${
                activeSection === 'mockups'
                  ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#152442]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Mockups & Slides</span>
            </button>

            <button
              id="nav-btn-palette"
              onClick={() => setActiveSection('palette')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold tracking-tight ${
                activeSection === 'palette'
                  ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#152442]'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Nuance Palette</span>
            </button>

            <button
              id="nav-btn-standalone"
              onClick={() => setActiveSection('standalone')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold tracking-tight ${
                activeSection === 'standalone'
                  ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#152442]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>HTML Webpage</span>
            </button>

            <button
              id="nav-btn-narrative"
              onClick={() => setActiveSection('narrative')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold tracking-tight ${
                activeSection === 'narrative'
                  ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#152442]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Philosophy</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Core Brief Summary Banner */}
        <div className="bg-gradient-to-r from-[#071326] via-[#0B1A33] to-[#102444] rounded-2xl border border-[#1E293B] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                  DESIGN BRIEF MET
                </span>
                <span className="text-xs font-mono font-semibold text-[#94A3B8]">
                  Software Engineering • Human & Social Aspects
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-['Outfit'] tracking-tight">
                A Visual Identity for SEResearch Lab
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-2xl leading-relaxed">
                Exploring the human and social aspects of software engineering with deep blue architectural rigor and warm radiant orange empathy.
              </p>
            </div>

            {/* Quick nuance pills */}
            <div className="flex items-center gap-4 bg-[#050C1A]/90 p-4 rounded-xl border border-[#1E293B] shrink-0 shadow-lg">
              <div className="text-left space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#94A3B8] block uppercase tracking-wider">Deep Blue</span>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-white/30 shadow-inner" style={{ backgroundColor: customBlue }} />
                  <span className="font-mono text-xs font-bold text-white">{customBlue}</span>
                </div>
              </div>
              <div className="w-px h-8 bg-[#1E293B]" />
              <div className="text-left space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#94A3B8] block uppercase tracking-wider">Orange Nuance</span>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-white/30 shadow-inner" style={{ backgroundColor: customOrange }} />
                  <span className="font-mono text-xs font-bold text-orange-400">{customOrange}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 1: Interactive Logo Studio */}
        {activeSection === 'studio' && (
          <LogoViewer
            concept={selectedConcept}
            allConcepts={LOGO_CONCEPTS}
            onSelectConcept={setSelectedConcept}
            activePreset={activePreset}
            onSelectPreset={setActivePreset}
            customBlue={customBlue}
            customOrange={customOrange}
            onChangeCustomBlue={setCustomBlue}
            onChangeCustomOrange={setCustomOrange}
          />
        )}

        {/* Tab 2: Color Nuance Asset Generator */}
        {activeSection === 'assets' && <AssetGenerator />}

        {/* Tab 3: Real-World Mockups & Conference Slides */}
        {activeSection === 'mockups' && (
          <MockupShowcase
            concept={selectedConcept}
            activeBlue={customBlue}
            activeOrange={customOrange}
          />
        )}

        {/* Tab 4: Nuance Palette System */}
        {activeSection === 'palette' && (
          <PaletteExplorer
            onApplyColor={handleApplyColor}
            activeBlue={customBlue}
            activeOrange={customOrange}
          />
        )}

        {/* Tab 5: Standalone HTML/CSS/JS Page Exporter */}
        {activeSection === 'standalone' && <StandaloneExporter />}

        {/* Tab 6: Brand Philosophy & Research Pillars */}
        {activeSection === 'narrative' && <BrandNarrative />}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#1E293B] bg-[#030812] py-8 text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-sm shadow-orange-500/50" />
            <span className="font-bold text-white font-['Outfit']">SEResearch Lab</span>
            <span className="text-[#94A3B8] font-medium">— Human & Social Aspects of Software Engineering</span>
          </div>
          <div className="flex items-center gap-4 text-[#94A3B8]">
            <span className="font-medium">Software Engineering Research</span>
            <span className="text-[#334155]">•</span>
            <span className="font-medium">Deep Blue & Orange Nuances</span>
            <span className="text-[#334155]">•</span>
            <span className="font-mono font-bold text-white">SVG & High-Res PNG Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
