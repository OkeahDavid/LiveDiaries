// src/components/DarkModeToggle.tsx
'use client'

import React from 'react';
import { useTheme } from 'next-themes';
import { FaBook, FaBookOpen } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-black-200 dark:bg-white-800"
    >
      {theme === 'dark' ? (
        <FaBook className="h-6 w-6" />
      ) : (
        <FaBookOpen className="h-6 w-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;