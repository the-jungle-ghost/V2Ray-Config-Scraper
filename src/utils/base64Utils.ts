export function decodeBase64(str: string): string {
  try {
    return atob(str);
  } catch (e) {
    console.error('Failed to decode base64 string:', e);
    return '';
  }
}