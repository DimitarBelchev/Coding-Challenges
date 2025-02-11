// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let arr = [];
  num = ("" + num).split("");
  //   console.log(num);
  for (i = 0; i < num.length; i++) {
    num[i] = +num[i];
    num[i] = Math.pow(num[i], 2);
    arr.push(num[i]);
  }
  return arr.join("");
}
console.log(squareDigits(3212));
