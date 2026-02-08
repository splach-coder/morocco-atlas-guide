import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    fullWidth?: boolean;
    target?: string;
    rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    fullWidth = false,
    target,
    rel,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-poppins font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-primary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg focus:ring-primary',
        secondary: 'bg-secondary text-neutral-dark hover:bg-opacity-80 focus:ring-secondary',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
        ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
    };

    const sizes = {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
