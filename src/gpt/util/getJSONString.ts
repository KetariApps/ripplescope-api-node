/**
 * Finds and parses JSON from within a string.
 * if no valid JSON exists within the string, it returns undefined
 * @param str
 * @returns
 */
export default function getJSONString(str: string) {
  if (!(str.includes('{') && str.includes('}'))) {
    console.log(str);
    throw new Error('String did not contain valid JSON');
  }

  const firstCurlIndex = str.indexOf('{');
  const firstSquareIndex = str.includes('[') ? str.indexOf('[') : null;
  let jsonStartIndex = 0;
  let jsonEndIndex = 0;
  if (firstSquareIndex === null || firstCurlIndex < firstSquareIndex) {
    const lastCurlIndex = str.lastIndexOf('}');
    jsonStartIndex = firstCurlIndex;
    jsonEndIndex = lastCurlIndex;
  } else if (firstCurlIndex > firstSquareIndex) {
    const lastSquareIndex = str.lastIndexOf(']');
    jsonStartIndex = firstSquareIndex;
    jsonEndIndex = lastSquareIndex;
  }
  const maybeJSONString = str.substring(jsonStartIndex, jsonEndIndex + 1);
  try {
    const json = JSON.parse(maybeJSONString);
    return json;
  } catch (error) {
    throw new Error(`Matched string was not valid JSON: ${maybeJSONString}`);
  }
}
