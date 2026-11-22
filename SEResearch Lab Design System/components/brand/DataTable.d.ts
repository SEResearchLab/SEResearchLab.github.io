/**
 * Empirical results table. First column is prose, all others are mono and right-aligned.
 * @startingPoint section="Brand" subtitle="Results table with mono numerals and a note line" viewport="700x300"
 */
export interface DataTableProps {
  columns?: Array<string | { label: string }>;
  /** Row-major cell values. */
  rows?: Array<Array<React.ReactNode>>;
  /** Mono footnote under the table (model spec, corrections). */
  note?: string;
  /** Index of a row to tint with warm paper. */
  highlightRow?: number;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
