function containsDuplicateWithSet(nums) {
  if (nums.length < 1 || nums.length > 10 ** 5) {
    throw new Error("Array length out of bounds.");
  }

  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

const array1 = [1, 2, 3, 1];
containsDuplicateWithSet(array1); //output: true

const nums2 = [1, 2, 3, 4];
containsDuplicateWithSet(nums2); //output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
containsDuplicateWithSet(nums3); //output: true
