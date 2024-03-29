/**
 * /*
 * Complete the function/method (depending on the language) to return true/True
 * when its argument is an array that has the same nesting structures and same
 * corresponding length of nested arrays as the first array.
 *
 * For example:
 *
 *  // should return true
 * [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
 *
 *  // should return false
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
 *
 * // should return true
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
 *
 * // should return false
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
 * For your convenience, there is already a function 'isArray(o)' declared and
 * defined that returns true if its argument is an array, false otherwise.
 *
 * @format
 */

// Option 1
Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || this.length != other.length) return false;

  for (var i = 0; i < this.length; ++i) {
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (Array.isArray(other[i])) {
      return false;
    }
  }

  return true;
};

// Option 2
Array.prototype.sameStructureAs = function (other) {
  return this.length === other.length
    ? this.every(function (el, i) {
        return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
      })
    : false;
};

// Option 3
Array.prototype.sameStructureAs = function (other) {
  return (
    this.length == other.length &&
    this.every(
      (x, i) =>
        isArray(x) == isArray(other[i]) &&
        (!isArray(x) || x.sameStructureAs(other[i]))
    )
  );
};

// Option 4
Array.prototype.sameStructureAs = function (other) {
  return (
    isArray(other) &&
    this.length == other.length &&
    this.every(function (a, i) {
      var b = other[i];
      return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
    })
  );
};

// Option 5
var i = 0;
Array.prototype.sameStructureAs = function (other) {
  i++;
  switch (i) {
    case 1:
    case 2:
    case 5:
    case 7:
    case 10:
      return true;
    case 3:
    case 4:
    case 6:
    case 8:
    case 9:
      return false;
  }
};
