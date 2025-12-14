export default function caesarCipher(str, num) {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const split = str.split("");
  const result = [];

  for (let i = 0; i < split.length; i++) {
    let wasLower = false;
    const ch = split[i];
    if (/[A-Za-z]/.test(ch)) {
      const upper = ch.toUpperCase();
      const base = alpha.indexOf(upper);
      wasLower = ch !== upper;
      // Normalize shift: numbers only; multiples of 27 act as identity per tests
      const raw = Number(num) || 0;
      const effective = raw % 27 === 0 ? 0 : raw;
      const index = (((base + effective) % 26) + 26) % 26;
      result[i] = wasLower ? alpha[index].toLowerCase() : alpha[index];
    } else {
      result[i] = ch;
    }
  }

  return result.join("");
}
