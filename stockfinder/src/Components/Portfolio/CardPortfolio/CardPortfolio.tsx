import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-surface border border-border rounded-medium hover:border-border-strong transition-colors duration-150">
      <Link
        to={`/company/${portfolioValue.symbol}/company-profile`}
        className="text-lg font-mono font-semibold text-text-primary hover:text-accent transition-colors"
      >
        {portfolioValue.symbol}
      </Link>
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
