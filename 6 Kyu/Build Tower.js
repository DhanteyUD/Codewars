/**
 * 
 * Build a pyramid-shaped tower, as an array/list of strings,
 * given a positive integer number of floors.
 * A tower block is represented with "*" character.
 *
 * For example, a tower with 3 floors looks like this:
 *
 * [
 *   "  *  ",
 *   " *** ",
 *   "*****"
 * ]
 * And a tower with 6 floors looks like this:
 *
 * [
 *   "     *     ",
 *   "    ***    ",
 *   "   *****   ",
 *   "  *******  ",
 *   " ********* ",
 *   "***********"
 * ]
 *
 * @format
 */

// Option 1
function towerBuilder(nFloors) {
  return [...Array(nFloors)].map(
    (_, i) =>
      ' '.repeat(nFloors - 1 - i) +
      '*'.repeat(i * 2 + 1) +
      ' '.repeat(nFloors - 1 - i)
  );
}

// Option 2
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// Option 3
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      ' '.repeat(nFloors - i - 1) +
        '*'.repeat(i * 2 + 1) +
        ' '.repeat(nFloors - i - 1)
    );
  }
  return tower;
}

// Option 4
function towerBuilder(nFloors) {
  var result = [];
  var starNumber = 1;
  for (i = 1; i <= nFloors; i++) {
    result[i - 1] =
      ' '.repeat(nFloors - i) +
      '*'.repeat(starNumber) +
      ' '.repeat(nFloors - i);
    starNumber += 2;
  }
  return result;
}

// Option 5
function towerBuilder(nFloors) {
  // build here
  let space,
    star,
    tower = [];
  for (i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}
