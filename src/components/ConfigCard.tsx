import React, { useMemo, useState } from 'react';
import { Copy } from 'lucide-react';
import { VPNConfig } from '../types/config';
import { getRandomEmoji } from '../utils/emojiUtils';
import { Toast } from './Toast';

interface ConfigCardProps {
  config: VPNConfig;
  index: number;
}

export function ConfigCard({ config, index }: ConfigCardProps) {
  const [showToast, setShowToast] = useState(false);
  const emoji = useMemo(() => getRandomEmoji(config.type), [config.type, config.raw]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(config.raw);
    setShowToast(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl" role="img" aria-label="config emoji">
                {emoji}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
                Config {index + 1}
              </h3>
            </div>
            <p className="text-xs text-gray-500 uppercase mt-0.5">{config.type}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            title="Copy configuration"
          >
            <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
        <div className="mt-2">
          <p className="text-xs sm:text-sm text-gray-600 break-all line-clamp-2 hover:line-clamp-none cursor-pointer transition-all">
            {config.raw}
          </p>
        </div>
      </div>
      <Toast 
        message="Configuration copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}