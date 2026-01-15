import React, { useEffect, useState } from 'react';
import { CompanyProfile } from '../../company';
import { useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import TenKFinder from '../../Components/TenKFinder/TenKFinder';

const CompanyPage: React.FC = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    if (!ticker) return;
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.[0]);
    };

    getProfileInit();
  }, [ticker]);

  return (
    <div className="min-h-screen bg-background-primary">
      {company ? (
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <CompanyDashboard ticker={ticker!}>
              {/* Company Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-semibold text-text-primary">
                    {company.companyName}
                  </h1>
                  <span className="px-2 py-1 text-xs font-mono font-medium text-accent bg-accent-muted rounded-subtle">
                    {company.symbol}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{company.sector}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Tile title="Stock Price"   subTitle={company.price != null ? `$${company.price}` : 'N/A'} />
                <Tile title="DCF Value"  subTitle={company.dcf != null ? `$${company.dcf}` : 'N/A'} />
                <Tile title="Sector" subTitle={company.sector} />
                <Tile title="Exchange" subTitle={company.exchange || 'N/A'} />
              </div>

              {/* SEC Filings */}
              <div className="mb-8">
                <TenKFinder ticker={company.symbol} />
              </div>

              {/* Company Description */}
              <div className="bg-surface border border-border rounded-medium p-6">
                <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wide mb-3">
                  About
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {company.description}
                </p>
              </div>
            </CompanyDashboard>
          </main>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CompanyPage;
