/**
 * Headline empirical finding with supporting detail.
 * @startingPoint section="Brand" subtitle="Headline figure with caption and detail list" viewport="700x240"
 */
export interface StatBlockProps {
  /** Mono kicker, e.g. "Key finding". */
  label?: string;
  /** The figure itself, e.g. "68%". */
  value?: string;
  /** Sentence completing the figure. */
  caption?: string;
  /** Secondary numbers, one per line. */
  items?: string[];
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
