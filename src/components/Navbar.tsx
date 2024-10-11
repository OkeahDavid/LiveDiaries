// src/components/Navbar.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Navbar = () => {
  useTheme();
  const pathname = usePathname();

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`text-sm font-medium transition-colors duration-200 
          ${isActive 
            ? 'text-[#FFC0A1]' 
            : 'hover:text-[#FFC0A1]'
          }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black text-gray-900 dark:text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left Column: Logo and Name */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/LDLogo.png"
                alt="LiveDiaries Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold" style={{ color: '#4869E1' }}>
                LiveDiaries
              </span>
            </Link>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/download">Download</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
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