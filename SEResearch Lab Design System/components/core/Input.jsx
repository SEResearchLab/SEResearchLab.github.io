import React from 'react';

/** Single-line text field with a mono label above it. */
export function Input({label,hint,error,prefix,style,...rest}){
  return (
    <label style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',fontFamily:'var(--font-body)'}}>
      {label&&<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-3xs)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>{label}</span>}
      <span style={{display:'flex',alignItems:'center',gap:'var(--space-2)',background:'var(--surface-card)',
        border:'var(--border-width-card) solid '+(error?'var(--status-critical)':'var(--border-hairline)'),
        padding:'0 var(--space-3)',transition:'var(--transition-control)'}}>
        {prefix&&<span style={{color:'var(--text-faint)',display:'flex'}}>{prefix}</span>}
        <input style={{flex:1,border:'none',outline:'none',background:'transparent',padding:'11px 0',
          fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--text-strong)',minWidth:0,...style}} {...rest}/>
      </span>
      {(error||hint)&&<span style={{fontSize:'var(--text-2xs)',color:error?'var(--status-critical)':'var(--text-muted)'}}>{error||hint}</span>}
    </label>
  );
}
