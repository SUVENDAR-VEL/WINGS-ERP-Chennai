import React from 'react';

interface DataTableProps {
  columns: { header: string; accessor: string; render?: (val: any, row: any) => React.ReactNode }[];
  data: any[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="data-table-container glass-panel">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="p-4 border-b border-gray-200 font-semibold text-sm text-gray-600 bg-gray-50/50">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-8 text-center text-gray-500">No records found.</td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-gray-50/50 transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="p-4 border-b border-gray-100 text-sm">
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
