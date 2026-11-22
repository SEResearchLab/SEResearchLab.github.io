import React from 'react';

const sizes={sm:28,md:36,lg:44};

/** Square icon-only control. Pass a Lucide <i data-lucide> or an <img> as children. */
export function IconButton({size='md',variant='outline',label,active=false,children,style,...rest}){
  const s=sizes[size];
  const skin=variant==='solid'
    ?{background:'var(--accent)',color:'#FFFFFF',border:'var(--border-width-card) solid var(--accent)'}
    :variant==='ghost'
      ?{background:active?'var(--surface-sunken)':'transparent',color:'var(--text-body)',border:'var(--border-width-card) solid transparent'}
      :{background:'var(--surface-card)',color:'var(--text-strong)',border:'var(--border-width-card) solid var(--border-hairline)'};
  return (
    <button aria-label={label} title={label}
      style={{width:s,height:s,display:'inline-flex',alignItems:'center',justifyContent:'center',
        borderRadius:'var(--radius-none)',cursor:'pointer',padding:0,
        transition:'var(--transition-control)',...skin,...style}}
      {...rest}>{children}</button>
  );
}
