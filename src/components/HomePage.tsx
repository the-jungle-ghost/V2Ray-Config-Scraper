import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-card-bg rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{t('home.title')}</h1>
        <p className="text-lg md:text-xl text-muted-text mb-6">{t('home.subtitle')}</p>
        <Link 
          to="/guides" 
          className="inline-block bg-primary-color hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          {t('home.getStarted')}
        </Link>
      </div>
      
      {/* About V2Ray Section */}
      <div className="bg-card-bg rounded-lg shadow-lg p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          {isRTL ? 'V2Ray چیست؟' : 'What is V2Ray?'}
        </h2>
        <p className="mb-4">
          {isRTL ? (
            <>
              <span className="preserve-ltr">V2Ray</span> یک پلتفرم قدرتمند و همه‌کاره برای ساخت پروکسی جهت دور زدن محدودیت‌های شبکه است.
              این پلتفرم از پروتکل‌های متعددی از جمله <span className="preserve-ltr">VMess</span>، <span className="preserve-ltr">VLESS</span>، <span className="preserve-ltr">Trojan</span>، <span className="preserve-ltr">Shadowsocks</span> و موارد دیگر پشتیبانی می‌کند.
            </>
          ) : (
            'V2Ray is a powerful and versatile platform for building proxies to bypass network restrictions. It supports multiple protocols including VMess, VLESS, Trojan, Shadowsocks, and more.'
          )}
        </p>
        <p className="mb-4">
          {isRTL ? (
            <>
              این برنامه یک راهنمای جامع برای کمک به شما در راه‌اندازی و استفاده از <span className="preserve-ltr">V2Ray</span> روی دستگاه‌های مختلف ارائه می‌دهد، 
              همراه با لینک‌های اشتراک که می‌توانند مستقیماً در کلاینت‌های <span className="preserve-ltr">V2Ray</span> وارد شوند.
            </>
          ) : (
            'This application provides a comprehensive guide to help you set up and use V2Ray on various devices, along with subscription links that can be directly imported into V2Ray clients.'
          )}
        </p>
      </div>
      
      {/* Features Section */}
      <div className="bg-card-bg rounded-lg shadow-lg p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          {isRTL ? 'ویژگی‌ها' : 'Features'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/guides" className="border border-border-color rounded-lg p-4 hover:border-primary-light transition-colors">
            <h3 className={`text-lg font-semibold mb-2 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center`}>
              <span className={isRTL ? 'ml-2' : 'mr-2'}>📚</span> 
              {isRTL ? 'راهنمای نصب' : 'Setup Guides'}
            </h3>
            <p>
              {isRTL ? 
                <>دستورالعمل‌های گام به گام برای راه‌اندازی <span className="preserve-ltr">V2Ray</span> روی ویندوز، مک، اندروید، آی‌او‌اس و لینوکس.</> : 
                'Step-by-step instructions for setting up V2Ray on Windows, macOS, Android, iOS, and Linux.'
              }
            </p>
          </Link>
          <Link to="/subscriptions" className="border border-border-color rounded-lg p-4 hover:border-primary-light transition-colors">
            <h3 className={`text-lg font-semibold mb-2 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center`}>
              <span className={isRTL ? 'ml-2' : 'mr-2'}>🔗</span> 
              {isRTL ? 'لینک‌های اشتراک' : 'Subscription Links'}
            </h3>
            <p>
              {isRTL ? 
                <>لینک‌های اشتراک آماده برای پروتکل‌های مختلف که می‌توانند مستقیماً در کلاینت‌های <span className="preserve-ltr">V2Ray</span> وارد شوند.</> : 
                'Ready-to-use subscription links for various protocols that can be directly imported into V2Ray clients.'
              }
            </p>
          </Link>
          <Link to="/clients" className="border border-border-color rounded-lg p-4 hover:border-primary-light transition-colors">
            <h3 className={`text-lg font-semibold mb-2 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center`}>
              <span className={isRTL ? 'ml-2' : 'mr-2'}>📱</span> 
              {isRTL ? 'دانلود کلاینت‌ها' : 'Client Downloads'}
            </h3>
            <p>
              {isRTL ? 
                <>لینک‌های دانلود بهترین کلاینت‌های <span className="preserve-ltr">V2Ray</span> برای دستگاه و سیستم عامل شما.</> : 
                'Links to download the best V2Ray clients for your specific device and operating system.'
              }
            </p>
          </Link>
          <div className="border border-border-color rounded-lg p-4">
            <h3 className={`text-lg font-semibold mb-2 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center`}>
              <span className={isRTL ? 'ml-2' : 'mr-2'}>🌐</span> 
              {isRTL ? 'پشتیبانی چند زبانه' : 'Multi-language Support'}
            </h3>
            <p>
              {isRTL ? 
                'پشتیبانی کامل از زبان‌های فارسی و انگلیسی با قالب‌بندی مناسب RTL.' : 
                'Full support for both English and Persian languages with proper RTL formatting.'
              }
            </p>
          </div>
        </div>
      </div>
      
      {/* Subscription Types */}
      <div className="bg-card-bg rounded-lg shadow-lg p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          {isRTL ? 'اشتراک‌های موجود' : 'Available Subscriptions'}
        </h2>
        <p className="mb-4">
          {isRTL ? 
            <>این برنامه انواع مختلفی از لینک‌های اشتراک را ارائه می‌دهد که می‌توانند با کلاینت‌های <span className="preserve-ltr">V2Ray</span> استفاده شوند:</> : 
            'This application provides various types of subscription links that can be used with V2Ray clients:'
          }
        </p>
        <ul className={`list-disc ${isRTL ? 'pr-5' : 'pl-5'} space-y-2 mb-4`}>
          <li>
            <strong>{isRTL ? 'تمام پیکربندی‌ها' : 'All Configs'}</strong> - 
            {isRTL ? ' اشتراک کامل با تمام پیکربندی‌های موجود' : ' Complete subscription with all available configurations'}
          </li>
          <li>
            <strong>{isRTL ? 'پروتکل‌های خاص' : 'Protocol-specific'}</strong> - 
            {isRTL ? 
              <> اشتراک‌های جداگانه برای <span className="preserve-ltr">VMess</span>، <span className="preserve-ltr">VLESS</span>، <span className="preserve-ltr">Trojan</span> و <span className="preserve-ltr">Shadowsocks</span></> : 
              ' Separate subscriptions for VMess, VLESS, Trojan, and Shadowsocks'
            }
          </li>
          <li>
            <strong>{isRTL ? 'پیکربندی‌های تقسیم‌شده' : 'Splitted Configs'}</strong> - 
            {isRTL ? ' اشتراک‌های تقسیم‌شده به بخش‌های کوچکتر با 500 پیکربندی در هر کدام' : ' Subscriptions split into smaller chunks of 500 configs each'}
          </li>
        </ul>
        <p>
          {isRTL ? 
            <>برای دسترسی به این لینک‌ها، صفحه <Link to="/subscriptions" className="text-primary-light hover:text-primary-color">اشتراک‌ها</Link> را ببینید.</> : 
            <>Visit the <Link to="/subscriptions" className="text-primary-light hover:text-primary-color">Subscriptions</Link> page to access these links.</>
          }
        </p>
      </div>
      
      {/* Getting Started */}
      <div className="bg-card-bg rounded-lg shadow-lg p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          {isRTL ? 'شروع به کار' : 'Getting Started'}
        </h2>
        <ol className={`list-decimal ${isRTL ? 'pr-5' : 'pl-5'} space-y-4`}>
          <li>
            <p className="font-medium">
              {isRTL ? <>یک کلاینت <span className="preserve-ltr">V2Ray</span> برای دستگاه خود دانلود کنید</> : 'Download a V2Ray client for your device'}
            </p>
            <p className="text-muted-text">
              {isRTL ? 
                <>صفحه <Link to="/clients" className="text-primary-light hover:text-primary-color">کلاینت‌ها</Link> را برای یافتن کلاینت مناسب ببینید.</> : 
                <>Visit our <Link to="/clients" className="text-primary-light hover:text-primary-color">Clients</Link> page to find the appropriate client.</>
              }
            </p>
          </li>
          <li>
            <p className="font-medium">
              {isRTL ? 'یک لینک اشتراک را کپی کنید' : 'Copy a subscription link'}
            </p>
            <p className="text-muted-text">
              {isRTL ? 
                <>به صفحه <Link to="/subscriptions" className="text-primary-light hover:text-primary-color">اشتراک‌ها</Link> بروید و لینکی که با نیازهای شما مطابقت دارد را کپی کنید.</> : 
                <>Go to the <Link to="/subscriptions" className="text-primary-light hover:text-primary-color">Subscriptions</Link> page and copy a link that matches your needs.</>
              }
            </p>
          </li>
          <li>
            <p className="font-medium">
              {isRTL ? 'اشتراک را در کلاینت خود وارد کنید' : 'Import the subscription into your client'}
            </p>
            <p className="text-muted-text">
              {isRTL ? 
                <>برای دستورالعمل‌های دقیق در مورد نحوه وارد کردن اشتراک‌ها، <Link to="/guides" className="text-primary-light hover:text-primary-color">راهنماها</Link> را دنبال کنید.</> : 
                <>Follow the <Link to="/guides" className="text-primary-light hover:text-primary-color">Guides</Link> for detailed instructions on how to import subscriptions.</>
              }
            </p>
          </li>
          <li>
            <p className="font-medium">
              {isRTL ? 'متصل شوید و لذت ببرید!' : 'Connect and enjoy!'}
            </p>
            <p className="text-muted-text">
              {isRTL ? 'پس از وارد کردن، می‌توانید یک سرور را انتخاب کرده و به آن متصل شوید.' : 'Once imported, you can select a server and connect to it.'}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
} 