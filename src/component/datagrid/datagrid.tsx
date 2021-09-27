import React from 'react';

interface DatagridProps {
  columns: any[],
  rows: any[]
}

export default class Datagrid extends React.Component<DatagridProps> {

  private _getData = (row: any, column: any) => {
    if (column.type === 'image') {
      return <img src={row[column.property]} width="32" />
    } else {
      return row[column.property];
    }
  };

  render() {

    const { columns, rows } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {columns.map(column => {
              return <td>{column.label}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return (
              <tr key={row.title}>
                {columns.map(column => {
                  return <td>{this._getData(row, column)}</td>;
                })}
              </tr>
            )
              })}
        </tbody>
      </table>
    );

  }

}