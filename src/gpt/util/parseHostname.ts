export default function parseHostname(url: string): string | null {
  try {
    const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsedUrl.hostname;
  } catch (error) {
    // Invalid URL
    console.error(`Error parsing URL: ${error}`);
    return null;
  }
}
