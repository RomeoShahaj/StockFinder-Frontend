import React, { SyntheticEvent } from 'react';

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input readOnly hidden value={symbol} />
      <button
        type="submit"
        className="
          px-4 py-2 text-sm font-medium
          bg-accent text-white
          rounded-medium
          hover:bg-accent-hover
          active:scale-[0.98]
          transition-all duration-150
          focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary
        "
      >
        Add
      </button>
    </form>
  );
};

export default AddPortfolio;
