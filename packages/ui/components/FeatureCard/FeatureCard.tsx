import React from 'react';
import styles from './FeatureCard.module.css';

export const FeatureCard = ({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};