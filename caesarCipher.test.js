import caesarCipher from "./caesarCipher.js";

test("Wrapping is working ok", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation is ok", () => {
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
});

test("Punctuation and other non alphabetical characters are working ok", () => {
  expect(caesarCipher("x.y*z  xyz", 3)).toBe("a.b*c  abc");
});

test("Multiples of 27 return the same result as the input", () => {
  expect(caesarCipher("abc", 27)).toBe("abc");
  expect(caesarCipher("abc", 27 * 2)).toBe("abc");
  expect(caesarCipher("abc", 27 * 3)).toBe("abc");
  expect(caesarCipher("abc", 27 * 7)).toBe("abc");
  expect(caesarCipher("abc", 27 * 15)).toBe("abc");
});
