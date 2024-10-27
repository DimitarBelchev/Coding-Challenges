function findSecondSmallestAndLargest(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => a - b);

  const secondSmallest = uniqueSorted.length > 1 ? uniqueSorted[1] : null;
  const secondLargest =
    uniqueSorted.length > 1 ? uniqueSorted[uniqueSorted.length - 2] : null;

  return [secondSmallest, secondLargest];
}

const array1 = [1, 2, 3, 4, 5];
findSecondSmallestAndLargest(array1); //output: [2, 4]

const array2 = [5, 5, 5, 5];
findSecondSmallestAndLargest(array2); //output: [null, null]

const array3 = [1, 1, 2, 2, 3];
findSecondSmallestAndLargest(array3); //output: [2, 2]

const number4 = 4;
findSecondSmallestAndLargest(number4); //Throw error => Input must be an array
