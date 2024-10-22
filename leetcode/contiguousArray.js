function findMaxLengthPrefixSum(nums) {
  let maxLen = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}

const nums1 = [0, 1];
findMaxLengthPrefixSum(nums1); //output: 2

const nums2 = [0, 1, 0];
findMaxLengthPrefixSum(nums2); //output: 2
