export default function snakeCase(input: string): string {
  return input.replace(/\s+/g, "_");
}
