export default function capitalize(string) {
  if (string.trim() === "") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
