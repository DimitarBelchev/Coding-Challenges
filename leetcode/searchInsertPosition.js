function searchInsertBinarySearch(arr, target) {
  let st = 0;
  let end = arr.length - 1;
  let ans = arr.length;

  while (st <= end) {
    const mid = Math.floor(st + (end - st) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      end = mid - 1;
      ans = mid;
    } else {
      st = mid + 1;
    }
  }
  return ans;
}

const nums1 = [1, 3, 5, 6];
const target1 = 5;
searchInsertBinarySearch(nums1, target1); //output: 2

const nums2 = [1, 3, 5, 6];
const target2 = 2;
searchInsertBinarySearch(nums2, target2); //output: 1

const nums3 = [1, 3, 5, 6];
const target3 = 7;
searchInsertBinarySearch(nums3, target3); //output: 4
