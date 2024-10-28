function intersectionUsingHashMap(nums1, nums2) {
  const countMap = new Map();
  nums1.forEach((num) => countMap.set(num, (countMap.get(num) || 0) + 1));
  return [...new Set(nums2.filter((num) => countMap.has(num)))];
}

const nums11 = [1, 2, 2, 1];
const nums21 = [2, 2];
intersectionUsingHashMap(nums11, nums21); //output: [2]

const nums12 = [4, 9, 5];
const nums22 = [9, 4, 9, 8, 4];
intersectionUsingHashMap(nums12, nums22); //output: [9,4]
