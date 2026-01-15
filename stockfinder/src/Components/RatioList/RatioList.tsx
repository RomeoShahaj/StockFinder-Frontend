import React from 'react';

type Props = {
  config: any;
  data: any;
};

const RatioList: React.FC<Props> = ({ config, data }) => {
  const renderedCells = config.map((row: any, index: number) => {
    return (
      <li
        key={row.label || index}
        className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
      >
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-text-primary truncate">
            {row.label}
          </p>
          {row.subTitle && (
            <p className="text-xs text-text-tertiary truncate mt-0.5">
              {row.subTitle}
            </p>
          )}
        </div>
        <div className="ml-4 text-sm font-semibold text-text-primary font-mono text-right">
          {row.render(data)}
        </div>
      </li>
    );
  });

  return (
    <div className="bg-surface border border-border rounded-medium p-4">
      <ul className="divide-y divide-border">{renderedCells}</ul>
    </div>
  );
};

export default RatioList;
