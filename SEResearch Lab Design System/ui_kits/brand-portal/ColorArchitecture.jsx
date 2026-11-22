const {SectionHeader,Card,DataTable,Tag}=window.SEResearchLabDesignSystem_d35e15;

const CORE=[
  {hex:'#0B192C',name:'Midnight Navy (Primary)',desc:'Symbolizes deep software infrastructure, algorithmic rigor, and academic prestige. Forms the code bracket anchors and primary typography.',meta:[['RGB','11, 25, 44'],['CMYK','75, 43, 0, 83'],['HSL','215°, 60%, 11%'],['Contrast','14.8:1 (AAA)']]},
  {hex:'#F97316',name:'Radiant Tangerine (Accent)',desc:'Represents the human heartbeat, psychological safety, developer cognitive flow, and social empathy in software engineering.',meta:[['RGB','249, 115, 22'],['CMYK','0, 54, 91, 2'],['HSL','25°, 95%, 53%'],['Pantone','Orange 021 C']]},
  {hex:'#1E3E62',name:'Oceanic Indigo (Syntax Slate)',desc:'Provides the mid-tone foundation for code bracket strokes on dark mode backgrounds.',meta:[['RGB','30, 62, 98'],['CMYK','69, 37, 0, 62'],['HSL','212°, 53%, 25%'],['Usage','Code Brackets']]},
  {hex:'#FB923C',name:'Ember Warmth (Human Node)',desc:'Illuminates the human collaborator head node at the apex of the central pulse wave.',meta:[['RGB','251, 146, 60'],['CMYK','0, 42, 76, 2'],['HSL','27°, 96%, 61%'],['Usage','Pulse Apex Node']]}
];

const NUANCES=[
  ['1. Classic Identity (Dark)','#0B192C (Midnight)','#F97316 (Radiant)','#050C1A (Dark Void)','Default dark conference keynotes, lab portal dark mode'],
  ['2. Classic Identity (Light)','#0B192C (Midnight)','#F97316 (Radiant)','#FFFFFF (Clean White)','Formal university stationery, IEEE/ACM publication headers'],
  ['3. Solar Rigor (Oceanic)','#071224 (Ocean Ink)','#EA580C (Solar Flare)','#040913 (Deep Sea)','Auditorium projectors with high ambient lumination'],
  ['4. Cyber Humanist (Cobalt)','#101B33 (Cobalt)','#FF6B35 (Sunset Coral)','#0A0F1F (Night Sky)','Interactive developer tools, CLI badges, and IDE themes'],
  ['5. Nordic Empathy (Paper)','#111827 (Slate Ink)','#F59E0B (Golden Ochre)','#FAF8F5 (Warm Paper)','Academic symposiums, grant proposals, thesis books'],
  ['6. Monochrome Midnight','#0B192C (Single Ink)','#0B192C (Single Ink)','#FFFFFF (Paper White)','Single-color offset printing, formal university seals'],
  ['7. Monochrome Stencil White','#FFFFFF (Pure White)','#FFFFFF (Pure White)','Transparent / Dark','Video recording watermarks, dark photography overlays']
];

function ColorArchitecture({onCopy}){
  return (
    <section id="colors" style={{padding:'88px 32px',background:'var(--surface-page)'}}>
      <div style={{maxWidth:1180,margin:'0 auto'}}>
        <SectionHeader number="01" title="Color Architecture & Nuance Specifications"
          kicker="Complete color theory, precision codes (HEX, RGB, HSL, CMYK), accessibility contrast scores, and tested nuance palettes for SEResearch Lab."/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24,marginTop:40}}>
          {CORE.map(c=>(
            <Card key={c.hex} pad="0" style={{display:'flex',flexDirection:'column'}}>
              <button onClick={()=>onCopy(c.hex)} title="Copy to clipboard"
                style={{height:132,background:c.hex,border:'none',cursor:'pointer',display:'block',width:'100%'}}/>
              <div style={{padding:'var(--card-pad)',display:'flex',flexDirection:'column',gap:10,flex:1}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:16,fontWeight:600,color:'var(--text-strong)'}}>{c.hex}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:17,fontWeight:600,letterSpacing:'-.012em',color:'var(--text-strong)'}}>{c.name}</div>
                <p style={{margin:0,fontSize:13,lineHeight:1.4,color:'var(--text-muted)',flex:1}}>{c.desc}</p>
                <dl style={{margin:0,display:'grid',gridTemplateColumns:'auto 1fr',gap:'4px 10px',
                  fontFamily:'var(--font-mono)',fontSize:11,borderTop:'1px solid var(--border-hairline)',paddingTop:10}}>
                  {c.meta.map(([k,v])=>(<React.Fragment key={k}>
                    <dt style={{color:'var(--text-faint)'}}>{k}</dt><dd style={{margin:0,color:'var(--text-body)',textAlign:'right'}}>{v}</dd>
                  </React.Fragment>))}
                </dl>
              </div>
            </Card>
          ))}
        </div>

        <h3 style={{margin:'64px 0 6px',fontFamily:'var(--font-display)',fontSize:24,fontWeight:600,
          letterSpacing:'-.012em',color:'var(--text-strong)'}}>Tested Color Nuance Variations</h3>
        <p style={{margin:'0 0 24px',fontSize:14,color:'var(--text-muted)'}}>Each nuance has been mathematically verified across physical projection, screen display, and print media.</p>
        <Card pad="0" style={{overflow:'hidden'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-body)',fontSize:13}}>
            <thead><tr style={{background:'var(--surface-sunken)'}}>
              {['Nuance Name','Primary Ink','Accent Flare','Canvas Background','Recommended Deployment'].map(h=>(
                <th key={h} style={{textAlign:'left',padding:'12px 16px',fontFamily:'var(--font-mono)',fontSize:11,
                  textTransform:'uppercase',letterSpacing:'.1em',color:'var(--text-muted)',fontWeight:500,
                  borderBottom:'2px solid var(--border-strong)'}}>{h}</th>))}
            </tr></thead>
            <tbody>{NUANCES.map(r=>(
              <tr key={r[0]}>
                <td style={{padding:'12px 16px',borderBottom:'1px solid var(--border-hairline)',fontWeight:600,color:'var(--text-strong)'}}>{r[0]}</td>
                {r.slice(1,4).map((cell,i)=>{const hex=(cell.match(/#[0-9A-F]{6}/i)||[])[0];
                  return <td key={i} style={{padding:'12px 16px',borderBottom:'1px solid var(--border-hairline)',
                    fontFamily:'var(--font-mono)',fontSize:11.5,color:'var(--text-body)',whiteSpace:'nowrap'}}>
                    {hex&&<span style={{display:'inline-block',width:11,height:11,background:hex,marginRight:7,
                      border:'1px solid var(--border-strong)',verticalAlign:'-1px'}}/>}{cell}</td>;})}
                <td style={{padding:'12px 16px',borderBottom:'1px solid var(--border-hairline)',color:'var(--text-muted)'}}>{r[4]}</td>
              </tr>))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}
Object.assign(window,{ColorArchitecture});
