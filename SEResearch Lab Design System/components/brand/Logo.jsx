import React from 'react';

/**
 * The SEResearch Lab lockup: pulse-wave mark plus wordmark.
 * The mark is the raster export from the brand kit (assets/seresearch-mark.png).
 */
export function Logo({lockup='horizontal',size=40,tone='navy',tagline=false,markSrc='assets/seresearch-mark.png',style}){
  const ink=tone==='light'?'#F8FAFC':'var(--text-strong)';
  const sub=tone==='light'?'var(--slate-400)':'var(--text-muted)';
  const stacked=lockup==='stacked';
  const mark=<img src={markSrc} alt="SEResearch Lab" style={{height:size,width:'auto',display:'block'}}/>;
  if(lockup==='mark') return <span style={style}>{mark}</span>;
  return (
    <span style={{display:'inline-flex',flexDirection:stacked?'column':'row',alignItems:stacked?'center':'center',
      gap:stacked?'var(--space-3)':'var(--space-4)',textAlign:stacked?'center':'left',...style}}>
      {mark}
      <span style={{display:'flex',flexDirection:'column',gap:2}}>
        <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-bold)',
          fontSize:size*0.62,lineHeight:1,letterSpacing:'var(--tracking-display)',color:ink}}>
          SEResearch<span style={{fontWeight:'var(--weight-light)'}}> Lab</span>
        </span>
        {tagline&&<span style={{fontFamily:'var(--font-body)',fontSize:Math.max(10,size*0.24),
          color:sub,letterSpacing:'var(--tracking-body)'}}>Human &amp; Social Aspects of Software Engineering</span>}
      </span>
    </span>
  );
}
