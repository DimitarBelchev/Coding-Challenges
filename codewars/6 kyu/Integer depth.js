function computeDepth(x) {
  let counter = 1;
  let numArr = [];
  const reqNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (!reqNumbers.every((i) => numArr.includes(i))) {
    numArr.push(Array.from(String(x * counter), Number));
    numArr = numArr.reduce((acc, cur) => acc.concat(cur), []);
    counter++;
  }
  return counter - 1;
}
console.log(computeDepth(42));

// const array2 = numArr;

//   const containAll = array1.every((item) => {
//     return array2.includes(item);
//   });

//   console.log(containAll);
