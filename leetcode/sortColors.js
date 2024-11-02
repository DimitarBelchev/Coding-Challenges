function sortColors(nums) {
  let redPointer = 0;
  let currentPointer = 0;
  let bluePointer = nums.length - 1;

  while (currentPointer <= bluePointer) {
    if (nums[currentPointer] === 0) {
      [nums[redPointer], nums[currentPointer]] = [
        nums[currentPointer],
        nums[redPointer],
      ];
      redPointer++;
      currentPointer++;
    } else if (nums[currentPointer] === 1) {
      currentPointer++;
    } else {
      [nums[currentPointer], nums[bluePointer]] = [
        nums[bluePointer],
        nums[currentPointer],
      ];
      bluePointer--;
    }
  }

  return nums;
}

const array1 = [2, 0, 2, 1, 1, 0];
sortColors(array1); //output: [0, 0, 1, 1, 2, 2]

const array2 = [2, 0, 1];
sortColors(array2); //output: [0, 1, 2]
