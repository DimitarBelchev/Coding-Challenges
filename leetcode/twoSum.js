/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
  return answer;
};
console.log(twoSum([3, 2, 4], 6));
