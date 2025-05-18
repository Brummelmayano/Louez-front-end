// src/components/DatePicker.jsx
import React from 'react';
import clsx from 'clsx';

export default function DatePicker({
  label,
  value,
  onChange,
  min,
  max,
  required = false,
  disabled = false,
  error = '',
  className = '',
  id,
  name,
  placeholder = 'Sélectionner une date',
  ...props
}) {
  const uniqueId = id || `date-${Math.random().toString(36).substr(2, 9)}`;
  
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
        <input
          type="date"
          id={uniqueId}
          name={name || uniqueId}
          value={value || ''}
          onChange={onChange}
          min={min}
          max={max}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(
            'w-full px-4 py-2 rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500 bg-white dark:bg-gray-800',
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-gray-700',
            disabled && 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-900'
          )}
          {...props}
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className={clsx(
              "w-5 h-5", 
              error ? "text-red-500" : "text-gray-400"
            )} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
}

