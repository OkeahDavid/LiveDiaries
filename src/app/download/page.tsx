'use client'

import React, { useState } from 'react';
import styles from '../page.module.css';

export default function DownloadPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for joining our waitlist!');
        setEmail('');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>

        <div className={`${styles.grid} mt-8`}>
          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📱 Android</h2>
            <p>Access your diary on Android devices.</p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📱 ios</h2>
            <p>Access your diary on iOS devices(coming soon).</p>
          </div>
        </div>
      </main>
    </div>
  );
}