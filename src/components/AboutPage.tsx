import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t('about.title')}</h2>
        <p className="text-gray-600 mb-4">
          {t('about.description')}
        </p>
        
        <div className="mt-6">
          <a 
            href="https://t.me/theghostofjungle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span className="text-xl">📱</span>
            <span>{t('about.telegram')}</span>
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">V2Ray Guide</h3>
            <p className="text-gray-600">v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
} 