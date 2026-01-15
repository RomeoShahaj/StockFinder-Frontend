import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CompanyKeyMetrics } from '../../company';
import { getKeyMetrics, isApiError } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';
import RestrictedNotice from '../RestrictedNotice/RestrictedNotice';
import {
  formatLargeNonMonetaryNumber,
  formatRatio,
} from '../../Helpers/NumberFormatting';

const tableConfig = [
  {
    label: 'Market Cap',
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: 'Total value of all shares of stock',
  },
  {
    label: 'Current Ratio',
    render: (company: CompanyKeyMetrics) => formatRatio(company.currentRatioTTM),
    subTitle: 'Ability to pay short term debt obligations',
  },
  {
    label: 'Return On Equity',
    render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
    subTitle: 'Net income divided by shareholder equity',
  },
  {
    label: 'Return On Assets',
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle: 'How effectively assets are used',
  },
  {
    label: 'Free Cashflow Per Share',
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowPerShareTTM),
    subTitle: 'Cash available per share',
  },
  {
    label: 'Book Value Per Share',
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.bookValuePerShareTTM),
    subTitle: 'Net asset value on per share basis',
  },
  {
    label: 'Dividend Yield',
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.dividendYieldTTM),
    subTitle: 'Annual dividend relative to stock price',
  },
  {
    label: 'Capex Per Share',
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexPerShareTTM),
    subTitle: 'Capital expenditure per share',
  },
  {
    label: 'Graham Number',
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle: 'Upper bound price for defensive investors',
  },
  {
    label: 'PE Ratio',
    render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
    subTitle: 'Price to earnings ratio',
  },
];

const CompanyProfile: React.FC = () => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  const [isRestricted, setIsRestricted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      setIsLoading(true);
      setIsRestricted(false);
      const result = await getKeyMetrics(ticker);

      if (isApiError(result)) {
        setIsRestricted(true);
        setCompanyData(undefined);
      } else if (result?.data?.[0]) {
        setCompanyData(result.data[0]);
      }
      setIsLoading(false);
    };
    getCompanyKeyRatios();
  }, [ticker]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isRestricted) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Key Metrics</h2>
        <RestrictedNotice message="Key metrics are not available for this symbol on the free API plan." />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-4">Key Metrics</h2>
      {companyData ? (
        <RatioList config={tableConfig} data={companyData} />
      ) : (
        <RestrictedNotice message="No key metrics data available." />
      )}
    </div>
  );
};

export default CompanyProfile;
