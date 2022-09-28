/**
 * /*
 * Write a function that takes a string of parentheses,
 * and determines if the order of the parentheses is valid.
 * The function should return true if the string is valid,
 * and false if it's invalid.
 *
 * Examples
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 * Constraints
 * 0 <= input.length <= 100
 *
 * @format
 */

//* Option 1
function validParentheses(parens) {
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') count++;
    if (parens[i] === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}

//* Option 2
function validParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, '');
  return !parens;
}

//* Option 3
function validParentheses(parens) {
  var stack = [],
    i;

  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    } else if ('(' !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

//* Option 4
function validParentheses(v) {
  while (v.includes('()')) {
    v = v.replace('()', '');
  }
  return v.length === 0;
}

//* Option 5
function validParentheses(parens) {
  return [...parens].reduce((a, c) => (a + c).replace('()', '')) == ''
    ? true
    : false;
}

console.log(validParentheses('()'), true);
console.log(validParentheses('())'), false);
