const {SectionHeader,Card,Button,Logo,Tag}=window.SEResearchLabDesignSystem_d35e15;

const LOCKUPS=[['horizontal','Horizontal Lockup'],['stacked','Stacked Lockup'],['emblem','Lab Emblem (Crest)'],['mark','Mark Only']];
const CANVASES=[['#050C1A','Midnight Void','light'],['#101B33','Dark Slate','light'],['#FFFFFF','Clean White','navy'],['#FAF8F5','Warm Paper','navy']];

function LogoSuite(){
  const [lockup,setLockup]=React.useState('horizontal');
  const [canvas,setCanvas]=React.useState(0);
  const [bg,label,tone]=CANVASES[canvas];
  const mark='../../assets/seresearch-mark.png';
  const preview=lockup==='emblem'
    ? <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,padding:'26px 40px',
        border:'3px solid '+(tone==='light'?'rgba(248,250,252,.5)':'var(--midnight-navy)')}}>
        <img src={mark} style={{height:64}}/>
        <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:26,letterSpacing:'-.024em',
          color:tone==='light'?'#F8FAFC':'var(--midnight-navy)'}}>SEResearch<span style={{fontWeight:300}}> Lab</span></span>
        <span style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',
          color:tone==='light'?'var(--slate-400)':'var(--text-muted)'}}>INF · UFRGS</span>
      </div>
    : <Logo lockup={lockup==='mark'?'mark':lockup} size={lockup==='stacked'?66:60}
        tone={tone==='light'?'light':'navy'} markSrc={mark}/>;

  return (
    <section id="logo-suite" style={{padding:'88px 32px',background:'var(--surface-sunken)'}}>
      <div style={{maxWidth:1180,margin:'0 auto'}}>
        <SectionHeader number="02" title="Logo Suite Download Center"
          kicker="Download all 4 official lockups — Horizontal, Stacked, Lab Emblem (Academic Crest), and Mark Only — in clean vector SVG and ultra-resolution 2K/4K PNG."/>
        <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:24,marginTop:40,alignItems:'start'}}>
          <Card style={{display:'flex',flexDirection:'column',gap:22}}>
            <div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',
                color:'var(--text-muted)',marginBottom:10}}>Select Lockup:</div>
              <div style={{display:'flex',flexDirection:'column'}}>
                {LOCKUPS.map(([v,l])=>(
                  <button key={v} onClick={()=>setLockup(v)} style={{textAlign:'left',padding:'11px 14px',cursor:'pointer',
                    fontFamily:'var(--font-body)',fontSize:13.5,
                    background:lockup===v?'var(--surface-inverse)':'transparent',
                    color:lockup===v?'#F8FAFC':'var(--text-body)',
                    borderStyle:'solid',borderWidth:'2px 2px 0 2px',
                    borderColor:lockup===v?'var(--surface-inverse)':'var(--border-hairline)',
                    transition:'var(--transition-control)'}}>{l}</button>
                ))}
                <div style={{borderBottom:'2px solid var(--border-hairline)'}}/>
              </div>
            </div>
            <div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',
                color:'var(--text-muted)',marginBottom:10}}>Preview Canvas:</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                {CANVASES.map(([c,l],i)=>(
                  <button key={c} onClick={()=>setCanvas(i)} title={l}
                    style={{height:40,background:c,cursor:'pointer',
                      border:'2px solid '+(canvas===i?'var(--accent)':'var(--border-hairline)'),
                      boxShadow:canvas===i?'var(--shadow-focus)':'none',transition:'var(--transition-control)'}}/>
                ))}
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              <Button fullWidth>Download Vector SVG</Button>
              <Button fullWidth variant="outline">Download 2048px PNG</Button>
            </div>
          </Card>
          <Card pad="0">
            <div style={{background:bg,minHeight:340,display:'flex',alignItems:'center',justifyContent:'center',padding:48}}>
              {preview}
            </div>
            <div style={{padding:'14px 20px',borderTop:'2px solid var(--border-hairline)',display:'flex',
              justifyContent:'space-between',alignItems:'center',fontSize:13,color:'var(--text-muted)'}}>
              <span>Currently viewing: <strong style={{color:'var(--text-strong)'}}>{LOCKUPS.find(l=>l[0]===lockup)[1]}</strong></span>
              <Tag>{label}</Tag>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{LogoSuite});
