/**
 * Square hairline container used for every block of content.
 * @startingPoint section="Surfaces" subtitle="Hairline cards, paper and inverse fills" viewport="700x260"
 */
export interface CardProps {
  /** @default "white" */
  fill?: 'white' | 'paper' | 'sunken' | 'inverse';
  /** Draws the 6px orange bar down the left edge (highlight cards). */
  accentBar?: boolean;
  /** CSS padding. @default "var(--card-pad)" */
  pad?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
