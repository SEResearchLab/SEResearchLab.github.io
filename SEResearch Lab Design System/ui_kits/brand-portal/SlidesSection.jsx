const {SectionHeader,Card,Button,Tag,Logo}=window.SEResearchLabDesignSystem_d35e15;

const THEMES=[
  ['Midnight Navy',{page:'#0B192C',ink:'#F8FAFC',sub:'#94A3B8',accent:'#F97316',tone:'light'}],
  ['Crisp Light',{page:'#FFFFFF',ink:'#0B192C',sub:'#64748B',accent:'#EA580C',tone:'navy'}],
  ['Dark Slate Tech',{page:'#101B33',ink:'#F8FAFC',sub:'#94A3B8',accent:'#FF6B35',tone:'light'}],
  ['Editorial Paper',{page:'#FAF8F5',ink:'#111827',sub:'#64748B',accent:'#B45309',tone:'navy'}],
  ['Solar Amber',{page:'#040913',ink:'#F8FAFC',sub:'#94A3B8',accent:'#F59E0B',tone:'light'}]
];

const MOCKUPS=[
  ['Academic Paper Header','ACM/IEEE standard 2-column format. Mark positioned at 36px height in monochrome midnight navy (#0B192C) with high legibility.'],
  ['Laptop Vinyl Sticker','3" × 3" die-cut matte sticker with UV-protective laminate, radiant orange pulse wave on midnight blue backing.'],
  ['GitHub README Banner','Full-width SVG header banner featuring the horizontal lockup and open-source human & social telemetry badges.'],
  ['Embroidered Swag','Tactile embroidery spec on charcoal and navy hoodies using high-density Madeira Polyneon thread (Hex: #F97316).']
];

function SlidesSection(){
  const [t,setT]=React.useState(0);
  const th=THEMES[t][1];
  return (
    <section id="slides" style={{padding:'88px 32px',background:'var(--surface-page)'}}>
      <div style={{maxWidth:1180,margin:'0 auto'}}>
        <SectionHeader number="03" title="Mockups & Conference Presentation Slides"
          kicker="Ready-to-use 16:9 presentation slide decks with native Option 04 branding, PowerPoint (.pptx) downloads, Google Slides upload workflows, and real-world mockups."/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap',margin:'36px 0 20px'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',
              color:'var(--text-muted)'}}>Slide Theme:</span>
            {THEMES.map(([n],i)=>(
              <button key={n} onClick={()=>setT(i)} style={{cursor:'pointer',padding:'8px 14px',fontFamily:'var(--font-mono)',
                fontSize:11,letterSpacing:'.08em',textTransform:'uppercase',
                background:t===i?'var(--accent)':'transparent',color:t===i?'#FFF':'var(--text-body)',
                border:'2px solid '+(t===i?'var(--accent)':'var(--border-hairline)'),transition:'var(--transition-control)'}}>{n}</button>
            ))}
          </div>
          <div style={{display:'flex',gap:10}}>
            <Button variant="outline" size="sm">Open in Google Slides</Button>
            <Button size="sm">Download .PPTX Deck</Button>
          </div>
        </div>

        <Card pad="0">
          <div style={{aspectRatio:'16/9',background:th.page,padding:'56px 64px',display:'flex',
            flexDirection:'column',justifyContent:'space-between'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <Logo size={34} tone={th.tone} markSrc="../../assets/seresearch-mark.png"/>
              <div style={{textAlign:'right',fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.08em',color:th.accent}}>
                ICSE 2026 Keynote Address<br/>
                <span style={{color:th.sub,letterSpacing:'.04em'}}>Human &amp; Social Aspects • Socio-Technical Dynamics</span>
              </div>
            </div>
            <div>
              <div style={{height:4,background:th.accent,width:120,marginBottom:26}}/>
              <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:700,fontSize:52,lineHeight:1.05,
                letterSpacing:'-.032em',color:th.ink,maxWidth:'20ch'}}>Why Great Code Is Born From Empathy, Not Just Compilers</h3>
              <p style={{margin:'22px 0 0',fontSize:17,lineHeight:1.4,color:th.sub,maxWidth:'62ch'}}>
                Unpacking 5 years of laboratory empirical findings on developer cognitive load, psychological safety, and team collaboration.</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',
              borderTop:'1px solid '+(th.tone==='light'?'rgba(248,250,252,.16)':'rgba(11,25,44,.14)'),paddingTop:16,
              fontFamily:'var(--font-mono)',fontSize:12,color:th.sub}}>
              <span>Prof. Dr. Alex Mercer, Director • Instituto de Informática — UFRGS</span>
              <span style={{color:th.accent}}>seresearchlab.org</span>
            </div>
          </div>
        </Card>

        <h3 style={{margin:'64px 0 20px',fontFamily:'var(--font-display)',fontSize:24,fontWeight:600,
          letterSpacing:'-.012em',color:'var(--text-strong)'}}>Physical &amp; Digital Identity Mockups</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>
          {MOCKUPS.map(([t2,d],i)=>(
            <Card key={t2} fill={i%2?'paper':'white'}>
              <Tag tone="accent" style={{marginBottom:12}}>{String(i+1).padStart(2,'0')}</Tag>
              <div style={{fontFamily:'var(--font-display)',fontSize:17,fontWeight:600,letterSpacing:'-.012em',
                color:'var(--text-strong)',marginBottom:8}}>{t2}</div>
              <p style={{margin:0,fontSize:13,lineHeight:1.4,color:'var(--text-muted)'}}>{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{SlidesSection});
