function isArraySortedLoop(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input is not a valid array");
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

const array1 = [1, 2, 2, 3, 4];
isArraySortedLoop(array1); //output: true

const array2 = [10, 20, 30, 25, 40];
isArraySortedLoop(array2); //output: false

const array3 = [3, 2, 1];
isArraySortedLoop(array3); //output: false

const string4 = "hello";
isArraySortedLoop(string4); //Throw error => Input is not a valid array
