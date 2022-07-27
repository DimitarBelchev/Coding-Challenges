// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  let arr = [];
  sum = 0;
  while (i <= n) {
    sum += i % 10;
    arr.push(sum);
    console.log(arr);
    // i = Math.floor(i / 10);

    // console.log(i);
  }
  return (sumArr = arr.reduce((a, b) => a + b, 0));
}

console.log(twistedSum(12));

// function twistedSum(n) {
//   let finalArr = [];
//   for (i = 1; i <= n; i++) {
//     finalArr.push(i.toString().split(""));
//   }
//   return (sum = finalArr
//     .flat()
//     .map((str) => Number(str))
//     .reduce((a, b) => a + b, 0));
// }
// console.log(twistedSum(12));
