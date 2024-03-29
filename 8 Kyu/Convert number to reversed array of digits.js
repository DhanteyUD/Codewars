/*
Given a random non-negative number, 
you have to return the digits of this number within an array in reverse order.

Example(Input => Output):

348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
  return n.toString().split('').map(Number).reverse();
}

console.log(digitize(35231)) // [1,3,2,5,3]
console.log(digitize(348597)) // [7,9,5,8,4,3]
console.log(digitize(0)) // [0]