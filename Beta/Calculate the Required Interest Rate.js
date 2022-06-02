// You have £2000 and want to earn £x in interest after n years.
// Calculate the interest rate, as a percentage to 2 decimal points, required to achieve your goal.

// Note :

// interest is compounded annually (https://en.wikipedia.org/wiki/Compound_interest)

function interest(x, n) {
  return +(Math.pow((2000 + x) / 2000, 1 / n) * 100 - 100).toFixed(2);
}

console.log(interest(3000, 5));

//20.11
