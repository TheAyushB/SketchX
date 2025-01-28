import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export const Button = ({
    children,
    variant = 'primary',
    ...props
}: {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
};