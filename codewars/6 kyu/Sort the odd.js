// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
  // Return a sorted array.
  let oddArr = [];
  let finArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0) {
      finArr.push(array[j]);
    } else {
      finArr.push(oddArr[0]);
      oddArr.shift();
    }
  }

  return finArr;
}
console.log(sortArray([5, 8, 6, 3, 4]));
