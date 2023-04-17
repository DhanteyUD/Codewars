// Pig latin is created by taking all the consonants before the first vowel of a word
// and moving them to the back of the word followed by the letters "ay".

// "hello" => "ellohay"
// "creating" => "eatingcray"
// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

// "algorithm" => "algorithmway"
// This problem is different from other variations in that it expects casing to remain the same so:

// "Hello World" => "Ellohay Orldway"
// as well as punctuation.

// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
// Your job is to take a string and translate it to Pig Latin.
// The string will never be undefined but may contain both numbers and letters.
// A word will never be a combination of numbers and letters.
// Also, there will never be punctuation at the beginning of a word and the only capital letter in a word
// will be the first letter meaning there are zero all capitalized words.

function translate(sentence) {
  return sentence.replace(
    /\b([bcdfghjklmnpqrstvwxyz]*)(\w+)\b/gi,
    function (_, first, rest) {
      if (first) {
        if (first[0] == first[0].toUpperCase())
          rest = rest[0].toUpperCase() + rest.slice(1);
      } else {
        first = 'w';
      }

      return rest + first.toLowerCase() + 'ay';
    }
  );
}

console.log(translate('creating'));
console.log(translate('algorithm'));
console.log(translate('Hello World'));
console.log(translate('Pizza? Yes please!'));
