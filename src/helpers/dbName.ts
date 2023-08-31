import snakeCase from "./snakeCase.js";

export default function dbName(string: string) {
  return snakeCase(string).toLocaleUpperCase();
}
