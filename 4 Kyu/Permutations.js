// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
  return string.length <= 1
    ? [string]
    : Array.from(
        new Set(
          string
            .split('')
            .map((char, i) =>
              permutations(string.substr(0, i) + string.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .reduce((a, b) => a.concat(b), [])
        )
      );
}

console.log(permutations('aabb'));
