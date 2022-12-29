/**
 * /*
 * Create a method each_cons that accepts a list and a number n,
 * and returns cascading subsets of the list of size n, like so:
 *
 * each_cons([1,2,3,4], 2)
 *   #=> [[1,2], [2,3], [3,4]]
 *
 * each_cons([1,2,3,4], 3)
 *   #=> [[1,2,3],[2,3,4]]
 *
 * As you can see, the lists are cascading; ie, they overlap,
 * but never out of order.
 *
 * @format
 */

// Option 1
function eachCons(array, n) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length < i + n) break;
    res.push(array.slice(i, i + n));
  }
  return res;
}

// Option 2
function eachCons(array, n) {
  let cascadingSubset = [];
  for (i = 0; i <= array.length - n; i++) {
    cascadingSubset.push(array.slice(i, i + n));
  }
  return cascadingSubset;
}

// Option 3
const eachCons = (l, n) =>
  [...Array(Math.max(0, l.length - n + 1)).keys()].map((i) =>
    l.slice(i, i + n)
  );

// Option 4
function eachCons(array, n, result = []) {
  if (array.length < n) return result;

  result = [...result, array.slice(0, n)];
  const [, ...tail] = array;
  return eachCons(tail, n, result);
}

// Option 5
const eachCons = (arr, n) =>
  arr.map((_, idx) => arr.slice(idx, idx + n)).filter((i) => i.length === n);

console.log(eachCons([1, 2, 3, 4], 3));
