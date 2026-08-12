'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import styles from './Contact.module.css';

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'loading';
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus(null);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log('🔥 CONTACT FORM SUBMIT');
    console.log('FORM DATA:', formData);

    setIsSubmitting(true);

    setStatus({
      type: 'loading',
      message: 'Mengirim pesan...',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('API STATUS:', response.status);

      const result = await response.json();

      console.log('API RESPONSE:', result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Gagal mengirim pesan.'
        );
      }

      setStatus({
        type: 'success',
        message: '✓ Pesan berhasil dikirim ke Telegram.',
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('CONTACT ERROR:', error);

      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? `✕ ${error.message}`
            : '✕ Gagal mengirim pesan.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
    >
      <div className="section-container">

        <h2 className="section-title">
          Get In Touch
        </h2>

        <div className={styles.grid}>

          <div className={styles.infoCol}>

            <h3 className={styles.title}>
              Let&apos;s discuss a project
            </h3>

            <p className={styles.description}>
              I&apos;m currently open to new opportunities,
              collaborations, or freelance projects. Feel free
              to shoot me a message!
            </p>

            <div className={styles.infoDetails}>

              <div className={styles.infoItem}>

                <div className={styles.iconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />

                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <div className={styles.infoText}>

                  <span className={styles.infoLabel}>
                    Email Me
                  </span>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={styles.infoValue}
                  >
                    {personalInfo.email}
                  </a>

                </div>

              </div>

              <div className={styles.infoItem}>

                <div className={styles.iconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />

                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                    />
                  </svg>
                </div>

                <div className={styles.infoText}>

                  <span className={styles.infoLabel}>
                    Location
                  </span>

                  <span className={styles.infoValue}>
                    {personalInfo.location}
                  </span>

                </div>

              </div>

            </div>

            <div className={styles.socials}>

              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub size={22} />
                </a>
              )}

              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn size={22} />
                </a>
              )}

              {personalInfo.socials.twitter && (
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <FaTwitter size={22} />
                </a>
              )}

              {personalInfo.socials.instagram && (
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
              )}

            </div>

          </div>

          <div
            className={`glass-card ${styles.formCol}`}
          >

            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >

              <div className={styles.formGroup}>

                <label
                  htmlFor="name-input"
                  className={styles.label}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className={styles.formGroup}>

                <label
                  htmlFor="phone-input"
                  className={styles.label}
                >
                  No. HP
                </label>

                <input
                  type="tel"
                  id="phone-input"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: 081234567890"
                  required
                />

              </div>

              <div className={styles.formGroup}>

                <label
                  htmlFor="email-input"
                  className={styles.label}
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your email address"
                  required
                />

              </div>

              <div className={styles.formGroup}>

                <label
                  htmlFor="message-textarea"
                  className={styles.label}
                >
                  Your Message
                </label>

                <textarea
                  id="message-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />

              </div>

              {status && (
                <div
                  style={{
                    padding: '12px 16px',
                    marginBottom: '16px',
                    borderRadius: '10px',
                    border:
                      status.type === 'success'
                        ? '1px solid rgba(34, 197, 94, 0.4)'
                        : status.type === 'error'
                        ? '1px solid rgba(239, 68, 68, 0.4)'
                        : '1px solid rgba(6, 182, 212, 0.4)',
                    background:
                      status.type === 'success'
                        ? 'rgba(34, 197, 94, 0.12)'
                        : status.type === 'error'
                        ? 'rgba(239, 68, 68, 0.12)'
                        : 'rgba(6, 182, 212, 0.12)',
                    color:
                      status.type === 'success'
                        ? '#4ade80'
                        : status.type === 'error'
                        ? '#f87171'
                        : '#22d3ee',
                  }}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{
                  alignSelf: 'flex-start',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting
                    ? 'not-allowed'
                    : 'pointer',
                }}
              >
                {isSubmitting
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}