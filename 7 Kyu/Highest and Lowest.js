/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, 
and highest number is first.
*/ 


// Option 1
function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // "42 -9"
console.log(highAndLow("1 2 3")) // "3 1"


// Option 2
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// Option 3
function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

// Option 4
function highAndLow(numbers){
  var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
}

// Option 5
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)
  
  var min = Math.min.apply(null, numbers)
  var max = Math.max.apply(null, numbers)
  
  return max + ' ' + min
}