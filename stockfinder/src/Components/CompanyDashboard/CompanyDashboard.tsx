import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  ticker: string;
};

const CompanyDashboard: React.FC<Props> = ({ children, ticker }) => {
  return (
    <div className="flex-1 p-6 lg:p-8">
      {/* Main content from parent */}
      <div className="mb-8">{children}</div>

      {/* Nested route content (financial statements) */}
      <div className="mt-8">
        <Outlet context={ticker} />
      </div>
    </div>
  );
};

export default CompanyDashboard;
