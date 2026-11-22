// A0 portrait conference poster, rebuilt 1:1 from
// SEResearchLab_Poster_A0-Portrait_Crisp-Light.pptx (3179 × 4493 px at 96 dpi).
// Every coordinate, fill and type size below is read from that file.
const pt=n=>(n*4/3)+'px';
const abs=(x,y,w,h,extra={})=>({position:'absolute',left:x,top:y,width:w,...(h?{height:h}:{}),...extra});

const MONO='var(--font-mono)',DISPLAY='var(--font-display)',BODY='var(--font-body)';
const NAVY='#0B192C',ORANGE='#F97316',FLARE='#EA580C',PAPER='#FAF8F5',LINE='#D8DEE6',
      SLATE400='#94A3B8',SLATE500='#64748B',SLATE700='#334155',SNOW='#F8FAFC',FIG='#F5F7FA';

function Rule({x,y,w}){return <div style={abs(x,y,w,9,{background:FLARE})}/>;}

function Panel({x,y,w,h,fill='#FFFFFF',children}){
  return <div style={abs(x,y,w,h,{background:fill,border:'2px solid '+LINE})}>{children}</div>;
}

function Head({n,title,x,y,w}){
  return (<>
    <Rule x={x} y={y} w={w}/>
    <div style={abs(x,y+36,154,58,{fontFamily:MONO,fontWeight:700,fontSize:pt(26),color:FLARE,lineHeight:1})}>{n}</div>
    <div style={abs(x+129,y+25,w-129,null,{fontFamily:DISPLAY,fontWeight:600,fontSize:pt(44),lineHeight:1.06,
      letterSpacing:'-.022em',color:NAVY})}>{title}</div>
  </>);
}

function Body({x,y,w,children,size=23,color=SLATE700,gap=26}){
  return <div style={abs(x,y,w,null,{fontFamily:BODY,fontSize:pt(size),lineHeight:1.35,color,
    display:'flex',flexDirection:'column',gap})}>{children}</div>;
}

function RQ({x,y,w,tag,text}){
  return (<div style={abs(x,y,w,211,{background:SNOW,border:'2px solid '+LINE})}>
    <div style={{position:'absolute',left:0,top:0,bottom:0,width:11,background:FLARE}}/>
    <div style={{padding:'21px 30px 0 39px'}}>
      <div style={{fontFamily:MONO,fontWeight:700,fontSize:pt(21),color:FLARE,letterSpacing:'.04em'}}>{tag}</div>
      <div style={{marginTop:10,fontFamily:BODY,fontSize:pt(22),lineHeight:1.34,color:NAVY}}>{text}</div>
    </div>
  </div>);
}

function Poster(){
  return (
    <div style={{position:'relative',width:3179,height:4493,background:'#FFFFFF',color:NAVY,overflow:'hidden'}}>
      {/* ── Masthead ── */}
      <div style={abs(0,0,3179,706,{background:NAVY})}/>
      <div style={abs(0,706,3179,21,{background:ORANGE})}/>
      <img src="../../assets/seresearch-mark.png" alt="" style={abs(154,91,235,null)}/>
      <div style={abs(437,110,1200,null,{fontFamily:DISPLAY,fontWeight:700,fontSize:pt(46),letterSpacing:'-.03em',color:'#FFFFFF',lineHeight:1})}>
        SEResearch<span style={{fontWeight:300}}> Lab</span></div>
      <div style={abs(437,216,1248,null,{fontFamily:BODY,fontSize:pt(22),color:SLATE400})}>
        Human &amp; Social Aspects of Software Engineering</div>
      <img src="../../assets/inf-ufrgs-white.png" alt="" style={abs(2583,110,333,null)}/>
      <div style={abs(2142,317,883,null,{fontFamily:BODY,fontSize:pt(21),color:SLATE400,textAlign:'right'})}>
        Instituto de Informática · UFRGS</div>

      {/* ── Title block ── */}
      <div style={abs(154,341,2871,null,{fontFamily:DISPLAY,fontWeight:700,fontSize:pt(86),lineHeight:1.06,
        letterSpacing:'-.03em',color:SNOW})}>Poster title goes here, in one or two lines at most</div>
      <div style={abs(154,562,2295,null,{fontFamily:BODY,fontSize:pt(26),color:SNOW})}>
        Author Name¹ &nbsp;·&nbsp; Author Name¹ &nbsp;·&nbsp; Author Name²
        <span style={{color:SLATE400,fontSize:pt(21),marginLeft:40}}>¹ INF/UFRGS &nbsp;&nbsp; ² Affiliation</span></div>
      <div style={abs(2161,566,864,null,{fontFamily:MONO,fontWeight:500,fontSize:pt(24),color:FLARE,textAlign:'right'})}>
        EMSE / ICSE 2027 &nbsp;·&nbsp; Poster track</div>

      {/* ── Key finding band ── */}
      <div style={abs(154,782,2871,331,{background:PAPER,border:'2px solid '+LINE})}>
        <div style={{position:'absolute',left:0,top:0,bottom:0,width:15,background:ORANGE}}/>
        <div style={{position:'absolute',left:81,top:41,fontFamily:MONO,fontWeight:600,fontSize:pt(23),
          letterSpacing:'.18em',color:FLARE}}>KEY FINDING</div>
        <div style={{position:'absolute',left:76,top:70,fontFamily:DISPLAY,fontWeight:700,fontSize:pt(132),
          lineHeight:1,letterSpacing:'-.05em',color:FLARE}}>68%</div>
        <div style={{position:'absolute',left:806,top:96,width:1286,fontFamily:BODY,fontSize:pt(30),
          lineHeight:1.3,color:NAVY}}>of reviewers re-read agent-authored diffs at least twice before approving</div>
        <div style={{position:'absolute',left:2169,top:82,bottom:82,width:5,background:'#CBD5E1'}}/>
        <div style={{position:'absolute',left:2256,top:87,width:620,fontFamily:BODY,fontSize:pt(22),
          lineHeight:1.42,color:SLATE500,display:'flex',flexDirection:'column',gap:14}}>
          <span>2.4× longer on unfamiliar files</span>
          <span>41% asked for a written rationale</span>
          <span>1 in 5 escalated to a second reviewer</span>
        </div>
      </div>

      {/* ── Row 1: 01 / 02 / 03 ── */}
      <Panel x={154} y={1152} w={906} h={979}/>
      <Head n="01" title="Motivation" x={226} y={1224} w={762}/>
      <Body x={226} y={1373} w={762}>
        <span>Agents now open a measurable share of pull requests in open-source projects, but code review was designed around a human author who can be asked what they intended.</span>
        <span>We do not yet know how reviewers reallocate attention when that conversation is unavailable — or what it costs them.</span>
      </Body>

      <Panel x={1136} y={1152} w={906} h={979}/>
      <Head n="02" title="Research questions" x={1208} y={1224} w={762}/>
      <RQ x={1208} y={1373} w={762} tag="RQ1" text="How do reviewers allocate attention when the author of a change is an agent rather than a colleague?"/>
      <RQ x={1208} y={1608} w={762} tag="RQ2" text="Which review signals substitute for the missing author rationale?"/>
      <RQ x={1208} y={1843} w={762} tag="RQ3" text="What does the substitution cost in time and defect detection?"/>

      <Panel x={2119} y={1152} w={906} h={979}/>
      <Head n="03" title="Contributions" x={2191} y={1224} w={762}/>
      <Body x={2191} y={1373} w={762}>
        <span>A mixed-methods account of reviewer attention under agent authorship, grounded in 1,204 pull requests and 12 follow-up interviews.</span>
        <span>An instrument others can reuse: the coding scheme, the think-aloud protocol and the analysis scripts are in the replication package.</span>
        <span>Three design implications for review tooling, stated concretely enough to be disagreed with.</span>
      </Body>

      {/* ── 04 Study design ── */}
      <Panel x={154} y={2170} w={2871} h={672} fill={PAPER}/>
      <Head n="04" title="Study design &amp; conceptual model" x={240} y={2246} w={2699}/>
      <div style={abs(240,2390,2699,341,{background:FIG,border:'2px solid '+LINE,display:'flex',
        flexDirection:'column',alignItems:'center',justifyContent:'center',gap:18})}>
        <div style={{fontFamily:BODY,fontSize:pt(34),color:SLATE500}}>Wide figure placeholder — pipeline or conceptual model</div>
        <div style={{fontFamily:MONO,fontSize:pt(24),color:SLATE500}}>Replace with your diagram · full width, 300 dpi or vector</div>
        <div style={{width:230,height:10,background:FLARE,marginTop:14}}/>
      </div>
      <div style={abs(240,2750,2699,null,{fontFamily:BODY,fontSize:pt(24),color:SLATE500,textAlign:'center'})}>
        Caption: what the figure shows, and the one relationship the reader should take away from it.</div>

      {/* ── 05 Results ── */}
      <Panel x={154} y={2880} w={2871} h={653}/>
      <Head n="05" title="Results" x={240} y={2952} w={2699}/>
      <table style={abs(240,3106,2699,null,{borderCollapse:'collapse',fontFamily:BODY})}>
        <thead><tr style={{background:SNOW}}>
          {['Condition','n','Review time (min)','Defects found','Rationale asked','p'].map((h,i)=>(
            <th key={h} style={{textAlign:i?'right':'left',padding:'13px 26px',fontFamily:MONO,fontWeight:500,
              fontSize:pt(22),letterSpacing:'.06em',color:SLATE500,borderBottom:'3px solid #CBD5E1'}}>{h}</th>))}
        </tr></thead>
        <tbody>
          {[['Human-authored','104','18.2','3.1','12%','—'],
            ['Agent-authored, labelled','97','24.7','3.6','41%','0.004'],
            ['Agent-authored, unlabelled','101','17.9','2.4','9%','0.021'],
            ['Mixed authorship','88','22.4','3.3','27%','0.14']].map((r,ri)=>(
            <tr key={ri} style={{background:ri===1?PAPER:'transparent'}}>
              {r.map((c,ci)=>(<td key={ci} style={{textAlign:ci?'right':'left',padding:'12px 26px',
                borderBottom:'2px solid '+LINE,fontFamily:ci?MONO:BODY,fontSize:pt(23),
                fontWeight:ri===1&&!ci?600:400,color:ci?SLATE700:NAVY}}>{c}</td>))}
            </tr>))}
        </tbody>
      </table>
      <div style={abs(240,3451,2699,null,{fontFamily:MONO,fontSize:pt(20),color:SLATE500})}>
        Mixed-effects model with reviewer as a random effect; p-values Holm-corrected. Full model output in the replication package.</div>

      {/* ── Row 3: 06 / 07 / 08 ── */}
      <Panel x={154} y={3552} w={906} h={538}/>
      <Head n="06" title="Interpretation" x={221} y={3610} w={772}/>
      <Body x={221} y={3754} w={772} size={21}>
        <span>Labelling the author changes behaviour more than the code does — the same diff is read differently once its provenance is visible.</span>
        <span>Reviewers substitute re-reading for asking. That recovers defect detection but costs roughly six minutes per change.</span>
      </Body>

      <Panel x={1136} y={3552} w={906} h={538}/>
      <Head n="07" title="Threats to validity" x={1204} y={3610} w={772}/>
      <Body x={1204} y={3754} w={772} size={21} gap={18}>
        <span>Construct: self-reported effort may lag observed effort; we triangulate with timestamps.</span>
        <span>External: OSS projects with public review; findings may not transfer to closed teams with different norms.</span>
        <span>Internal: labelling was not randomised in two repositories.</span>
      </Body>

      <Panel x={2119} y={3552} w={906} h={538}/>
      <Head n="08" title="Conclusion &amp; next steps" x={2186} y={3610} w={772}/>
      <Body x={2186} y={3754} w={772} size={21}>
        <span>Provenance is a review signal, not metadata. Tooling that hides it is making a decision on the reviewer's behalf.</span>
        <span>Next: a field experiment varying how rationale is surfaced, running with two industrial partners in 2027.</span>
      </Body>

      {/* ── Footer ── */}
      <div style={abs(0,4118,3179,375,{background:NAVY})}/>
      <div style={abs(0,4118,3179,15,{background:ORANGE})}/>
      <div style={abs(154,4171,1344,null,{fontFamily:MONO,fontWeight:600,fontSize:pt(21),letterSpacing:'.18em',color:ORANGE})}>REFERENCES</div>
      <div style={abs(154,4219,1478,null,{fontFamily:BODY,fontSize:pt(19),lineHeight:1.5,color:SLATE400,
        display:'flex',flexDirection:'column',gap:6})}>
        <span>[1] Author, A., &amp; Author, B. (2025). Title of the paper. Empirical Software Engineering, 30(4), 1–28.</span>
        <span>[2] Author, C. (2024). Title of the conference paper. In Proc. ICSE ’24 (pp. 112–124).</span>
        <span>[3] Author, D. et al. (2026). Title of the preprint. arXiv:2601.01234.</span>
      </div>
      <div style={abs(154,4402,1478,null,{fontFamily:BODY,fontSize:pt(21),color:SNOW})}>
        name.surname@inf.ufrgs.br &nbsp;&nbsp;·&nbsp;&nbsp; seresearchlab.github.io</div>
      <img src="../../assets/inf-ufrgs-white.png" alt="" style={abs(1739,4224,256,null,{opacity:.9})}/>
      {[['Paper',2244],['Dataset',2517],['Replication',2791]].map(([l,x])=>(
        <React.Fragment key={l}>
          <div style={abs(x,4171,248,248,{background:'#FFFFFF',display:'flex',alignItems:'center',justifyContent:'center'})}>
            <div style={{width:221,height:221,background:
              'repeating-conic-gradient('+NAVY+' 0% 25%, #FFFFFF 0% 50%) 0 0/28px 28px'}}/>
          </div>
          <div style={abs(x,4428,248,null,{fontFamily:MONO,fontSize:pt(19),letterSpacing:'.1em',color:SLATE400,textAlign:'center'})}>{l}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
Object.assign(window,{Poster});
