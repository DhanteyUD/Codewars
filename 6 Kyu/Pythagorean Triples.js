// The pythagorean theorem has the form a^2 + b^2 = c^2

// Write the function pytrip that gets an integer (num) representing the side of a triangle
// (could be the short or the long side) and returns all the possible primitive right triangles
// (Pythagorean Triples) with a side of length num as arrays.

// Primitive right triangles have no common divisors.

// For instance, for the input 12 we can create 2 right triangles with one of the sides equal to 12:

// 12, 5, 13 (12^2 + 5^2 = 13^2)
// 12, 35, 37 (12^2 + 35^2 = 37^2)

// Note: 12, 16, 20 (12^2 + 16^2 = 20^2) isn't legal because 12, 16, and 20 have a common divisor (2)

// The function should return all triangles in the form of [side, side, hypotenuse]
// So, for the input 12, return:

// [
//   [5,12,13], // Smallest triangle: triangle with sides 5 and 12 and hypotenuse 13
//   [12,35,37] // Largest triangle: triangle with sides 12 and 35 and hypotenuses 37
// ]
// Notice, each triangle should be in the form of [smallest side, larger side, hypotenuse]
// And every triangle within the array should be sorted by the size of the triangle (size of the hypotenuse)
// from smallest to largest (see example above)

// Also notice, all triangles must be made out of integers

var pytrip = (num) => {
  let arr = [];
  let powFun = (n) => Math.pow(n, 2);

  for (let i = 1; i < num * 100; i++) {
    let _ = powFun(i) + powFun(num);
    if (Number.isInteger(Math.sqrt(_))) {
      arr.push([i, num, Math.sqrt(_)].sort((a, b) => a - b));
    }
  }

  return arr
    .map((e) => {
      let i = 1;
      while (i != e[0]) {
        i++;

        if (e[0] % i == 0 && e[1] % i == 0) {
          i = false;
          break;
        }
      }
      if (i) return e;
    })
    .filter(Boolean);
};

console.log(pytrip(12));
