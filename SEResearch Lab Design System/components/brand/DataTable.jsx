import React from 'react';

/** Results table: mono numerals, hairline rules, no vertical lines. */
export function DataTable({columns=[],rows=[],note,highlightRow,style}){
  const th={fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',textTransform:'uppercase',
    letterSpacing:'var(--tracking-label)',color:'var(--text-muted)',fontWeight:'var(--weight-medium)',
    padding:'var(--space-3) var(--space-4)',borderBottom:'var(--border-width-card) solid var(--border-strong)'};
  return (
    <div style={style}>
      <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-body)'}}>
        <thead><tr style={{background:'var(--surface-sunken)'}}>
          {columns.map((c,i)=><th key={i} style={{...th,textAlign:i===0?'left':'right'}}>{typeof c==='string'?c:c.label}</th>)}
        </tr></thead>
        <tbody>
          {rows.map((r,ri)=>(
            <tr key={ri} style={{background:ri===highlightRow?'var(--surface-paper)':'transparent'}}>
              {r.map((cell,ci)=>(
                <td key={ci} style={{padding:'var(--space-3) var(--space-4)',
                  borderBottom:'1px solid var(--border-hairline)',
                  textAlign:ci===0?'left':'right',
                  fontFamily:ci===0?'var(--font-body)':'var(--font-mono)',
                  fontSize:'var(--text-sm)',
                  fontWeight:ri===highlightRow&&ci===0?'var(--weight-semibold)':'var(--weight-regular)',
                  color:ci===0?'var(--text-strong)':'var(--text-body)'}}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note&&<p style={{margin:'var(--space-3) 0 0',fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',
        color:'var(--text-muted)',lineHeight:'var(--leading-body)'}}>{note}</p>}
    </div>
  );
}
