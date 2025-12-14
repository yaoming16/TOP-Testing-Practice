import calculator from "./calculator.js";

const { sum, substract, multiply, divide } = calculator;

// Sum

test("2 + 2 = 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("Try negative addition: -2 + -4 = -6", () => {
  expect(sum(-2, -4)).toBe(-6);
});

test("Try adding to equal 0: -5 + 5 = 0", () => {
  expect(sum(-5, 5)).toBe(0);
});

// Multiplication

test("5 * 3 = 15", () => {
  expect(multiply(5, 3)).toBe(15);
});

test("2 * 3 = 3 * 2 = 6. Dosnt matter multiplication order", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(3, 2)).toBe(6);
});

test("Multiply by 0: 5 * 0 = 0", () => {
  expect(multiply(5, 0)).toBe(0);
  expect(multiply(0, 5)).toBe(0);
});

test("-2 * -3 = 6", () => {
  expect(multiply(-2, -3)).toBe(6);
});

test("24 * -2 = -28", () => {
  expect(multiply(24, -2)).toBe(-48);
  expect(multiply(-2, 24)).toBe(-48);
});

// Substraction

test("5 - 10 = -5", () => {
  expect(substract(5, 10)).toBe(-5);
});

test("10 - 5 = 5", () => {
  expect(substract(10, 5)).toBe(5);
});

test("0 - 10 = -10", () => {
  expect(substract(0, 10)).toBe(-10);
});

test("0 - 0 = 0", () => {
  expect(substract(0, 0)).toBe(0);
});

// Division

test("10 / 5 = 2", () => {
  expect(divide(10, 5)).toBe(2);
});

test("5 / 10 = 0.5", () => {
  expect(divide(5, 10)).toBe(0.5);
});

test("0 / 5 = 0", () => {
  expect(divide(0, 5)).toBe(0);
});

test("-10 / 5 = 10 / -5 = -2", () => {
  expect(divide(10, -5)).toBe(-2);
  expect(divide(-10, 5)).toBe(-2);
});

test("0 / 0 is invalid", () => {
  expect(divide(0, 0)).toBe("Can't divide by 0");
});

test("10 / 0 is invalid", () => {
  expect(divide(10, 0)).toBe("Can't divide by 0");
});

test("-10 / 0 is invalid", () => {
  expect(divide(-10, 0)).toBe("Can't divide by 0");
});
