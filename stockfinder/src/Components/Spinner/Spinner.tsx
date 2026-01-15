import React from 'react';

type Props = {
  isLoading?: boolean;
};

const Spinner: React.FC<Props> = ({ isLoading = true }) => {
  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <div className="w-8 h-8 border-2 border-border rounded-full"></div>
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default Spinner;
