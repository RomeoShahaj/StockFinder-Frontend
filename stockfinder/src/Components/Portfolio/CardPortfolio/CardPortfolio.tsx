import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-surface border border-border rounded-medium hover:border-border-strong transition-colors duration-150">
      <Link
        to={`/company/${portfolioValue}/company-profile`}
        className="text-lg font-mono font-semibold text-text-primary hover:text-accent transition-colors"
      >
        {portfolioValue}
      </Link>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
