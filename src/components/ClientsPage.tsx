import React from 'react';
import { ClientAppCard } from './ClientAppCard';
import { useLanguage } from '../context/LanguageContext';

export function ClientsPage() {
  const { t, language } = useLanguage();
  
  const windowsClients = [
    {
      name: 'V2RayN',
      description: language === 'en' 
        ? 'A popular V2Ray client for Windows with a graphical user interface.'
        : <>یک کلاینت محبوب <span className="preserve-ltr">V2Ray</span> برای ویندوز با رابط کاربری گرافیکی.</>,
      downloadUrl: 'https://github.com/2dust/v2rayN/releases'
    },
    {
      name: 'NekoRay',
      description: language === 'en'
        ? 'A cross-platform V2Ray client with a clean interface.'
        : <>یک کلاینت چند سکویی <span className="preserve-ltr">V2Ray</span> با رابط کاربری تمیز.</>,
      downloadUrl: 'https://github.com/MatsuriDayo/nekoray/releases'
    },
    {
      name: 'Hiddify-Next',
      description: language === 'en'
        ? 'A modern and feature-rich V2Ray client for Windows.'
        : <>یک کلاینت مدرن و پر امکانات <span className="preserve-ltr">V2Ray</span> برای ویندوز.</>,
      downloadUrl: 'https://github.com/hiddify/hiddify-next/releases'
    }
  ];

  const macosClients = [
    {
      name: 'V2RayX',
      description: language === 'en'
        ? 'A simple V2Ray client for macOS.'
        : <>یک کلاینت ساده <span className="preserve-ltr">V2Ray</span> برای مک.</>,
      downloadUrl: 'https://github.com/Cenmrev/V2RayX/releases'
    },
    {
      name: 'Hiddify-Next',
      description: language === 'en'
        ? 'A modern and feature-rich V2Ray client for macOS.'
        : <>یک کلاینت مدرن و پر امکانات <span className="preserve-ltr">V2Ray</span> برای مک.</>,
      downloadUrl: 'https://github.com/hiddify/hiddify-next/releases'
    }
  ];

  const androidClients = [
    {
      name: 'V2RayNG',
      description: language === 'en'
        ? 'A popular V2Ray client for Android.'
        : <>یک کلاینت محبوب <span className="preserve-ltr">V2Ray</span> برای اندروید.</>,
      downloadUrl: 'https://github.com/2dust/v2rayNG/releases'
    },
    {
      name: 'Hiddify-Next',
      description: language === 'en'
        ? 'A modern and feature-rich V2Ray client for Android.'
        : <>یک کلاینت مدرن و پر امکانات <span className="preserve-ltr">V2Ray</span> برای اندروید.</>,
      downloadUrl: 'https://github.com/hiddify/hiddify-next/releases'
    }
  ];

  const iosClients = [
    {
      name: 'Streisand',
      description: language === 'en'
        ? 'A V2Ray client for iOS available on the App Store.'
        : <>یک کلاینت <span className="preserve-ltr">V2Ray</span> برای <span className="preserve-ltr">iOS</span> موجود در اپ استور.</>,
      downloadUrl: 'https://apps.apple.com/us/app/streisand/id6450534064'
    },
    {
      name: 'Fair',
      description: language === 'en'
        ? 'A simple and clean V2Ray client for iOS.'
        : <>یک کلاینت ساده و تمیز <span className="preserve-ltr">V2Ray</span> برای <span className="preserve-ltr">iOS</span>.</>,
      downloadUrl: 'https://apps.apple.com/us/app/fair-vpn/id1533873488'
    },
    {
      name: 'ShadowRocket',
      description: language === 'en'
        ? 'A powerful V2Ray client for iOS with advanced features.'
        : <>یک کلاینت قدرتمند <span className="preserve-ltr">V2Ray</span> برای <span className="preserve-ltr">iOS</span> با ویژگی‌های پیشرفته.</>,
      downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118'
    }
  ];

  const linuxClients = [
    {
      name: 'NekoRay',
      description: language === 'en'
        ? 'A cross-platform V2Ray client with a clean interface.'
        : <>یک کلاینت چند سکویی <span className="preserve-ltr">V2Ray</span> با رابط کاربری تمیز.</>,
      downloadUrl: 'https://github.com/MatsuriDayo/nekoray/releases'
    },
    {
      name: 'Hiddify-Next',
      description: language === 'en'
        ? 'A modern and feature-rich V2Ray client for Linux.'
        : <>یک کلاینت مدرن و پر امکانات <span className="preserve-ltr">V2Ray</span> برای لینوکس.</>,
      downloadUrl: 'https://github.com/hiddify/hiddify-next/releases'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t('clients.title')}</h2>
        <p className="text-gray-600">
          {t('clients.description')}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Windows</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {windowsClients.map((client, index) => (
            <ClientAppCard
              key={index}
              name={client.name}
              description={client.description}
              downloadUrl={client.downloadUrl}
              platform="Windows"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">macOS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {macosClients.map((client, index) => (
            <ClientAppCard
              key={index}
              name={client.name}
              description={client.description}
              downloadUrl={client.downloadUrl}
              platform="macOS"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Android</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {androidClients.map((client, index) => (
            <ClientAppCard
              key={index}
              name={client.name}
              description={client.description}
              downloadUrl={client.downloadUrl}
              platform="Android"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">iOS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {iosClients.map((client, index) => (
            <ClientAppCard
              key={index}
              name={client.name}
              description={client.description}
              downloadUrl={client.downloadUrl}
              platform="iOS"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Linux</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {linuxClients.map((client, index) => (
            <ClientAppCard
              key={index}
              name={client.name}
              description={client.description}
              downloadUrl={client.downloadUrl}
              platform="Linux"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 