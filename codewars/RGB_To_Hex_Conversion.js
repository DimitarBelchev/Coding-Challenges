// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  // complete this function
  if (r < 0) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }

  if (g < 0) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }

  if (b < 0) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }
  let rgbArr = [r, g, b];
  let newArr = [];
  //   console.log(rgbArr);
  for (i = 0; i < rgbArr.length; i++) {
    rgbArr[i] = rgbArr[i].toString(16).toUpperCase();
    if (rgbArr[i].length === 1) {
      rgbArr[i] = "0" + rgbArr[i];
    }
    newArr.push(rgbArr[i]);
  }

  //   hexString = yourNumber.toString(16);
  return newArr.join("");
}
console.log(rgb(263, 10, 5));
