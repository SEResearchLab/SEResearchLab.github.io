/** Icon-only square control, e.g. copy-BibTeX or theme toggle. */
export interface IconButtonProps {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "outline" */
  variant?: 'outline' | 'solid' | 'ghost';
  /** Accessible label — required, the button has no text. */
  label: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
