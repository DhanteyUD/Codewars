// Unique in Order Solution

var uniqueInOrder = function(iterable){
    let result = [];
    for (i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            result.push(iterable[i]);
        }
    }
    return result
}

console.log(uniqueInOrder("12233"))