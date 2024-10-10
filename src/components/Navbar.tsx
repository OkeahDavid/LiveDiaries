// src/components/Navbar.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left Column: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                LiveDiaries
              </span>
            </Link>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link href="/download" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Download
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Right Column: Dark Mode Toggle */}
          <div className="flex justify-end">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
