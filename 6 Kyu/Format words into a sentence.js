/**
 * /*
 * Complete the method so that it formats the words into a single comma
 * separated value. The last word should be separated by the word 'and'
 * instead of a comma. The method takes in an array of strings and returns a
 * single formatted string.
 *
 * Note:
 *
 * Empty string values should be ignored.
 * Empty arrays or null/nil/None values being passed into the method should
 * result in an empty string being returned.
 * Example: (Input --> output)
 *
 * ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
 * ['ninja', '', 'ronin'] --> "ninja and ronin"
 * [] -->""
 *
 * @format
 */

// Option 1
function formatWords(words) {
  if (!words) return '';
  words = words.filter((v) => v.length > 0);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0];
  return words.slice(0, -1).join(', ') + ' and ' + words.slice(-1);
}

// Option 2
function formatWords(words) {
  if (!words) return '';
  return words
    .filter(function (a) {
      return a !== '';
    })
    .join(', ')
    .replace(/(, )+(\S+)$/, ' and $2');
}

// Option 3
function formatWords(words) {
  if (!words || words.length === 0) {
    return '';
  }
  words = words.filter(function (word) {
    return word.length;
  });
  if (words.length == 0) {
    return '';
  } else if (words.length == 1) {
    return words[0];
  } else {
    return [
      words.slice(0, words.length - 1).join(', '),
      words.slice(words.length - 1)[0],
    ].join(' and ');
  }
}

// Option 4
function formatWords(a) {
  return (a || [])
    .filter((x) => x)
    .join(', ')
    .replace(/,(?= [^,]*$)/, ' and');
}

// Option 5
const formatWords = (w) =>
  w
    ? w
        .filter((e) => e)
        .join(', ')
        .replace(/,(?=\s\w+$)/g, ' and')
    : '';
