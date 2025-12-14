function sum(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Can't divide by 0";
  } else {
    return num1 / num2;
  }
}

let calculator = {
  sum: sum,
  substract: substract,
  multiply: multiply,
  divide: divide,
};

export default calculator;
