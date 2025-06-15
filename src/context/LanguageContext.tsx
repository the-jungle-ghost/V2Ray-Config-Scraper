import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | React.ReactNode;
}

const translations: Record<Language, Record<string, string | React.ReactNode>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.guides': 'Guides',
    'nav.subscriptions': 'Subscriptions',
    'nav.clients': 'Clients',
    'nav.about': 'About',
    
    // Home Page
    'home.title': 'V2Ray Configuration Guide',
    'home.subtitle': 'Your complete guide to V2Ray setup and configuration',
    'home.getStarted': 'Get Started',
    
    // Guides
    'guides.title': 'V2Ray Setup Guides',
    'guides.description': 'Follow these step-by-step guides to set up V2Ray on your device. Select the guide that matches your operating system.',
    
    // Subscriptions
    'subscriptions.title': 'V2Ray Subscriptions',
    'subscriptions.description': 'Choose from the following subscription links to use with your V2Ray client.',
    'subscriptions.vmess': 'VMESS Protocol',
    'subscriptions.vless': 'VLESS Protocol',
    'subscriptions.trojan': 'Trojan Protocol',
    'subscriptions.shadowsocks': 'Shadowsocks Protocol',
    'subscriptions.alternative': 'Alternative Links',
    'subscriptions.copy': 'Copy',
    'subscriptions.copied': 'Copied!',
    
    // Clients
    'clients.title': 'V2Ray Clients',
    'clients.description': 'Download the appropriate V2Ray client for your device.',
    
    // About
    'about.title': 'About V2Ray Guide',
    'about.description': 'This app provides guides and resources for setting up and using V2Ray.',
    'about.telegram': 'Join our Telegram channel',
    
    // Language
    'language.switch': 'فارسی',
  },
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.guides': 'راهنما',
    'nav.subscriptions': 'اشتراک‌ها',
    'nav.clients': 'کلاینت‌ها',
    'nav.about': 'درباره ما',
    
    // Home Page
    'home.title': <>راهنمای پیکربندی <span className="preserve-ltr">V2Ray</span></>,
    'home.subtitle': <>راهنمای کامل نصب و پیکربندی <span className="preserve-ltr">V2Ray</span></>,
    'home.getStarted': 'شروع کنید',
    
    // Guides
    'guides.title': <>راهنمای نصب <span className="preserve-ltr">V2Ray</span></>,
    'guides.description': <>این راهنماهای گام به گام را برای نصب <span className="preserve-ltr">V2Ray</span> روی دستگاه خود دنبال کنید. راهنمای مطابق با سیستم عامل خود را انتخاب کنید.</>,
    
    // Subscriptions
    'subscriptions.title': <>اشتراک‌های <span className="preserve-ltr">V2Ray</span></>,
    'subscriptions.description': <>از لینک‌های اشتراک زیر برای استفاده با کلاینت <span className="preserve-ltr">V2Ray</span> خود انتخاب کنید.</>,
    'subscriptions.vmess': <>پروتکل <span className="preserve-ltr">VMESS</span></>,
    'subscriptions.vless': <>پروتکل <span className="preserve-ltr">VLESS</span></>,
    'subscriptions.trojan': <>پروتکل <span className="preserve-ltr">Trojan</span></>,
    'subscriptions.shadowsocks': <>پروتکل <span className="preserve-ltr">Shadowsocks</span></>,
    'subscriptions.alternative': 'لینک‌های جایگزین',
    'subscriptions.copy': 'کپی',
    'subscriptions.copied': 'کپی شد!',
    
    // Clients
    'clients.title': <>کلاینت‌های <span className="preserve-ltr">V2Ray</span></>,
    'clients.description': <>کلاینت مناسب <span className="preserve-ltr">V2Ray</span> برای دستگاه خود را دانلود کنید.</>,
    
    // About
    'about.title': <>درباره راهنمای <span className="preserve-ltr">V2Ray</span></>,
    'about.description': <>این برنامه راهنماها و منابعی برای نصب و استفاده از <span className="preserve-ltr">V2Ray</span> ارائه می‌دهد.</>,
    'about.telegram': 'به کانال تلگرام ما بپیوندید',
    
    // Language
    'language.switch': 'English',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string | React.ReactNode => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 