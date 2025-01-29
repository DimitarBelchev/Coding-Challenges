function sumOfEvenElements(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Test the function:
console.log(sumOfEvenElements([1, 3, 5, 4, 8, 7])); // 12
console.log(sumOfEvenElements([4]));                // 4