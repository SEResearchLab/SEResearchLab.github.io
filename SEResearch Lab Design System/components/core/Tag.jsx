import React from 'react';

const tones={
  accent:{color:'var(--accent-ink)',border:'1px solid var(--accent-ink)',background:'transparent'},
  navy:{color:'var(--text-strong)',border:'1px solid var(--border-strong)',background:'transparent'},
  solid:{color:'#FFFFFF',border:'1px solid var(--accent)',background:'var(--accent)'},
  muted:{color:'var(--text-muted)',border:'1px solid var(--border-hairline)',background:'var(--surface-sunken)'}
};

/** Mono metadata label: venue, year, research theme. */
export function Tag({tone='muted',children,style,...rest}){
  return <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-3xs)',fontWeight:'var(--weight-medium)',
    textTransform:'uppercase',letterSpacing:'var(--tracking-label)',padding:'4px 9px',lineHeight:1.2,
    display:'inline-block',borderRadius:'var(--radius-none)',...tones[tone],...style}} {...rest}>{children}</span>;
}
