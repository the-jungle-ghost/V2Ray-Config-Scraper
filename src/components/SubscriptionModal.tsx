import React from 'react';
import { X, Copy } from 'lucide-react';
import { Toast } from './Toast';

interface SubscriptionModalProps {
  content: string;
  isOpen: boolean;
  onClose: () => void;
  onCopy: () => void;
  showToast: boolean;
  onToastClose: () => void;
}

export function SubscriptionModal({ 
  content, 
  isOpen, 
  onClose, 
  onCopy,
  showToast,
  onToastClose
}: SubscriptionModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[80vh] bg-white rounded-lg shadow-xl z-50 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Subscription Content</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="relative">
          <pre className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 overflow-auto max-h-[50vh]">
            {content}
          </pre>
          <button
            onClick={onCopy}
            className="absolute top-2 right-2 p-2 bg-white hover:bg-gray-50 rounded-full shadow-sm"
            title="Copy content"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <Toast 
        message="Subscription content copied to clipboard!"
        isVisible={showToast}
        onClose={onToastClose}
      />
    </>
  );
}