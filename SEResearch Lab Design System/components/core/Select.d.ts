/** Dropdown for filtering publications by year, venue or theme. */
export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  hint?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
