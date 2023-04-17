/**
 * /*
 * Create a function taking a positive integer as its parameter and
 * returning a string containing the Roman Numeral representation of that
 * integer.
 *
 * Modern Roman numerals are written by expressing each digit separately
 * starting with the left most digit and skipping any digit with a value of zero.
 * In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
 * 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol
 * in descending order: MDCLXVI.
 *
 * Example:
 *
 * solution(1000); // should return 'M'
 * Help:
 *
 * Symbol    Value
 * I          1
 * V          5
 * X          10
 * L          50
 * C          100
 * D          500
 * M          1,000
 * Remember that there can't be more than 3 identical symbols in a row.
 *
 * More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
 *
 * @format
 */

// Option 1
function solution(number) {
  var result = '',
    decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ];

  decimals.map((value, index) => {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });

  return result;
}

// Option 2
function solution(number) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = '';
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}

// Option 3
function solution(number) {
  return [
    { threshold: 1000, char: 'M' },
    { threshold: 900, char: 'CM' },
    { threshold: 500, char: 'D' },
    { threshold: 400, char: 'CD' },
    { threshold: 100, char: 'C' },
    { threshold: 90, char: 'XC' },
    { threshold: 50, char: 'L' },
    { threshold: 40, char: 'XL' },
    { threshold: 10, char: 'X' },
    { threshold: 9, char: 'IX' },
    { threshold: 5, char: 'V' },
    { threshold: 4, char: 'IV' },
    { threshold: 1, char: 'I' },
  ].reduce(function (prev, curr, idx, arr) {
    while (number >= curr.threshold) {
      prev += curr.char;
      number -= curr.threshold;
    }

    return prev;
  }, '');
}

// Option 4
const solution = (v, s = '') => {
  if (v >= 1000) {
    s += 'M';
    v -= 1000;
  } else if (v >= 900) {
    s += 'CM';
    v -= 900;
  } else if (v >= 800) {
    s += 'DCCC';
    v -= 800;
  } else if (v >= 700) {
    s += 'DCC';
    v -= 700;
  } else if (v >= 600) {
    s += 'DC';
    v -= 600;
  } else if (v >= 500) {
    s += 'D';
    v -= 500;
  } else if (v >= 400) {
    s += 'CD';
    v -= 400;
  } else if (v >= 300) {
    s += 'CCC';
    v -= 300;
  } else if (v >= 200) {
    s += 'CC';
    v -= 200;
  } else if (v >= 100) {
    s += 'C';
    v -= 100;
  } else if (v >= 90) {
    s += 'XC';
    v -= 90;
  } else if (v >= 80) {
    s += 'LXXX';
    v -= 80;
  } else if (v >= 70) {
    s += 'LXX';
    v -= 70;
  } else if (v >= 60) {
    s += 'LX';
    v -= 60;
  } else if (v >= 50) {
    s += 'L';
    v -= 50;
  } else if (v >= 40) {
    s += 'XL';
    v -= 40;
  } else if (v >= 30) {
    s += 'XXX';
    v -= 30;
  } else if (v >= 20) {
    s += 'XX';
    v -= 20;
  } else if (v >= 10) {
    s += 'X';
    v -= 10;
  } else if (v >= 9) {
    s += 'IX';
    v -= 9;
  } else if (v >= 8) {
    s += 'VIII';
    v -= 8;
  } else if (v >= 7) {
    s += 'VII';
    v -= 7;
  } else if (v >= 6) {
    s += 'VI';
    v -= 6;
  } else if (v >= 5) {
    s += 'V';
    v -= 5;
  } else if (v >= 4) {
    s += 'IV';
    v -= 4;
  } else if (v >= 3) {
    s += 'III';
    v -= 3;
  } else if (v >= 2) {
    s += 'II';
    v -= 2;
  } else if (v >= 1) {
    s += 'I';
    v -= 1;
  }
  return v ? solution(v, s) : s;
};

// Option 5
function solution(number) {
  var hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  var str = '';

  while (number >= 1000) {
    str += 'M';
    number -= 1000;
  }

  str += hundreds[Math.floor(number / 100)];
  number = number % 100;

  str += tens[Math.floor(number / 10)];
  number = number % 10;

  str += ones[number];

  return str;
}

// Option 6
function solution(number) {
  const table = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  for (let [num, notation] of table) {
    if (number >= num) return notation + solution(number - num);
  }
  return '';
}

// Option 7
function solution(number) {
  let numerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    result = '';

  Object.keys(numerals).forEach((e) => {
    let n = Math.floor(number / numerals[e]);
    number -= n * numerals[e];
    result += e.repeat(n);
  });

  return result;
}

// Option 8
function solution(number) {
  var result = '';
  var transform = function (value, roman) {
    while (number >= value) {
      result += roman;
      number -= value;
    }
  };

  transform(1000, 'M');
  transform(900, 'CM');
  transform(500, 'D');
  transform(400, 'CD');
  transform(100, 'C');
  transform(90, 'XC');
  transform(50, 'L');
  transform(40, 'XL');
  transform(10, 'X');
  transform(9, 'IX');
  transform(5, 'V');
  transform(4, 'IV');
  transform(1, 'I');

  return result;
}

