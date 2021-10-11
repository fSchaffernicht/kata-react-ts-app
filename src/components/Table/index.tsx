import React from 'react'

// What the table needs
// sorting
// custom column styling
// custom group heading
// custom cell rendering

interface Configuration {
  field: string
  size?: number | string
  title?: string
  cellRenderer?: (value?: string | number) => void
}

type Data = Record<string, any>

interface TableProps {
  configuration: Configuration[]
  data: Data[]
}

export default function Table(props: TableProps) {
  const { configuration, data } = props
  return (
    <div>
      {configuration.map((column, columnIndex) => {
        return (
          <div key={columnIndex}>
            column {column.field}
            <div>
              {data.map((row, rowIndex) => {
                if (row[column.field]) {
                  return <div key={rowIndex}>{row[column.field]}</div>
                }
                return null
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
