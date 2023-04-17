/**
 * /*
 * Timmy & Sarah think they are in love, but around where they live,
 * they will only know once they pick a flower each.
 * If one of the flowers has an even number of petals and the other has an
 * odd number of petals it means they are in love.
 *
 * Write a function that will take the number of petals of each flower and
 * return true if they are in love and false if they aren't.
 *
 * @format
 */

// Option 1
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// Option 2
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

// Option 3
const lovefunc = (Ͼ, Ͽ) => !!((Ͼ & 1) ^ (1 & Ͽ));

// Option 4
const lovefunc = (flower1, flower2) =>
   !!((flower1 ^ flower2) % 2);

// Option 5
function lovefunc(flower1, flower2){
  return ((flower1 ^ flower2) & 1) == 1;
}
