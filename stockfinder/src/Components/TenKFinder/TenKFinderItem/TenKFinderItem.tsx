import React from 'react';
import { CompanyTenK } from '../../../company';
import { Link } from 'react-router-dom';

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem: React.FC<Props> = ({ tenK }) => {
  const filingDate = new Date(tenK.filingDate).getFullYear();

  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      className="
        inline-flex items-center gap-2 px-3 py-2
        text-sm font-medium text-text-primary
        bg-background-tertiary border border-border
        rounded-medium
        hover:border-border-strong hover:bg-background-secondary
        transition-colors duration-150
      "
    >
      <svg
        className="w-4 h-4 text-text-tertiary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      <span className="font-mono">{filingDate}</span>
      <svg
        className="w-3 h-3 text-text-tertiary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </Link>
  );
};

export default TenKFinderItem;
