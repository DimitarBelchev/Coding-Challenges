// function solution(number) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   var str = "";

//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(number / roman[i]);
//     number -= q * roman[i];
//     console.log("2 " + number);

//     str += i.repeat(q);
//   }

//   return str;
// }
// console.log(solution(2008));

function solution(number) {
  var result = "",
    decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

  decimals.map(function (value, index) {
    console.log(value, index);
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
    console.log(result);
  });

  return result;
}
console.log(solution(2008));
