import React, { useState, useEffect } from 'react';
import {
  FileCode,
  Download,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Server,
  Code2,
  Sparkles,
} from 'lucide-react';

export const StandaloneExporter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/standalone.html')
      .then((res) => res.text())
      .then((text) => {
        setHtmlContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load standalone HTML', err);
        setLoading(false);
      });
  }, []);

  const handleCopy = async () => {
    if (htmlContent) {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!htmlContent) return;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SEResearch-Lab-Identity.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-8">
      {/* Banner */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-black">
                Web Publication Ready • Zero Framework Dependencies
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] tracking-tight">
              Standalone HTML/CSS/JS Identity Webpage
            </h2>
            <p className="text-xs sm:text-sm font-medium text-[#CBD5E1] max-w-2xl leading-relaxed">
              A self-contained, single-file HTML document explaining the SEResearch Lab identity (Option 04), with interactive lockup previews, multi-canvas conference slides, and live asset downloads. Ready to drop directly into your group's website.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/standalone.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#050C1A] hover:bg-[#152442] text-white border border-[#1E293B] font-black text-xs transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <span>Preview in New Tab</span>
            </a>

            <button
              id="download-html-file-btn"
              onClick={handleDownload}
              disabled={loading || !htmlContent}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs transition-all shadow-lg shadow-orange-950/40 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>Download .html File</span>
            </button>
          </div>
        </div>
      </div>

      {/* Deployment & Integration Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-white font-['Outfit'] font-black">
            <Server className="w-4 h-4 text-blue-400" />
            <span>1. University / Lab Server</span>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Upload <code className="text-orange-400 bg-[#050C1A] px-1.5 py-0.5 rounded">SEResearch-Lab-Identity.html</code> directly to your Apache, Nginx, or Caddy document root as <code className="text-white">brand.html</code> or <code className="text-white">identity.html</code>. No node_modules, build step, or server runtime needed.
          </p>
        </div>

        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-white font-['Outfit'] font-black">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>2. GitHub Pages / Static Site</span>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Commit the file into your laboratory's GitHub repository under <code className="text-orange-400 bg-[#050C1A] px-1.5 py-0.5 rounded">/public/brand.html</code> or set it as <code className="text-white">index.html</code> in a brand guidelines repository branch for instant GitHub Pages deployment.
          </p>
        </div>

        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-white font-['Outfit'] font-black">
            <Code2 className="w-4 h-4 text-orange-400" />
            <span>3. Embed in Existing Portal</span>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Embed using a responsive <code className="text-orange-400 bg-[#050C1A] px-1.5 py-0.5 rounded">&lt;iframe src="/brand.html"&gt;</code> inside WordPress, Hugo, Jekyll, Docusaurus, or your faculty lab portal.
          </p>
        </div>
      </div>

      {/* Code Inspector & Copy Box */}
      <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 bg-[#08101E] border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-mono font-bold text-white">
              SEResearch-Lab-Identity.html (Self-Contained Single File)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1528] hover:bg-[#152442] text-white border border-[#1E293B] text-xs font-bold transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied HTML!' : 'Copy Full HTML'}</span>
            </button>
          </div>
        </div>

        <div className="p-4 bg-[#040812] max-h-96 overflow-y-auto font-mono text-[11px] text-[#94A3B8] leading-relaxed">
          {loading ? (
            <div className="text-center py-12 text-[#94A3B8]">Loading HTML source...</div>
          ) : (
            <pre className="whitespace-pre-wrap">{htmlContent.slice(0, 3000)}... [truncated preview, {htmlContent.length} total bytes]</pre>
          )}
        </div>
      </div>
    </div>
  );
};
