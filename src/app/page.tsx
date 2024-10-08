import React from 'react';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>LiveDiaries</span>
        </h1>

        <p className={styles.description}>
          Your personal digital diary and book management app
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>📖 Manage Books</h2>
            <p>Browse, search, and mark your favorite books.</p>
          </div>

          <div className={styles.card}>
            <h2>✍️ Create Entries</h2>
            <p>Write and manage your personal diary entries.</p>
          </div>

          <div className={styles.card}>
            <h2>📱 Mobile App</h2>
            <p>Access your diary anytime, anywhere with our mobile app.</p>
          </div>

          <div className={styles.card}>
            <h2>🔒 Secure</h2>
            <p>Your entries are private and securely stored.</p>
          </div>
        </div>

        <button className={styles.ctaButton}>Get Started</button>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 LiveDiaries. All rights reserved.</p>
      </footer>
    </div>
  );
}