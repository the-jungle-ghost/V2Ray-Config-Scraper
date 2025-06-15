import React, { ReactNode } from 'react';

interface ClientAppCardProps {
  name: string;
  description: string | ReactNode;
  downloadUrl: string;
  platform: string;
}

export function ClientAppCard({ name, description, downloadUrl, platform }: ClientAppCardProps) {
  return (
    <a 
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" role="img" aria-label={`${platform} icon`}>
          {platform === 'Windows' && '💻'}
          {platform === 'macOS' && '🍏'}
          {platform === 'Android' && '🤖'}
          {platform === 'iOS' && '📱'}
          {platform === 'Linux' && '🐧'}
        </span>
        <h4 className="font-medium text-gray-800">{name}</h4>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-3 text-xs text-purple-600 font-medium">Download ↗</div>
    </a>
  );
} 