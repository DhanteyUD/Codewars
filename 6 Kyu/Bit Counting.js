/**
 * /*
 * Write a function that takes an integer as input, and returns the
 * number of bits that are equal to one in the binary representation of
 * that number. You can guarantee that input is non-negative.
 *
 * Example: The binary representation of 1234 is 10011010010, so the
 * function should return 5 in this case
 *
 * @format
 */

// Option 1
var countBits = function (n) {
  return n.toString(2).replace(/0/g, '').length;
};

// Option 2
countBits = (n) => n.toString(2).split('0').join('').length;

// Option 3
const countBits = (n) =>
  n
    .toString(2)
    .split('')
    .filter((ele) => ele == 1).length;

// Option 4
var countBits = function (n) {
  var count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};

// Option 5
var countBits = function (n) {
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};

// Option 6
var countBits = function (n) {
  return n
    .toString(2)
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

// Option 7
var countBits = function (n) {
  var bits = 0;
  for (; n; n >>= 1) {
    if (n & 1) bits++;
  }
  
  return bits;
};


console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
