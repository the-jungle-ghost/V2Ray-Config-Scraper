import React from 'react';
import { ConfigTab } from '../types/config';

interface TabBarProps {
  activeTab: ConfigTab;
  onTabChange: (tab: ConfigTab) => void;
  counts: Record<ConfigTab, number>;
}

export function TabBar({ activeTab, onTabChange, counts }: TabBarProps) {
  const tabs: ConfigTab[] = ['all', 'vmess', 'vless', 'trojan', 'shadowsocks'];

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 bg-gray-100 p-2 rounded-lg mb-4 sm:mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors
            ${activeTab === tab
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }
            ${tab === 'all' ? 'col-span-2 sm:col-span-1' : ''}
          `}
        >
          <span className="capitalize">{tab}</span>
          <span className="ml-1.5 text-xs text-gray-500">
            ({counts[tab]})
          </span>
        </button>
      ))}
    </div>
  );
}