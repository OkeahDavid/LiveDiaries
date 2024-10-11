import React from 'react';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={`${styles.container} dark:bg-black`}>
      <main className={styles.main}>
        <h1 className={`${styles.title} dark:text-white`}>
          Welcome to <span className={styles.highlight}>LiveDiaries</span>
        </h1>

        <p className={`${styles.description} dark:text-gray-300`}>
          The Social Media for Creative Writing
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📖 Manage Books</h2>
            <p>Browse, search, and mark your favorite books.</p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>✍️ Create Entries</h2>
            <p>Write and manage your personal diary entries.</p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📱 Mobile App</h2>
            <p>Access your diary anytime, anywhere with our mobile app.</p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>🔒 Secure</h2>
            <p>Your entries are private and securely stored.</p>
          </div>
        </div>

        <button className={`${styles.ctaButton} dark:bg-blue-600 dark:hover:bg-blue-700`}>
          Get Started
        </button>
      </main>

      <footer className={`${styles.footer} dark:border-gray-800 dark:text-gray-300`}>
        <p>© 2024 LiveDiaries. All rights reserved.</p>
      </footer>
    </div>
  );
}