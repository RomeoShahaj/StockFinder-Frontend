import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useAuth } from '../../Context/userAuth';
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { toast } from 'react-toastify';

const SearchPage: React.FC = () => {
  const { user} = useAuth();
  const [search, setSearch] = useState<string>('');
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (user){
    getPortfolio();
    } else {
      setPortfolioValues([]);
    }
  }, [user])

 const getPortfolio = () => {
    portfolioGetAPI()
    .then((res) => {
      if(res?.data) {
        setPortfolioValues(res?.data);
      }
    }).catch((e) => {
      toast.warning("Could not get portfolio values!")
    })
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
    .then((res) => {
      if (res?.status == 204) {
        toast.success("Stock added to portfolio!")
        getPortfolio();
      }
    }).catch((e)=> {
      toast.warning("Could not create portfolio item!")
    })
  };

 

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
    .then((res) => {
      if(res?.status == 200) {
        toast.success("Stock deleted from portfolio!")
        getPortfolio();
      }
    })
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === 'string') {
      setServerError(result);
    } else {
      setSearchResult(result);
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Search Section */}
      <div className="bg-background-secondary border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold text-text-primary mb-6">
            Search Companies
          </h1>
          <Search
            onSearchSubmit={onSearchSubmit}
            search={search}
            handleSearchChange={handleSearchChange}
          />

          {/* Available Symbols Notice */}
          <div className="mt-6 p-4 bg-accent-muted border border-accent/20 rounded-medium">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-text-primary mb-1">
                  Free API - Limited Symbols
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  <span className="font-medium">Available:</span> AAPL, TSLA, AMZN, MSFT, NVDA, GOOGL, META, NFLX, JPM, V, BAC, PYPL, DIS, T, PFE, COST, INTC, KO, TGT, NKE, SPY, BA, BABA, XOM, WMT, GE, CSCO, VZ, JNJ, CVX, PLTR, SQ, SHOP, SBUX, SOFI, HOOD, RBLX, SNAP, AMD, UBER, FDX, ABBV, ETSY, MRNA, LMT, GM, F, LCID, CCL, DAL, UAL, AAL, TSM, SONY, ET, MRO, COIN, RIVN, RIOT, CPRX, VWO, SPYG, NOK, ROKU, VIAC, ATVI, BIDU, DOCU, ZM, PINS, TLRY, WBA, MGM, NIO, C, GS, WFC, ADBE, PEP, UNH, CARR, HCA, TWTR, BILI, SIRI, FUBO, RKT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onPortfolioDelete}
      />

      {/* Search Results */}
      <div className="container mx-auto px-6 py-8">
        {serverError && (
          <div className="mb-6 p-4 bg-status-error/10 border border-status-error/20 rounded-medium text-status-error text-sm">
            {serverError}
          </div>
        )}
        <CardList
          searchResults={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
    </div>
  );
};

export default SearchPage;
