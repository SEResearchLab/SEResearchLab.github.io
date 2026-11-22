/**
 * Official lockup. Four variants ship in the brand kit; three are reproducible here.
 * @startingPoint section="Brand" subtitle="Horizontal, stacked and mark-only lockups" viewport="700x200"
 */
export interface LogoProps {
  /** @default "horizontal" */
  lockup?: 'horizontal' | 'stacked' | 'mark';
  /** Mark height in px; the wordmark scales from it. @default 40 */
  size?: number;
  /** @default "navy" */
  tone?: 'navy' | 'light';
  /** Show the "Human & Social Aspects…" line. */
  tagline?: boolean;
  /** Relative path to the mark from the consuming page. */
  markSrc?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
