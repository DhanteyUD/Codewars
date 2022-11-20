/*
Help the frog to find a way to freedom
You have an array of integers and have a frog at the first position

[Frog, int, int, int, ..., int]

The integer itself may tell you the length and the direction of the jump

For instance:
 2 = jump two indices to the right
-3 = jump three indices to the left
 0 = stay at the same position
Your objective is to find how many jumps are needed to jump out of the array.

Return -1 if Frog can't jump out of the array

Example:
array = [1, 2, 1, 5]; 
jumps = 3  (1 -> 2 -> 5 -> <jump out>)
All tests for this Kata are randomly generated.
*/ 

// Option 1
function solution(a) {
  if (a.length === 0) return -1;
  let count = 0;
  for (let i = 0; i < a.length; i += a[i]) {
    if (i < 0) {
      break;
    }
    count++;
    if (count > 1000) {
      return -1;
    }
  }
  return count;
}

// Option 2
function solution(a) {
  var c = 0, i = 0;

  while (typeof a[i] !== 'undefined') {
    c++;
    i += a[i];
    
    if (c > a.length) {
      return -1;
    }
  }

  return a.length ? c : -1;
}

// Option 3
function solution(a) {
  for (var s = [], c = i = q = 0; i < a.length && !q; c += !!(a[i])) {
    if (!(q = s.indexOf(i += a[i]) > -1)) s.push(i);
  }
  return a.length && !q ? ++c : -1;
}

// Option 4
function solution(a) {
  var steps = 0;
  var visited = [];

  var i = 0;
  while (true) {
    steps++;
    
    // Check for escape
    if (i + a[i] > a.length - 1 || i + a[i] < 0) {
      break;
    }
    // Check for revisited stone or no stones at all
    else if (visited.indexOf(i) >= 0 || a.length == 0) {
      steps = -1;
      break;
    }
    // otherwise jump!
    else {
      // Keep track of the stones the frog
      // has been to, so if it revists one, 
      // we know it's stuck.
      visited.push(i);
      
      // Then move to the new stone
      i += a[i];
    }
  }
  return steps;
}

// Option 5
function solution(a) {
  var steps = 0, visited = [], i = 0, l = a.length;
  while (i < l && i >= 0 && !visited[i]) { steps++; visited[i] = true; i += a[i]; }
  return (visited[i] || !l) ? -1 : steps;
}
