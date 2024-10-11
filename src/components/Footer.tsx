// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>© {currentYear} LiveDiaries. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;