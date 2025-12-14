import reverseString from "./reverseString.js";

test("Reverse ILoveYou", () => {
  expect(reverseString("ILoveYou")).toBe("uoYevoLI");
});

test("Reverse of any number of empty spaces has no changes", () => {
  expect(reverseString("       ")).toBe("       ");
});

test("Reverse string with spaces", () => {
  expect(reverseString("a b dfg pepe   j    ")).toBe("    j   epep gfd b a");
});
