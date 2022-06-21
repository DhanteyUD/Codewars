// Create a function that takes two arrays of strings,
// which indicate two peoples schedules of when they are busy,
// represented by time periods as an input and returns the times
// in which a meeting is able to be scheduled in an array.

// Notes:
// All times are in 24 hour format

// The time in which a meeting can be scheduled must
// also be between 9am and 5pm (9-17)

// If no times are free return an empty array

// Input array is not sorted

// Output must have time periods grouped together

// ["13-15"] rather than ["13-14","14-15"]

// input:
// two peoples schedules
// person1=["11-13","9-10","15-17"];
// person2=["9-12"];

// output:
// array of time periods when these people are free
// timesFree=["13-15"];

function meetingTimes(schedule1, schedule2) {
  let timesFree = [];
  let schedule1Times = schedule1.map(time => {
    let [start, end] = time.split("-");
    return { start, end };
  }
  );
  let schedule2Times = schedule2.map(time => {
    let [start, end] = time.split("-");
    return { start, end };
  }
  );

  
}

console.log(meetingTimes(['11-13', '9-10', '15-17'], ['9-12'])); // "13-15"
console.log(meetingTimes(['11-14', '9-10', '15-17'], ['11-14', '9-12'])); // "14-15"
console.log(meetingTimes(['9-11', '14-15'], [])); // "11-14", "15-17"
