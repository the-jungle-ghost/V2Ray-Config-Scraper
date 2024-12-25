import { VPNConfig } from '../types/config';

const BLOCKED_CONFIGS = {
  vmess: [
    {
      address: '79.127.229.54',
      port: '18000',
      network: 'tcp'
    }
  ]
};

export function filterBlockedConfigs(configs: VPNConfig[]): VPNConfig[] {
  return configs.filter(config => {
    if (config.type === 'vmess' && config.decoded) {
      return !BLOCKED_CONFIGS.vmess.some(blocked => 
        blocked.address === config.decoded?.add &&
        blocked.port === config.decoded?.port &&
        blocked.network === config.decoded?.net
      );
    }
    return true;
  });
}