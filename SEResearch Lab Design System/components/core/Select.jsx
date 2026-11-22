import React from 'react';

/** Native select with the same mono caption as Input. */
export function Select({label,options=[],hint,style,...rest}){
  return (
    <label style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',fontFamily:'var(--font-body)'}}>
      {label&&<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-3xs)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>{label}</span>}
      <select style={{appearance:'none',background:'var(--surface-card)',border:'var(--border-width-card) solid var(--border-hairline)',
        borderRadius:'var(--radius-none)',padding:'11px var(--space-3)',fontFamily:'var(--font-body)',
        fontSize:'var(--text-sm)',color:'var(--text-strong)',cursor:'pointer',...style}} {...rest}>
        {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;
          return <option key={v} value={v}>{l}</option>;})}
      </select>
      {hint&&<span style={{fontSize:'var(--text-2xs)',color:'var(--text-muted)'}}>{hint}</span>}
    </label>
  );
}
