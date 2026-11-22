/**
 * Primary action control. Mono, uppercase, square corners.
 * @startingPoint section="Core" subtitle="Action buttons in all four variants" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Render as an anchor when linking out. @default "button" */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
