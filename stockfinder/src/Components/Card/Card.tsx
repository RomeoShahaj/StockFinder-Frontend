import React, { SyntheticEvent } from 'react';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) => {
  return (
    <div
      className="
        flex flex-col gap-4 p-4
        bg-surface border border-border rounded-medium
        hover:border-border-strong
        transition-colors duration-150
        md:flex-row md:items-center md:justify-between
      "
      id={id}
    >
      <div className="flex-1 min-w-0">
        <Link
          to={`/company/${searchResult.symbol}/company-profile`}
          className="text-base font-semibold text-text-primary hover:text-accent transition-colors"
        >
          {searchResult.name}
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-mono font-medium text-accent">
            {searchResult.symbol}
          </span>
          <span className="text-text-tertiary">·</span>
          <span className="text-sm text-text-secondary">
            {searchResult.currency}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-2 py-1 text-xs font-medium text-text-secondary bg-background-tertiary rounded-subtle">
          {searchResult.exchangeShortName}
        </span>
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default Card;
