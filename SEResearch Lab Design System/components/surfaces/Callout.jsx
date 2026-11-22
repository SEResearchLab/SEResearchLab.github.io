import React from 'react';

/** Labelled inset block — research questions, threats, notes. */
export function Callout({label,children,tone='accent',style}){
  const bar=tone==='accent'?'var(--accent-ink)':'var(--border-strong)';
  return (
    <div style={{position:'relative',background:'var(--surface-sunken)',
      border:'var(--border-width-card) solid var(--border-hairline)',padding:'var(--space-4) var(--space-5)',
      paddingLeft:'var(--space-6)',fontFamily:'var(--font-body)',...style}}>
      <span style={{position:'absolute',left:0,top:0,bottom:0,width:'var(--rule-width)',background:bar}}/>
      {label&&<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',letterSpacing:'var(--tracking-label)',
        textTransform:'uppercase',color:tone==='accent'?'var(--accent-ink)':'var(--text-muted)',marginBottom:'var(--space-2)'}}>{label}</div>}
      <div style={{fontSize:'var(--text-sm)',lineHeight:'var(--leading-body)',color:'var(--text-strong)'}}>{children}</div>
    </div>
  );
}
