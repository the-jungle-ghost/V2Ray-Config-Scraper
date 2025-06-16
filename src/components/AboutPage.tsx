import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github } from 'lucide-react';

export function AboutPage() {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  
  return (
    <div className="space-y-6">
      <div className="bg-card-bg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-light-text mb-4">{t('about.title')}</h2>
        <p className="text-muted-text mb-4">
          {t('about.description')}
        </p>
        
        <div className={`mt-6 flex flex-wrap gap-4 justify-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <a 
            href="https://t.me/theghostofjungle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-color hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span className="text-xl">📱</span>
            <span>{t('about.telegram')}</span>
          </a>
          
          <a 
            href="https://github.com/Danialsamadi/v2ray-configsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>{t('about.configs_repo')}</span>
          </a>
        </div>
      </div>
      
      <div className="bg-card-bg rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-light-text mb-2">V2Ray Guide</h3>
            <p className="text-muted-text">v1.0.0</p>
            <div className="mt-4">
              <a 
                href="https://github.com/the-jungle-ghost/V2Ray-Config-Scraper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light hover:text-primary-color flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>{t('about.app_repo')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 