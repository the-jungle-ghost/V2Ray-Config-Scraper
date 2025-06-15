import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-primary-color text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 z-50 toast-animation">
      <div className="bg-white bg-opacity-20 p-1 rounded-full">
        <Check className="w-3 h-3 flex-shrink-0 text-white" />
      </div>
      <span className="text-sm whitespace-nowrap">{message}</span>
    </div>
  );
}