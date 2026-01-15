import React, { useEffect, useState } from 'react';
import { CompanyTenK } from '../../company';
import { getTenK } from '../../api';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
  ticker: string;
};

const TenKFinder: React.FC<Props> = ({ ticker }) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();

  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker);
      setCompanyData(value?.data);
    };
    getTenKData();
  }, [ticker]);

  return (
    <div className="bg-surface border border-border rounded-medium p-4">
      <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wide mb-3">
        SEC Filings up to last month
      </h3>
      {companyData ? (
        <div className="flex flex-wrap gap-2">
          {companyData.slice(0, 5).map((tenK, index) => (
            <TenKFinderItem key={index} tenK={tenK} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
