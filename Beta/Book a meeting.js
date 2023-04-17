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
  const allSlots = [
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [15, 16],
    [16, 17],
  ];
  const busySlots = [...schedule1, ...schedule2]
    .map((item) => {
      return [+item.split('-')[0], +item.split('-')[1]];
    })
    .sort((a, b) => a[0] - b[0]);

  let freeSlots = allSlots.filter(
    (item) =>
      !busySlots.some(
        (busySlot) => busySlot[0] <= item[0] && busySlot[1] >= item[1]
      )
  );

  const result = freeSlots
    .reduce((acc, value) => {
      if (!acc?.length) {
        return [value];
      }
      if (acc[acc.length - 1]?.[1] === value[0]) {
        return [
          ...acc?.slice(0, acc.length - 1),
          [acc[acc.length - 1]?.[0], value[1]],
        ];
      } else {
        return [...acc, value];
      }
    }, [])
    .map((item) => item[0] + '-' + item[1]);
  return result;
}

console.log(meetingTimes(['11-13', '9-10', '15-17'], ['9-12'])); // "13-15"
console.log(meetingTimes(['11-14', '9-10', '15-17'], ['11-14', '9-12'])); // "14-15"
console.log(meetingTimes(['9-11', '14-15'], [])); // "11-14", "15-17"
console.log(meetingTimes(['10-13', '11-12'], [])); // "9-10", "13-17"
