const fibonacci = function (num) {
  let n; // store the filtered number
  if (typeof num !== "number") {
    n = parseInt(num);
  } else {
    n = num;
  }

  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n <= 2) return 1;

  let prev = 1; // (n - 2)
  let curr = 1; // (n - 1)

  for (let i = 3; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
