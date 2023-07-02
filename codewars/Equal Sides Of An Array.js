function findEvenIndex(arr) {
  //   let leftSum = 0;
  //   let rightSum = 0;
  let leftArr = [];
  let rightArr = [];

  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (i === 0) {
      rightArr = arr.slice(1).reduce((result, num) => {
        return (result += num);
      }, 0);
      if (rightArr === 0) return 0;
    }
    if (i === arrLength - 1) {
      leftArr = arr.slice(0, arrLength - 1).reduce((result, num) => {
        return (result += num);
      }, 0);
      if (leftArr === 0) return arr.length - 1;
    }

    rightArr = arr.slice(i + 1, arr.length).reduce((result, num) => {
      return (result += num);
    }, 0);

    leftArr = arr.slice(0, i).reduce((result, num) => {
      return (result += num);
    }, 0);
    if (leftArr === rightArr) return i;
    rightArr = 0;
    leftArr = 0;
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// , 3);
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
// , -1);
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
// , 3);
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// , 1);
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
// console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
