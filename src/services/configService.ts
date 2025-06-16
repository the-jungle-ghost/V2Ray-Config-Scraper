import { CONFIG_URLS } from '../constants';
import { VPNConfig } from '../types/config';
import { parseConfigs } from '../utils/configParser';

export async function fetchConfigs(): Promise<VPNConfig[]> {
  const [serverResponse, subscriptionResponse] = await Promise.all([
    fetch(CONFIG_URLS.MAIN_REPO),
    fetch(CONFIG_URLS.ALL_CONFIGS)
  ]);

  const [serverText, subscriptionText] = await Promise.all([
    serverResponse.text(),
    subscriptionResponse.text()
  ]);

  const serverConfigs = parseConfigs(serverText);
  const subscriptionConfigs = parseConfigs(subscriptionText);
  
  // Combine configs and remove duplicates
  const allConfigs = [...serverConfigs, ...subscriptionConfigs];
  return allConfigs.filter((config, index, self) =>
    index === self.findIndex((c) => c.raw === config.raw)
  );
}