// src/components/Navbar.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Navbar = () => {
  useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        onClick={onClick}
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
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/download">Download</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <DarkModeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" /> // X icon
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3">
              <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <div className="block">
                <NavLink href="/download" onClick={() => setIsMenuOpen(false)}>Download</NavLink>
              </div>
              <div className="block">
                <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              </div>
              <div className="block">
                <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;