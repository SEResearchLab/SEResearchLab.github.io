import React from 'react';

/** Centred modal on a navy scrim. */
export function Dialog({open=true,title,footer,onClose,width=520,children}){
  if(!open) return null;
  return (
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'var(--scrim-overlay)',display:'flex',
      alignItems:'center',justifyContent:'center',padding:'var(--space-6)',zIndex:60}}>
      <div onClick={e=>e.stopPropagation()} style={{width,maxWidth:'100%',background:'var(--surface-card)',
        border:'var(--border-width-card) solid var(--border-hairline)',boxShadow:'var(--shadow-overlay)',
        fontFamily:'var(--font-body)'}}>
        <div style={{height:'var(--rule-width)',background:'var(--accent)'}}/>
        <div style={{padding:'var(--card-pad-lg)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
          {title&&<h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',
            letterSpacing:'var(--tracking-heading)',color:'var(--text-strong)'}}>{title}</h3>}
          <div style={{fontSize:'var(--text-sm)',lineHeight:'var(--leading-body)',color:'var(--text-body)'}}>{children}</div>
          {footer&&<div style={{display:'flex',gap:'var(--space-3)',justifyContent:'flex-end',marginTop:'var(--space-2)'}}>{footer}</div>}
        </div>
      </div>
    </div>
  );
}
