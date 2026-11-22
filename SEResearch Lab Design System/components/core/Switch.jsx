import React from 'react';

/** Pill toggle — the one place the system allows a fully rounded shape. */
export function Switch({checked=false,onChange,label,disabled}){
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'not-allowed':'pointer',
      opacity:disabled?0.45:1,fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--text-strong)'}}>
      <span onClick={()=>!disabled&&onChange&&onChange(!checked)}
        style={{width:40,height:22,borderRadius:'var(--radius-pill)',padding:3,display:'inline-flex',
          background:checked?'var(--accent)':'var(--slate-300)',transition:'background-color var(--duration-fast) var(--ease-standard)'}}>
        <span style={{width:16,height:16,borderRadius:'var(--radius-circle)',background:'#FFFFFF',
          transform:checked?'translateX(18px)':'translateX(0)',
          transition:'transform var(--duration-fast) var(--ease-standard)'}}/>
      </span>
      {label}
    </label>
  );
}
