// src/components/Button.jsx
import React from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  type = 'button',
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'text'
  size = 'md', // 'sm' | 'md' | 'lg'
  fullWidth = false,
  disabled = false,
  className = '',
  icon = null,
  iconPosition = 'left', // 'left' | 'right'
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/30 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    secondary: 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
    outline: 'bg-transparent border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    text: 'bg-transparent text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 focus:ring-2 focus:ring-indigo-500',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-0.5';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const iconSpacing = icon ? (iconPosition === 'left' ? 'space-x-2' : 'space-x-reverse space-x-2') : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        widthStyles,
        iconSpacing,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
}

