import React, { useState } from 'react';
import { RefreshCw, Ghost, Link } from 'lucide-react';
import { getCachedSubscription } from '../services/subscriptionService';
import { Toast } from './Toast';

interface HeaderProps {
  onRefresh: () => void;
  loading: boolean;
  countdown: number;
}

export function Header({ onRefresh, loading, countdown }: HeaderProps) {
  const [showToast, setShowToast] = useState(false);

  const copySubscription = async () => {
    try {
      const content = getCachedSubscription();
      await navigator.clipboard.writeText(content);
      setShowToast(true);
    } catch (error) {
      console.error('Failed to copy subscription content:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Ghost className="w-5 h-5 text-purple-600" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Free V2Ray Config Scraper</h1>
            </div>
            <p className="text-sm text-gray-600">
              App made by{' '}
              <a 
                href="https://t.me/theghostofjungle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                The Ghost of Jungle
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={copySubscription}
              className="flex items-center justify-center gap-2 text-sm bg-purple-50 hover:bg-purple-100 text-purple-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Link className="w-4 h-4" />
              Copy Subscription
            </button>
            <span className="text-sm text-gray-500">
              Refresh in: {Math.floor(countdown / 60)}:
              {(countdown % 60).toString().padStart(2, '0')}
            </span>
            <button
              onClick={onRefresh}
              disabled={loading}
              className={`
                p-2 rounded-full transition-colors
                ${loading
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-600'
                }
              `}
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <Toast 
        message="Subscription copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}