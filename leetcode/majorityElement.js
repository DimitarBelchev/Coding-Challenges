function majorityElementBoyer(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

const nums1 = [3, 2, 3];
majorityElementBoyer(nums1); //output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
majorityElementBoyer(nums2); //output: 2
