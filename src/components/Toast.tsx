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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in max-w-[calc(100%-2rem)] z-50">
      <Check className="w-4 h-4 flex-shrink-0 text-green-400" />
      <span className="text-sm whitespace-nowrap">{message}</span>
    </div>
  );
}