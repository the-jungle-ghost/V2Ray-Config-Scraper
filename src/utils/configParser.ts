import { VPNConfig } from '../types/config';

export function parseConfigs(rawText: string): VPNConfig[] {
  const configs: VPNConfig[] = [];
  const lines = rawText.split('\n').filter(line => line.trim());

  lines.forEach(line => {
    if (line.startsWith('vmess://')) {
      try {
        const decoded = JSON.parse(atob(line.replace('vmess://', '')));
        configs.push({
          type: 'vmess',
          raw: line,
          decoded: {
            ps: decoded.ps,
            add: decoded.add,
            port: decoded.port,
            id: decoded.id,
            net: decoded.net
          }
        });
      } catch {
        configs.push({ type: 'vmess', raw: line });
      }
    } else if (line.startsWith('vless://')) {
      configs.push({ type: 'vless', raw: line });
    } else if (line.startsWith('trojan://')) {
      configs.push({ type: 'trojan', raw: line });
    } else if (line.startsWith('ss://')) {
      configs.push({ type: 'shadowsocks', raw: line });
    }
  });

  return configs;
}