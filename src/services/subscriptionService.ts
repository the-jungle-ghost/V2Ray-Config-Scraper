import { CONFIG_URLS, SUBSCRIPTION_URLS } from '../constants';
import { SubscriptionLink } from '../types/config';

export async function fetchSubscriptionContent(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    console.error('Error fetching subscription content:', error);
    return '';
  }
}

export function getSubscriptionLinks(): SubscriptionLink[] {
  return [
    {
      name: 'All Configs',
      url: CONFIG_URLS.ALL_CONFIGS,
      description: 'Complete subscription with all configs'
    },
    {
      name: 'All Configs (Base64)',
      url: CONFIG_URLS.ALL_CONFIGS_BASE64,
      description: 'Complete subscription with all configs in Base64 format'
    },
    {
      name: 'VMess',
      url: CONFIG_URLS.VMESS,
      description: 'VMess protocol configs only'
    },
    {
      name: 'VLess',
      url: CONFIG_URLS.VLESS,
      description: 'VLess protocol configs only'
    },
    {
      name: 'Trojan',
      url: CONFIG_URLS.TROJAN,
      description: 'Trojan protocol configs only'
    },
    {
      name: 'ShadowSocks',
      url: CONFIG_URLS.SHADOWSOCKS,
      description: 'ShadowSocks protocol configs only'
    },
    {
      name: 'ShadowSocksR',
      url: CONFIG_URLS.SHADOWSOCKSR,
      description: 'ShadowSocksR protocol configs only'
    },
    ...SUBSCRIPTION_URLS.map((url, index) => ({
      name: `Subscription ${index + 1}`,
      url,
      description: `Alternative subscription link #${index + 1} (500 configs)`
    }))
  ];
}

let cachedSubscription: string = '';

export function getCachedSubscription(): string {
  return cachedSubscription;
}

export function setCachedSubscription(content: string): void {
  cachedSubscription = content;
}