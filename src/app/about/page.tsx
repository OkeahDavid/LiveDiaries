import React from 'react';
import styles from '../page.module.css';
import { FaBook, FaPen, FaMobileAlt, FaLock } from 'react-icons/fa';
import PageTransition from '../../components/PageTransition';


export default function About() {
  return (
    <PageTransition>
    <div className={`${styles.container} dark:bg-black`}>
      <main className={styles.main}>
        <h1 className={`${styles.title} dark:text-white`}>
          About <span className={styles.highlight}>LiveDiaries</span>
        </h1>

        <p className={`${styles.description} dark:text-gray-300`}>
          Empowering creative writers with a social platform for literary expression
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <FaBook className={styles.icon} />
            <h2>Our Story</h2>
            <p>
              LiveDiaries was born from a passion for storytelling and a desire to connect writers 
              worldwide. Founded in 2024, we&apos;ve grown into a vibrant community of creative minds.
            </p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <FaPen className={styles.icon} />
            <h2>Our Mission</h2>
            <p>
              We aim to provide a nurturing space for writers to explore their craft, share their 
              work, and connect with like-minded individuals across the globe.
            </p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <FaMobileAlt className={styles.icon} />
            <h2>The Platform</h2>
            <p>
              LiveDiaries offers a seamless mobile experience for managing your literary journey. 
              Write, edit, and share your stories anytime, anywhere.
            </p>
          </div>

          <div className={`${styles.card} dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
            <FaLock className={styles.icon} />
            <h2>Privacy First</h2>
            <p>
              Your stories are your own. We prioritize your privacy and give you full control over 
              what you share and with whom.
            </p>
          </div>
        </div>

        <section className={`${styles.section} dark:text-white`}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <ul className={styles.featureList}>
            <li>Personal writing space with cloud sync</li>
            <li>Curated library of inspiring books and prompts</li>
            <li>Community forums for feedback and discussions</li>
            <li>Writing challenges and competitions</li>
            <li>Customizable privacy settings</li>
          </ul>
        </section>

        <section className={`${styles.section} dark:text-white`}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <p>
            LiveDiaries is brought to you by a diverse team of writers, developers, and literature 
            enthusiasts. We&apos;re committed to fostering creativity and building a supportive community 
            for writers of all levels.
          </p>
        </section>

        <section className={`${styles.section} dark:text-white`}>
          <h2 className={styles.sectionTitle}>Join Our Community</h2>
          <p>
            Whether you&apos;re a seasoned author or just starting your writing journey, LiveDiaries is 
            here to support and inspire you. Join us today and be part of a growing community of 
            passionate writers.
          </p>
          <button className={`${styles.ctaButton} dark:bg-blue-600 dark:hover:bg-blue-700`}>
            Get Started
          </button>
        </section>
      </main>
    </div>
    </PageTransition>
  );
}