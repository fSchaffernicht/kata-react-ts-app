import { ReactNode } from "react";

import "./table.css";

import Cell from "./Cell";

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
                      <Cell
                        className={
                          column.getCellClass instanceof Function
                            ? column.getCellClass(row[column.field])
                            : ""
                        }
                        key={rowIndex}
                      >
                        {column.cellRenderer(row[column.field])}
                      </Cell>
                    );
                  } else {
                    return <Cell>{row[column.field]}</Cell>;
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
