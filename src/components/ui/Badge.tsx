import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'accent' | 'neutral';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    className = ''
}) => {
    const variants = {
        primary: 'bg-primary/10 text-primary',
        accent: 'bg-accent/10 text-accent',
        neutral: 'bg-neutral-light text-neutral-dark',
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
