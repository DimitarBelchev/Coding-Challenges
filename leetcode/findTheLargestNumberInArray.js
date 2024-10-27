function findLargestNumber(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error("Input is not a valid array or array is empty");
  }
  return Math.max(...nums);
}

const array1 = [1, 5, 3, 7, 2];
findLargestNumber(array1); //output: 7

const array2 = [];
findLargestNumber(array2); //Throw error => Input is not a valid array or array is empty

const string3 = "aman";
findLargestNumber(string3); //Throw error => Input is not a valid array or array is empty

const array4 = [-5, 8, 9, 20];
findLargestNumber(array4); //output: 20
