/** Status pill (submission state, dataset availability). */
export interface BadgeProps {
  /** @default "info" */
  status?: 'info' | 'positive' | 'warning' | 'critical' | 'accent';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
