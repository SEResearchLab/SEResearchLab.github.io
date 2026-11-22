import React from 'react';

const sizes={
  sm:{fontSize:'var(--text-2xs)',padding:'7px 14px',letterSpacing:'var(--tracking-label)'},
  md:{fontSize:'var(--text-xs)',padding:'11px 20px',letterSpacing:'var(--tracking-label)'},
  lg:{fontSize:'var(--text-sm)',padding:'15px 28px',letterSpacing:'var(--tracking-label)'}
};

const variants={
  primary:{background:'var(--accent)',color:'#FFFFFF',border:'var(--border-width-card) solid var(--accent)'},
  secondary:{background:'var(--surface-inverse)',color:'var(--text-on-inverse)',border:'var(--border-width-card) solid var(--surface-inverse)'},
  outline:{background:'transparent',color:'var(--text-strong)',border:'var(--border-width-card) solid var(--border-strong)'},
  ghost:{background:'transparent',color:'var(--text-accent)',border:'var(--border-width-card) solid transparent'}
};

/** Square-cornered action button. Mono label, wide tracking, uppercase. */
export function Button({variant='primary',size='md',disabled=false,fullWidth=false,as='button',href,children,style,...rest}){
  const Tag=as==='a'?'a':'button';
  return (
    <Tag
      href={href}
      disabled={Tag==='button'?disabled:undefined}
      style={{
        fontFamily:'var(--font-mono)',fontWeight:'var(--weight-medium)',textTransform:'uppercase',
        borderRadius:'var(--radius-none)',cursor:disabled?'not-allowed':'pointer',
        display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
        textDecoration:'none',lineHeight:1,whiteSpace:'nowrap',
        transition:'var(--transition-control)',opacity:disabled?0.42:1,
        width:fullWidth?'100%':'auto',
        ...sizes[size],...variants[variant],...style
      }}
      {...rest}
    >{children}</Tag>
  );
}
