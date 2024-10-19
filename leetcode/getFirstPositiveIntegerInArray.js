function findFirstPositiveFilter(arr) {
  const positives = arr.filter((val) => val > 0);
  return positives.length > 0 ? positives[0] : null;
}

const array1 = [-8, -6, 4, 6, 9, 3];
findFirstPositiveFilter(array1); //output: 4
