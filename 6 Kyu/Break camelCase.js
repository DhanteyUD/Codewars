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

// Option 1
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

// Option 2
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

// Option 3
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

// Option 4
function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}

// Option 5
function solution(string) {
  return string.replace(/(?=[A-Z])/g," ")
}

console.log(solution('camelCasing')); // "camel Casing"
console.log(solution('identifier')); // "identifier"
console.log(solution('')); // ""
