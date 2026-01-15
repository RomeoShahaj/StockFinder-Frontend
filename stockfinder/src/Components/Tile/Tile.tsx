import React from 'react';

type Props = {
  title: string;
  subTitle: string;
};

const Tile: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className="bg-surface border border-border rounded-medium p-4 hover:border-border-strong transition-colors duration-150">
      <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-1">
        {title}
      </p>
      <p className="text-2xl font-semibold text-text-primary font-mono">
        {subTitle}
      </p>
    </div>
  );
};

export default Tile;
