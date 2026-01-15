import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Table from '../Table/Table';
import { CompanyIncomeStatement } from '../../company';
import { getIncomeStatement, isApiError } from '../../api';
import Spinner from '../Spinner/Spinner';
import RestrictedNotice from '../RestrictedNotice/RestrictedNotice';
import {
  formatLargeMonetaryNumber,
  formatRatio,
} from '../../Helpers/NumberFormatting';

const configs = [
  {
    label: 'Date',
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: 'Revenue',
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.revenue),
  },
  {
    label: 'Cost Of Revenue',
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.costOfRevenue),
  },
  {
    label: 'Depreciation',
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.depreciationAndAmortization),
  },
  {
    label: 'Operating Income',
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.operatingIncome),
  },
  {
    label: 'Income Before Taxes',
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.incomeBeforeTax),
  },
  {
    label: 'Net Income',
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.netIncome),
  },
  {
    label: 'Net Income Ratio',
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.netIncomeRatio),
  },
  {
    label: 'EPS',
    render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
  },
  {
    label: 'EPS Diluted',
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.epsdiluted),
  },
  {
    label: 'Gross Profit Ratio',
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.grossProfitRatio),
  },
  {
    label: 'Operating Income Ratio',
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.operatingIncomeRatio),
  },
];

const IncomeStatement: React.FC = () => {
  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>();
  const [isRestricted, setIsRestricted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRatios = async () => {
      setIsLoading(true);
      setIsRestricted(false);
      const result = await getIncomeStatement(ticker!);

      if (isApiError(result)) {
        setIsRestricted(true);
        setIncomeStatement(undefined);
      } else if (result?.data) {
        setIncomeStatement(result.data);
      }
      setIsLoading(false);
    };
    getRatios();
  }, [ticker]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isRestricted) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Income Statement</h2>
        <RestrictedNotice message="Income statement data is not available for this symbol on the free API plan." />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Income Statement
      </h2>
      {incomeStatement && incomeStatement.length > 0 ? (
        <Table config={configs} data={incomeStatement} />
      ) : (
        <RestrictedNotice message="No income statement data available." />
      )}
    </div>
  );
};

export default IncomeStatement;
