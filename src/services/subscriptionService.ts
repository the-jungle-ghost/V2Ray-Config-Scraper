import { CONFIG_URLS } from '../constants';

export async function fetchSubscriptionContent(): Promise<string> {
  const response = await fetch(CONFIG_URLS.SUBSCRIPTION);
  return response.text();
}

let cachedSubscription: string = '';

export function getCachedSubscription(): string {
  return cachedSubscription;
}

export function setCachedSubscription(content: string): void {
  cachedSubscription = content;
}