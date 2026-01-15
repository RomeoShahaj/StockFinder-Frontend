import React, { useEffect, useState } from 'react';
import { CompanyBalanceSheet } from '../../company';
import { useOutletContext } from 'react-router-dom';
import RatioList from '../RatioList/RatioList';
import { getBalanceSheet, isApiError } from '../../api';
import Spinner from '../Spinner/Spinner';
import RestrictedNotice from '../RestrictedNotice/RestrictedNotice';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';

const config = [
  {
    label: 'Total Assets',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalAssets),
  },
  {
    label: 'Current Assets',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalCurrentAssets),
  },
  {
    label: 'Cash & Equivalents',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.cashAndCashEquivalents),
  },
  {
    label: 'Property & Equipment',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.propertyPlantEquipmentNet),
  },
  {
    label: 'Intangible Assets',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.intangibleAssets),
  },
  {
    label: 'Long Term Debt',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.longTermDebt),
  },
  {
    label: 'Other Current Liabilities',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.otherCurrentLiabilities),
  },
  {
    label: 'Total Liabilities',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalLiabilities),
  },
  {
    label: 'Current Liabilities',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalCurrentLiabilities),
  },
  {
    label: 'Other Liabilities',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.otherLiabilities),
  },
  {
    label: "Stockholders' Equity",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalStockholdersEquity),
  },
  {
    label: 'Retained Earnings',
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.retainedEarnings),
  },
];

const BalanceSheet: React.FC = () => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyBalanceSheet>();
  const [isRestricted, setIsRestricted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCompanyData = async () => {
      setIsLoading(true);
      setIsRestricted(false);
      const result = await getBalanceSheet(ticker!);

      if (isApiError(result)) {
        setIsRestricted(true);
        setCompanyData(undefined);
      } else if (result?.data?.[0]) {
        setCompanyData(result.data[0]);
      }
      setIsLoading(false);
    };
    getCompanyData();
  }, [ticker]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isRestricted) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Balance Sheet</h2>
        <RestrictedNotice message="Balance sheet data is not available for this symbol on the free API plan." />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Balance Sheet
      </h2>
      {companyData ? (
        <RatioList config={config} data={companyData} />
      ) : (
        <RestrictedNotice message="No balance sheet data available." />
      )}
    </div>
  );
};

export default BalanceSheet;
