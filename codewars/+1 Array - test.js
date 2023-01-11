function upArray(arr) {
  if (!arr.every((ele) => ele >= 0 && ele <= 9) || arr.length == 0) return null;
  arr[arr.length - 1]++;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > 9) {
      arr[i] = 0;
      arr[i - 1]++;
    }
  }
  if (arr[0] > 9) {
    arr[0] = 0;
    arr.unshift(1);
  }
  return arr;
}
