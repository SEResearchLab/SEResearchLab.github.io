/** Modal dialog on a navy scrim, with the orange rule across its top edge. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  /** Buttons, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** px. @default 520 */
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element;
