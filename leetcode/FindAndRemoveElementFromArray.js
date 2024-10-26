function removeElementUsingSplice(arr, position) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }
  if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
    throw new RangeError(
      "Position must be a valid integer within the array bounds"
    );
  }
  arr.splice(position, 1);
  return arr;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const position1 = 10;
removeElementUsingSplice(array1, position1); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const position2 = -4;
removeElementUsingSplice(array2, position2); //Throw error => Position must be a valid integer within the array bounds
