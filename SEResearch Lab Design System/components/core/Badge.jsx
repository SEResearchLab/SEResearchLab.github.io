import React from 'react';

const map={
  info:['var(--navy-600)','rgba(30,62,98,.10)'],
  positive:['var(--status-positive)','rgba(21,128,61,.10)'],
  warning:['var(--status-warning)','rgba(180,83,9,.10)'],
  critical:['var(--status-critical)','rgba(185,28,28,.10)'],
  accent:['var(--accent-ink)','rgba(249,115,22,.12)']
};

/** Status pill with a leading dot. */
export function Badge({status='info',children,style}){
  const [fg,bg]=map[status];
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,background:bg,color:fg,
    fontFamily:'var(--font-mono)',fontSize:'var(--text-3xs)',letterSpacing:'var(--tracking-label)',
    textTransform:'uppercase',padding:'4px 10px',borderRadius:'var(--radius-pill)',...style}}>
    <span style={{width:6,height:6,borderRadius:'var(--radius-circle)',background:fg}}/>{children}</span>;
}
