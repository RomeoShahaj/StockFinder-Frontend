import React, { ChangeEvent, SyntheticEvent } from 'react';

type Props = {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={onSearchSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-text-tertiary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-input"
            className="
              w-full py-3 pl-12 pr-4
              bg-surface border border-border rounded-medium
              text-text-primary placeholder-text-tertiary
              focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
              transition-all duration-150
            "
            placeholder="Search companies by name or ticker..."
            value={search}
            onChange={handleSearchChange}
          />
          {search && (
            <button
              type="button"
              onClick={() =>
                handleSearchChange({
                  target: { value: '' },
                } as ChangeEvent<HTMLInputElement>)
              }
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-tertiary hover:text-text-secondary transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
