// Keynote slide set, 1280 × 720. Theme: Midnight Navy (nuance 1) unless noted.
const {Logo,Tag,SectionHeader,StatBlock,DataTable,Card,Callout}=window.SEResearchLabDesignSystem_d35e15;

const MONO='var(--font-mono)',DISPLAY='var(--font-display)',BODY='var(--font-body)';

function Frame({theme='dark',children,footer=true,pad=72}){
  const dark=theme==='dark';
  return (
    <div data-theme={dark?'classic-dark':undefined}
      style={{width:1280,height:720,background:dark?'#050C1A':'#FFFFFF',position:'relative',
        padding:pad,display:'flex',flexDirection:'column',fontFamily:BODY,overflow:'hidden',
        color:dark?'#CBD5E1':'var(--text-body)'}}>
      {children}
      {footer&&<div style={{position:'absolute',left:pad,right:pad,bottom:34,display:'flex',
        justifyContent:'space-between',alignItems:'center',fontFamily:MONO,fontSize:12,
        letterSpacing:'.08em',color:dark?'#64748B':'var(--text-faint)',
        borderTop:'1px solid '+(dark?'rgba(248,250,252,.12)':'var(--border-hairline)'),paddingTop:14}}>
        <span>SEResearch Lab · Instituto de Informática — UFRGS</span>
        <span style={{color:'var(--radiant-tangerine)'}}>seresearchlab.github.io</span>
      </div>}
    </div>
  );
}

function TitleSlide(){
  return (
    <Frame footer={false}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
        <Logo size={40} tone="light" markSrc="../assets/seresearch-mark.png"/>
        <div style={{textAlign:'right',fontFamily:MONO,fontSize:13,letterSpacing:'.08em',color:'#F97316'}}>
          ICSE 2026 Keynote Address<br/>
          <span style={{color:'#94A3B8',letterSpacing:'.04em'}}>Human &amp; Social Aspects • Socio-Technical Dynamics</span>
        </div>
      </div>
      <div style={{marginTop:'auto'}}>
        <div style={{width:132,height:5,background:'#F97316',marginBottom:30}}/>
        <h1 style={{margin:0,fontFamily:DISPLAY,fontWeight:700,fontSize:62,lineHeight:1.04,
          letterSpacing:'-.035em',color:'#F8FAFC',maxWidth:'19ch'}}>Why Great Code Is Born From Empathy, Not Just Compilers</h1>
        <p style={{margin:'26px 0 0',fontSize:19,lineHeight:1.4,color:'#94A3B8',maxWidth:'64ch'}}>
          Unpacking 5 years of laboratory empirical findings on developer cognitive load, psychological safety, and team collaboration.</p>
      </div>
      <div style={{marginTop:'auto',paddingTop:30,borderTop:'1px solid rgba(248,250,252,.12)',
        display:'flex',justifyContent:'space-between',alignItems:'flex-end',fontFamily:MONO,fontSize:13,color:'#94A3B8'}}>
        <span>Prof. Dr. Alex Mercer, Director • Instituto de Informática — UFRGS</span>
        <img src="../assets/inf-ufrgs-white.png" alt="" style={{height:44,opacity:.9}}/>
      </div>
    </Frame>
  );
}

function PillarsSlide(){
  const pillars=[
    ['01','Cognitive load','How much a developer must hold in mind to make a change safely — and what tooling adds to that budget rather than spending it.'],
    ['02','Psychological safety','Whether an engineer can say "I do not understand this" in a review thread without paying for it later.'],
    ['03','Socio-technical dynamics','Where the shape of a team and the shape of its architecture start to explain each other.']
  ];
  return (
    <Frame theme="light">
      <SectionHeader number="02" title="Research pillars"
        kicker="Three questions the lab keeps returning to, across five years of empirical work."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginTop:44}}>
        {pillars.map(([n,t,d])=>(
          <Card key={n} fill={n==='02'?'paper':'white'} accentBar={n==='02'} pad="var(--card-pad-lg)">
            <div style={{fontFamily:MONO,fontWeight:700,fontSize:15,color:'var(--accent-ink)',marginBottom:14}}>{n}</div>
            <div style={{fontFamily:DISPLAY,fontWeight:600,fontSize:26,letterSpacing:'-.018em',
              color:'var(--text-strong)',marginBottom:12}}>{t}</div>
            <p style={{margin:0,fontSize:15,lineHeight:1.4,color:'var(--text-muted)'}}>{d}</p>
          </Card>
        ))}
      </div>
    </Frame>
  );
}

function FindingsSlide(){
  return (
    <Frame theme="light">
      <SectionHeader number="05" title="Empirical findings"
        kicker="1,204 pull requests across four authorship conditions; 12 follow-up interviews."/>
      <div style={{marginTop:30}}>
        <StatBlock label="Key finding" value="68%"
          caption="of reviewers re-read agent-authored diffs at least twice before approving"
          items={['2.4× longer on unfamiliar files','41% asked for a written rationale','1 in 5 escalated to a second reviewer']}/>
      </div>
      <div style={{marginTop:30}}>
        <DataTable columns={['Condition','n','Review time (min)','Defects found','Rationale asked','p']} highlightRow={1}
          rows={[['Human-authored','104','18.2','3.1','12%','—'],
                 ['Agent-authored, labelled','97','24.7','3.6','41%','0.004'],
                 ['Agent-authored, unlabelled','101','17.9','2.4','9%','0.021'],
                 ['Mixed authorship','88','22.4','3.3','27%','0.14']]}
          note="Mixed-effects model with reviewer as a random effect; p-values Holm-corrected."/>
      </div>
    </Frame>
  );
}

function QuoteSlide(){
  return (
    <Frame>
      <div style={{margin:'auto 0',maxWidth:'26ch'}}>
        <div style={{width:132,height:5,background:'#F97316',marginBottom:36}}/>
        <blockquote style={{margin:0,fontFamily:DISPLAY,fontWeight:600,fontSize:54,lineHeight:1.1,
          letterSpacing:'-.03em',color:'#F8FAFC'}}>
          Provenance is a review signal, not metadata.</blockquote>
        <p style={{margin:'28px 0 0',fontSize:19,lineHeight:1.4,color:'#94A3B8',maxWidth:'50ch'}}>
          Tooling that hides it is making a decision on the reviewer's behalf.</p>
      </div>
      <img src="../assets/seresearch-mark.png" alt="" style={{position:'absolute',right:-70,bottom:60,width:420,opacity:.1}}/>
    </Frame>
  );
}

function ClosingSlide(){
  return (
    <Frame footer={false}>
      <div style={{margin:'auto 0',display:'flex',flexDirection:'column',gap:34}}>
        <Logo lockup="stacked" size={64} tone="light" tagline markSrc="../assets/seresearch-mark.png"
          style={{alignSelf:'flex-start'}}/>
        <div style={{width:132,height:5,background:'#F97316'}}/>
        <div style={{display:'flex',gap:56,fontFamily:MONO,fontSize:15,color:'#94A3B8',letterSpacing:'.04em'}}>
          <span>name.surname@inf.ufrgs.br</span>
          <span>seresearchlab.github.io</span>
          <span style={{color:'#F97316'}}>Replication package available</span>
        </div>
      </div>
      <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
        <span style={{fontFamily:MONO,fontSize:12,letterSpacing:'.08em',color:'#64748B'}}>Thank you · Questions welcome</span>
        <img src="../assets/inf-ufrgs-white.png" alt="" style={{height:52,opacity:.9}}/>
      </div>
    </Frame>
  );
}
Object.assign(window,{Frame,TitleSlide,PillarsSlide,FindingsSlide,QuoteSlide,ClosingSlide});
