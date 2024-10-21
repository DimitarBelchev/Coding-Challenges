function containsNearbyDuplicateWithHashMap(nums, k) {
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(nums[i])) {
      const prevIndex = indexMap.get(nums[i]);
      if (i - prevIndex <= k) {
        return true;
      }
    }
    indexMap.set(nums[i], i);
  }

  return false;
}

const nums1 = [1, 2, 3, 1];
const k1 = 3;
containsNearbyDuplicateWithHashMap(nums1, k1); //output: true

const nums2 = [1, 0, 1, 1];
const k2 = 1;
containsNearbyDuplicateWithHashMap(nums2, k2); //output: true

const nums3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;
containsNearbyDuplicateWithHashMap(nums3, k3); //output: false
