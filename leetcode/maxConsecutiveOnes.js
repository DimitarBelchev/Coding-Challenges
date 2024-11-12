function maxConsecutiveOnesSimple(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

const nums1 = [1, 1, 0, 1, 1, 1];
maxConsecutiveOnesSimple(nums1); //output: 3

const nums2 = [1, 0, 1, 1, 0, 1];
maxConsecutiveOnesSimple(nums2); //output: 2

// function maxConsecutiveOnesSlidingWindow(nums) {
//   let left = 0;
//   let right = 0;
//   let maxCount = 0;

//   while (right < nums.length) {
//     if (nums[right] === 1) {
//       right++;
//     } else {
//       maxCount = Math.max(maxCount, right - left);
//       right++;
//       left = right;
//     }
//   }

//   maxCount = Math.max(maxCount, right - left);
//   return maxCount;
// }

// const nums1 = [1, 1, 0, 1, 1, 1];
// maxConsecutiveOnesSlidingWindow(nums1); //output: 3

// const nums2 = [1, 0, 1, 1, 0, 1];
// maxConsecutiveOnesSlidingWindow(nums2); //output: 2
