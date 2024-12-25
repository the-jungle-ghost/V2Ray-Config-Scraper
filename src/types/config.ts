export interface VPNConfig {
  type: 'vmess' | 'vless' | 'trojan' | 'shadowsocks';
  raw: string;
  decoded?: {
    ps?: string;
    id?: string;
  };
}

export type ConfigTab = 'vmess' | 'vless' | 'trojan' | 'shadowsocks' | 'all';