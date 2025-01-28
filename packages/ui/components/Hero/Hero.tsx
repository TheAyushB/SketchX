import React from 'react';
import styles from './Hero.module.css';

export const Hero = ({
  title,
  subtitle,
  description,
  children,
}: {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.subtitle}>{subtitle}</span>
        {title}
      </h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.ctaGroup}>{children}</div>
    </section>
  );
};