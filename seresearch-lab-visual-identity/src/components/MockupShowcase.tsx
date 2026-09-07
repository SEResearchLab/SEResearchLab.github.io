import React, { useState } from 'react';
import { LogoConcept } from '../types';
import { VectorLogo } from './VectorLogos';
import {
  exportNuancePresentationPptx,
  exportMasterPresentationPptx,
  SLIDE_NUANCE_THEMES,
} from '../utils/pptxExport';
import {
  FileText,
  Laptop,
  Github,
  Presentation,
  Coffee,
  CheckCircle2,
  ExternalLink,
  Star,
  GitFork,
  BookOpen,
  Download,
  Sparkles,
  HelpCircle,
  FileSpreadsheet,
  Check,
  X,
} from 'lucide-react';

interface MockupShowcaseProps {
  concept: LogoConcept;
  activeBlue: string;
  activeOrange: string;
}

export const MockupShowcase: React.FC<MockupShowcaseProps> = ({
  concept,
  activeBlue,
  activeOrange,
}) => {
  const [activeTab, setActiveTab] = useState<
    'paper' | 'laptop' | 'github' | 'keynote' | 'swag'
  >('keynote');

  const [slideBgTheme, setSlideBgTheme] = useState<'midnight' | 'white' | 'slate' | 'paper' | 'solar'>('midnight');
  const [slideViewMode, setSlideViewMode] = useState<'single' | 'grid'>('single');
  const [exportingTheme, setExportingTheme] = useState<string | null>(null);
  const [showGoogleSlidesGuide, setShowGoogleSlidesGuide] = useState<boolean>(false);

  const themeMapToExportId: Record<string, string> = {
    midnight: 'midnight-navy',
    white: 'academic-white',
    slate: 'dark-slate',
    paper: 'editorial-paper',
    solar: 'solar-amber',
  };

  const handleDownloadActivePptx = async () => {
    const exportId = themeMapToExportId[slideBgTheme] || 'midnight-navy';
    setExportingTheme(exportId);
    try {
      await exportNuancePresentationPptx(exportId);
    } catch (err) {
      console.error('Failed to export PPTX', err);
    } finally {
      setExportingTheme(null);
    }
  };

  const handleDownloadMasterPptx = async () => {
    setExportingTheme('master');
    try {
      await exportMasterPresentationPptx();
    } catch (err) {
      console.error('Failed to export Master PPTX', err);
    } finally {
      setExportingTheme(null);
    }
  };

  const handleDownloadSpecificNuancePptx = async (exportId: string) => {
    setExportingTheme(exportId);
    try {
      await exportNuancePresentationPptx(exportId);
    } catch (err) {
      console.error('Failed to export PPTX', err);
    } finally {
      setExportingTheme(null);
    }
  };

  const slideThemes = [
    {
      id: 'midnight',
      label: 'Midnight Navy',
      description: 'Default dark conference projection with radiant amber glow',
      bgColor: activeBlue || '#071224',
      isDark: true,
      textHeading: 'text-white',
      textBody: 'text-[#CBD5E1]',
      textMuted: 'text-[#94A3B8]',
      borderColor: 'border-orange-500/30',
      badgeBg: 'bg-white/10 text-white border-white/20',
      accentColor: activeOrange || '#F97316',
      markBlue: activeBlue || '#0B192C',
      markOrange: activeOrange || '#F97316',
    },
    {
      id: 'white',
      label: 'Crisp Academic White',
      description: 'High-contrast light slide for well-lit auditoriums and lecture halls',
      bgColor: '#FFFFFF',
      isDark: false,
      textHeading: 'text-slate-900',
      textBody: 'text-slate-700',
      textMuted: 'text-slate-500',
      borderColor: 'border-slate-300 shadow-2xl',
      badgeBg: 'bg-slate-100 text-slate-800 border-slate-300',
      accentColor: '#EA580C',
      markBlue: '#0B192C',
      markOrange: '#EA580C',
    },
    {
      id: 'slate',
      label: 'Dark Slate Tech',
      description: 'Modern developer dark mode palette with cool indigo undertones',
      bgColor: '#0F172A',
      isDark: true,
      textHeading: 'text-white',
      textBody: 'text-slate-300',
      textMuted: 'text-slate-400',
      borderColor: 'border-slate-700 shadow-2xl',
      badgeBg: 'bg-slate-800 text-slate-200 border-slate-700',
      accentColor: '#F97316',
      markBlue: '#1E293B',
      markOrange: '#F97316',
    },
    {
      id: 'paper',
      label: 'Warm Editorial Paper',
      description: 'Refined warm cream paper aesthetic for academic seminars',
      bgColor: '#FAF8F5',
      isDark: false,
      textHeading: 'text-[#1C1917]',
      textBody: 'text-[#44403C]',
      textMuted: 'text-[#78716C]',
      borderColor: 'border-[#E7E5E4] shadow-xl',
      badgeBg: 'bg-[#F5F5F4] text-[#292524] border-[#D6D3D1]',
      accentColor: '#D97706',
      markBlue: '#1C1917',
      markOrange: '#D97706',
    },
    {
      id: 'solar',
      label: 'Solar Amber Gradient',
      description: 'High-energy gradient title slide for keynote opening keynotes',
      bgColor: 'linear-gradient(135deg, #1C0A00 0%, #2E1204 100%)',
      isDark: true,
      textHeading: 'text-white',
      textBody: 'text-orange-100',
      textMuted: 'text-orange-300',
      borderColor: 'border-orange-500/50 shadow-orange-950/40',
      badgeBg: 'bg-orange-500/20 text-orange-200 border-orange-400/30',
      accentColor: '#FB923C',
      markBlue: '#2E1204',
      markOrange: '#F97316',
    },
  ];

  const currentSlideTheme = slideThemes.find((t) => t.id === slideBgTheme) || slideThemes[0];

  const renderSingleSlide = (theme: typeof slideThemes[0], isCompact: boolean = false) => (
    <div
      className={`aspect-video w-full rounded-2xl relative flex flex-col justify-between overflow-hidden shadow-2xl border transition-all ${
        theme.borderColor
      } ${isCompact ? 'p-5 sm:p-6 text-xs' : 'p-8 sm:p-12 max-w-4xl mx-auto'}`}
      style={{
        background: theme.bgColor,
      }}
    >
      {/* Background ambient glow */}
      {theme.isDark && (
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: `${theme.accentColor}18` }}
        />
      )}

      {/* Slide Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <VectorLogo
            vectorId={concept.vectorId}
            primaryBlue={theme.markBlue}
            secondaryBlue="#1E3E62"
            accentOrange={theme.markOrange}
            accentWarm="#FB923C"
            size={isCompact ? 34 : 48}
          />
          <div>
            <span className={`font-['Outfit'] font-black tracking-tight ${theme.textHeading} ${isCompact ? 'text-sm' : 'text-lg'}`}>
              SEResearch Lab
            </span>
          </div>
        </div>
        <span className={`font-mono font-bold px-3 py-1 rounded-full border ${theme.badgeBg} ${isCompact ? 'text-[9px]' : 'text-xs'}`}>
          ICSE 2026 Keynote Address
        </span>
      </div>

      {/* Main Keynote Content */}
      <div className={`z-10 ${isCompact ? 'py-2 space-y-1.5' : 'py-6 space-y-3'}`}>
        <span
          className={`font-mono font-black tracking-widest uppercase block ${isCompact ? 'text-[10px]' : 'text-xs'}`}
          style={{ color: theme.accentColor }}
        >
          Human & Social Aspects • Socio-Technical Dynamics
        </span>
        <h2
          className={`font-black font-['Outfit'] tracking-tight leading-tight ${theme.textHeading} ${
            isCompact ? 'text-lg sm:text-xl' : 'text-2xl sm:text-4xl max-w-2xl'
          }`}
        >
          Why Great Code Is Born From Empathy, Not Just Compilers
        </h2>
        <p className={`font-medium max-w-lg ${theme.textBody} ${isCompact ? 'text-[11px] line-clamp-2' : 'text-sm leading-relaxed'}`}>
          Unpacking 5 years of laboratory research on developer cognitive flow, psychological safety, and social collaboration in software systems.
        </p>
      </div>

      {/* Slide Footer */}
      <div
        className={`flex items-center justify-between border-t z-10 font-bold ${
          theme.isDark ? 'border-white/10' : 'border-slate-200'
        } ${theme.textMuted} ${isCompact ? 'pt-2 text-[10px]' : 'pt-4 text-xs'}`}
      >
        <span>Prof. Dr. Alex Mercer, Director</span>
        <span className={`font-mono ${theme.isDark ? 'text-white' : 'text-slate-900'}`}>seresearchlab.org</span>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-6">
      {/* Mockup context switcher tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1E293B] pb-3">
        <button
          id="tab-mockup-paper"
          onClick={() => setActiveTab('paper')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs transition-all ${
            activeTab === 'paper'
              ? 'bg-[#F97316] text-white font-black shadow-lg shadow-orange-950/40'
              : 'bg-[#0B1528] text-[#94A3B8] hover:text-white border border-[#1E293B] font-bold'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>ACM/IEEE Paper Header</span>
        </button>

        <button
          id="tab-mockup-laptop"
          onClick={() => setActiveTab('laptop')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs transition-all ${
            activeTab === 'laptop'
              ? 'bg-[#F97316] text-white font-black shadow-lg shadow-orange-950/40'
              : 'bg-[#0B1528] text-[#94A3B8] hover:text-white border border-[#1E293B] font-bold'
          }`}
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>Developer Laptop Sticker</span>
        </button>

        <button
          id="tab-mockup-github"
          onClick={() => setActiveTab('github')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs transition-all ${
            activeTab === 'github'
              ? 'bg-[#F97316] text-white font-black shadow-lg shadow-orange-950/40'
              : 'bg-[#0B1528] text-[#94A3B8] hover:text-white border border-[#1E293B] font-bold'
          }`}
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub README & Org Profile</span>
        </button>

        <button
          id="tab-mockup-keynote"
          onClick={() => setActiveTab('keynote')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs transition-all ${
            activeTab === 'keynote'
              ? 'bg-[#F97316] text-white font-black shadow-lg shadow-orange-950/40'
              : 'bg-[#0B1528] text-[#94A3B8] hover:text-white border border-[#1E293B] font-bold'
          }`}
        >
          <Presentation className="w-3.5 h-3.5" />
          <span>Conference Keynote Slide</span>
        </button>

        <button
          id="tab-mockup-swag"
          onClick={() => setActiveTab('swag')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs transition-all ${
            activeTab === 'swag'
              ? 'bg-[#F97316] text-white font-black shadow-lg shadow-orange-950/40'
              : 'bg-[#0B1528] text-[#94A3B8] hover:text-white border border-[#1E293B] font-bold'
          }`}
        >
          <Coffee className="w-3.5 h-3.5" />
          <span>Lab Swag & Apparel</span>
        </button>
      </div>

      {/* Main Mockup Viewport */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 overflow-hidden shadow-xl">
        {/* 1. Academic Paper Header Mockup */}
        {activeTab === 'paper' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#94A3B8] border-b border-[#1E293B] pb-2 font-bold">
              <span className="font-mono">Context: IEEE Transactions on Software Engineering (TSE) / ICSE 2026</span>
              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> High Print Resolution Ready
              </span>
            </div>

            <div className="bg-white text-slate-900 rounded-xl p-8 shadow-2xl border border-slate-200 font-serif max-w-4xl mx-auto space-y-6">
              {/* Top Paper Header with Lab Logo */}
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
                <div className="flex items-center gap-4">
                  <VectorLogo
                    vectorId={concept.vectorId}
                    primaryBlue={activeBlue}
                    secondaryBlue="#1E3E62"
                    accentOrange={activeOrange}
                    accentWarm="#FB923C"
                    size={64}
                  />
                  <div>
                    <span className="block font-sans font-black text-xl tracking-tight text-slate-900">
                      SEResearch Lab
                    </span>
                    <span className="block font-sans text-xs text-slate-600 font-bold">
                      Laboratory for Human & Social Aspects of Software Engineering
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs font-sans text-slate-600 space-y-0.5 font-medium">
                  <span className="block font-black text-slate-900">TECHNICAL REPORT SER-2026-04</span>
                  <span className="block">Human & Social Aspects Series</span>
                  <span className="block font-mono text-[10px] font-bold">DOI: 10.1145/seresearch.2026.089</span>
                </div>
              </div>

              {/* Research Title */}
              <div className="text-center space-y-2 py-4">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-snug font-sans">
                  Measuring the Human Factor: Socio-Technical Friction, Flow States, and Team Resonance in Modern Engineering
                </h2>
                <p className="text-sm font-sans text-slate-700 italic font-medium">
                  Elena Rostova, Marcus Thorne, David Lin, and Sofia Patel
                </p>
                <p className="text-xs font-sans text-slate-500 font-bold">
                  SEResearch Lab • Department of Software Engineering & Behavioral Computing
                </p>
              </div>

              {/* Abstract */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-xs font-sans space-y-2 leading-relaxed text-slate-700 font-medium">
                <span className="font-black text-slate-900 uppercase tracking-widest text-[11px] block">
                  Abstract
                </span>
                <p>
                  While software engineering has historically prioritized compiler optimization, algorithmic complexity, and compute efficiency, modern empirical evidence demonstrates that developer experience, social cohesion, and psychological safety account for over 68% of systematic team variance. This study formalizes the socio-technical loop model developed at SEResearch Lab, examining telemetric data from 1,200 software engineers across diverse organizational strata.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. Laptop Sticker Mockup */}
        {activeTab === 'laptop' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-[#94A3B8] border-b border-[#1E293B] pb-2 font-bold">
              <span className="font-mono">Context: Die-Cut Matte Vinyl Swag on Aluminum Workspace</span>
              <span className="text-orange-400 font-mono font-bold">Die-Cut UV Resistant Vinyl</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Generated AI Photo Mockup */}
              <div className="relative rounded-xl overflow-hidden border border-[#1E293B] shadow-2xl group">
                <img
                  src="/src/assets/images/seresearch_mockup_laptop_1788730134709.jpg"
                  alt="Laptop sticker photo mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[360px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs text-white font-bold">
                    Realistic photo render of die-cut vinyl sticker on MacBook aluminum chassis
                  </p>
                </div>
              </div>

              {/* Vector Sticker Die-Cut Preview */}
              <div className="bg-[#050C1A] rounded-xl p-8 border border-[#1E293B] flex flex-col items-center justify-center space-y-6 text-center shadow-lg">
                <div className="relative group">
                  {/* Die-cut white border outline simulation */}
                  <div className="p-4 rounded-3xl bg-white shadow-2xl border-4 border-white transform transition-transform group-hover:scale-105 duration-300">
                    <div className="p-4 rounded-2xl bg-[#050C1A] flex flex-col items-center justify-center space-y-2">
                      <VectorLogo
                        vectorId={concept.vectorId}
                        primaryBlue={activeBlue}
                        secondaryBlue="#1E3E62"
                        accentOrange={activeOrange}
                        accentWarm="#FB923C"
                        size={120}
                      />
                      <span className="text-xs font-black text-white tracking-tight font-['Outfit']">
                        SEResearch Lab
                      </span>
                      <span className="text-[9px] font-mono text-orange-400 font-black uppercase tracking-wider">
                        Human & Social SE
                      </span>
                    </div>
                  </div>
                  {/* Vinyl peel drop shadow */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-br-3xl pointer-events-none" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-black text-white font-['Outfit'] tracking-tight">
                    Die-Cut Vinyl Spec
                  </h4>
                  <p className="text-xs text-[#94A3B8] font-medium max-w-xs">
                    3" × 3" scratch-resistant matte finish with deep midnight blue ink and vibrant solar orange gradient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. GitHub README & DevEx Profile */}
        {activeTab === 'github' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#94A3B8] border-b border-[#1E293B] pb-2 font-bold">
              <span className="font-mono">Context: GitHub Organization & Open Source Tooling</span>
              <span className="font-mono text-white font-bold">github.com/seresearch-lab</span>
            </div>

            <div className="bg-[#050C1A] text-slate-200 rounded-xl p-6 border border-[#1E293B] max-w-4xl mx-auto space-y-6 font-sans shadow-lg">
              {/* GitHub Org Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0B1528] border border-[#1E293B] flex items-center justify-center p-2 shadow-inner">
                    <VectorLogo
                      vectorId={concept.vectorId}
                      primaryBlue={activeBlue}
                      secondaryBlue="#1E3E62"
                      accentOrange={activeOrange}
                      accentWarm="#FB923C"
                      size={44}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2 tracking-tight">
                      SEResearch Lab <span className="text-xs px-2 py-0.5 rounded-full bg-[#152442] text-blue-300 font-bold border border-blue-800/40">Public</span>
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-medium">
                      Researching human and social aspects of software engineering and collaboration.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-[#0B1528] hover:bg-[#152442] text-white font-bold border border-[#1E293B] flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400" /> 1.8k
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#0B1528] hover:bg-[#152442] text-white font-bold border border-[#1E293B] flex items-center gap-1.5">
                    <GitFork className="w-3.5 h-3.5" /> 340
                  </span>
                </div>
              </div>

              {/* README Banner */}
              <div
                className="rounded-xl p-6 text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border shadow-xl"
                style={{
                  backgroundColor: activeBlue,
                  borderColor: `${activeOrange}40`,
                }}
              >
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-black tracking-wide" style={{ backgroundColor: `${activeOrange}30`, color: activeOrange }}>
                    Software Engineering Research Group
                  </div>
                  <h4 className="text-2xl font-black font-['Outfit'] tracking-tight">
                    Human & Social Aspects Toolkit
                  </h4>
                  <p className="text-xs text-[#CBD5E1] font-medium max-w-md">
                    Open-source telemetry, cognitive load analyzers, and team resonance survey engines.
                  </p>
                </div>

                <div className="shrink-0 p-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                  <VectorLogo
                    vectorId={concept.vectorId}
                    primaryBlue={activeBlue}
                    secondaryBlue="#1E3E62"
                    accentOrange={activeOrange}
                    accentWarm="#FB923C"
                    size={90}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Conference Keynote Slide */}
        {activeTab === 'keynote' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E293B] pb-3">
              <div>
                <span className="font-mono text-xs text-[#94A3B8] block">
                  Context: 16:9 Keynote Slide for International Conference on Software Engineering (ICSE)
                </span>
                <span className="text-xs text-orange-400 font-bold">
                  Active Canvas Theme: {currentSlideTheme.label}
                </span>
              </div>

              {/* Controls: Single vs Grid & Background Theme Selector */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center bg-[#050C1A] p-1 rounded-xl border border-[#1E293B] text-xs">
                  <button
                    onClick={() => setSlideViewMode('single')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      slideViewMode === 'single' ? 'bg-orange-500 text-white shadow-sm' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Focus Slide
                  </button>
                  <button
                    onClick={() => setSlideViewMode('grid')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      slideViewMode === 'grid' ? 'bg-orange-500 text-white shadow-sm' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Compare All Backgrounds
                  </button>
                </div>
              </div>
            </div>

            {/* Background Color Switcher Pills (when in single view) */}
            {slideViewMode === 'single' && (
              <div className="flex flex-wrap items-center gap-2 bg-[#0B1528] p-3 rounded-2xl border border-[#1E293B]">
                <span className="text-xs font-mono font-bold text-[#94A3B8] uppercase mr-1">Canvas Backgrounds:</span>
                {slideThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSlideBgTheme(t.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      slideBgTheme === t.id
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-950/40'
                        : 'bg-[#050C1A] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner"
                      style={{ background: t.bgColor }}
                    />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Slide View Container */}
            {slideViewMode === 'single' ? (
              <div className="space-y-3">
                {renderSingleSlide(currentSlideTheme, false)}
                <p className="text-center text-xs font-medium text-[#94A3B8]">
                  {currentSlideTheme.description}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="font-mono">Side-by-side comparison across 5 projection canvas environments</span>
                  <span className="font-bold text-white">5 Canvas Themes</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {slideThemes.map((t) => (
                    <div key={t.id} className="space-y-2">
                      <div className="flex items-center justify-between text-xs px-1 font-bold">
                        <span className="text-white font-['Outfit']">{t.label}</span>
                        <span className="text-[#94A3B8] font-mono text-[11px]">{t.isDark ? 'Dark Projection' : 'Light Projection'}</span>
                      </div>
                      {renderSingleSlide(t, true)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide Presentation Download Suite (.PPTX & Google Slides for All Nuances) */}
            <div className="bg-[#050C1A] border border-[#1E293B] rounded-2xl p-6 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-black">
                      PowerPoint (.PPTX) &amp; Google Slides Ready
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white font-['Outfit'] tracking-tight">
                    Download Keynote Presentation Decks
                  </h3>
                  <p className="text-xs text-[#CBD5E1] max-w-xl leading-relaxed">
                    Download authentic PowerPoint presentations containing structured Title, Research Pillars, Empirical Findings, and Closing slides with Option 04 branding for every nuance. 100% compatible with Google Slides, Apple Keynote, and MS Office.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    id="btn-open-google-slides-guide"
                    onClick={() => setShowGoogleSlidesGuide(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1528] hover:bg-[#152442] text-white border border-[#1E293B] font-bold text-xs transition-all shadow-md"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                    <span>Open in Google Slides</span>
                  </button>

                  <button
                    id="btn-download-master-pptx"
                    onClick={handleDownloadMasterPptx}
                    disabled={exportingTheme !== null}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs transition-all shadow-lg shadow-orange-950/40 disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {exportingTheme === 'master' ? 'Generating PPTX...' : 'Download Master Deck (All Nuances .PPTX)'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Individual Nuance Slide Downloads Grid */}
              <div className="pt-4 border-t border-[#1E293B] space-y-3 relative z-10">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="font-mono font-bold uppercase">Download Individual Nuance Decks (.PPTX):</span>
                  <span className="text-[11px] font-mono text-orange-400 font-bold">16:9 Widescreen Layout</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {SLIDE_NUANCE_THEMES.map((theme) => {
                    const isExportingThis = exportingTheme === theme.id;
                    const isActive = (themeMapToExportId[slideBgTheme] || 'midnight-navy') === theme.id;

                    return (
                      <div
                        key={theme.id}
                        className={`bg-[#0B1528] border rounded-xl p-3.5 flex flex-col justify-between space-y-3 transition-all ${
                          isActive ? 'border-orange-500/60 ring-1 ring-orange-400/30' : 'border-[#1E293B] hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                              style={{ backgroundColor: `#${theme.bgHex}` }}
                            />
                            <span className="text-xs font-bold text-white font-['Outfit'] truncate">
                              {theme.name.split(' (')[0]}
                            </span>
                          </div>
                          <p className="text-[10px] text-[#94A3B8] line-clamp-2 leading-relaxed">
                            {theme.description}
                          </p>
                        </div>

                        <button
                          onClick={() => handleDownloadSpecificNuancePptx(theme.id)}
                          disabled={exportingTheme !== null}
                          className="w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-orange-400 border border-[#1E293B] text-[11px] font-bold font-mono transition-all disabled:opacity-50"
                        >
                          <Download className="w-3 h-3" />
                          <span>{isExportingThis ? 'Building...' : 'Download .PPTX'}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Google Slides Workflow Instruction Modal */}
            {showGoogleSlidesGuide && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
                  <button
                    onClick={() => setShowGoogleSlidesGuide(false)}
                    className="absolute top-4 right-4 text-[#94A3B8] hover:text-white p-1 rounded-lg hover:bg-[#152442] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white font-['Outfit']">
                        How to Use in Google Slides
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        Full vector compatibility &amp; 1-click import workflow
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-[#CBD5E1] leading-relaxed">
                    <div className="flex items-start gap-3 p-3 bg-[#050C1A] rounded-xl border border-[#1E293B]">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold font-mono flex items-center justify-center shrink-0 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="text-white block mb-0.5">Download the .PPTX Presentation</strong>
                        <p className="text-[#94A3B8]">
                          Click <strong>"Download Master Deck"</strong> or choose any specific nuance slide deck above.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#050C1A] rounded-xl border border-[#1E293B]">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold font-mono flex items-center justify-center shrink-0 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="text-white block mb-0.5">Drag into Google Drive or Google Slides</strong>
                        <p className="text-[#94A3B8]">
                          Open <strong>Google Drive</strong> (or <strong>slides.google.com</strong>) and simply drag the downloaded <code className="text-orange-400">.pptx</code> file into your window, or go to <em>File &gt; Open &gt; Upload</em>.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#050C1A] rounded-xl border border-[#1E293B]">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold font-mono flex items-center justify-center shrink-0 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="text-white block mb-0.5">Full Native Editing in Google Slides</strong>
                        <p className="text-[#94A3B8]">
                          Google Slides natively displays all shape cards, typography hierarchy, Option 04 branding, and nuance backgrounds without distortion.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                    <a
                      href="https://drive.google.com/drive/my-drive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#152442] hover:bg-[#1E3E62] text-white text-xs font-bold border border-blue-500/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span>Launch Google Drive</span>
                    </a>

                    <a
                      href="https://docs.google.com/presentation/u/0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-black transition-all shadow-md shadow-orange-950/40"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Google Slides</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. Lab Swag & Apparel */}
        {activeTab === 'swag' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-[#94A3B8] border-b border-[#1E293B] pb-2 font-bold">
              <span className="font-mono">Context: Lab Hoodies, Ceramic Coffee Mugs & Badge Patches</span>
              <span className="text-white font-bold text-xs">High Contrast Tactile Materials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Hoodie Embroidery Simulation */}
              <div className="bg-[#050C1A] rounded-2xl p-8 border border-[#1E293B] flex flex-col items-center justify-center space-y-4 text-center shadow-xl">
                <span className="text-xs font-mono font-black text-orange-400 uppercase tracking-wider">
                  Lab Hoodie Chest Embroidery
                </span>

                <div className="relative p-6 rounded-2xl bg-[#0B1528] border border-[#1E293B] shadow-2xl flex flex-col items-center">
                  <div className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    <VectorLogo
                      vectorId={concept.vectorId}
                      primaryBlue={activeBlue}
                      secondaryBlue="#1E3E62"
                      accentOrange={activeOrange}
                      accentWarm="#FB923C"
                      size={100}
                    />
                  </div>
                  <span className="text-xs font-black font-['Outfit'] tracking-wider text-white mt-2">
                    SERESEARCH LAB
                  </span>
                  <span className="text-[10px] font-mono font-black text-orange-400">
                    HUMAN & SOCIAL ASPECTS
                  </span>
                </div>

                <p className="text-xs text-[#94A3B8] font-medium max-w-xs">
                  Subtle stitch embroidery in high-tensile orange and midnight navy yarn on organic heavyweight cotton.
                </p>
              </div>

              {/* Matte Black Ceramic Mug */}
              <div className="bg-[#050C1A] rounded-2xl p-8 border border-[#1E293B] flex flex-col items-center justify-center space-y-4 text-center shadow-xl">
                <span className="text-xs font-mono font-black text-orange-400 uppercase tracking-wider">
                  Matte Ceramic Developer Mug
                </span>

                <div className="w-48 h-48 rounded-2xl bg-gradient-to-b from-[#0B1528] to-[#050C1A] border border-[#1E293B] shadow-2xl flex flex-col items-center justify-center p-4">
                  <VectorLogo
                    vectorId={concept.vectorId}
                    primaryBlue="#15273C"
                    secondaryBlue="#224063"
                    accentOrange={activeOrange}
                    accentWarm="#FB923C"
                    size={80}
                  />
                  <div className="mt-2 text-center">
                    <span className="text-[11px] font-black text-white block font-['Outfit'] tracking-tight">
                      SEResearch Lab
                    </span>
                    <span className="text-[9px] font-mono font-bold text-orange-400 block">
                      Human & Social Aspects
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] font-medium max-w-xs">
                  Silk-screen printed with microwave-safe satin ink on 15oz matte ceramic.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
