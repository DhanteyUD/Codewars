/**
 * /*
 * Consider an array/list of sheep where some sheep may be missing from their
 * place. We need a function that counts the number of sheep present in the
 * array (true means present).
 *
 * For example,
 *
 * [true,  true,  true,  false,
 *   true,  true,  true,  true ,
 *   true,  false, true,  false,
 *   true,  false, false, true ,
 *   true,  true,  true,  true ,
 *   false, false, true,  true]
 * The correct answer would be 17.
 *
 * Hint: Don't forget to check for bad values like null/undefined
 *
 * @format
 */

// Option 1
function countSheeps(arrayOfSheep) {
  const result = arrayOfSheep.filter((value) => value === true);
  return result.length;
}

// Option 2
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// Option 3
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;

  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;

  return num;
}

// Option 4
function countSheeps(arrayOfSheep) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep) count++;
  });

  return count;
}

// Option 5
const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter((s) => s).length;
