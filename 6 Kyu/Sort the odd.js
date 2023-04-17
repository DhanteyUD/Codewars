// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// [5, 3, 2, 8, 1, 4] => [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    const even = array.map((x) => x % 2 === 0 ? x : "");
    const odd = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
    const result = [];

    for (let i = 0, j = 0; i < array.length; i += 1) {
        if (even[i] === "") {
            result.push(odd[+j]);
                j += 1;
        } else {
            result.push(even[i]);
        }
    }

    return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
                    // [1, 3, 2, 8, 5, 4]