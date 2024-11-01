function singleNumberXOR(nums) {
  let unique = 0;
  for (const num of nums) {
    unique ^= num;
  }
  return unique;
}

const array1 = [2, 2, 1];
singleNumberXOR(array1); //output: 1

const array2 = [4, 1, 2, 1, 2];
singleNumberXOR(array2); //output: 4
