export default function reverseString(string) {
  if (string.trim() === "") return string;

  let stringToReturn = "";
  let charactersArray = string.split("");

  for (let i = string.length - 1; i >= 0; i--) {
    stringToReturn += charactersArray[i];
  }
  return stringToReturn;
}
