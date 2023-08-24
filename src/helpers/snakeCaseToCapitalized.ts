export default function splitSnakeCase(snakeCase: string) {
  const words = snakeCase.split("_");
  return words.join(" ");
}
