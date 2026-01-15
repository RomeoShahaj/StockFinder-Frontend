import React from 'react';

type Props = {
  config: any;
  data: any;
};

const Table: React.FC<Props> = ({ config, data }) => {
  const renderedRows = data.map((company: any, index: number) => {
    return (
      <tr
        key={company.cik || index}
        className="border-b border-border last:border-b-0 hover:bg-background-tertiary transition-colors duration-150"
      >
        {config.map((val: any, colIndex: number) => {
          return (
            <td
              key={colIndex}
              className="px-4 py-3 text-sm text-text-primary font-mono"
            >
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeaders = config.map((col: any, index: number) => {
    return (
      <th
        key={col.label || index}
        className="px-4 py-3 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider bg-background-secondary"
      >
        {col.label}
      </th>
    );
  });

  return (
    <div className="bg-surface border border-border rounded-medium overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-border">{renderedHeaders}</tr>
          </thead>
          <tbody className="divide-y divide-border">{renderedRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
