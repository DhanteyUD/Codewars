// The rgb function is incomplete. Complete it so that passing in 
// RGB decimal values will result in a hexadecimal representation 
// being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the 
// closest valid value.

// Note: Your answer should always be 6 characters long, the 
// shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  const rgbToHex = function(arg) {
    let x = arg;

    //validate rgb values
    if (x < 0) {
      x = 0;
    }else if(x > 255) {
      x = 255;
    }

    //turn each rgb value into a hex value
    let hex = Number(x).toString(16);

    //ensure there are 2 digits in each hex value
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    //return hexcode
    console.log(hex);
    return hex;
  };
  
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);

  let hexColor = red + green + blue;
  console.log(hexColor.toUpperCase())
  return hexColor.toUpperCase();
}

console.log(rgb(148, 0, 211))