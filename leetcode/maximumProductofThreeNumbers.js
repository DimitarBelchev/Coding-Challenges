function maximumProductOfThree_SortAndSelect(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(
    nums[n - 1] * nums[n - 2] * nums[n - 3],
    nums[0] * nums[1] * nums[n - 1]
  );
}

const nums1 = [1, 2, 3];
maximumProductOfThree_SortAndSelect(nums1); //output: 6

const nums2 = [1, 2, 3, 4];
maximumProductOfThree_SortAndSelect(nums2); //output: 24

const nums3 = [-1, -2, -3];
maximumProductOfThree_SortAndSelect(nums3); //output: -6
