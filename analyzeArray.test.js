import analyzeArray from "./analyzeArray.js";

let objectTemaplate = {
  average: 0,
  min: 0,
  max: 0,
  length: 0,
};

test("Empty array return an object with all properties as 0", () => {
  expect(analyzeArray([])).toEqual(objectTemaplate);
});

test("Array of all not number elements return an object with all properties as 0", () => {
  expect(analyzeArray(["asd", null, undefined, { asd: 3 }])).toEqual(
    objectTemaplate
  );
});

test("An all zeros array return an object with all properties as 0 except length", () => {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let expected = {
    average: 0,
    min: 0,
    max: 0,
    length: arr.length,
  };
  expect(analyzeArray(arr)).toEqual(expected);
});

test("[1, 2, 3, 4, 5] shows the expected result", () => {
  let array = [1, 2, 3, 4, 5];
  let expected = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analyzeArray(array)).toEqual(expected);
});

test("Elements that are not numbers are ignored", () => {
  let array = [
    1,
    "asd",
    2,
    ["asd", 1],
    3,
    { info: "3" },
    4,
    undefined,
    5,
    null,
  ];
  let expected = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analyzeArray(array)).toEqual(expected);
});
