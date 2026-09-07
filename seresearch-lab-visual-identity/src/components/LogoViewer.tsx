import React, { useState, useRef } from 'react';
import { LogoConcept, LockupMode, CanvasBgTheme, PalettePreset } from '../types';
import { VectorLogo } from './VectorLogos';
import { downloadSvgString, downloadSvgAsPng } from '../utils/exportUtils';
import {
  Download,
  Copy,
  Check,
  Sparkles,
  Layers,
  ZoomIn,
  RefreshCw,
  Eye,
  Sliders,
  Share2,
} from 'lucide-react';

interface LogoViewerProps {
  concept: LogoConcept;
  allConcepts: LogoConcept[];
  onSelectConcept: (c: LogoConcept) => void;
  activePreset: PalettePreset;
  onSelectPreset: (p: PalettePreset) => void;
  customBlue: string;
  customOrange: string;
  onChangeCustomBlue: (hex: string) => void;
  onChangeCustomOrange: (hex: string) => void;
}

export const LogoViewer: React.FC<LogoViewerProps> = ({
  concept,
  allConcepts,
  onSelectConcept,
  activePreset,
  onSelectPreset,
  customBlue,
  customOrange,
  onChangeCustomBlue,
  onChangeCustomOrange,
}) => {
  const [lockupMode, setLockupMode] = useState<LockupMode>('horizontal');
  const [viewType, setViewType] = useState<'vector' | 'rendered'>('vector');
  const [bgTheme, setBgTheme] = useState<CanvasBgTheme>('midnight');
  const [isCopied, setIsCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showSymbolism, setShowSymbolism] = useState(false);
  const [animatedFlow, setAnimatedFlow] = useState(true);

  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Background style helper
  const getCanvasBgClasses = (theme: CanvasBgTheme) => {
    switch (theme) {
      case 'midnight':
        return {
          wrapper: 'bg-[#050C1A] border-[#1E293B] text-[#F1F5F9]',
          grid: 'radial-gradient(circle at 50% 50%, rgba(30, 62, 98, 0.25) 0%, transparent 70%)',
          isDark: true,
        };
      case 'darkSlate':
        return {
          wrapper: 'bg-[#0B1528] border-[#1E293B] text-[#F1F5F9]',
          grid: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 60%)',
          isDark: true,
        };
      case 'lightClean':
        return {
          wrapper: 'bg-[#FFFFFF] border-slate-200 text-slate-900 shadow-sm',
          grid: 'radial-gradient(circle at 50% 50%, rgba(15, 37, 55, 0.05) 0%, transparent 70%)',
          isDark: false,
        };
      case 'warmPaper':
        return {
          wrapper: 'bg-[#FAF8F5] border-amber-100 text-stone-900',
          grid: 'none',
          isDark: false,
        };
      case 'terminal':
        return {
          wrapper: 'bg-[#030814] border-[#1E293B] text-[#F1F5F9] font-mono',
          grid: 'linear-gradient(rgba(249, 115, 22, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.05) 1px, transparent 1px)',
          isDark: true,
        };
    }
  };

  const currentTheme = getCanvasBgClasses(bgTheme);

  const handleCopySvg = async () => {
    if (!svgContainerRef.current) return;
    const svgEl = svgContainerRef.current.querySelector('svg');
    if (svgEl) {
      const serializer = new XMLSerializer();
      const svgStr = serializer.serializeToString(svgEl);
      await navigator.clipboard.writeText(svgStr);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2400);
    }
  };

  const handleDownloadSvg = () => {
    if (!svgContainerRef.current) return;
    const svgEl = svgContainerRef.current.querySelector('svg');
    if (svgEl) {
      const serializer = new XMLSerializer();
      let svgStr = serializer.serializeToString(svgEl);
      if (!svgStr.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        svgStr = svgStr.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      downloadSvgString(svgStr, `seresearch-lab-${concept.id}-${lockupMode}.svg`);
    }
  };

  const handleDownloadPng = async () => {
    if (!svgContainerRef.current) return;
    const svgEl = svgContainerRef.current.querySelector('svg');
    if (!svgEl) return;
    setIsExporting(true);
    try {
      await downloadSvgAsPng(
        svgEl,
        `seresearch-lab-${concept.id}-2048px.png`,
        2048,
        currentTheme.isDark ? '#050C1A' : undefined
      );
    } catch (e) {
      console.error('PNG export failed', e);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Official Identity Badge for Option 04 */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#1E293B]">
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-1 rounded-lg bg-orange-500 text-white font-mono font-black text-xs shadow-md shadow-orange-950/40">
            OPTION 04
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white font-['Outfit'] tracking-tight">
              Human Logic & Pulse Wave
            </h2>
            <p className="text-xs font-medium text-[#94A3B8]">
              Software Engineering Syntax Meeting Human & Social Aspects
            </p>
          </div>
        </div>

        {/* View Mode Toggle: Vector SVG vs AI Concept Artwork */}
        <div className="flex items-center bg-[#0B1528] p-1 rounded-xl border border-[#1E293B] text-xs font-bold">
          <button
            id="btn-view-vector"
            onClick={() => setViewType('vector')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all font-bold ${
              viewType === 'vector'
                ? 'bg-[#152442] text-orange-400 shadow-sm'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scalable Vector (SVG)</span>
          </button>
          <button
            id="btn-view-rendered"
            onClick={() => setViewType('rendered')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all font-bold ${
              viewType === 'rendered'
                ? 'bg-[#152442] text-orange-400 shadow-sm'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>AI Studio High-Res Render</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Stage Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left/Center: Visual Stage */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <div
            className={`relative min-h-[440px] md:min-h-[500px] rounded-2xl border flex flex-col items-center justify-center p-8 transition-all overflow-hidden ${currentTheme.wrapper}`}
            style={{
              backgroundImage: currentTheme.grid,
              backgroundSize: bgTheme === 'terminal' ? '28px 28px' : 'cover',
            }}
          >
            {/* Top Toolbar overlay on stage */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              {/* Lockup variants */}
              {viewType === 'vector' && (
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/15 text-xs font-bold">
                  <button
                    id="lockup-btn-horizontal"
                    onClick={() => setLockupMode('horizontal')}
                    className={`px-3 py-1 rounded-lg transition-colors font-bold ${
                      lockupMode === 'horizontal' ? 'bg-[#F97316] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Horizontal Lockup
                  </button>
                  <button
                    id="lockup-btn-stacked"
                    onClick={() => setLockupMode('stacked')}
                    className={`px-3 py-1 rounded-lg transition-colors font-bold ${
                      lockupMode === 'stacked' ? 'bg-[#F97316] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Stacked
                  </button>
                  <button
                    id="lockup-btn-badge"
                    onClick={() => setLockupMode('badge')}
                    className={`px-3 py-1 rounded-lg transition-colors font-bold ${
                      lockupMode === 'badge' ? 'bg-[#F97316] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Lab Emblem
                  </button>
                  <button
                    id="lockup-btn-icon"
                    onClick={() => setLockupMode('icon')}
                    className={`px-3 py-1 rounded-lg transition-colors font-bold ${
                      lockupMode === 'icon' ? 'bg-[#F97316] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Mark Only
                  </button>
                </div>
              )}

              {/* Background Theme Switcher */}
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1.5 rounded-xl border border-white/15 text-xs ml-auto">
                <span className="text-[#94A3B8] px-1 text-[11px] font-bold uppercase tracking-wider">Canvas:</span>
                <button
                  id="canvas-btn-midnight"
                  title="Midnight Deep Navy"
                  onClick={() => setBgTheme('midnight')}
                  className={`w-6 h-6 rounded-lg bg-[#050C1A] border transition-all ${
                    bgTheme === 'midnight' ? 'border-orange-400 scale-110 shadow-sm shadow-orange-500/50' : 'border-slate-700 opacity-60'
                  }`}
                />
                <button
                  id="canvas-btn-slate"
                  title="Slate Obsidian"
                  onClick={() => setBgTheme('darkSlate')}
                  className={`w-6 h-6 rounded-lg bg-[#0B1528] border transition-all ${
                    bgTheme === 'darkSlate' ? 'border-orange-400 scale-110 shadow-sm shadow-orange-500/50' : 'border-slate-700 opacity-60'
                  }`}
                />
                <button
                  id="canvas-btn-light"
                  title="Pristine Research Light"
                  onClick={() => setBgTheme('lightClean')}
                  className={`w-6 h-6 rounded-lg bg-white border transition-all ${
                    bgTheme === 'lightClean' ? 'border-orange-400 scale-110 shadow-sm shadow-orange-500/50' : 'border-slate-300 opacity-60'
                  }`}
                />
                <button
                  id="canvas-btn-paper"
                  title="Warm Editorial Paper"
                  onClick={() => setBgTheme('warmPaper')}
                  className={`w-6 h-6 rounded-lg bg-[#FAF8F5] border transition-all ${
                    bgTheme === 'warmPaper' ? 'border-orange-400 scale-110 shadow-sm shadow-orange-500/50' : 'border-amber-200 opacity-60'
                  }`}
                />
                <button
                  id="canvas-btn-terminal"
                  title="Terminal Matrix"
                  onClick={() => setBgTheme('terminal')}
                  className={`w-6 h-6 rounded-lg bg-[#030814] border transition-all ${
                    bgTheme === 'terminal' ? 'border-orange-400 scale-110 shadow-sm shadow-orange-500/50' : 'border-slate-800 opacity-60'
                  }`}
                />
              </div>
            </div>

            {/* Display Stage Content */}
            {viewType === 'vector' ? (
              <div ref={svgContainerRef} className="flex items-center justify-center py-10 w-full max-w-2xl">
                {/* 1. Horizontal Lockup */}
                {lockupMode === 'horizontal' && (
                  <div className="flex flex-col sm:flex-row items-center gap-6 text-left p-4">
                    <div className="shrink-0 drop-shadow-xl">
                      <VectorLogo
                        vectorId={concept.vectorId}
                        primaryBlue={customBlue}
                        secondaryBlue="#1E3E62"
                        accentOrange={customOrange}
                        accentWarm="#FB923C"
                        size={135}
                        animated={animatedFlow}
                      />
                    </div>
                    <div className="space-y-1.5 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <span
                          className={`text-3xl sm:text-4xl font-black tracking-tighter font-['Outfit'] ${
                            currentTheme.isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          <span
                            style={{
                              background: `linear-gradient(135deg, ${customOrange}, #F59E0B)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }}
                          >
                            SEResearch
                          </span>{' '}
                          Lab
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-bold tracking-wide ${
                          currentTheme.isDark ? 'text-[#CBD5E1]' : 'text-slate-700'
                        }`}
                      >
                        Human & Social Aspects of Software Engineering
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Stacked Lockup */}
                {lockupMode === 'stacked' && (
                  <div className="flex flex-col items-center text-center space-y-4 p-4">
                    <div className="drop-shadow-2xl">
                      <VectorLogo
                        vectorId={concept.vectorId}
                        primaryBlue={customBlue}
                        secondaryBlue="#1E3E62"
                        accentOrange={customOrange}
                        accentWarm="#FB923C"
                        size={160}
                        animated={animatedFlow}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h2
                        className={`text-3xl sm:text-5xl font-black tracking-tighter font-['Outfit'] ${
                          currentTheme.isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        <span
                          style={{
                            background: `linear-gradient(135deg, ${customOrange}, #F59E0B)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          SEResearch
                        </span>{' '}
                        Lab
                      </h2>
                      <p
                        className={`text-xs sm:text-sm font-bold tracking-wider max-w-md ${
                          currentTheme.isDark ? 'text-[#CBD5E1]' : 'text-slate-700'
                        }`}
                      >
                        Human & Social Aspects of Software Engineering
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. Academic Lab Badge / Crest */}
                {lockupMode === 'badge' && (
                  <div className="flex flex-col items-center justify-center p-6">
                    <div
                      className={`relative w-76 h-76 rounded-full border-2 flex flex-col items-center justify-center p-6 shadow-2xl transition-all ${
                        currentTheme.isDark
                          ? 'bg-[#050C1A]/90 border-orange-500/40 shadow-orange-950/40'
                          : 'bg-white border-orange-500/30 shadow-slate-200'
                      }`}
                    >
                      {/* Outer concentric dashed ring */}
                      <div className="absolute inset-2 rounded-full border border-dashed border-orange-400/25 pointer-events-none" />

                      <div className="pt-2">
                        <VectorLogo
                          vectorId={concept.vectorId}
                          primaryBlue={customBlue}
                          secondaryBlue="#1E3E62"
                          accentOrange={customOrange}
                          accentWarm="#FB923C"
                          size={110}
                        />
                      </div>

                      <div className="text-center pt-2 space-y-0.5">
                        <span
                          className={`block text-base sm:text-lg font-black tracking-widest font-['Outfit'] ${
                            currentTheme.isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          SERESEARCH LAB
                        </span>
                        <span className="block text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase">
                          • HUMAN & SOCIAL ASPECTS •
                        </span>
                        <span
                          className={`block text-[9px] font-bold uppercase tracking-wider ${
                            currentTheme.isDark ? 'text-[#94A3B8]' : 'text-slate-500'
                          }`}
                        >
                          SOFTWARE ENGINEERING RESEARCH
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Icon / Favicon Mark Only */}
                {lockupMode === 'icon' && (
                  <div className="flex flex-col items-center justify-center p-6 space-y-4">
                    <div
                      className={`p-8 rounded-3xl border shadow-2xl transition-all ${
                        currentTheme.isDark
                          ? 'bg-[#0B1528] border-[#1E293B]'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <VectorLogo
                        vectorId={concept.vectorId}
                        primaryBlue={customBlue}
                        secondaryBlue="#1E3E62"
                        accentOrange={customOrange}
                        accentWarm="#FB923C"
                        size={180}
                        animated={animatedFlow}
                      />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        currentTheme.isDark ? 'text-[#94A3B8]' : 'text-slate-500'
                      }`}
                    >
                      Vector Icon Mark • 1:1 Aspect Ratio
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* AI High-Resolution Photorealistic Render */
              <div className="flex flex-col items-center justify-center p-4 max-w-lg w-full">
                {concept.aiImagePath && (
                  <div className="relative group rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl bg-black/40">
                    <img
                      src={concept.aiImagePath}
                      alt={`${concept.name} AI Render`}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover max-h-[400px] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-[#F97316] text-white mb-1 shadow-md">
                          <Sparkles className="w-3.5 h-3.5" /> High-Resolution AI Concept Render
                        </span>
                        <p className="text-white text-xs font-semibold">
                          Exploring deep blue and orange nuances for software engineering and social aspects
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Actions Bar on Canvas */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
              <div className="flex items-center gap-2">
                <button
                  id="btn-toggle-animation"
                  onClick={() => setAnimatedFlow(!animatedFlow)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-bold transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${animatedFlow ? 'animate-spin text-orange-400' : ''}`} />
                  <span>{animatedFlow ? 'Animation Active' : 'Static Flow'}</span>
                </button>

                <button
                  id="btn-toggle-symbolism"
                  onClick={() => setShowSymbolism(!showSymbolism)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-bold transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-orange-400" />
                  <span>Symbolism Breakdown</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-copy-svg-code"
                  onClick={handleCopySvg}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0B1528] hover:bg-[#152442] text-white text-xs font-bold border border-[#1E293B] transition-colors shadow-sm"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-bold">SVG Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-orange-400" />
                      <span>Copy SVG</span>
                    </>
                  )}
                </button>

                <button
                  id="btn-download-svg"
                  onClick={handleDownloadSvg}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-black tracking-tight shadow-lg shadow-orange-500/30 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export SVG</span>
                </button>

                <button
                  id="btn-download-png"
                  onClick={handleDownloadPng}
                  disabled={isExporting}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0B1528] hover:bg-[#152442] text-white text-xs font-bold border border-[#1E293B] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>{isExporting ? 'Exporting...' : 'PNG (2048px)'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Symbolism Breakdown Drawer (if open) */}
          {showSymbolism && (
            <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-4 animate-in fade-in duration-200 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                  <h3 className="text-base font-black text-white font-['Outfit'] tracking-tight">
                    Symbolism & Architectural Rationale: {concept.name}
                  </h3>
                </div>
                <button
                  onClick={() => setShowSymbolism(false)}
                  className="text-xs font-bold text-[#94A3B8] hover:text-white"
                >
                  Close
                </button>
              </div>
              <p className="text-sm font-medium text-[#CBD5E1] leading-relaxed">
                {concept.shortDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {concept.symbolism.map((s, idx) => (
                  <div key={idx} className="bg-[#050C1A] p-4 rounded-xl border border-[#1E293B] space-y-1.5">
                    <span className="text-xs font-mono font-black text-orange-400 uppercase tracking-wide">
                      0{idx + 1}. {s.title}
                    </span>
                    <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Color Nuance & Customizer Control Panel */}
        <div className="lg:col-span-4 space-y-5">
          {/* Active Concept Info Card */}
          <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-5 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-black text-orange-400 uppercase tracking-widest">
                Concept #{concept.conceptNumber}
              </span>
              <div className="flex items-center gap-1.5">
                {concept.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#050C1A] text-[#94A3B8] border border-[#1E293B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-black text-white font-['Outfit'] tracking-tight leading-tight">
              {concept.name}
            </h3>
            <p className="text-xs font-medium text-[#94A3B8] leading-relaxed">
              {concept.subtitle}
            </p>
          </div>

          {/* Nuance Presets */}
          <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-orange-400" />
                <h4 className="text-sm font-black text-white font-['Outfit'] tracking-tight">
                  Deep Blue & Orange Presets
                </h4>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#94A3B8] uppercase">Harmonized</span>
            </div>

            <div className="space-y-2">
              {[
                {
                  id: 'classic-identity',
                  name: 'Classic Identity',
                  tagline: 'Midnight Navy & Radiant Tangerine',
                  blue: '#0B192C',
                  orange: '#F97316',
                },
                {
                  id: 'solar-rigor',
                  name: 'Solar Rigor',
                  tagline: 'Deep Oceanic Ink & Solar Flare',
                  blue: '#071224',
                  orange: '#EA580C',
                },
                {
                  id: 'cyber-humanist',
                  name: 'Cyber Humanist',
                  tagline: 'Cobalt Night & Sunset Coral',
                  blue: '#101B33',
                  orange: '#FF6B35',
                },
                {
                  id: 'nordic-empathy',
                  name: 'Nordic Empathy',
                  tagline: 'Dark Slate & Warm Golden Ochre',
                  blue: '#111827',
                  orange: '#F59E0B',
                },
              ].map((p) => {
                const isSelected = customBlue === p.blue && customOrange === p.orange;
                return (
                  <button
                    key={p.id}
                    id={`preset-${p.id}`}
                    onClick={() => {
                      onChangeCustomBlue(p.blue);
                      onChangeCustomOrange(p.orange);
                    }}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all text-left ${
                      isSelected
                        ? 'bg-[#152442] border-orange-500/80 ring-1 ring-orange-500/40 shadow-md'
                        : 'bg-[#050C1A] border-[#1E293B] hover:bg-[#111F38] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-black text-white tracking-tight">{p.name}</span>
                      <span className="block text-[11px] font-medium text-[#94A3B8]">{p.tagline}</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-2">
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shadow-inner"
                        style={{ backgroundColor: p.blue }}
                        title={`Deep Blue: ${p.blue}`}
                      />
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: p.orange }}
                        title={`Orange: ${p.orange}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Hex Pickers */}
            <div className="pt-2 border-t border-[#1E293B] space-y-3">
              <span className="text-[11px] font-mono font-black text-[#94A3B8] uppercase tracking-widest block">
                Direct Nuance Tuning
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] text-[#CBD5E1] font-bold block">
                    Deep Blue Nuance
                  </label>
                  <div className="flex items-center gap-2 bg-[#050C1A] border border-[#1E293B] rounded-xl p-2">
                    <input
                      type="color"
                      value={customBlue}
                      onChange={(e) => onChangeCustomBlue(e.target.value)}
                      className="w-6 h-6 rounded border-0 cursor-pointer bg-transparent"
                    />
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      {customBlue}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-[#CBD5E1] font-bold block">
                    Orange Nuance
                  </label>
                  <div className="flex items-center gap-2 bg-[#050C1A] border border-[#1E293B] rounded-xl p-2">
                    <input
                      type="color"
                      value={customOrange}
                      onChange={(e) => onChangeCustomOrange(e.target.value)}
                      className="w-6 h-6 rounded border-0 cursor-pointer bg-transparent"
                    />
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      {customOrange}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Clearspace & Scale Specs */}
          <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-5 space-y-3 shadow-xl">
            <h4 className="text-xs font-mono font-black text-[#CBD5E1] uppercase tracking-wider">
              Implementation Specs
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span className="font-medium">Minimum Digital Size:</span>
                <span className="font-mono font-bold text-white">24px × 24px (Favicon)</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span className="font-medium">Clearspace Rule:</span>
                <span className="font-mono font-bold text-white">1/2 Mark Width (X-space)</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span className="font-medium">Primary Font Pairing:</span>
                <span className="font-mono font-bold text-white">Outfit Black + Plus Jakarta</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span className="font-medium">Code Monospace:</span>
                <span className="font-mono font-bold text-white">JetBrains Mono</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
