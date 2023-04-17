// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second
// character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let result = [];
  for (let i = 0; i < str.split('').length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  return result.map((i) => (i.length === 1 ? i + '_' : i));
}

console.log(solution('abcde'));

//["ab", "cd", "ef"]
