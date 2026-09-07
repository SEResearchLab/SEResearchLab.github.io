import React, { useState } from 'react';
import {
  ALL_COLOR_NUANCES,
  ColorNuanceConfig,
  LockupType,
  getLockupSvg,
  svgStringToPngDataUrl,
} from '../utils/logoGenerators';
import { downloadSvgString } from '../utils/exportUtils';
import { downloadLockupZip, downloadCompleteBrandKitZip } from '../utils/zipExport';
import {
  Download,
  Copy,
  Check,
  Sparkles,
  Layers,
  FileArchive,
  Table,
  LayoutGrid,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Info,
} from 'lucide-react';

export const AssetGenerator: React.FC = () => {
  const [selectedLockup, setSelectedLockup] = useState<LockupType>('horizontal');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');
  const [filterCategory, setFilterCategory] = useState<'all' | 'primary' | 'monochrome' | 'inverted'>('all');
  const [exportDimension, setExportDimension] = useState<number>(2048);
  const [includeBackgroundInPng, setIncludeBackgroundInPng] = useState<boolean>(true);

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [zipProgress, setZipProgress] = useState<{ isZipping: boolean; percent: number; message: string }>({
    isZipping: false,
    percent: 0,
    message: '',
  });

  const filteredNuances =
    filterCategory === 'all'
      ? ALL_COLOR_NUANCES
      : ALL_COLOR_NUANCES.filter(
          (n) => n.category === filterCategory || (filterCategory === 'primary' && n.category === 'special')
        );

  const handleCopySvg = async (nuance: ColorNuanceConfig, lockup: LockupType = selectedLockup) => {
    const svgStr = getLockupSvg(lockup, nuance, { includeBackground: false });
    await navigator.clipboard.writeText(svgStr);
    const key = `${nuance.id}-${lockup}`;
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadSvg = (
    nuance: ColorNuanceConfig,
    lockup: LockupType = selectedLockup,
    withBg: boolean = false
  ) => {
    const svgStr = getLockupSvg(lockup, nuance, { includeBackground: withBg });
    const bgSuffix = withBg ? '-canvas' : '-transparent';
    const filename = `seresearch-lab-${lockup}-${nuance.id}${bgSuffix}.svg`;
    downloadSvgString(svgStr, filename);
  };

  const handleDownloadPng = async (
    nuance: ColorNuanceConfig,
    lockup: LockupType = selectedLockup,
    withBg: boolean = includeBackgroundInPng
  ) => {
    const key = `${nuance.id}-${lockup}-png`;
    setDownloadingId(key);
    try {
      const svgStr = getLockupSvg(lockup, nuance, { includeBackground: withBg });
      let w = exportDimension;
      let h = exportDimension;
      if (lockup === 'horizontal') {
        w = Math.round(exportDimension * 1.2);
        h = Math.round(exportDimension * 0.33);
      } else if (lockup === 'stacked') {
        w = exportDimension;
        h = Math.round(exportDimension * 0.7);
      }

      const bg = withBg ? nuance.bgHex : undefined;
      const dataUrl = await svgStringToPngDataUrl(svgStr, w, h, bg);

      const link = document.createElement('a');
      const bgSuffix = withBg ? '-canvas' : '-transparent';
      link.download = `seresearch-lab-${lockup}-${nuance.id}${bgSuffix}-${w}x${h}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloadingId(null);
    }
  };

  const handleDownloadLockupZip = async () => {
    setZipProgress({ isZipping: true, percent: 0, message: 'Initiating lockup archive...' });
    try {
      await downloadLockupZip(selectedLockup, (current, total, msg) => {
        setZipProgress({
          isZipping: true,
          percent: Math.round((current / total) * 100),
          message: msg,
        });
      });
    } finally {
      setTimeout(() => {
        setZipProgress({ isZipping: false, percent: 0, message: '' });
      }, 1000);
    }
  };

  const handleDownloadCompleteKitZip = async () => {
    setZipProgress({ isZipping: true, percent: 0, message: 'Gathering all 4 lockups in all nuances...' });
    try {
      await downloadCompleteBrandKitZip((current, total, msg) => {
        setZipProgress({
          isZipping: true,
          percent: Math.round((current / total) * 100),
          message: msg,
        });
      });
    } finally {
      setTimeout(() => {
        setZipProgress({ isZipping: false, percent: 0, message: '' });
      }, 1200);
    }
  };

  const lockupOptions: { id: LockupType; label: string; tag: string; desc: string }[] = [
    {
      id: 'horizontal',
      label: 'Horizontal Lockup',
      tag: 'Primary Brand Lockup',
      desc: 'Mark on left with bold title & tagline for websites, navbars, and banners.',
    },
    {
      id: 'stacked',
      label: 'Stacked Lockup',
      tag: 'Square & Poster Lockup',
      desc: 'Centered mark above title & subtitle for report covers, posters, and profile cards.',
    },
    {
      id: 'badge',
      label: 'Lab Emblem (Crest)',
      tag: 'Academic Seal',
      desc: 'Circular academic crest for diplomas, formal certifications, and conference badges.',
    },
    {
      id: 'mark',
      label: 'Mark Only',
      tag: 'Symbol & Avatar',
      desc: 'Code brackets with empathy pulse for app icons, favicons, and video watermarks.',
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Header Banner & Master Export Hub */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-black">
                Option 04 • Multi-Lockup & Nuance Export Hub
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] tracking-tight">
              Logo Download Suite (All Lockups & Nuances)
            </h2>
            <p className="text-xs sm:text-sm font-medium text-[#CBD5E1] max-w-2xl leading-relaxed">
              Download SEResearch Lab brand assets in <strong>Horizontal</strong>, <strong>Stacked</strong>, <strong>Lab Emblem</strong>, and <strong>Mark Only</strong> formats across all 9 color nuance systems. Available in pure scalable SVG vector and ultra-resolution 2K/4K PNG.
            </p>
          </div>

          {/* Master Batch ZIP Export Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              id="download-current-lockup-zip-btn"
              onClick={handleDownloadLockupZip}
              disabled={zipProgress.isZipping}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#050C1A] hover:bg-[#152442] text-white border border-[#1E293B] font-bold text-xs transition-all shadow-md disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-orange-400" />
              <span>Download {lockupOptions.find((l) => l.id === selectedLockup)?.label} (.ZIP)</span>
            </button>

            <button
              id="download-complete-brand-kit-zip-btn"
              onClick={handleDownloadCompleteKitZip}
              disabled={zipProgress.isZipping}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs transition-all shadow-lg shadow-orange-950/40 disabled:opacity-50"
            >
              <FileArchive className="w-4 h-4" />
              <span>Download Complete Brand Kit (.ZIP)</span>
            </button>
          </div>
        </div>

        {/* Real-time ZIP Export Progress Indicator */}
        {zipProgress.isZipping && (
          <div className="bg-[#050C1A] border border-orange-500/40 rounded-xl p-4 space-y-2 animate-pulse">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-white flex items-center gap-2">
                <FileArchive className="w-4 h-4 text-orange-400 animate-spin" />
                {zipProgress.message}
              </span>
              <span className="font-mono text-orange-400">{zipProgress.percent}%</span>
            </div>
            <div className="w-full h-2 bg-[#0B1528] rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 transition-all duration-200"
                style={{ width: `${zipProgress.percent}%` }}
              />
            </div>
          </div>
        )}

        {/* Lockup Selection Tabs */}
        <div className="pt-4 border-t border-[#1E293B] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#94A3B8] uppercase mr-1">Lockup Format:</span>
              <div className="flex flex-wrap items-center bg-[#050C1A] p-1 rounded-xl border border-[#1E293B] text-xs">
                {lockupOptions.map((fmt) => (
                  <button
                    key={fmt.id}
                    id={`btn-select-lockup-${fmt.id}`}
                    onClick={() => setSelectedLockup(fmt.id)}
                    className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-2 ${
                      selectedLockup === fmt.id
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <span>{fmt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Switcher & Settings */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-[#050C1A] p-1 rounded-xl border border-[#1E293B] text-xs">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    viewMode === 'cards' ? 'bg-[#152442] text-white border border-blue-500/40' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Card Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('matrix')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    viewMode === 'matrix' ? 'bg-[#152442] text-white border border-blue-500/40' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>All Lockups Matrix</span>
                </button>
              </div>

              {/* PNG Background Toggle */}
              <button
                onClick={() => setIncludeBackgroundInPng(!includeBackgroundInPng)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  includeBackgroundInPng
                    ? 'bg-[#0B1528] text-white border-[#1E293B]'
                    : 'bg-orange-500/15 text-orange-300 border-orange-500/40'
                }`}
                title="Toggle between solid canvas background and transparent PNG"
              >
                <span>PNG Fill:</span>
                <span className="font-mono text-orange-400">{includeBackgroundInPng ? 'Canvas BG' : 'Transparent'}</span>
              </button>

              {/* PNG Dimension */}
              <select
                value={exportDimension}
                onChange={(e) => setExportDimension(Number(e.target.value))}
                className="bg-[#050C1A] border border-[#1E293B] text-white text-xs rounded-xl px-3 py-1.5 font-mono font-bold focus:outline-none focus:border-orange-500"
              >
                <option value={1024}>1024px</option>
                <option value={2048}>2048px (2K)</option>
                <option value={4096}>4096px (4K)</option>
              </select>
            </div>
          </div>

          {/* Active Lockup Description Bar */}
          <div className="bg-[#050C1A] border border-[#1E293B] rounded-xl px-4 py-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-orange-400 font-bold uppercase">
                {lockupOptions.find((l) => l.id === selectedLockup)?.tag}:
              </span>
              <span className="text-[#CBD5E1] font-medium">
                {lockupOptions.find((l) => l.id === selectedLockup)?.desc}
              </span>
            </div>
            <span className="text-[#94A3B8] font-mono hidden md:inline">
              9 Color Nuances Ready
            </span>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: Rich Cards with Full Preview & Download Options */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNuances.map((nuance) => {
            const svgPreview = getLockupSvg(selectedLockup, nuance, {
              includeBackground: true,
              width: selectedLockup === 'horizontal' ? 500 : 360,
              height: selectedLockup === 'horizontal' ? 140 : selectedLockup === 'stacked' ? 250 : 220,
              size: selectedLockup === 'badge' ? 240 : 160,
            });

            const copyKey = `${nuance.id}-${selectedLockup}`;
            const isCopied = copiedId === copyKey;
            const isDownloading = downloadingId === `${nuance.id}-${selectedLockup}-png`;

            return (
              <div
                key={nuance.id}
                className="bg-[#0B1528] border border-[#1E293B] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-orange-500/40 transition-all duration-200"
              >
                {/* Visual Canvas Stage */}
                <div
                  className="p-6 flex items-center justify-center min-h-[190px] border-b border-[#1E293B] relative overflow-hidden"
                  style={{ backgroundColor: nuance.bgHex }}
                >
                  <div
                    className="w-full flex items-center justify-center transition-transform hover:scale-[1.03] duration-200"
                    dangerouslySetInnerHTML={{ __html: svgPreview }}
                  />

                  {/* Contrast Tag */}
                  <div className="absolute top-2.5 right-2.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-sm ${
                        nuance.isLightBg
                          ? 'bg-slate-900/80 text-white border-slate-700'
                          : 'bg-black/60 text-white/90 border-white/10'
                      }`}
                    >
                      {nuance.isLightBg ? 'Light Canvas' : 'Dark Canvas'}
                    </span>
                  </div>
                </div>

                {/* Metadata & Actions */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-['Outfit'] tracking-tight">
                      {nuance.name}
                    </h3>
                    <p className="text-[11px] text-[#94A3B8] font-medium line-clamp-1 mt-0.5">
                      {nuance.tagline}
                    </p>
                  </div>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#CBD5E1]">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: nuance.accentOrange }} />
                      <span>{nuance.accentOrange}</span>
                    </div>
                    <span className="text-[#64748B]">•</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#CBD5E1]">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: nuance.primaryBlue }} />
                      <span>{nuance.primaryBlue}</span>
                    </div>
                  </div>

                  {/* Download Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1E293B]">
                    {/* SVG Vector */}
                    <button
                      onClick={() => handleDownloadSvg(nuance, selectedLockup, false)}
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#050C1A] hover:bg-orange-500 hover:text-white text-orange-400 border border-[#1E293B] transition-all group shadow-sm"
                      title="Download clean, infinite scalable vector SVG (transparent background)"
                    >
                      <Download className="w-3.5 h-3.5 group-hover:scale-110 transition-transform mb-0.5" />
                      <span className="text-[10px] font-mono font-bold">SVG</span>
                    </button>

                    {/* High-Res PNG */}
                    <button
                      onClick={() => handleDownloadPng(nuance, selectedLockup, includeBackgroundInPng)}
                      disabled={isDownloading}
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#050C1A] hover:bg-orange-500 hover:text-white text-white border border-[#1E293B] transition-all group shadow-sm disabled:opacity-50"
                      title={`Download raster PNG (${exportDimension}px)`}
                    >
                      <Download className="w-3.5 h-3.5 group-hover:scale-110 transition-transform mb-0.5" />
                      <span className="text-[10px] font-mono font-bold">
                        {isDownloading ? '...' : `${exportDimension >= 4000 ? '4K' : '2K'} PNG`}
                      </span>
                    </button>

                    {/* Copy Raw SVG */}
                    <button
                      onClick={() => handleCopySvg(nuance, selectedLockup)}
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#050C1A] hover:bg-[#152442] text-[#94A3B8] hover:text-white border border-[#1E293B] transition-all group shadow-sm"
                      title="Copy raw SVG markup to clipboard"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400 mb-0.5" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform mb-0.5" />
                      )}
                      <span className="text-[10px] font-mono font-bold">
                        {isCopied ? 'Copied' : 'Copy'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: Master All Lockups Matrix */}
      {viewMode === 'matrix' && (
        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 bg-[#08101E] border-b border-[#1E293B] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Table className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-mono font-bold text-white uppercase">
                Complete Matrix: 4 Lockups × 9 Nuances Quick-Download
              </span>
            </div>
            <span className="text-[11px] text-[#94A3B8] font-mono">
              36 Unique Vector & Raster Renderings
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1E293B] bg-[#050C1A] text-[11px] font-mono text-[#94A3B8] uppercase">
                  <th className="py-3 px-4">Color Nuance</th>
                  <th className="py-3 px-4">Mark Only</th>
                  <th className="py-3 px-4">Horizontal Lockup</th>
                  <th className="py-3 px-4">Stacked Lockup</th>
                  <th className="py-3 px-4">Lab Emblem (Crest)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B] text-xs">
                {ALL_COLOR_NUANCES.map((nuance) => (
                  <tr key={nuance.id} className="hover:bg-[#0E1B33]/50 transition-colors">
                    {/* Nuance Info */}
                    <td className="py-3 px-4 font-bold text-white align-middle">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-md border border-white/20 shrink-0"
                          style={{ backgroundColor: nuance.accentOrange }}
                        />
                        <div>
                          <div className="text-white font-['Outfit'] font-bold text-xs">{nuance.name}</div>
                          <div className="text-[10px] text-[#94A3B8] font-mono">{nuance.tagline}</div>
                        </div>
                      </div>
                    </td>

                    {/* Column 1: Mark Only */}
                    <td className="py-3 px-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleDownloadSvg(nuance, 'mark', false)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-orange-400 border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Mark SVG"
                        >
                          SVG
                        </button>
                        <button
                          onClick={() => handleDownloadPng(nuance, 'mark', true)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-white border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Mark PNG (2048px)"
                        >
                          PNG
                        </button>
                      </div>
                    </td>

                    {/* Column 2: Horizontal */}
                    <td className="py-3 px-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleDownloadSvg(nuance, 'horizontal', false)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-orange-400 border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Horizontal SVG"
                        >
                          SVG
                        </button>
                        <button
                          onClick={() => handleDownloadPng(nuance, 'horizontal', true)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-white border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Horizontal PNG (2400px)"
                        >
                          PNG
                        </button>
                      </div>
                    </td>

                    {/* Column 3: Stacked */}
                    <td className="py-3 px-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleDownloadSvg(nuance, 'stacked', false)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-orange-400 border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Stacked SVG"
                        >
                          SVG
                        </button>
                        <button
                          onClick={() => handleDownloadPng(nuance, 'stacked', true)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-white border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Stacked PNG (1800px)"
                        >
                          PNG
                        </button>
                      </div>
                    </td>

                    {/* Column 4: Lab Emblem */}
                    <td className="py-3 px-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleDownloadSvg(nuance, 'badge', false)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-orange-400 border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Lab Emblem SVG"
                        >
                          SVG
                        </button>
                        <button
                          onClick={() => handleDownloadPng(nuance, 'badge', true)}
                          className="px-2 py-1 rounded-lg bg-[#050C1A] hover:bg-orange-500 hover:text-white text-white border border-[#1E293B] font-mono font-bold text-[10px] transition-all"
                          title="Download Lab Emblem PNG (2048px)"
                        >
                          PNG
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Format Usage Specification Guide */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white font-['Outfit']">
            Lockup Deployment Guidelines for Academic & Industry Materials
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#94A3B8]">
          <div className="bg-[#050C1A] p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-mono text-orange-400 font-bold block">1. Horizontal Lockup</span>
            <p className="leading-relaxed">
              Default for lab website navigation, email signatures, GitHub organisation headers, and presentation slide top bars.
            </p>
          </div>

          <div className="bg-[#050C1A] p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-mono text-orange-400 font-bold block">2. Stacked Lockup</span>
            <p className="leading-relaxed">
              Ideal for conference poster banners (A0/A1), technical report cover pages, grant proposal title sheets, and standee roll-ups.
            </p>
          </div>

          <div className="bg-[#050C1A] p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-mono text-orange-400 font-bold block">3. Lab Emblem (Crest)</span>
            <p className="leading-relaxed">
              Reserved for formal symposium certificates, laboratory diplomas, official research memorandum seals, and embroidered swag.
            </p>
          </div>

          <div className="bg-[#050C1A] p-4 rounded-xl border border-[#1E293B] space-y-1.5">
            <span className="font-mono text-orange-400 font-bold block">4. Mark Only</span>
            <p className="leading-relaxed">
              Used when space is tightly constrained (browser favicons, social media avatars, video lower-third bugs, and code editor badges).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
