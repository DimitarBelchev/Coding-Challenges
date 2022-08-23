// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5];
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)
// All tests for this Kata are randomly generated.

function solution(a) {
  let counter = 0;
  let i = 0;
  let infinite = 0;
  while (i < a.length && i >= 0) {
    i = i + a[i];
    infinite = i + a[i];

    if (i === infinite + a[infinite]) {
      return -1;
    }
    counter++;
  }

  return counter;
}
console.log(solution([1, 2, 2, -1]));
