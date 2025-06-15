import React from 'react';
import { Shield, Github } from 'lucide-react';
import { CONFIG_URLS } from '../constants';

export function Header() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-purple-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">V2Ray Config Guide</h1>
          </div>
          <p className="text-sm text-gray-600">
            A simple guide to V2Ray configurations and clients
          </p>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
          <a
            href={CONFIG_URLS.MAIN_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm bg-purple-50 hover:bg-purple-100 text-purple-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}