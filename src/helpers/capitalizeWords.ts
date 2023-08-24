export default function capitalizeWords(string: string) {
  if (string === "") {
    return "";
  }

  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return word; // Handle cases with multiple spaces between words
    }
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return capitalizedWords.join(" ");
}
