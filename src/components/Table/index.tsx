import { ReactNode } from "react";

import "./table.css";

type CellValue = string | number;
interface Configuration {
  field: string;
  size?: number | string;
  title?: string;
  cellRenderer?: (value: CellValue) => ReactNode;
  getCellClass?: (value: CellValue) => string;
}

type Data = Record<string, any>;

interface TableProps {
  configuration: Configuration[];
  data: Data[];
}

export default function Table(props: TableProps) {
  const { configuration, data } = props;
  return (
    <div className="table">
      {configuration.map((column, columnIndex) => {
        return (
          <div key={columnIndex}>
            column {column.field}
            <div>
              {data.map((row, rowIndex) => {
                if (row[column.field]) {
                  if (column.cellRenderer instanceof Function) {
                    return (
                      <div
                        key={rowIndex}
                        className={
                          column.getCellClass instanceof Function
                            ? column.getCellClass(row[column.field])
                            : ""
                        }
                      >
                        {column.cellRenderer(row[column.field])}
                      </div>
                    );
                  } else {
                    return (
                      <div className="table__cell" key={rowIndex}>
                        {row[column.field]}
                      </div>
                    );
                  }
                }
                return <div className="table__cell" />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
