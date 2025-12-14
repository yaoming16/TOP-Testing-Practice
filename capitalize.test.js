import capitalize from "./capitalize.js";

test("capitalize hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Try to capitalize empty", () => {
  expect(capitalize(" ")).toBe("");
});

test("capitalize already capitalized", () => {
  expect(capitalize("World")).toBe("World");
});

test("capitalize single letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalize only first letter", () => {
  expect(capitalize("aAaAa")).toBe("AAaAa");
});
