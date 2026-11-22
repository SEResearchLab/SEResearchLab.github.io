/** Inset block with a mono label and a left rule (RQ1, Threat, Note). */
export interface CalloutProps {
  /** Short uppercase label, e.g. "RQ1". */
  label?: string;
  /** @default "accent" */
  tone?: 'accent' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Callout(props: CalloutProps): JSX.Element;
