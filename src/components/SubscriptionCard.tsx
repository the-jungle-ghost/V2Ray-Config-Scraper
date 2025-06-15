import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Toast } from './Toast';

interface SubscriptionCardProps {
  name: string;
  url: string;
  description?: string;
  copyText?: string;
  copiedText?: string;
}

export function SubscriptionCard({ name, url, description, copyText = 'Copy', copiedText = 'Copied!' }: SubscriptionCardProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <div className="bg-darker-bg rounded-lg p-4 border border-border-color hover:border-primary-light transition-colors">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-light-text">{name}</h4>
          <button
            onClick={handleCopy}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 ${
              copied
                ? 'bg-green-100 text-green-800'
                : 'bg-primary-color bg-opacity-20 text-primary-light hover:bg-opacity-30'
            }`}
            aria-label={copied ? copiedText : copyText}
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? copiedText : copyText}</span>
          </button>
        </div>
        <div className="relative">
          <p className="text-xs text-muted-text break-all">{url}</p>
          {description && <p className="text-xs text-muted-text mt-2">{description}</p>}
        </div>
      </div>
      <Toast 
        message={`${name} link copied to clipboard!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
} 