function divisibleCount(x, y, k) {
  console.time("start esho");
  let numArr = [];
  for (let i = x; i <= y; i++) {
    numArr.push(i);
  }
  numArr = numArr.filter((el) => el % k === 0);
  console.timeEnd("start esho");
  return numArr.length;
}

// function divisibleCount(x, y, k) {
//   return Math.floor(y / k) - Math.floor((x - 1) / k);
// }

// divisibleCount(6, 11, 2);

// let divisors = (n) => {
//   let divisorsArr = [];
//   mod = n;
//   while (mod > 0) {
//     if (n % mod === 0) {
//       divisorsArr.push(mod);
//     }
//     mod--;
//   }
//   return divisorsArr;
// };
// console.log(divisors(6, 11, 2));
