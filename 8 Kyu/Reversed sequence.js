/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/ 

// Option 1
const reverseSeq = n => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

// Option 2
const reverseSeq2 = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };

// Option 3
const reverseSeq3 = length => Array.from({length}, () => length--)

// Option 4
const reverseSeq4 = n => {
  let answer = [];          //intialize an array
  
  for (let i=n; i>0; i--){  //loop down from n to 1
    answer.push(i);         //push each i to the answer array
  }
  
  return answer;            //return answer;
};

// Option 5
const reverseSeq5 = num => {
  return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};

// Option 6
const reverseSeq6 = n => {
  if (n<2) return [n]
  return [n].concat(reverseSeq(n-1));
};


  

