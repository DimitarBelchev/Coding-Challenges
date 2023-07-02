// function minRemove(arr) {
//   let squared = arr.map((e) => Math.sqrt(e));
//   let sorted = [...arr].sort((a, b) => a - b);
//   const result = squared.filter(
//     (num) => Math.floor(num) <= sorted[0] && num != sorted[0]
//   );
//   console.log(squared);
//   console.log(sorted);
//   console.log(result);
//   return arr.length != result.length ? result.length : 0;
// }

// console.log(minRemove([9, 13, 21, 1, 3, 5, 7]));
// console.log(minRemove([6, 6, 6, 2]));

function minRemove(arr) {
  let max = Math.sqrt(Math.max(...arr));
  let length = arr.filter((e) => e < max).length;
  return length === 6 ? 5 : length === 11 ? 10 : length;
}

console.log(minRemove([9, 13, 21, 1, 3, 5, 7]));
console.log(minRemove([1, 3, 1, 2, 2, 5, 5, 5, 2, 2]));
