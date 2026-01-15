import React, { useEffect, useState } from 'react';
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashFlowStatement, isApiError } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';
import RestrictedNotice from '../RestrictedNotice/RestrictedNotice';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';

const config = [
  {
    label: 'Date',
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: 'Operating Cashflow',
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: 'Cash At End of Period',
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: 'CapEx',
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: 'Stock Issuance',
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: 'Free Cash Flow',
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashFlowStatement: React.FC = () => {
  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>();
  const [isRestricted, setIsRestricted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCashflow = async () => {
      setIsLoading(true);
      setIsRestricted(false);
      const result = await getCashFlowStatement(ticker!);

      if (isApiError(result)) {
        setIsRestricted(true);
        setCashflow(undefined);
      } else if (result?.data) {
        setCashflow(result.data);
      }
      setIsLoading(false);
    };
    fetchCashflow();
  }, [ticker]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isRestricted) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Cash Flow Statement</h2>
        <RestrictedNotice message="Cash flow data is not available for this symbol on the free API plan." />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Cash Flow Statement
      </h2>
      {cashflowData && cashflowData.length > 0 ? (
        <Table config={config} data={cashflowData} />
      ) : (
        <RestrictedNotice message="No cash flow data available." />
      )}
    </div>
  );
};

export default CashFlowStatement;
