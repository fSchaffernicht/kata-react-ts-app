import { ReactNode } from "react";

interface CellProps {
  children: ReactNode;
  className?: string;
}

export default function Cell({ children, className }: CellProps) {
  let classes = "table__cell";
  if (className && className.length > 0) classes += ` ${className}`;

  return <div className={classes}>{children}</div>;
}
