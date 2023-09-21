export default function parseHostname(urlString: string): string | null {
  // Regular expression to match the hostname
  const hostnameRegex = /^(?:https?:\/\/)?(?:www\d?\.)?(.[^/:]+)(?::\d+)?/i;

  // Use the regex to extract the hostname
  const match = urlString.match(hostnameRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // If no match is found
  }
}
