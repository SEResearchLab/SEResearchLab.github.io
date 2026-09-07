import React, { useState } from 'react';
import { BLUE_NUANCES, ORANGE_NUANCES } from '../data/brandData';
import { Copy, Check, Info, ShieldCheck, Palette } from 'lucide-react';

interface PaletteExplorerProps {
  onApplyColor: (type: 'blue' | 'orange', hex: string) => void;
  activeBlue: string;
  activeOrange: string;
}

export const PaletteExplorer: React.FC<PaletteExplorerProps> = ({
  onApplyColor,
  activeBlue,
  activeOrange,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = async (hex: string) => {
    await navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header & Philosophical Grounding */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-orange-400" />
              <h3 className="text-xl font-black text-white font-['Outfit'] tracking-tight">
                Deep Blue & Orange Nuance Palette System
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#CBD5E1] max-w-2xl">
              Engineered specifically for SEResearch Lab. The deep blues evoke software architectural rigor, deep cognitive flow, and behavioral inquiry. The warm oranges represent developer empathy, psychological safety, and social collaboration.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-[#050C1A] p-3 rounded-xl border border-[#1E293B] text-xs">
              <span className="text-[#94A3B8] font-bold uppercase tracking-wider text-[10px]">Active Nuance:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-white/20 shadow-inner" style={{ backgroundColor: activeBlue }} />
                <span className="font-mono font-bold text-white text-[11px]">{activeBlue}</span>
              </div>
              <span className="text-[#475569]">/</span>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: activeOrange }} />
                <span className="font-mono font-bold text-orange-400 text-[11px]">{activeOrange}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Nuances */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deep Blue Nuances */}
        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
            <div>
              <h4 className="text-lg font-black text-white font-['Outfit'] tracking-tight flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-sm" />
                Deep Blue Nuances
              </h4>
              <span className="text-xs font-bold text-[#94A3B8]">
                Software Architecture • Human & Social Aspects • Flow State
              </span>
            </div>
            <span className="text-[11px] font-mono font-black text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-800/40">
              4 Nuances
            </span>
          </div>

          <div className="space-y-3">
            {BLUE_NUANCES.map((item) => {
              const isSelected = activeBlue.toLowerCase() === item.hex.toLowerCase();
              return (
                <div
                  key={item.hex}
                  className={`p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#152442] border-blue-500 shadow-md ring-1 ring-blue-500/50'
                      : 'bg-[#050C1A] border-[#1E293B] hover:bg-[#111F38] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-xl shadow-inner border border-white/20 shrink-0"
                        style={{ backgroundColor: item.hex }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-white tracking-tight">{item.name}</span>
                          {isSelected && (
                            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-mono font-bold">
                              Active
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-blue-400 font-mono font-bold">{item.hex}</span>
                        <p className="text-[11px] text-[#CBD5E1] font-medium mt-1 leading-snug">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button
                        onClick={() => onApplyColor('blue', item.hex)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-blue-200 border border-blue-700/60 font-bold transition-colors"
                      >
                        Apply to Logo
                      </button>
                      <button
                        onClick={() => handleCopy(item.hex)}
                        className="flex items-center gap-1 text-[10px] text-[#94A3B8] hover:text-white font-bold"
                      >
                        {copiedHex === item.hex ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedHex === item.hex ? 'Copied' : 'Copy Hex'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#1E293B] flex items-center justify-between text-[11px] text-[#94A3B8]">
                    <span className="font-medium">{item.description}</span>
                    <span className="font-mono font-bold text-[10px] text-[#CBD5E1]">
                      Contrast on Light: {item.contrastOnLight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Orange Nuances */}
        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
            <div>
              <h4 className="text-lg font-black text-white font-['Outfit'] tracking-tight flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-orange-500 shadow-sm" />
                Orange Nuances
              </h4>
              <span className="text-xs font-bold text-[#94A3B8]">
                Human Vitality • Psychological Safety • Social Empathy
              </span>
            </div>
            <span className="text-[11px] font-mono font-black text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-md border border-orange-800/40">
              4 Nuances
            </span>
          </div>

          <div className="space-y-3">
            {ORANGE_NUANCES.map((item) => {
              const isSelected = activeOrange.toLowerCase() === item.hex.toLowerCase();
              return (
                <div
                  key={item.hex}
                  className={`p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#152442] border-orange-500 shadow-md ring-1 ring-orange-500/50'
                      : 'bg-[#050C1A] border-[#1E293B] hover:bg-[#111F38] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-xl shadow-md border border-white/20 shrink-0"
                        style={{ backgroundColor: item.hex }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-white tracking-tight">{item.name}</span>
                          {isSelected && (
                            <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full font-mono font-bold">
                              Active
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-orange-400 font-mono font-bold">{item.hex}</span>
                        <p className="text-[11px] text-[#CBD5E1] font-medium mt-1 leading-snug">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button
                        onClick={() => onApplyColor('orange', item.hex)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold transition-colors shadow-sm"
                      >
                        Apply to Logo
                      </button>
                      <button
                        onClick={() => handleCopy(item.hex)}
                        className="flex items-center gap-1 text-[10px] text-[#94A3B8] hover:text-white font-bold"
                      >
                        {copiedHex === item.hex ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedHex === item.hex ? 'Copied' : 'Copy Hex'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#1E293B] flex items-center justify-between text-[11px] text-[#94A3B8]">
                    <span className="font-medium">{item.description}</span>
                    <span className="font-mono font-bold text-[10px] text-[#CBD5E1]">
                      Contrast on Dark: {item.contrastOnDark}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Psychological & Cognitive Synergy Matrix */}
      <div className="bg-gradient-to-r from-[#050C1A] via-[#0B1528] to-[#152442] rounded-2xl p-6 border border-[#1E293B] text-slate-200 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-orange-400" />
          <h4 className="text-base font-black text-white font-['Outfit'] tracking-tight">
            Cognitive Color Synergy in Software Engineering Research
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-[#CBD5E1] leading-relaxed">
          <div className="bg-[#050C1A]/80 p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-black text-orange-400 block font-mono text-[11px] uppercase tracking-wider">
              1. Deep Blue: The Software Architecture
            </span>
            <p className="font-medium">
              In cognitive psychology, deep dark blue fosters concentrated focus, decreases pulse rate, and communicates institutional stability, intellectual rigor, and system reliability.
            </p>
          </div>
          <div className="bg-[#050C1A]/80 p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-black text-orange-400 block font-mono text-[11px] uppercase tracking-wider">
              2. Warm Orange: The Human Dimension
            </span>
            <p className="font-medium">
              Orange triggers dopamine, interpersonal warmth, curiosity, and psychological safety. It breaks the cold mechanical isolation of code and centers the developer as an emotional human being.
            </p>
          </div>
          <div className="bg-[#050C1A]/80 p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-black text-orange-400 block font-mono text-[11px] uppercase tracking-wider">
              3. Socio-Technical Harmony
            </span>
            <p className="font-medium">
              Complementary color temperatures (cool ~450nm wavelength against warm ~600nm) create high visual contrast and an intuitive metaphor: software systems cannot thrive without human empathy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
