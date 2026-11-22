/** Text field used across contact and dataset-request forms. */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Replaces hint and turns the border red. */
  error?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
