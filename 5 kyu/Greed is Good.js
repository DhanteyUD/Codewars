// Greed is a dice game played with five six-sided dice. Your mission,
// should you choose to accept it, is to score a throw according to these rules.
// You will always be given an countay with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
  let result = 0;
  let arr2 = [];

  const arr1 = dice.sort();
  for (let i = 1; i < 7; i++) {
    arr2.push(arr1.slice(arr1.indexOf(i), arr1.lastIndexOf(i) + 1));
  }
  let arr = arr2.map((num) => num.length);
  for (let j = 0; j < 5; j++) {
    if (arr[0] >= 3) {
      result += 1000;
      arr[0] -= 3;
    }
    if (arr[0] > 0) {
      result += 100;
      arr[0] -= 1;
    }
    if (arr[1] >= 3) {
      result += 200;
      arr[1] -= 3;
    }
    if (arr[2] >= 3) {
      result += 300;
      arr[2] -= 3;
    }
    if (arr[3] >= 3) {
      result += 400;
      arr[3] -= 3;
    }
    if (arr[4] >= 3) {
      result += 500;
      arr[4] -= 3;
    }
    if (arr[4] > 0) {
      result += 50;
      arr[4] -= 1;
    }
    if (arr[5] >= 3) {
      result += 600;
      arr[5] -= 3;
    }
  }
  return result;
}
console.log(score([2, 4, 4, 5, 4]));
console.log(score([1, 1, 1, 3, 1]));
