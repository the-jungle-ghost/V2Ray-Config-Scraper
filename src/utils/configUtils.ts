import { VPNConfig, ConfigTab } from '../types/config';

export function getConfigCounts(configs: VPNConfig[]): Record<ConfigTab, number> {
  return {
    all: configs.length,
    vmess: configs.filter((c) => c.type === 'vmess').length,
    vless: configs.filter((c) => c.type === 'vless').length,
    trojan: configs.filter((c) => c.type === 'trojan').length,
    shadowsocks: configs.filter((c) => c.type === 'shadowsocks').length,
  };
}