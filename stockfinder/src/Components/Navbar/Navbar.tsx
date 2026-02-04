import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useAuth } from '../../Context/userAuth';

const Navbar: React.FC = () => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="border-b border-border bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Nav Links */}
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="text-xl font-semibold text-text-primary tracking-tight"
            >
              StockFinder
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/search"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                Search
              </Link>
            </div>
          </div>
          {isLoggedIn() ? (
            <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="hidden lg:flex items-center gap-3">
              <Link 
              to="/"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                Welcome, {user?.userName}
              </Link>
              <Link 
              onClick={logout}
              to="/register"
              className="px-4 py-2 text-sm font-medium text-text-primary bg-background-tertiary hover:bg-border rounded-medium transition-colors duration-150">
                Logout
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-text-secondary hover:text-text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          ) : (
            <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="hidden lg:flex items-center gap-3">
              <Link 
              to="/login"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                Log in
              </Link>
              <Link 
              to="/register"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150">
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-text-secondary hover:text-text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          )}
          {/* Right Side: Auth + Theme Toggle */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
