import { CLIENT_GUIDES } from '../constants';
import { ClientApp } from '../types/config';

export function getClientApps(platform: keyof typeof CLIENT_GUIDES): ClientApp[] {
  const platformClients = CLIENT_GUIDES[platform];
  return Object.values(platformClients).map(client => ({
    name: client.name,
    url: client.url,
    description: `${client.name} for ${platform}`
  }));
}

export function getAllClientApps(): ClientApp[] {
  return Object.entries(CLIENT_GUIDES).flatMap(([platform, clients]) => {
    return Object.values(clients).map(client => ({
      name: client.name,
      url: client.url,
      description: `${client.name} for ${platform}`
    }));
  });
}

export function getClientAppByName(name: string): ClientApp | undefined {
  for (const platform of Object.values(CLIENT_GUIDES)) {
    for (const client of Object.values(platform)) {
      if (client.name.toLowerCase() === name.toLowerCase()) {
        return {
          name: client.name,
          url: client.url
        };
      }
    }
  }
  return undefined;
}

export function getPlatformIcon(platform: string): string {
  switch (platform.toLowerCase()) {
    case 'windows':
      return '💻';
    case 'linux':
      return '🐧';
    case 'android':
      return '🤖';
    case 'ios':
    case 'macos':
      return '🍎';
    case 'system':
      return '⚙️';
    case 'proxifier':
      return '🔄';
    default:
      return '📱';
  }
} 