/* @ds-bundle: {"format":4,"namespace":"SEResearchLabDesignSystem_d35e15","components":[{"name":"DataTable","sourcePath":"components/brand/DataTable.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/surfaces/Callout.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/brand/DataTable.jsx":"4ec6239724c6","components/brand/Logo.jsx":"b4141738446d","components/brand/SectionHeader.jsx":"3408db68ffef","components/brand/StatBlock.jsx":"6c0a050373fd","components/core/Badge.jsx":"cb5e4a678cea","components/core/Button.jsx":"bc7b2c0518b9","components/core/Checkbox.jsx":"c1698867b185","components/core/IconButton.jsx":"0fb4b08fdb42","components/core/Input.jsx":"27a78d52a3b5","components/core/Select.jsx":"fe1132d42e7d","components/core/Switch.jsx":"e1f9e9c55e57","components/core/Tag.jsx":"8d46264402bd","components/surfaces/Callout.jsx":"01992546b042","components/surfaces/Card.jsx":"b065d6d6b74c","components/surfaces/Dialog.jsx":"de0b93c4d641","components/surfaces/Tabs.jsx":"b85a1ef3d042","slides/Slides.jsx":"f7a63fb19f68","ui_kits/brand-portal/ColorArchitecture.jsx":"568a78868c19","ui_kits/brand-portal/DownloadHub.jsx":"b4bae6c0f514","ui_kits/brand-portal/Hero.jsx":"1ed620aa4512","ui_kits/brand-portal/LogoSuite.jsx":"b19f2bc9f5ab","ui_kits/brand-portal/Nav.jsx":"870a6ae9d071","ui_kits/brand-portal/SlidesSection.jsx":"1040278137a2","ui_kits/poster/Poster.jsx":"ced0a6bca8c6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SEResearchLabDesignSystem_d35e15 = window.SEResearchLabDesignSystem_d35e15 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/DataTable.jsx
try { (() => {
/** Results table: mono numerals, hairline rules, no vertical lines. */
function DataTable({
  columns = [],
  rows = [],
  note,
  highlightRow,
  style
}) {
  const th = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-2xs)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-label)',
    color: 'var(--text-muted)',
    fontWeight: 'var(--weight-medium)',
    padding: 'var(--space-3) var(--space-4)',
    borderBottom: 'var(--border-width-card) solid var(--border-strong)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...th,
      textAlign: i === 0 ? 'left' : 'right'
    }
  }, typeof c === 'string' ? c : c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: ri === highlightRow ? 'var(--surface-paper)' : 'transparent'
    }
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: 'var(--space-3) var(--space-4)',
      borderBottom: '1px solid var(--border-hairline)',
      textAlign: ci === 0 ? 'left' : 'right',
      fontFamily: ci === 0 ? 'var(--font-body)' : 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: ri === highlightRow && ci === 0 ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: ci === 0 ? 'var(--text-strong)' : 'var(--text-body)'
    }
  }, cell)))))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, note));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/**
 * The SEResearch Lab lockup: pulse-wave mark plus wordmark.
 * The mark is the raster export from the brand kit (assets/seresearch-mark.png).
 */
function Logo({
  lockup = 'horizontal',
  size = 40,
  tone = 'navy',
  tagline = false,
  markSrc = 'assets/seresearch-mark.png',
  style
}) {
  const ink = tone === 'light' ? '#F8FAFC' : 'var(--text-strong)';
  const sub = tone === 'light' ? 'var(--slate-400)' : 'var(--text-muted)';
  const stacked = lockup === 'stacked';
  const mark = /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "SEResearch Lab",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  });
  if (lockup === 'mark') return /*#__PURE__*/React.createElement("span", {
    style: style
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: stacked ? 'column' : 'row',
      alignItems: stacked ? 'center' : 'center',
      gap: stacked ? 'var(--space-3)' : 'var(--space-4)',
      textAlign: stacked ? 'center' : 'left',
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: size * 0.62,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      color: ink
    }
  }, "SEResearch", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-light)'
    }
  }, " Lab")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, size * 0.24),
      color: sub,
      letterSpacing: 'var(--tracking-body)'
    }
  }, "Human & Social Aspects of Software Engineering")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeader.jsx
try { (() => {
/** Numbered section head: orange rule, mono number, display title. */
function SectionHeader({
  number,
  title,
  kicker,
  rule = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      height: 'var(--rule-width)',
      background: 'var(--rule-accent)',
      display: 'block',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-base)',
      color: 'var(--accent-ink)',
      letterSpacing: 'var(--tracking-normal)'
    }
  }, number), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-strong)'
    }
  }, title)), kicker && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)'
    }
  }, kicker));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
/** Oversized finding: the poster's "68% / of reviewers…" unit. */
function StatBlock({
  label,
  value,
  caption,
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 180
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--accent-ink)',
      marginBottom: 'var(--space-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-6xl)',
      lineHeight: 'var(--leading-hero)',
      letterSpacing: 'var(--tracking-hero)',
      color: 'var(--accent-ink)'
    }
  }, value)), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: '1 1 240px',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-strong)',
      maxWidth: '46ch'
    }
  }, caption), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      borderLeft: '1px solid var(--border-strong)',
      paddingLeft: 'var(--space-6)',
      flex: '0 1 260px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, it))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const map = {
  info: ['var(--navy-600)', 'rgba(30,62,98,.10)'],
  positive: ['var(--status-positive)', 'rgba(21,128,61,.10)'],
  warning: ['var(--status-warning)', 'rgba(180,83,9,.10)'],
  critical: ['var(--status-critical)', 'rgba(185,28,28,.10)'],
  accent: ['var(--accent-ink)', 'rgba(249,115,22,.12)']
};

/** Status pill with a leading dot. */
function Badge({
  status = 'info',
  children,
  style
}) {
  const [fg, bg] = map[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-circle)',
      background: fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    fontSize: 'var(--text-2xs)',
    padding: '7px 14px',
    letterSpacing: 'var(--tracking-label)'
  },
  md: {
    fontSize: 'var(--text-xs)',
    padding: '11px 20px',
    letterSpacing: 'var(--tracking-label)'
  },
  lg: {
    fontSize: 'var(--text-sm)',
    padding: '15px 28px',
    letterSpacing: 'var(--tracking-label)'
  }
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: '#FFFFFF',
    border: 'var(--border-width-card) solid var(--accent)'
  },
  secondary: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-inverse)',
    border: 'var(--border-width-card) solid var(--surface-inverse)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: 'var(--border-width-card) solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)',
    border: 'var(--border-width-card) solid transparent'
  }
};

/** Square-cornered action button. Mono label, wide tracking, uppercase. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-none)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      textDecoration: 'none',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.42 : 1,
      width: fullWidth ? '100%' : 'auto',
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Square checkbox. Checked state fills with the accent. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  description
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      width: 18,
      height: 18,
      flex: '0 0 18px',
      marginTop: 2,
      cursor: 'inherit',
      border: 'var(--border-width-card) solid var(--border-strong)',
      borderRadius: 'var(--radius-none)',
      background: checked ?? defaultChecked ? 'var(--accent)' : 'var(--surface-card)',
      backgroundImage: checked ?? defaultChecked ? 'linear-gradient(transparent,transparent)' : 'none',
      boxShadow: checked ?? defaultChecked ? 'inset 0 0 0 3px var(--accent)' : 'none',
      transition: 'var(--transition-control)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  md: 36,
  lg: 44
};

/** Square icon-only control. Pass a Lucide <i data-lucide> or an <img> as children. */
function IconButton({
  size = 'md',
  variant = 'outline',
  label,
  active = false,
  children,
  style,
  ...rest
}) {
  const s = sizes[size];
  const skin = variant === 'solid' ? {
    background: 'var(--accent)',
    color: '#FFFFFF',
    border: 'var(--border-width-card) solid var(--accent)'
  } : variant === 'ghost' ? {
    background: active ? 'var(--surface-sunken)' : 'transparent',
    color: 'var(--text-body)',
    border: 'var(--border-width-card) solid transparent'
  } : {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: 'var(--border-width-card) solid var(--border-hairline)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    style: {
      width: s,
      height: s,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-none)',
      cursor: 'pointer',
      padding: 0,
      transition: 'var(--transition-control)',
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text field with a mono label above it. */
function Input({
  label,
  hint,
  error,
  prefix,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: 'var(--surface-card)',
      border: 'var(--border-width-card) solid ' + (error ? 'var(--status-critical)' : 'var(--border-hairline)'),
      padding: '0 var(--space-3)',
      transition: 'var(--transition-control)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '11px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      minWidth: 0,
      ...style
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: error ? 'var(--status-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with the same mono caption as Input. */
function Select({
  label,
  options = [],
  hint,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    style: {
      appearance: 'none',
      background: 'var(--surface-card)',
      border: 'var(--border-width-card) solid var(--border-hairline)',
      borderRadius: 'var(--radius-none)',
      padding: '11px var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Pill toggle — the one place the system allows a fully rounded shape. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      display: 'inline-flex',
      background: checked ? 'var(--accent)' : 'var(--slate-300)',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-circle)',
      background: '#FFFFFF',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: {
    color: 'var(--accent-ink)',
    border: '1px solid var(--accent-ink)',
    background: 'transparent'
  },
  navy: {
    color: 'var(--text-strong)',
    border: '1px solid var(--border-strong)',
    background: 'transparent'
  },
  solid: {
    color: '#FFFFFF',
    border: '1px solid var(--accent)',
    background: 'var(--accent)'
  },
  muted: {
    color: 'var(--text-muted)',
    border: '1px solid var(--border-hairline)',
    background: 'var(--surface-sunken)'
  }
};

/** Mono metadata label: venue, year, research theme. */
function Tag({
  tone = 'muted',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      padding: '4px 9px',
      lineHeight: 1.2,
      display: 'inline-block',
      borderRadius: 'var(--radius-none)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Callout.jsx
try { (() => {
/** Labelled inset block — research questions, threats, notes. */
function Callout({
  label,
  children,
  tone = 'accent',
  style
}) {
  const bar = tone === 'accent' ? 'var(--accent-ink)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-sunken)',
      border: 'var(--border-width-card) solid var(--border-hairline)',
      padding: 'var(--space-4) var(--space-5)',
      paddingLeft: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 'var(--rule-width)',
      background: bar
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: tone === 'accent' ? 'var(--accent-ink)' : 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-strong)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Callout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fills = {
  white: 'var(--surface-card)',
  paper: 'var(--surface-paper)',
  sunken: 'var(--surface-sunken)',
  inverse: 'var(--surface-inverse)'
};

/** Square hairline card. The poster's basic container. */
function Card({
  fill = 'white',
  accentBar = false,
  pad = 'var(--card-pad)',
  children,
  style,
  ...rest
}) {
  const inverse = fill === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: fills[fill],
      border: 'var(--border-width-card) solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-none)',
      padding: pad,
      color: inverse ? 'var(--text-on-inverse)' : 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), accentBar && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 'var(--rule-width-heavy)',
      background: 'var(--accent)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
/** Centred modal on a navy scrim. */
function Dialog({
  open = true,
  title,
  footer,
  onClose,
  width = 520,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      border: 'var(--border-width-card) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rule-width)',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-2)'
    }
  }, footer))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
/** Underline tabs — the active tab carries the orange rule. */
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 var(--space-3)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -3px 0 var(--accent)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
// Keynote slide set, 1280 × 720. Theme: Midnight Navy (nuance 1) unless noted.
const {
  Logo,
  Tag,
  SectionHeader,
  StatBlock,
  DataTable,
  Card,
  Callout
} = window.SEResearchLabDesignSystem_d35e15;
const MONO = 'var(--font-mono)',
  DISPLAY = 'var(--font-display)',
  BODY = 'var(--font-body)';
function Frame({
  theme = 'dark',
  children,
  footer = true,
  pad = 72
}) {
  const dark = theme === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? 'classic-dark' : undefined,
    style: {
      width: 1280,
      height: 720,
      background: dark ? '#050C1A' : '#FFFFFF',
      position: 'relative',
      padding: pad,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: BODY,
      overflow: 'hidden',
      color: dark ? '#CBD5E1' : 'var(--text-body)'
    }
  }, children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: pad,
      right: pad,
      bottom: 34,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: MONO,
      fontSize: 12,
      letterSpacing: '.08em',
      color: dark ? '#64748B' : 'var(--text-faint)',
      borderTop: '1px solid ' + (dark ? 'rgba(248,250,252,.12)' : 'var(--border-hairline)'),
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "SEResearch Lab \xB7 Instituto de Inform\xE1tica \u2014 UFRGS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--radiant-tangerine)'
    }
  }, "seresearchlab.github.io")));
}
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    footer: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    tone: "light",
    markSrc: "../assets/seresearch-mark.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: MONO,
      fontSize: 13,
      letterSpacing: '.08em',
      color: '#F97316'
    }
  }, "ICSE 2026 Keynote Address", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#94A3B8',
      letterSpacing: '.04em'
    }
  }, "Human & Social Aspects \u2022 Socio-Technical Dynamics"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 132,
      height: 5,
      background: '#F97316',
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: DISPLAY,
      fontWeight: 700,
      fontSize: 62,
      lineHeight: 1.04,
      letterSpacing: '-.035em',
      color: '#F8FAFC',
      maxWidth: '19ch'
    }
  }, "Why Great Code Is Born From Empathy, Not Just Compilers"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontSize: 19,
      lineHeight: 1.4,
      color: '#94A3B8',
      maxWidth: '64ch'
    }
  }, "Unpacking 5 years of laboratory empirical findings on developer cognitive load, psychological safety, and team collaboration.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 30,
      borderTop: '1px solid rgba(248,250,252,.12)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      fontFamily: MONO,
      fontSize: 13,
      color: '#94A3B8'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Prof. Dr. Alex Mercer, Director \u2022 Instituto de Inform\xE1tica \u2014 UFRGS"), /*#__PURE__*/React.createElement("img", {
    src: "../assets/inf-ufrgs-white.png",
    alt: "",
    style: {
      height: 44,
      opacity: .9
    }
  })));
}
function PillarsSlide() {
  const pillars = [['01', 'Cognitive load', 'How much a developer must hold in mind to make a change safely — and what tooling adds to that budget rather than spending it.'], ['02', 'Psychological safety', 'Whether an engineer can say "I do not understand this" in a review thread without paying for it later.'], ['03', 'Socio-technical dynamics', 'Where the shape of a team and the shape of its architecture start to explain each other.']];
  return /*#__PURE__*/React.createElement(Frame, {
    theme: "light"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "02",
    title: "Research pillars",
    kicker: "Three questions the lab keeps returning to, across five years of empirical work."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 44
    }
  }, pillars.map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    fill: n === '02' ? 'paper' : 'white',
    accentBar: n === '02',
    pad: "var(--card-pad-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--accent-ink)',
      marginBottom: 14
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DISPLAY,
      fontWeight: 600,
      fontSize: 26,
      letterSpacing: '-.018em',
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--text-muted)'
    }
  }, d)))));
}
function FindingsSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    theme: "light"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "05",
    title: "Empirical findings",
    kicker: "1,204 pull requests across four authorship conditions; 12 follow-up interviews."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    label: "Key finding",
    value: "68%",
    caption: "of reviewers re-read agent-authored diffs at least twice before approving",
    items: ['2.4× longer on unfamiliar files', '41% asked for a written rationale', '1 in 5 escalated to a second reviewer']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: ['Condition', 'n', 'Review time (min)', 'Defects found', 'Rationale asked', 'p'],
    highlightRow: 1,
    rows: [['Human-authored', '104', '18.2', '3.1', '12%', '—'], ['Agent-authored, labelled', '97', '24.7', '3.6', '41%', '0.004'], ['Agent-authored, unlabelled', '101', '17.9', '2.4', '9%', '0.021'], ['Mixed authorship', '88', '22.4', '3.3', '27%', '0.14']],
    note: "Mixed-effects model with reviewer as a random effect; p-values Holm-corrected."
  })));
}
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0',
      maxWidth: '26ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 132,
      height: 5,
      background: '#F97316',
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: DISPLAY,
      fontWeight: 600,
      fontSize: 54,
      lineHeight: 1.1,
      letterSpacing: '-.03em',
      color: '#F8FAFC'
    }
  }, "Provenance is a review signal, not metadata."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 19,
      lineHeight: 1.4,
      color: '#94A3B8',
      maxWidth: '50ch'
    }
  }, "Tooling that hides it is making a decision on the reviewer's behalf.")), /*#__PURE__*/React.createElement("img", {
    src: "../assets/seresearch-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -70,
      bottom: 60,
      width: 420,
      opacity: .1
    }
  }));
}
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    footer: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "stacked",
    size: 64,
    tone: "light",
    tagline: true,
    markSrc: "../assets/seresearch-mark.png",
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 132,
      height: 5,
      background: '#F97316'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      fontFamily: MONO,
      fontSize: 15,
      color: '#94A3B8',
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "name.surname@inf.ufrgs.br"), /*#__PURE__*/React.createElement("span", null, "seresearchlab.github.io"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F97316'
    }
  }, "Replication package available"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MONO,
      fontSize: 12,
      letterSpacing: '.08em',
      color: '#64748B'
    }
  }, "Thank you \xB7 Questions welcome"), /*#__PURE__*/React.createElement("img", {
    src: "../assets/inf-ufrgs-white.png",
    alt: "",
    style: {
      height: 52,
      opacity: .9
    }
  })));
}
Object.assign(window, {
  Frame,
  TitleSlide,
  PillarsSlide,
  FindingsSlide,
  QuoteSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-portal/ColorArchitecture.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  DataTable,
  Tag
} = window.SEResearchLabDesignSystem_d35e15;
const CORE = [{
  hex: '#0B192C',
  name: 'Midnight Navy (Primary)',
  desc: 'Symbolizes deep software infrastructure, algorithmic rigor, and academic prestige. Forms the code bracket anchors and primary typography.',
  meta: [['RGB', '11, 25, 44'], ['CMYK', '75, 43, 0, 83'], ['HSL', '215°, 60%, 11%'], ['Contrast', '14.8:1 (AAA)']]
}, {
  hex: '#F97316',
  name: 'Radiant Tangerine (Accent)',
  desc: 'Represents the human heartbeat, psychological safety, developer cognitive flow, and social empathy in software engineering.',
  meta: [['RGB', '249, 115, 22'], ['CMYK', '0, 54, 91, 2'], ['HSL', '25°, 95%, 53%'], ['Pantone', 'Orange 021 C']]
}, {
  hex: '#1E3E62',
  name: 'Oceanic Indigo (Syntax Slate)',
  desc: 'Provides the mid-tone foundation for code bracket strokes on dark mode backgrounds.',
  meta: [['RGB', '30, 62, 98'], ['CMYK', '69, 37, 0, 62'], ['HSL', '212°, 53%, 25%'], ['Usage', 'Code Brackets']]
}, {
  hex: '#FB923C',
  name: 'Ember Warmth (Human Node)',
  desc: 'Illuminates the human collaborator head node at the apex of the central pulse wave.',
  meta: [['RGB', '251, 146, 60'], ['CMYK', '0, 42, 76, 2'], ['HSL', '27°, 96%, 61%'], ['Usage', 'Pulse Apex Node']]
}];
const NUANCES = [['1. Classic Identity (Dark)', '#0B192C (Midnight)', '#F97316 (Radiant)', '#050C1A (Dark Void)', 'Default dark conference keynotes, lab portal dark mode'], ['2. Classic Identity (Light)', '#0B192C (Midnight)', '#F97316 (Radiant)', '#FFFFFF (Clean White)', 'Formal university stationery, IEEE/ACM publication headers'], ['3. Solar Rigor (Oceanic)', '#071224 (Ocean Ink)', '#EA580C (Solar Flare)', '#040913 (Deep Sea)', 'Auditorium projectors with high ambient lumination'], ['4. Cyber Humanist (Cobalt)', '#101B33 (Cobalt)', '#FF6B35 (Sunset Coral)', '#0A0F1F (Night Sky)', 'Interactive developer tools, CLI badges, and IDE themes'], ['5. Nordic Empathy (Paper)', '#111827 (Slate Ink)', '#F59E0B (Golden Ochre)', '#FAF8F5 (Warm Paper)', 'Academic symposiums, grant proposals, thesis books'], ['6. Monochrome Midnight', '#0B192C (Single Ink)', '#0B192C (Single Ink)', '#FFFFFF (Paper White)', 'Single-color offset printing, formal university seals'], ['7. Monochrome Stencil White', '#FFFFFF (Pure White)', '#FFFFFF (Pure White)', 'Transparent / Dark', 'Video recording watermarks, dark photography overlays']];
function ColorArchitecture({
  onCopy
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "colors",
    style: {
      padding: '88px 32px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    title: "Color Architecture & Nuance Specifications",
    kicker: "Complete color theory, precision codes (HEX, RGB, HSL, CMYK), accessibility contrast scores, and tested nuance palettes for SEResearch Lab."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, CORE.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.hex,
    pad: "0",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onCopy(c.hex),
    title: "Copy to clipboard",
    style: {
      height: 132,
      background: c.hex,
      border: 'none',
      cursor: 'pointer',
      display: 'block',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, c.hex), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.012em',
      color: 'var(--text-strong)'
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.4,
      color: 'var(--text-muted)',
      flex: 1
    }
  }, c.desc), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '4px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 10
    }
  }, c.meta.map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      textAlign: 'right'
    }
  }, v)))))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '64px 0 6px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-.012em',
      color: 'var(--text-strong)'
    }
  }, "Tested Color Nuance Variations"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Each nuance has been mathematically verified across physical projection, screen display, and print media."), /*#__PURE__*/React.createElement(Card, {
    pad: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, ['Nuance Name', 'Primary Ink', 'Accent Flare', 'Canvas Background', 'Recommended Deployment'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '12px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--text-muted)',
      fontWeight: 500,
      borderBottom: '2px solid var(--border-strong)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, NUANCES.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-hairline)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r[0]), r.slice(1, 4).map((cell, i) => {
    const hex = (cell.match(/#[0-9A-F]{6}/i) || [])[0];
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-hairline)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--text-body)',
        whiteSpace: 'nowrap'
      }
    }, hex && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 11,
        height: 11,
        background: hex,
        marginRight: 7,
        border: '1px solid var(--border-strong)',
        verticalAlign: '-1px'
      }
    }), cell);
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-hairline)',
      color: 'var(--text-muted)'
    }
  }, r[4]))))))));
}
Object.assign(window, {
  ColorArchitecture
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-portal/ColorArchitecture.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-portal/DownloadHub.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Button,
  Logo
} = window.SEResearchLabDesignSystem_d35e15;
const PACKS = [['Complete Brand Kit (.ZIP)', 'Contains all 4 lockups (Horizontal, Stacked, Lab Emblem, Mark Only) rendered across all 7 color nuance palettes in vector SVG and 2048px PNG.', 'Download Brand Kit (.ZIP)', 'primary'], ['Presentation Decks (.PPTX)', 'Ready-to-present PowerPoint slide decks featuring Title Keynote, Research Pillars, Empirical Findings, and Closing slides for all 5 projection themes.', 'Download Master Presentation (.PPTX)', 'secondary'], ['Google Slides 1-Click Upload', 'Open Google Slides directly to drag-and-drop the downloaded .pptx deck with 100% native vector shape and typography fidelity.', 'Launch Google Slides', 'outline']];
function DownloadHub({
  onCopy
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "downloads",
    style: {
      padding: '88px 32px',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "04",
    title: "Complete Download Package Archive",
    kicker: "Batch export all assets for publication, slide decks, social media, and web development in one click."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, PACKS.map(([t, d, cta, v]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    pad: "var(--card-pad-lg)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--rule-accent)',
      width: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.012em',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.45,
      color: 'var(--text-muted)',
      flex: 1
    }
  }, d), /*#__PURE__*/React.createElement(Button, {
    variant: v,
    fullWidth: true
  }, cta))))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--dark-void)',
      padding: '48px 32px',
      borderTop: '4px solid var(--radiant-tangerine)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    tone: "light",
    markSrc: "../../assets/seresearch-mark.png"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--slate-400)'
    }
  }, "Human & Social Aspects of Software Engineering"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--slate-500)',
      letterSpacing: '.06em'
    }
  }, "Option 04 Visual System \u2022 Midnight Navy & Radiant Tangerine")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/inf-ufrgs-white.png",
    alt: "Instituto de Inform\xE1tica \u2014 UFRGS",
    style: {
      height: 58,
      opacity: .9
    }
  })));
}
Object.assign(window, {
  DownloadHub,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-portal/DownloadHub.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-portal/Hero.jsx
try { (() => {
const {
  Button,
  Tag
} = window.SEResearchLabDesignSystem_d35e15;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      background: 'var(--dark-void)',
      padding: '96px 32px 104px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    style: {
      marginBottom: 24
    }
  }, "Option 04 \u2022 Human Logic & Pulse Wave"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 72,
      lineHeight: 1.02,
      letterSpacing: '-.035em',
      color: '#F8FAFC'
    }
  }, "Visual Identity &", /*#__PURE__*/React.createElement("br", null), "Download Suite"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 36px',
      maxWidth: '58ch',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--slate-400)'
    }
  }, "Welcome to the official identity specifications for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#F8FAFC',
      fontWeight: 600
    }
  }, "SEResearch Lab"), ". Exploring the human and social aspects of software engineering by uniting deep blue engineering rigor with radiant orange developer empathy. This self-contained page contains all color specifications, logo lockup downloads (Horizontal, Stacked, Lab Emblem, Mark Only), and conference presentation slide decks."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Download Complete Brand Kit (.ZIP)"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    style: {
      color: '#F8FAFC',
      borderColor: 'rgba(248,250,252,.28)'
    }
  }, "Download Conference Slides (.PPTX)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/seresearch-mark.png",
    alt: "SEResearch Lab mark",
    style: {
      width: '100%',
      maxWidth: 340
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-portal/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-portal/LogoSuite.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Button,
  Logo,
  Tag
} = window.SEResearchLabDesignSystem_d35e15;
const LOCKUPS = [['horizontal', 'Horizontal Lockup'], ['stacked', 'Stacked Lockup'], ['emblem', 'Lab Emblem (Crest)'], ['mark', 'Mark Only']];
const CANVASES = [['#050C1A', 'Midnight Void', 'light'], ['#101B33', 'Dark Slate', 'light'], ['#FFFFFF', 'Clean White', 'navy'], ['#FAF8F5', 'Warm Paper', 'navy']];
function LogoSuite() {
  const [lockup, setLockup] = React.useState('horizontal');
  const [canvas, setCanvas] = React.useState(0);
  const [bg, label, tone] = CANVASES[canvas];
  const mark = '../../assets/seresearch-mark.png';
  const preview = lockup === 'emblem' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      padding: '26px 40px',
      border: '3px solid ' + (tone === 'light' ? 'rgba(248,250,252,.5)' : 'var(--midnight-navy)')
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: mark,
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-.024em',
      color: tone === 'light' ? '#F8FAFC' : 'var(--midnight-navy)'
    }
  }, "SEResearch", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, " Lab")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: tone === 'light' ? 'var(--slate-400)' : 'var(--text-muted)'
    }
  }, "INF \xB7 UFRGS")) : /*#__PURE__*/React.createElement(Logo, {
    lockup: lockup === 'mark' ? 'mark' : lockup,
    size: lockup === 'stacked' ? 66 : 60,
    tone: tone === 'light' ? 'light' : 'navy',
    markSrc: mark
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "logo-suite",
    style: {
      padding: '88px 32px',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "02",
    title: "Logo Suite Download Center",
    kicker: "Download all 4 official lockups \u2014 Horizontal, Stacked, Lab Emblem (Academic Crest), and Mark Only \u2014 in clean vector SVG and ultra-resolution 2K/4K PNG."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 24,
      marginTop: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Select Lockup:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, LOCKUPS.map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setLockup(v),
    style: {
      textAlign: 'left',
      padding: '11px 14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      background: lockup === v ? 'var(--surface-inverse)' : 'transparent',
      color: lockup === v ? '#F8FAFC' : 'var(--text-body)',
      borderStyle: 'solid',
      borderWidth: '2px 2px 0 2px',
      borderColor: lockup === v ? 'var(--surface-inverse)' : 'var(--border-hairline)',
      transition: 'var(--transition-control)'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--border-hairline)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Preview Canvas:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, CANVASES.map(([c, l], i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCanvas(i),
    title: l,
    style: {
      height: 40,
      background: c,
      cursor: 'pointer',
      border: '2px solid ' + (canvas === i ? 'var(--accent)' : 'var(--border-hairline)'),
      boxShadow: canvas === i ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-control)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "Download Vector SVG"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "outline"
  }, "Download 2048px PNG"))), /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      minHeight: 340,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 48
    }
  }, preview), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderTop: '2px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Currently viewing: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, LOCKUPS.find(l => l[0] === lockup)[1])), /*#__PURE__*/React.createElement(Tag, null, label))))));
}
Object.assign(window, {
  LogoSuite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-portal/LogoSuite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-portal/Nav.jsx
try { (() => {
const {
  Logo,
  Button
} = window.SEResearchLabDesignSystem_d35e15;
function Nav({
  active,
  onNav
}) {
  const links = [['colors', 'Colors & Contrast'], ['logo-suite', 'Logo Suite'], ['slides', 'Mockups & Slides'], ['downloads', 'Download Hub']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(5,12,26,.88)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(248,250,252,.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--radiant-tangerine)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    onClick: e => {
      e.preventDefault();
      onNav('hero');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34,
    tone: "light",
    markSrc: "../../assets/seresearch-mark.png"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === id ? 'var(--radiant-tangerine)' : 'var(--slate-400)',
      paddingBottom: 4,
      borderBottom: '2px solid ' + (active === id ? 'var(--radiant-tangerine)' : 'transparent'),
      transition: 'var(--transition-control)'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Brand kit .zip"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-portal/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-portal/SlidesSection.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Button,
  Tag,
  Logo
} = window.SEResearchLabDesignSystem_d35e15;
const THEMES = [['Midnight Navy', {
  page: '#0B192C',
  ink: '#F8FAFC',
  sub: '#94A3B8',
  accent: '#F97316',
  tone: 'light'
}], ['Crisp Light', {
  page: '#FFFFFF',
  ink: '#0B192C',
  sub: '#64748B',
  accent: '#EA580C',
  tone: 'navy'
}], ['Dark Slate Tech', {
  page: '#101B33',
  ink: '#F8FAFC',
  sub: '#94A3B8',
  accent: '#FF6B35',
  tone: 'light'
}], ['Editorial Paper', {
  page: '#FAF8F5',
  ink: '#111827',
  sub: '#64748B',
  accent: '#B45309',
  tone: 'navy'
}], ['Solar Amber', {
  page: '#040913',
  ink: '#F8FAFC',
  sub: '#94A3B8',
  accent: '#F59E0B',
  tone: 'light'
}]];
const MOCKUPS = [['Academic Paper Header', 'ACM/IEEE standard 2-column format. Mark positioned at 36px height in monochrome midnight navy (#0B192C) with high legibility.'], ['Laptop Vinyl Sticker', '3" × 3" die-cut matte sticker with UV-protective laminate, radiant orange pulse wave on midnight blue backing.'], ['GitHub README Banner', 'Full-width SVG header banner featuring the horizontal lockup and open-source human & social telemetry badges.'], ['Embroidered Swag', 'Tactile embroidery spec on charcoal and navy hoodies using high-density Madeira Polyneon thread (Hex: #F97316).']];
function SlidesSection() {
  const [t, setT] = React.useState(0);
  const th = THEMES[t][1];
  return /*#__PURE__*/React.createElement("section", {
    id: "slides",
    style: {
      padding: '88px 32px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "03",
    title: "Mockups & Conference Presentation Slides",
    kicker: "Ready-to-use 16:9 presentation slide decks with native Option 04 branding, PowerPoint (.pptx) downloads, Google Slides upload workflows, and real-world mockups."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      margin: '36px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Slide Theme:"), THEMES.map(([n], i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setT(i),
    style: {
      cursor: 'pointer',
      padding: '8px 14px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      background: t === i ? 'var(--accent)' : 'transparent',
      color: t === i ? '#FFF' : 'var(--text-body)',
      border: '2px solid ' + (t === i ? 'var(--accent)' : 'var(--border-hairline)'),
      transition: 'var(--transition-control)'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Open in Google Slides"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Download .PPTX Deck"))), /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: th.page,
      padding: '56px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34,
    tone: th.tone,
    markSrc: "../../assets/seresearch-mark.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.08em',
      color: th.accent
    }
  }, "ICSE 2026 Keynote Address", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: th.sub,
      letterSpacing: '.04em'
    }
  }, "Human & Social Aspects \u2022 Socio-Technical Dynamics"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: th.accent,
      width: 120,
      marginBottom: 26
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: '-.032em',
      color: th.ink,
      maxWidth: '20ch'
    }
  }, "Why Great Code Is Born From Empathy, Not Just Compilers"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 17,
      lineHeight: 1.4,
      color: th.sub,
      maxWidth: '62ch'
    }
  }, "Unpacking 5 years of laboratory empirical findings on developer cognitive load, psychological safety, and team collaboration.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderTop: '1px solid ' + (th.tone === 'light' ? 'rgba(248,250,252,.16)' : 'rgba(11,25,44,.14)'),
      paddingTop: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: th.sub
    }
  }, /*#__PURE__*/React.createElement("span", null, "Prof. Dr. Alex Mercer, Director \u2022 Instituto de Inform\xE1tica \u2014 UFRGS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: th.accent
    }
  }, "seresearchlab.org")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '64px 0 20px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-.012em',
      color: 'var(--text-strong)'
    }
  }, "Physical & Digital Identity Mockups"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, MOCKUPS.map(([t2, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t2,
    fill: i % 2 ? 'paper' : 'white'
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    style: {
      marginBottom: 12
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.012em',
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, t2), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.4,
      color: 'var(--text-muted)'
    }
  }, d))))));
}
Object.assign(window, {
  SlidesSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-portal/SlidesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/poster/Poster.jsx
try { (() => {
// A0 portrait conference poster, rebuilt 1:1 from
// SEResearchLab_Poster_A0-Portrait_Crisp-Light.pptx (3179 × 4493 px at 96 dpi).
// Every coordinate, fill and type size below is read from that file.
const pt = n => n * 4 / 3 + 'px';
const abs = (x, y, w, h, extra = {}) => ({
  position: 'absolute',
  left: x,
  top: y,
  width: w,
  ...(h ? {
    height: h
  } : {}),
  ...extra
});
const MONO = 'var(--font-mono)',
  DISPLAY = 'var(--font-display)',
  BODY = 'var(--font-body)';
const NAVY = '#0B192C',
  ORANGE = '#F97316',
  FLARE = '#EA580C',
  PAPER = '#FAF8F5',
  LINE = '#D8DEE6',
  SLATE400 = '#94A3B8',
  SLATE500 = '#64748B',
  SLATE700 = '#334155',
  SNOW = '#F8FAFC',
  FIG = '#F5F7FA';
function Rule({
  x,
  y,
  w
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: abs(x, y, w, 9, {
      background: FLARE
    })
  });
}
function Panel({
  x,
  y,
  w,
  h,
  fill = '#FFFFFF',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: abs(x, y, w, h, {
      background: fill,
      border: '2px solid ' + LINE
    })
  }, children);
}
function Head({
  n,
  title,
  x,
  y,
  w
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Rule, {
    x: x,
    y: y,
    w: w
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(x, y + 36, 154, 58, {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: pt(26),
      color: FLARE,
      lineHeight: 1
    })
  }, n), /*#__PURE__*/React.createElement("div", {
    style: abs(x + 129, y + 25, w - 129, null, {
      fontFamily: DISPLAY,
      fontWeight: 600,
      fontSize: pt(44),
      lineHeight: 1.06,
      letterSpacing: '-.022em',
      color: NAVY
    })
  }, title));
}
function Body({
  x,
  y,
  w,
  children,
  size = 23,
  color = SLATE700,
  gap = 26
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: abs(x, y, w, null, {
      fontFamily: BODY,
      fontSize: pt(size),
      lineHeight: 1.35,
      color,
      display: 'flex',
      flexDirection: 'column',
      gap
    })
  }, children);
}
function RQ({
  x,
  y,
  w,
  tag,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: abs(x, y, w, 211, {
      background: SNOW,
      border: '2px solid ' + LINE
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 11,
      background: FLARE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '21px 30px 0 39px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: pt(21),
      color: FLARE,
      letterSpacing: '.04em'
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: BODY,
      fontSize: pt(22),
      lineHeight: 1.34,
      color: NAVY
    }
  }, text)));
}
function Poster() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 3179,
      height: 4493,
      background: '#FFFFFF',
      color: NAVY,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: abs(0, 0, 3179, 706, {
      background: NAVY
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(0, 706, 3179, 21, {
      background: ORANGE
    })
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/seresearch-mark.png",
    alt: "",
    style: abs(154, 91, 235, null)
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(437, 110, 1200, null, {
      fontFamily: DISPLAY,
      fontWeight: 700,
      fontSize: pt(46),
      letterSpacing: '-.03em',
      color: '#FFFFFF',
      lineHeight: 1
    })
  }, "SEResearch", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, " Lab")), /*#__PURE__*/React.createElement("div", {
    style: abs(437, 216, 1248, null, {
      fontFamily: BODY,
      fontSize: pt(22),
      color: SLATE400
    })
  }, "Human & Social Aspects of Software Engineering"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/inf-ufrgs-white.png",
    alt: "",
    style: abs(2583, 110, 333, null)
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(2142, 317, 883, null, {
      fontFamily: BODY,
      fontSize: pt(21),
      color: SLATE400,
      textAlign: 'right'
    })
  }, "Instituto de Inform\xE1tica \xB7 UFRGS"), /*#__PURE__*/React.createElement("div", {
    style: abs(154, 341, 2871, null, {
      fontFamily: DISPLAY,
      fontWeight: 700,
      fontSize: pt(86),
      lineHeight: 1.06,
      letterSpacing: '-.03em',
      color: SNOW
    })
  }, "Poster title goes here, in one or two lines at most"), /*#__PURE__*/React.createElement("div", {
    style: abs(154, 562, 2295, null, {
      fontFamily: BODY,
      fontSize: pt(26),
      color: SNOW
    })
  }, "Author Name\xB9 \xA0\xB7\xA0 Author Name\xB9 \xA0\xB7\xA0 Author Name\xB2", /*#__PURE__*/React.createElement("span", {
    style: {
      color: SLATE400,
      fontSize: pt(21),
      marginLeft: 40
    }
  }, "\xB9 INF/UFRGS \xA0\xA0 \xB2 Affiliation")), /*#__PURE__*/React.createElement("div", {
    style: abs(2161, 566, 864, null, {
      fontFamily: MONO,
      fontWeight: 500,
      fontSize: pt(24),
      color: FLARE,
      textAlign: 'right'
    })
  }, "EMSE / ICSE 2027 \xA0\xB7\xA0 Poster track"), /*#__PURE__*/React.createElement("div", {
    style: abs(154, 782, 2871, 331, {
      background: PAPER,
      border: '2px solid ' + LINE
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 15,
      background: ORANGE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 81,
      top: 41,
      fontFamily: MONO,
      fontWeight: 600,
      fontSize: pt(23),
      letterSpacing: '.18em',
      color: FLARE
    }
  }, "KEY FINDING"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 76,
      top: 70,
      fontFamily: DISPLAY,
      fontWeight: 700,
      fontSize: pt(132),
      lineHeight: 1,
      letterSpacing: '-.05em',
      color: FLARE
    }
  }, "68%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 806,
      top: 96,
      width: 1286,
      fontFamily: BODY,
      fontSize: pt(30),
      lineHeight: 1.3,
      color: NAVY
    }
  }, "of reviewers re-read agent-authored diffs at least twice before approving"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 2169,
      top: 82,
      bottom: 82,
      width: 5,
      background: '#CBD5E1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 2256,
      top: 87,
      width: 620,
      fontFamily: BODY,
      fontSize: pt(22),
      lineHeight: 1.42,
      color: SLATE500,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "2.4\xD7 longer on unfamiliar files"), /*#__PURE__*/React.createElement("span", null, "41% asked for a written rationale"), /*#__PURE__*/React.createElement("span", null, "1 in 5 escalated to a second reviewer"))), /*#__PURE__*/React.createElement(Panel, {
    x: 154,
    y: 1152,
    w: 906,
    h: 979
  }), /*#__PURE__*/React.createElement(Head, {
    n: "01",
    title: "Motivation",
    x: 226,
    y: 1224,
    w: 762
  }), /*#__PURE__*/React.createElement(Body, {
    x: 226,
    y: 1373,
    w: 762
  }, /*#__PURE__*/React.createElement("span", null, "Agents now open a measurable share of pull requests in open-source projects, but code review was designed around a human author who can be asked what they intended."), /*#__PURE__*/React.createElement("span", null, "We do not yet know how reviewers reallocate attention when that conversation is unavailable \u2014 or what it costs them.")), /*#__PURE__*/React.createElement(Panel, {
    x: 1136,
    y: 1152,
    w: 906,
    h: 979
  }), /*#__PURE__*/React.createElement(Head, {
    n: "02",
    title: "Research questions",
    x: 1208,
    y: 1224,
    w: 762
  }), /*#__PURE__*/React.createElement(RQ, {
    x: 1208,
    y: 1373,
    w: 762,
    tag: "RQ1",
    text: "How do reviewers allocate attention when the author of a change is an agent rather than a colleague?"
  }), /*#__PURE__*/React.createElement(RQ, {
    x: 1208,
    y: 1608,
    w: 762,
    tag: "RQ2",
    text: "Which review signals substitute for the missing author rationale?"
  }), /*#__PURE__*/React.createElement(RQ, {
    x: 1208,
    y: 1843,
    w: 762,
    tag: "RQ3",
    text: "What does the substitution cost in time and defect detection?"
  }), /*#__PURE__*/React.createElement(Panel, {
    x: 2119,
    y: 1152,
    w: 906,
    h: 979
  }), /*#__PURE__*/React.createElement(Head, {
    n: "03",
    title: "Contributions",
    x: 2191,
    y: 1224,
    w: 762
  }), /*#__PURE__*/React.createElement(Body, {
    x: 2191,
    y: 1373,
    w: 762
  }, /*#__PURE__*/React.createElement("span", null, "A mixed-methods account of reviewer attention under agent authorship, grounded in 1,204 pull requests and 12 follow-up interviews."), /*#__PURE__*/React.createElement("span", null, "An instrument others can reuse: the coding scheme, the think-aloud protocol and the analysis scripts are in the replication package."), /*#__PURE__*/React.createElement("span", null, "Three design implications for review tooling, stated concretely enough to be disagreed with.")), /*#__PURE__*/React.createElement(Panel, {
    x: 154,
    y: 2170,
    w: 2871,
    h: 672,
    fill: PAPER
  }), /*#__PURE__*/React.createElement(Head, {
    n: "04",
    title: "Study design & conceptual model",
    x: 240,
    y: 2246,
    w: 2699
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(240, 2390, 2699, 341, {
      background: FIG,
      border: '2px solid ' + LINE,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: pt(34),
      color: SLATE500
    }
  }, "Wide figure placeholder \u2014 pipeline or conceptual model"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontSize: pt(24),
      color: SLATE500
    }
  }, "Replace with your diagram \xB7 full width, 300 dpi or vector"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230,
      height: 10,
      background: FLARE,
      marginTop: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: abs(240, 2750, 2699, null, {
      fontFamily: BODY,
      fontSize: pt(24),
      color: SLATE500,
      textAlign: 'center'
    })
  }, "Caption: what the figure shows, and the one relationship the reader should take away from it."), /*#__PURE__*/React.createElement(Panel, {
    x: 154,
    y: 2880,
    w: 2871,
    h: 653
  }), /*#__PURE__*/React.createElement(Head, {
    n: "05",
    title: "Results",
    x: 240,
    y: 2952,
    w: 2699
  }), /*#__PURE__*/React.createElement("table", {
    style: abs(240, 3106, 2699, null, {
      borderCollapse: 'collapse',
      fontFamily: BODY
    })
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: SNOW
    }
  }, ['Condition', 'n', 'Review time (min)', 'Defects found', 'Rationale asked', 'p'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: i ? 'right' : 'left',
      padding: '13px 26px',
      fontFamily: MONO,
      fontWeight: 500,
      fontSize: pt(22),
      letterSpacing: '.06em',
      color: SLATE500,
      borderBottom: '3px solid #CBD5E1'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, [['Human-authored', '104', '18.2', '3.1', '12%', '—'], ['Agent-authored, labelled', '97', '24.7', '3.6', '41%', '0.004'], ['Agent-authored, unlabelled', '101', '17.9', '2.4', '9%', '0.021'], ['Mixed authorship', '88', '22.4', '3.3', '27%', '0.14']].map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: ri === 1 ? PAPER : 'transparent'
    }
  }, r.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      textAlign: ci ? 'right' : 'left',
      padding: '12px 26px',
      borderBottom: '2px solid ' + LINE,
      fontFamily: ci ? MONO : BODY,
      fontSize: pt(23),
      fontWeight: ri === 1 && !ci ? 600 : 400,
      color: ci ? SLATE700 : NAVY
    }
  }, c)))))), /*#__PURE__*/React.createElement("div", {
    style: abs(240, 3451, 2699, null, {
      fontFamily: MONO,
      fontSize: pt(20),
      color: SLATE500
    })
  }, "Mixed-effects model with reviewer as a random effect; p-values Holm-corrected. Full model output in the replication package."), /*#__PURE__*/React.createElement(Panel, {
    x: 154,
    y: 3552,
    w: 906,
    h: 538
  }), /*#__PURE__*/React.createElement(Head, {
    n: "06",
    title: "Interpretation",
    x: 221,
    y: 3610,
    w: 772
  }), /*#__PURE__*/React.createElement(Body, {
    x: 221,
    y: 3754,
    w: 772,
    size: 21
  }, /*#__PURE__*/React.createElement("span", null, "Labelling the author changes behaviour more than the code does \u2014 the same diff is read differently once its provenance is visible."), /*#__PURE__*/React.createElement("span", null, "Reviewers substitute re-reading for asking. That recovers defect detection but costs roughly six minutes per change.")), /*#__PURE__*/React.createElement(Panel, {
    x: 1136,
    y: 3552,
    w: 906,
    h: 538
  }), /*#__PURE__*/React.createElement(Head, {
    n: "07",
    title: "Threats to validity",
    x: 1204,
    y: 3610,
    w: 772
  }), /*#__PURE__*/React.createElement(Body, {
    x: 1204,
    y: 3754,
    w: 772,
    size: 21,
    gap: 18
  }, /*#__PURE__*/React.createElement("span", null, "Construct: self-reported effort may lag observed effort; we triangulate with timestamps."), /*#__PURE__*/React.createElement("span", null, "External: OSS projects with public review; findings may not transfer to closed teams with different norms."), /*#__PURE__*/React.createElement("span", null, "Internal: labelling was not randomised in two repositories.")), /*#__PURE__*/React.createElement(Panel, {
    x: 2119,
    y: 3552,
    w: 906,
    h: 538
  }), /*#__PURE__*/React.createElement(Head, {
    n: "08",
    title: "Conclusion & next steps",
    x: 2186,
    y: 3610,
    w: 772
  }), /*#__PURE__*/React.createElement(Body, {
    x: 2186,
    y: 3754,
    w: 772,
    size: 21
  }, /*#__PURE__*/React.createElement("span", null, "Provenance is a review signal, not metadata. Tooling that hides it is making a decision on the reviewer's behalf."), /*#__PURE__*/React.createElement("span", null, "Next: a field experiment varying how rationale is surfaced, running with two industrial partners in 2027.")), /*#__PURE__*/React.createElement("div", {
    style: abs(0, 4118, 3179, 375, {
      background: NAVY
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(0, 4118, 3179, 15, {
      background: ORANGE
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(154, 4171, 1344, null, {
      fontFamily: MONO,
      fontWeight: 600,
      fontSize: pt(21),
      letterSpacing: '.18em',
      color: ORANGE
    })
  }, "REFERENCES"), /*#__PURE__*/React.createElement("div", {
    style: abs(154, 4219, 1478, null, {
      fontFamily: BODY,
      fontSize: pt(19),
      lineHeight: 1.5,
      color: SLATE400,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    })
  }, /*#__PURE__*/React.createElement("span", null, "[1] Author, A., & Author, B. (2025). Title of the paper. Empirical Software Engineering, 30(4), 1\u201328."), /*#__PURE__*/React.createElement("span", null, "[2] Author, C. (2024). Title of the conference paper. In Proc. ICSE \u201924 (pp. 112\u2013124)."), /*#__PURE__*/React.createElement("span", null, "[3] Author, D. et al. (2026). Title of the preprint. arXiv:2601.01234.")), /*#__PURE__*/React.createElement("div", {
    style: abs(154, 4402, 1478, null, {
      fontFamily: BODY,
      fontSize: pt(21),
      color: SNOW
    })
  }, "name.surname@inf.ufrgs.br \xA0\xA0\xB7\xA0\xA0 seresearchlab.github.io"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/inf-ufrgs-white.png",
    alt: "",
    style: abs(1739, 4224, 256, null, {
      opacity: .9
    })
  }), [['Paper', 2244], ['Dataset', 2517], ['Replication', 2791]].map(([l, x]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: abs(x, 4171, 248, 248, {
      background: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 221,
      height: 221,
      background: 'repeating-conic-gradient(' + NAVY + ' 0% 25%, #FFFFFF 0% 50%) 0 0/28px 28px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: abs(x, 4428, 248, null, {
      fontFamily: MONO,
      fontSize: pt(19),
      letterSpacing: '.1em',
      color: SLATE400,
      textAlign: 'center'
    })
  }, l))));
}
Object.assign(window, {
  Poster
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/poster/Poster.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
