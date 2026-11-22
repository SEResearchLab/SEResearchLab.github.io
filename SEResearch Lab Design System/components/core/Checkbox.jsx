import React from 'react';

/** Square checkbox. Checked state fills with the accent. */
export function Checkbox({label,checked,defaultChecked,onChange,disabled,description}){
  return (
    <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',
      opacity:disabled?0.45:1,fontFamily:'var(--font-body)'}}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled}
        style={{appearance:'none',width:18,height:18,flex:'0 0 18px',marginTop:2,cursor:'inherit',
          border:'var(--border-width-card) solid var(--border-strong)',borderRadius:'var(--radius-none)',
          background:(checked??defaultChecked)?'var(--accent)':'var(--surface-card)',
          backgroundImage:(checked??defaultChecked)?'linear-gradient(transparent,transparent)':'none',
          boxShadow:(checked??defaultChecked)?'inset 0 0 0 3px var(--accent)':'none',
          transition:'var(--transition-control)'}}/>
      <span style={{display:'flex',flexDirection:'column',gap:2}}>
        <span style={{fontSize:'var(--text-sm)',color:'var(--text-strong)',lineHeight:'var(--leading-snug)'}}>{label}</span>
        {description&&<span style={{fontSize:'var(--text-2xs)',color:'var(--text-muted)'}}>{description}</span>}
      </span>
    </label>
  );
}
