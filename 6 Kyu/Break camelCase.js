/**
 *
 * Complete the solution so that the function will break up camel casing,
 * using a space between words.
 *
 * Example
 * "camelCasing"  =>  "camel Casing"
 * "identifier"   =>  "identifier"
 * ""             =>  ""
 *
 * @format
 */

// complete the function
function solution(string) {
  return result = string.split("").map((x) => {
    if (x === x.toUpperCase()) {
      return " " + x;
    } else {
      return x;
    }
  }
  ).join("");
}

console.log(solution('camelCasing')); // "camel Casing"
console.log(solution('identifier')); // "identifier"
console.log(solution('')); // ""
