export interface VPNConfig {
  type: 'vmess' | 'vless' | 'trojan' | 'shadowsocks';
  raw: string;
  decoded?: {
    ps?: string;
    id?: string;
  };
}

export type ConfigTab = 'vmess' | 'vless' | 'trojan' | 'shadowsocks' | 'all';

export interface SubscriptionLink {
  name: string;
  url: string;
  description?: string;
}

export interface ClientApp {
  name: string;
  url: string;
  description?: string;
  icon?: string;
}

export interface GuideStep {
  title: string;
  description: string;
  image?: string;
}

export interface ClientGuide {
  clientName: string;
  platform: 'Windows' | 'Linux' | 'Android' | 'iOS' | 'macOS';
  steps: GuideStep[];
}

export type AppTab = 'home' | 'guides' | 'subscriptions' | 'clients' | 'about';