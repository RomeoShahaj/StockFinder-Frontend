import React from 'react';

interface Props {
  message?: string;
}

const RestrictedNotice: React.FC<Props> = ({
  message = 'This data is not available on the free API plan.'
}) => {
  return (
    <div className="bg-surface border border-border rounded-medium p-6">
      <div className="flex flex-col items-center justify-center text-center py-4">
        <div className="w-12 h-12 mb-4 rounded-full bg-background-tertiary flex items-center justify-center">
          <svg
            className="w-6 h-6 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-text-secondary mb-1">
          Data Restricted
        </p>
        <p className="text-xs text-text-tertiary max-w-sm">
          {message}
        </p>
      </div>
    </div>
  );
};

export default RestrictedNotice;
