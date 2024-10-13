import React from 'react';
import styles from '../page.module.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import PageTransition from '../../components/PageTransition';


export default function Contact() {
  return (
    <PageTransition>
    <div className={`${styles.container} dark:bg-black`}>
      <main className={styles.main}>
        <h1 className={`${styles.title} dark:text-white`}>
          Contact <span className={styles.highlight}>LiveDiaries</span>
        </h1>

        <p className={`${styles.description} dark:text-gray-300`}>
          We are here to provide you with amazing content. Reach out to us for inquiries or more information.
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📱 Social Media</h2>
            <p>Follow us on Facebook for more content:</p>
            <a href="https://www.facebook.com/Livediaries" target="_blank" rel="noopener noreferrer" className={`${styles.link} dark:text-blue-400`}>
              <FaFacebook /> Live Diaries on Facebook
            </a>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <h2>📧 Email Us</h2>
            <p>For inquiries, you can email us at:</p>
            <a href="mailto:LiveDiaries@gmail.com" className={`${styles.link} dark:text-blue-400`}>
              <FaGoogle /> livediaries@gmail.com
            </a>
          </div>
        </div>

        <form className={`${styles.form} dark:text-white`}>
          <h2 className={styles.formTitle}>Send us a message</h2>
          <input type="text" placeholder="Your Name" className={`${styles.input} dark:bg-gray-800 dark:text-white`} />
          <input type="email" placeholder="Your Email" className={`${styles.input} dark:bg-gray-800 dark:text-white`} />
          <textarea placeholder="Your Message" className={`${styles.textarea} dark:bg-gray-800 dark:text-white`}></textarea>
          <button type="submit" className={`${styles.ctaButton} dark:bg-blue-600 dark:hover:bg-blue-700`}>
            Send Message
          </button>
        </form>
      </main>
    </div>
    </PageTransition>
  );
}