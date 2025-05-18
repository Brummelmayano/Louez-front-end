// src/components/ToastContainer.jsx

import React, { useState, useEffect } from 'react';
import Toast from './Toast';

export default function ToastContainer() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handler = e => setToast(e.detail);
    const hide = () => setToast(null);
    window.addEventListener('toast', handler);
    window.addEventListener('toast-hide', hide);
    return () => {
      window.removeEventListener('toast', handler);
      window.removeEventListener('toast-hide', hide);
    };
  }, []);

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      <Toast type={toast.type}>{toast.message}</Toast>
    </div>
  );
}
