import React from 'react';

/** Oversized finding: the poster's "68% / of reviewers…" unit. */
export function StatBlock({label,value,caption,items=[],style}){
  return (
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'flex-start',gap:'var(--space-8)',
      fontFamily:'var(--font-body)',...style}}>
      <div style={{minWidth:180}}>
        {label&&<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',letterSpacing:'var(--tracking-label-wide)',
          textTransform:'uppercase',color:'var(--accent-ink)',marginBottom:'var(--space-2)'}}>{label}</div>}
        <div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-bold)',fontSize:'var(--text-6xl)',
          lineHeight:'var(--leading-hero)',letterSpacing:'var(--tracking-hero)',color:'var(--accent-ink)'}}>{value}</div>
      </div>
      {caption&&<p style={{margin:0,flex:'1 1 240px',fontSize:'var(--text-lg)',lineHeight:'var(--leading-snug)',
        color:'var(--text-strong)',maxWidth:'46ch'}}>{caption}</p>}
      {items.length>0&&<ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',
        gap:'var(--space-2)',borderLeft:'1px solid var(--border-strong)',paddingLeft:'var(--space-6)',flex:'0 1 260px'}}>
        {items.map((it,i)=><li key={i} style={{fontSize:'var(--text-sm)',color:'var(--text-muted)',
          lineHeight:'var(--leading-body)'}}>{it}</li>)}
      </ul>}
    </div>
  );
}
