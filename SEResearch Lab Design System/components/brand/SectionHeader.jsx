import React from 'react';

/** Numbered section head: orange rule, mono number, display title. */
export function SectionHeader({number,title,kicker,rule=true,style}){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)',...style}}>
      {rule&&<span style={{height:'var(--rule-width)',background:'var(--rule-accent)',display:'block',width:'100%'}}/>}
      <div style={{display:'flex',alignItems:'baseline',gap:'var(--space-4)'}}>
        {number&&<span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--weight-bold)',
          fontSize:'var(--text-base)',color:'var(--accent-ink)',letterSpacing:'var(--tracking-normal)'}}>{number}</span>}
        <h2 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',
          fontSize:'var(--text-3xl)',lineHeight:'var(--leading-heading)',letterSpacing:'var(--tracking-heading)',
          color:'var(--text-strong)'}}>{title}</h2>
      </div>
      {kicker&&<p style={{margin:0,fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',
        color:'var(--text-muted)',maxWidth:'var(--measure)'}}>{kicker}</p>}
    </div>
  );
}
