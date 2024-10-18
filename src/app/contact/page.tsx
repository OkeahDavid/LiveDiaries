'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import PageTransition from '../../components/PageTransition';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is missing');
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      );

      console.log('Email sent successfully:', result.text);
      setStatus('Message sent successfully!');
      
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      if (error instanceof Error) {
        setStatus(`Failed to send message: ${error.message}`);
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form onSubmit={handleSubmit} className={`${styles.form} dark:text-white`}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <input 
              type="text" 
              placeholder="Your Name" 
              className={`${styles.input} dark:bg-gray-800 dark:text-white`} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className={`${styles.input} dark:bg-gray-800 dark:text-white`} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <textarea 
              placeholder="Your Message" 
              className={`${styles.textarea} dark:bg-gray-800 dark:text-white`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isSubmitting}
            ></textarea>
            <button 
              type="submit" 
              className={`${styles.ctaButton} dark:bg-blue-600 dark:hover:bg-blue-700`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`mt-4 text-sm ${
                status.includes('success') ? 'text-green-500' : 'text-red-500'
              }`}>
                {status}
              </p>
            )}
          </form>
        </main>
      </div>
    </PageTransition>
  );
}