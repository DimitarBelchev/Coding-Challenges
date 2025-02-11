function cupAndBalls(b, arr) {
  let newArr = [1, 2, 3];
  let temp1 = 0;
  let temp2 = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let temp1 = arr[i][0] - 1;
    let temp2 = arr[i][1] - 1;
    [newArr[temp1], newArr[temp2]] = [newArr[temp2], newArr[temp1]];
    temp1 = 0;
    temp2 = 0;
  }
  return newArr.indexOf(b) + 1;
}
console.log(
  cupAndBalls(2, [
    [1, 3],
    [1, 2],
    [2, 1],
    [2, 3],
  ])
);
