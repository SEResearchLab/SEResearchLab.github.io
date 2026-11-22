const {SectionHeader,Card,Button,Logo}=window.SEResearchLabDesignSystem_d35e15;

const PACKS=[
  ['Complete Brand Kit (.ZIP)','Contains all 4 lockups (Horizontal, Stacked, Lab Emblem, Mark Only) rendered across all 7 color nuance palettes in vector SVG and 2048px PNG.','Download Brand Kit (.ZIP)','primary'],
  ['Presentation Decks (.PPTX)','Ready-to-present PowerPoint slide decks featuring Title Keynote, Research Pillars, Empirical Findings, and Closing slides for all 5 projection themes.','Download Master Presentation (.PPTX)','secondary'],
  ['Google Slides 1-Click Upload','Open Google Slides directly to drag-and-drop the downloaded .pptx deck with 100% native vector shape and typography fidelity.','Launch Google Slides','outline']
];

function DownloadHub({onCopy}){
  return (
    <section id="downloads" style={{padding:'88px 32px',background:'var(--surface-sunken)'}}>
      <div style={{maxWidth:1180,margin:'0 auto'}}>
        <SectionHeader number="04" title="Complete Download Package Archive"
          kicker="Batch export all assets for publication, slide decks, social media, and web development in one click."/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginTop:40}}>
          {PACKS.map(([t,d,cta,v])=>(
            <Card key={t} pad="var(--card-pad-lg)" style={{display:'flex',flexDirection:'column',gap:14}}>
              <div style={{height:3,background:'var(--rule-accent)',width:64}}/>
              <div style={{fontFamily:'var(--font-display)',fontSize:20,fontWeight:600,letterSpacing:'-.012em',
                color:'var(--text-strong)'}}>{t}</div>
              <p style={{margin:0,fontSize:13.5,lineHeight:1.45,color:'var(--text-muted)',flex:1}}>{d}</p>
              <Button variant={v} fullWidth>{cta}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer style={{background:'var(--dark-void)',padding:'48px 32px',borderTop:'4px solid var(--radiant-tangerine)'}}>
      <div style={{maxWidth:1180,margin:'0 auto',display:'flex',justifyContent:'space-between',
        alignItems:'center',gap:32,flexWrap:'wrap'}}>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <Logo size={30} tone="light" markSrc="../../assets/seresearch-mark.png"/>
          <span style={{fontSize:13,color:'var(--slate-400)'}}>Human &amp; Social Aspects of Software Engineering</span>
          <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--slate-500)',letterSpacing:'.06em'}}>
            Option 04 Visual System • Midnight Navy &amp; Radiant Tangerine</span>
        </div>
        <img src="../../assets/inf-ufrgs-white.png" alt="Instituto de Informática — UFRGS" style={{height:58,opacity:.9}}/>
      </div>
    </footer>
  );
}
Object.assign(window,{DownloadHub,Footer});
