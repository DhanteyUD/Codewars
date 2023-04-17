/**
 * /*
 * Write a function that takes in a string of one or more words,
 * and returns the same string, but with all five or more letter words
 * reversed (Just like the name of this Kata).
 * Strings passed in will consist of only letters and spaces.
 * Spaces will be included only when more than one word is present.
 *
 * Examples:
 *
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test"
 *
 * @format
 */

// Option 1
function spinWords(string) {
  return string
    .split(' ')
    .map((value) => {
      if (value.length > 4) return value.split('').reverse().join('');
      return value;
    })
    .join(' ');
}

// Option 2
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
}

// Option 3
function spinWords(str) {
  return str
    .split(' ')
    .map((w) => (w.length < 5 ? w : w.split('').reverse().join('')))
    .join(' ');
}

// Option 4
function spinWords(str) {
  return str.split(' ').map(spinSingleWord).join(' ');
}

function spinSingleWord(word) {
  return word.length > 4 ? word.split('').reverse().join('') : word;
}

// Option 5
function spinWords(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}
