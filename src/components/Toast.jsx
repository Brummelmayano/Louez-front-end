// src/components/Toast.jsx
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Toast({ 
  type = 'success', 
  message, 
  duration = 3000,
  onClose,
  position = 'bottom-right' // 'top-right', 'top-left', 'bottom-left', 'bottom-right'
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  // Toast variants
  const variants = {
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-500',
      icon: (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Succès',
      textColor: 'text-green-800 dark:text-green-200'
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-500',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: 'Erreur',
      textColor: 'text-red-800 dark:text-red-200'
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-500',
      icon: (
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Attention',
      textColor: 'text-yellow-800 dark:text-yellow-200'
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-500',
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Information',
      textColor: 'text-blue-800 dark:text-blue-200'
    }
  };

  const variant = variants[type] || variants.info;

  // Position classes
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  // Handle auto-close
  useEffect(() => {
    if (duration === 0) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - (100 / (duration / 100));
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className={clsx(
        'max-w-sm w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden border-l-4',
        variant.border,
        variant.bg,
        'transform transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
        positionClasses[position]
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {variant.icon}
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className={clsx("text-sm font-medium", variant.textColor)}>
              {variant.title}
            </p>
            <p className={clsx("mt-1 text-sm", variant.textColor)}>
              {message}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  if (onClose) onClose();
                }, 300);
              }}
              className={clsx(
                "bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span className="sr-only">Fermer</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {duration > 0 && (
        <div className="h-1 bg-gray-200 dark:bg-gray-700">
          <div 
            className={clsx(
              "h-full transition-all duration-100 ease-linear",
              type === 'success' ? 'bg-green-500' :
              type === 'error' ? 'bg-red-500' :
              type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            )}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

