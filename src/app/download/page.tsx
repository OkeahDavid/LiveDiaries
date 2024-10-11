// src/app/download/page.tsx

import React from 'react';
import styles from '../page.module.css';

export default function DownloadPage() {
  return (
    <div className={`${styles.container} dark:bg-black`}>
      <main className={styles.main}>
        <h1 className={`${styles.title} dark:text-white`}>
          Join the <span className={styles.highlight}>LiveDiaries</span> Waitlist
        </h1>

        <p className={`${styles.description} dark:text-gray-300`}>
          Be the first to experience the future of creative writing and journaling.
        </p>

        <div className={`${styles.card} w-full max-w-md dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
          <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
          <p className="mb-4">
            LiveDiaries is currently in development. Join our waitlist to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Get early access</li>
            <li>Receive exclusive updates</li>
            <li>Shape the future of LiveDiaries</li>
          </ul>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
            <button
              type="submit"
              className={`${styles.ctaButton} w-full dark:bg-blue-600 dark:hover:bg-blue-700`}
            >
              Join Waitlist
            </button>
          </form>
        </div>

        <div className={`${styles.grid} mt-8`}>
          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📱 Mobile App</h2>
            <p>Access your diary on iOS and Android devices.</p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>💻 Web Version</h2>
            <p>Write and manage entries from your browser.</p>
          </div>
        </div>
      </main>

    </div>
  );
}