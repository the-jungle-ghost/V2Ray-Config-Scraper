import React from 'react';
import { SubscriptionCard } from './SubscriptionCard';
import { useLanguage } from '../context/LanguageContext';

interface Subscription {
  name: string;
  url: string;
  description?: string;
}

export function SubscriptionsPage() {
  const { t } = useLanguage();
  
  // Main subscription links
  const mainSubscriptions: Subscription[] = [
    {
      name: 'All Configs',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/All_Configs_Sub.txt',
      description: 'Complete subscription with all configs'
    },
    {
      name: 'All Configs (Base64)',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/All_Configs_base64_Sub.txt',
      description: 'Complete subscription with all configs in Base64 format'
    }
  ];
  
  // Protocol-specific subscriptions
  const vmessSubscriptions: Subscription[] = [
    {
      name: 'VMess',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/vmess.txt',
      description: 'VMess protocol configs only'
    }
  ];

  const vlessSubscriptions: Subscription[] = [
    {
      name: 'VLess',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/vless.txt',
      description: 'VLess protocol configs only'
    }
  ];

  const trojanSubscriptions: Subscription[] = [
    {
      name: 'Trojan',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/trojan.txt',
      description: 'Trojan protocol configs only'
    }
  ];

  const shadowsocksSubscriptions: Subscription[] = [
    {
      name: 'Shadowsocks',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/ss.txt',
      description: 'Shadowsocks protocol configs only'
    },
    {
      name: 'ShadowsocksR',
      url: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/ssr.txt',
      description: 'ShadowsocksR protocol configs only'
    }
  ];

  // Splitted configs (500 count each)
  const alternativeSubscriptions: Subscription[] = [
    {
      name: 'Config List 1',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub1.txt'
    },
    {
      name: 'Config List 2',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub2.txt'
    },
    {
      name: 'Config List 3',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub3.txt'
    },
    {
      name: 'Config List 4',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub4.txt'
    },
    {
      name: 'Config List 5',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub5.txt'
    },
    {
      name: 'Config List 6',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub6.txt'
    },
    {
      name: 'Config List 7',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub7.txt'
    },
    {
      name: 'Config List 8',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub8.txt'
    },
    {
      name: 'Config List 9',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub9.txt'
    },
    {
      name: 'Config List 10',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub10.txt'
    },
    {
      name: 'Config List 11',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub11.txt'
    },
    {
      name: 'Config List 12',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub12.txt'
    },
    {
      name: 'Config List 13',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub13.txt'
    },
    {
      name: 'Config List 14',
      url: 'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub14.txt'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t('subscriptions.title')}</h2>
        <p className="text-gray-600">
          {t('subscriptions.description')}
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">All Configs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              name={subscription.name}
              url={subscription.url}
              description={subscription.description}
              copyText={t('subscriptions.copy') as string}
              copiedText={t('subscriptions.copied') as string}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('subscriptions.vmess')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vmessSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              name={subscription.name}
              url={subscription.url}
              description={subscription.description}
              copyText={t('subscriptions.copy') as string}
              copiedText={t('subscriptions.copied') as string}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('subscriptions.vless')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vlessSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              name={subscription.name}
              url={subscription.url}
              description={subscription.description}
              copyText={t('subscriptions.copy') as string}
              copiedText={t('subscriptions.copied') as string}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('subscriptions.trojan')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trojanSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              name={subscription.name}
              url={subscription.url}
              description={subscription.description}
              copyText={t('subscriptions.copy') as string}
              copiedText={t('subscriptions.copied') as string}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('subscriptions.shadowsocks')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shadowsocksSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              name={subscription.name}
              url={subscription.url}
              description={subscription.description}
              copyText={t('subscriptions.copy') as string}
              copiedText={t('subscriptions.copied') as string}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('subscriptions.alternative')} (500 configs each)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alternativeSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              name={subscription.name}
              url={subscription.url}
              copyText={t('subscriptions.copy') as string}
              copiedText={t('subscriptions.copied') as string}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 