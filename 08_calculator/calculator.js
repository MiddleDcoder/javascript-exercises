const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let result = 1;
  for (i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
