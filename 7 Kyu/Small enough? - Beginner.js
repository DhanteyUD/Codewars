/*You will be given an array and a limit value. 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.*/

function smallEnough(a, limit){
    return a.every(x => x <= limit);
}

console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
