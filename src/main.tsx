import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import './index.css';

// Component to handle language direction changes
function LanguageDirectionHandler() {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Set the language attribute on the html element
    document.documentElement.lang = language;
    
    // Set the direction attribute based on the language
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    
    // Apply font family based on language
    if (language === 'fa') {
      document.body.style.fontFamily = 'Vazirmatn, Tahoma, sans-serif';
    } else {
      document.body.style.fontFamily = 'Inter, system-ui, sans-serif';
    }
  }, [language]);
  
  return <App />;
}

// Root component that includes both LanguageProvider and LanguageDirectionHandler
function Root() {
  return (
    <LanguageProvider>
      <LanguageDirectionHandler />
    </LanguageProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
