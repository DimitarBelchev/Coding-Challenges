// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  let arr = [];
  if (a != "") {
    for (let i = 0; i < a.length; i++) {
      if (a[i] + b[i] > 9) {
        return (BigInt(a) + BigInt(b)).toString();
      } else {
        b[i] == undefined ? arr.push(+a[i] + +b[i]) : arr.push(+a[i]);
        a[i] == undefined ? arr.push(+a[i] + +b[i]) : arr.push(+b[i]);
      }
    }
    return arr.join("");
  } else {
    return b;
  }
}
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
