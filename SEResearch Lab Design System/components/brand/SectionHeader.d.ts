/**
 * Numbered section heading from the poster grid: rule, mono number, display title.
 * @startingPoint section="Brand" subtitle="Numbered section heading with orange rule" viewport="700x180"
 */
export interface SectionHeaderProps {
  /** Zero-padded, e.g. "01". */
  number?: string;
  title?: string;
  /** Optional one-line standfirst under the title. */
  kicker?: string;
  /** @default true */
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
