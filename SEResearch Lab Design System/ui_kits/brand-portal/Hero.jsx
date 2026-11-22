const {Button,Tag}=window.SEResearchLabDesignSystem_d35e15;

function Hero(){
  return (
    <section id="hero" style={{background:'var(--dark-void)',padding:'96px 32px 104px',position:'relative',overflow:'hidden'}}>
      <div style={{maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'1.25fr .75fr',gap:64,alignItems:'center'}}>
        <div>
          <Tag tone="accent" style={{marginBottom:24}}>Option 04 • Human Logic &amp; Pulse Wave</Tag>
          <h1 style={{margin:'0 0 24px',fontFamily:'var(--font-display)',fontWeight:700,fontSize:72,lineHeight:1.02,
            letterSpacing:'-.035em',color:'#F8FAFC'}}>Visual Identity &amp;<br/>Download Suite</h1>
          <p style={{margin:'0 0 36px',maxWidth:'58ch',fontSize:18,lineHeight:1.5,color:'var(--slate-400)'}}>
            Welcome to the official identity specifications for <strong style={{color:'#F8FAFC',fontWeight:600}}>SEResearch Lab</strong>.
            Exploring the human and social aspects of software engineering by uniting deep blue engineering rigor with
            radiant orange developer empathy. This self-contained page contains all color specifications, logo lockup
            downloads (Horizontal, Stacked, Lab Emblem, Mark Only), and conference presentation slide decks.
          </p>
          <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
            <Button size="lg">Download Complete Brand Kit (.ZIP)</Button>
            <Button size="lg" variant="outline" style={{color:'#F8FAFC',borderColor:'rgba(248,250,252,.28)'}}>Download Conference Slides (.PPTX)</Button>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img src="../../assets/seresearch-mark.png" alt="SEResearch Lab mark" style={{width:'100%',maxWidth:340}}/>
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{Hero});
