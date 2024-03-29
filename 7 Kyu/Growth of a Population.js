/**
 *
 * In a small town the population is p0 = 1000 at the beginning of a year.
 * The population regularly increases by 2 percent per year and moreover 50 new
 * inhabitants per year come to live in the town.
 * How many years does the town need to see its population greater or equal to
 * p = 1200 inhabitants?
 *
 * At the end of the first year there will be:
 * 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
 *
 * At the end of the 2nd year there will be:
 * 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an
 *   integer **)
 *
 * At the end of the 3rd year there will be:
 * 1141 + 1141 * 0.02 + 50 => 1213
 *
 * It will need 3 entire years.
 * More generally given parameters:
 *
 * p0, percent, aug (inhabitants coming or leaving each year),
 * p (population to equal or surpass)
 *
 * the function nb_year should return n number of entire years needed to get a
 * population greater or equal to p.
 *
 * aug is an integer, percent a positive or null floating number, p0 and p are
 * positive integers (> 0)
 *
 * Examples:
 * nb_year(1500, 5, 100, 5000) -> 15
 * nb_year(1500000, 2.5, 10000, 2000000) -> 10
 * Note:
 * Don't forget to convert the percent parameter as a percentage in the body of
 * your function: if the parameter percent is 2 you have to convert it to 0.02.
 *
 * @format
 */

// Option 1
function nbYear(p0, percent, aug, p, years = 0) {
  return p0 >= p
    ? years
    : nbYear(
        Math.floor(p0 + p0 * (percent / 100)) + aug,
        percent,
        aug,
        p,
        years + 1
      );
}

// Option 2
function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

// Option 3
function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    count++;
  }
  return count;
}

// Option 4
function nbYear(p0, percent, aug, p) {
  var i = 1;
  var mult = 1 + percent / 100.0;
  var prev = p0;
  while (prev < p) {
    var ne = Math.floor(prev * mult + aug);
    prev = ne;
    i++;
  }
  return i - 1;
}

// Option 4
//Recursive function: exit condition p0 >= p
function nbYear(p0, percent, aug, p) {
  p0 = Math.floor(p0 * (1 + percent / 100) + aug);
  if (p0 >= p) return 1;
  return nbYear(p0, percent, aug, p) + 1;
}

// Option 5
nbYear = f = (a, b, c, d, r = 0) =>
  d / a > 1 ? f(a + ~~((a * b) / 1e2) + c, b, c, d, ++r) : r;

console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
console.log(nbYear(1000, 0.02, 50, 1200)); // 3
