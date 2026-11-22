const {Logo,Button}=window.SEResearchLabDesignSystem_d35e15;

function Nav({active,onNav}){
  const links=[['colors','Colors & Contrast'],['logo-suite','Logo Suite'],['slides','Mockups & Slides'],['downloads','Download Hub']];
  return (
    <header style={{position:'sticky',top:0,zIndex:40,background:'rgba(5,12,26,.88)',backdropFilter:'blur(14px)',
      borderBottom:'1px solid rgba(248,250,252,.10)'}}>
      <div style={{height:4,background:'var(--radiant-tangerine)'}}/>
      <div style={{maxWidth:1180,margin:'0 auto',padding:'16px 32px',display:'flex',alignItems:'center',
        justifyContent:'space-between',gap:24}}>
        <a href="#hero" onClick={e=>{e.preventDefault();onNav('hero');}} style={{textDecoration:'none'}}>
          <Logo size={34} tone="light" markSrc="../../assets/seresearch-mark.png"/>
        </a>
        <nav style={{display:'flex',alignItems:'center',gap:28}}>
          {links.map(([id,label])=>(
            <a key={id} href={'#'+id} onClick={e=>{e.preventDefault();onNav(id);}}
              style={{fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'var(--tracking-label)',
                textTransform:'uppercase',textDecoration:'none',
                color:active===id?'var(--radiant-tangerine)':'var(--slate-400)',
                paddingBottom:4,borderBottom:'2px solid '+(active===id?'var(--radiant-tangerine)':'transparent'),
                transition:'var(--transition-control)'}}>{label}</a>
          ))}
          <Button size="sm">Brand kit .zip</Button>
        </nav>
      </div>
    </header>
  );
}
Object.assign(window,{Nav});
