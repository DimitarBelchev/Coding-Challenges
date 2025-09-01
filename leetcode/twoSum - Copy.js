/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */
let twoSum = function (nums, target) {
  let answer = [];
  loopA: for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      if (i !== j && nums[i] + nums[j] === target) {
        answer.push(i, j);
        break loopA;
      }
    }
  }
  console.log(answer);
  return answer;
};
console.log(twoSum([3, 2, 4], 6));
