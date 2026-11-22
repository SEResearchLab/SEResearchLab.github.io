import React from 'react';

/** Underline tabs — the active tab carries the orange rule. */
export function Tabs({items=[],value,onChange,style}){
  return (
    <div role="tablist" style={{display:'flex',gap:'var(--space-6)',borderBottom:'1px solid var(--border-hairline)',...style}}>
      {items.map(it=>{const v=typeof it==='string'?it:it.value,l=typeof it==='string'?it:it.label;const on=v===value;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(v)}
            style={{background:'none',border:'none',cursor:'pointer',padding:'0 0 var(--space-3)',
              fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',textTransform:'uppercase',
              letterSpacing:'var(--tracking-label)',color:on?'var(--text-strong)':'var(--text-muted)',
              boxShadow:on?'inset 0 -3px 0 var(--accent)':'none',transition:'var(--transition-control)'}}>{l}</button>
        );})}
    </div>
  );
}
