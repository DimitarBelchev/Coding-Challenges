// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  let word, num, incNum;
  for (i = 0; i < strng.length; i++) {
    if (!isNaN(+strng.charAt(i))) {
      word = strng.substring(0, i);
      num = strng.substring(i);
      incNum = +num + 1;
      zeroes = "";
      for (j = 0; j < num.length - incNum.toString().length; j++) {
        zeroes += "0";
      }
      return word + zeroes + incNum.toString();
    }
  }
  return strng + "1";
}
console.log(incrementString("foobar0009"));
