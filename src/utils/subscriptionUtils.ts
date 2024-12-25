import { decodeBase64 } from './base64Utils';

export async function fetchSubscriptionContent(url: string): Promise<string> {
  const response = await fetch(url);
  const base64Content = await response.text();
  return decodeBase64(base64Content.trim());
}