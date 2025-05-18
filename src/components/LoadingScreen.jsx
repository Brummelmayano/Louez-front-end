// src/components/LoadingScreen.jsx

import React from 'react';
import { Spinner } from 'phosphor-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-95 flex items-center justify-center z-50">
      <Spinner
        size={64}
        weight="bold"
        className="animate-spin text-indigo dark:text-violet"
      />
    </div>
  );
}
