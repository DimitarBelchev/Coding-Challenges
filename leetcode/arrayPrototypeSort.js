function unionOfSortedArraysSet(arr1, arr2) {
  let set = new Set(arr1.concat(arr2));
  return Array.from(set).sort((a, b) => a - b);
}

const array11 = [1, 3, 5, 7];
const array21 = [2, 3, 5, 6];
unionOfSortedArraysSet(array11, array21); //output: [1, 2, 3, 5, 6, 7]

const array12 = [1, 2, 2, 3];
const array22 = [2, 4, 4, 5];
unionOfSortedArraysSet(array12, array22); //output: [1, 2, 3, 4, 5]
