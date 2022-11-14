/*
There is an array with some numbers. All numbers are equal except 
for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

// Option 1
function findUniq(arr) {
  return +arr.filter(value => {
    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}

// Option 2
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// Option 3
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// Option 4
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

// Option 5
function findUniq(arr) {
  return arr.filter(function(elem){
   return arr.indexOf(elem)===arr.lastIndexOf(elem)
  })[0] 
}

// Option 6
function findUniq(arr) {
  let uniq = {},
      result;
  arr.forEach(function(item) {
    uniq[item] = uniq[item] + 1 || 1;
  });
  Object.keys(uniq).forEach(function(key) {
    if (uniq[key] == 1) {
      result = key;
    }
  });
  
  return parseFloat(result);
}

// Option 7
function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  } 
}
