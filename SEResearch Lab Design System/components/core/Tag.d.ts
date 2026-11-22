/** Metadata chip — venue, year, method, theme. */
export interface TagProps {
  /** @default "muted" */
  tone?: 'accent' | 'navy' | 'solid' | 'muted';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
