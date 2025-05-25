// src/components/Input.jsx
import React from 'react';
import clsx from 'clsx';

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  error = '',
  helperText = '',
  icon = null,
  iconPosition = 'left',
  className = '',
  id,
  name,
  ...props
}) {
  const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={clsx('form-group', className)}>
      {label && (
        <label 
          htmlFor={uniqueId} 
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          id={uniqueId}
          name={name || uniqueId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            'w-full rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500 bg-white dark:bg-gray-800',
            'text-gray-900 dark:text-gray-100', // <-- Ajout ici pour le texte
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-gray-700',
            disabled && 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-900',
            icon && iconPosition === 'left' ? 'pl-10' : 'pl-4',
            icon && iconPosition === 'right' ? 'pr-10' : 'pr-4',
            'py-2'
          )}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
}

