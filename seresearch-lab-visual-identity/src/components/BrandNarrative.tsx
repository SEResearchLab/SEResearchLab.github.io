import React from 'react';
import { LAB_MISSION } from '../data/brandData';
import {
  HeartHandshake,
  Users,
  Network,
  Sparkles,
  BookOpen,
  Compass,
  Cpu,
  CheckCircle,
} from 'lucide-react';

export const BrandNarrative: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-orange-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-orange-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-orange-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-orange-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Narrative Intro */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-orange-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-black">
            Brand Narrative & Design Philosophy
          </span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-black text-white font-['Outfit'] tracking-tight">
          Designing for the Human Heartbeat of Software Engineering
        </h3>

        <p className="text-sm sm:text-base font-medium text-[#CBD5E1] leading-relaxed max-w-3xl">
          Traditional software engineering research has obsessed over syntax trees, compilers, latency, and algorithmic complexity. Yet in modern software systems, the greatest determinants of velocity, defect density, and resilience are <strong className="text-orange-400 font-black">the humans writing the code</strong>: their cognitive load, emotional safety, social networks, and daily developer experience.
        </p>

        <p className="text-xs sm:text-sm font-medium text-[#94A3B8] leading-relaxed max-w-3xl">
          The visual identity of <strong className="text-white">SEResearch Lab</strong> bridges the intellectual discipline of computer science (<span className="text-blue-400 font-bold">Deep Blue Nuances</span>) with the warmth, vitality, and social empathy of human collaboration (<span className="text-orange-400 font-bold">Radiant Orange Nuances</span>).
        </p>
      </div>

      {/* The 4 Core Research Pillars */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-black text-white font-['Outfit'] tracking-tight">
            Core Research Pillars Represented in the Logo
          </h4>
          <span className="text-xs font-mono font-bold text-[#94A3B8] uppercase">Lab Framework</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LAB_MISSION.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 hover:border-slate-700 transition-all space-y-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  {getIcon(pillar.icon)}
                </div>
                <div>
                  <h5 className="text-base font-black text-white font-['Outfit'] tracking-tight">
                    {pillar.title}
                  </h5>
                  <span className="text-xs text-orange-400 font-bold">
                    {pillar.short}
                  </span>
                </div>
              </div>

              <p className="text-xs font-medium text-[#94A3B8] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography System */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
        <h4 className="text-xl font-black text-white font-['Outfit'] tracking-tight">
          Typographic Hierarchy & Bold Font System
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#050C1A] p-5 rounded-xl border border-[#1E293B] space-y-2">
            <span className="text-xs font-mono text-orange-400 block font-black uppercase tracking-wider">
              DISPLAY / HEADINGS
            </span>
            <div className="font-['Outfit'] font-black text-3xl text-white tracking-tight">
              Outfit 900
            </div>
            <p className="text-xs font-medium text-[#94A3B8] leading-relaxed">
              Ultra-bold geometric yet humanist sans-serif with open counters, conveying strong scientific authority and impactful presence.
            </p>
          </div>

          <div className="bg-[#050C1A] p-5 rounded-xl border border-[#1E293B] space-y-2">
            <span className="text-xs font-mono text-orange-400 block font-black uppercase tracking-wider">
              BODY & UI LABELS
            </span>
            <div className="font-sans font-bold text-3xl text-white tracking-tight">
              Plus Jakarta Sans
            </div>
            <p className="text-xs font-medium text-[#94A3B8] leading-relaxed">
              Highly legible contemporary workhorse font optimized for high-density academic papers, data tables, and screen clarity.
            </p>
          </div>

          <div className="bg-[#050C1A] p-5 rounded-xl border border-[#1E293B] space-y-2">
            <span className="text-xs font-mono text-orange-400 block font-black uppercase tracking-wider">
              CODE & TELEMETRY
            </span>
            <div className="font-mono font-bold text-3xl text-white tracking-tight">
              JetBrains Mono
            </div>
            <p className="text-xs font-medium text-[#94A3B8] leading-relaxed">
              Developer-first monospaced font providing authentic software engineering context for syntax tags, DOI codes, and metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
