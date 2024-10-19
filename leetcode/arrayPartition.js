function maxSumOfPairs(numbers) {
  numbers.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    total += numbers[i];
  }
  return total;
}

const array1 = [1, 4, 3, 2];
maxSumOfPairs(array1); //output: 4

const array2 = [6, 2, 6, 5, 1, 2];
maxSumOfPairs(array2); //output: 9
