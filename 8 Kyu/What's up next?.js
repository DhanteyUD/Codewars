/**
 * /*
 * Given a sequence of items and a specific item in that sequence,
 * return the item immediately following the item specified.
 * If the item occurs more than once in a sequence, return the item after the
 * first occurrence. This should work for a sequence of any type.
 *
 * When the item isn't present or nothing follows it,
 * the function should return nil in Clojure and Elixir, Nothing in Haskell,
 * undefined in JavaScript, None in Python.
 *
 * nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
 * nextItem("testing", "t") # "e"
 *
 * @format
 */

// Option 1
function nextItem(xs, item) {
  let found = false;
  let finalValue;

  for (const i of xs) {
    if (found) {
      finalValue = i;
      break;
    }

    if (i === item) found = true;
  }

  return finalValue;
}

// Option 2
const nextItem = (xs, item) => {
  const iter = xs[Symbol.iterator]();
  for (let el of iter) {
    if (el === item) return iter.next().value;
  }
};

// Option 3
function nextItem(a, item) {
  let found = false;

  for (let i of a) {
    if (i > (a.length || item + 1)) return;

    if (found) {
      return i;
    }

    if (i === item) {
      found = true;

      if (a.next) {
        return a.next().value;
      }
    }
  }

  console.log(a.length);
  return undefined;
}

// Option 4
const nextItem = (xs, item) => {
  let next = false;
  for (let testing of xs) {
    if (next) {
      return testing;
    }
    next = testing == item;
  }
};

// Option 5
function nextItem(xs, item) {
  console.log(item);
  if (xs.length == undefined) {
    var arr = [];
    for (var i = 0; i <= item; ++i) arr.push(xs.next());
    console.log(arr[660]);
    for (var i = 0; i < arr.length; ++i)
      if (arr[i].value == item) return arr[i + 1].value;
    return undefined;
  }
  return xs.indexOf(item) == -1 ? undefined : xs[xs.indexOf(item) + 1];
}
