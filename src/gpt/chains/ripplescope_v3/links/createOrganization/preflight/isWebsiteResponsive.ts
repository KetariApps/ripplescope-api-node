export default async function isWebsiteResponsive(
  url: string,
): Promise<boolean> {
  try {
    const parsedUrl = new URL(url.startsWith('https') ? url : `https://${url}`);
    const response = await fetch(parsedUrl);

    // Check if the response status is in the range of 200 to 299 (indicating success).
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error('Could not reach the website' + error);
  }
}
