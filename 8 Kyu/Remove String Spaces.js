// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(' ').join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// should return '8j8mBliB8gimjB8B8jlB'
