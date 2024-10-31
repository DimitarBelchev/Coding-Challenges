function threeConsecutiveOddsBasicLoop(arr) {
  for (let index = 0; index < arr.length - 2; index++) {
    if (
      arr[index] % 2 !== 0 &&
      arr[index + 1] % 2 !== 0 &&
      arr[index + 2] % 2 !== 0
    ) {
      return true;
    }
  }
  return false;
}

const array1 = [2, 6, 4, 1];
threeConsecutiveOddsBasicLoop(array1); //output: false

const array2 = [1, 2, 34, 3, 4, 5, 7, 23, 12];
threeConsecutiveOddsBasicLoop(array2); //output: true
