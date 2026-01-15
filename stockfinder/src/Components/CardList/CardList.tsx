import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => {
  if (searchResults.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">
          No results found. Try searching for a company name or ticker symbol.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-text-tertiary mb-4">
        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
      </p>
      {searchResults.map((result) => (
        <Card
          id={result.symbol}
          key={uuidv4()}
          searchResult={result}
          onPortfolioCreate={onPortfolioCreate}
        />
      ))}
    </div>
  );
};

export default CardList;
