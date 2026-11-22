import React from 'react';

const fills={white:'var(--surface-card)',paper:'var(--surface-paper)',sunken:'var(--surface-sunken)',inverse:'var(--surface-inverse)'};

/** Square hairline card. The poster's basic container. */
export function Card({fill='white',accentBar=false,pad='var(--card-pad)',children,style,...rest}){
  const inverse=fill==='inverse';
  return (
    <div style={{position:'relative',background:fills[fill],
      border:'var(--border-width-card) solid '+(inverse?'var(--border-inverse)':'var(--border-hairline)'),
      borderRadius:'var(--radius-none)',padding:pad,
      color:inverse?'var(--text-on-inverse)':'var(--text-body)',fontFamily:'var(--font-body)',...style}} {...rest}>
      {accentBar&&<span style={{position:'absolute',left:0,top:0,bottom:0,width:'var(--rule-width-heavy)',background:'var(--accent)'}}/>}
      {children}
    </div>
  );
}
