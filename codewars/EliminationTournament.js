// In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

// During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

// At the end of the competition, return the results of all the rounds in the form of array of arrays.

// Example:
// input = [9, 5, 4, 7, 6, 3, 8, 2];

// output = [
//   [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
//   [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
//   [9, 8],                    // results of 9 vs 7 and 6 vs 8
//   [9]                        // results of 9 vs 8
// ];
// Notes:

// Array length will alway be >= 2 and <= 100
// Elements of the array will always be >=1 and <= 100
// Input must not be altered.

const tourney = (array) => {
  let winnersArr = [];
  let finalArr = [];
  let popped;
  finalArr.push(array);
  while (array.length > 1) {
    for (i = 0; i < array.length; i += 2) {
      if (array[i] > array[i + 1]) {
        winnersArr.push(array[i]);
      } else if (array[i] < array[i + 1]) {
        winnersArr.push(array[i + 1]);
      } else if (array[i] === array[i + 1]) {
        winnersArr.push(array[i]);
      } else {
        popped = array[array.length - 1];
        winnersArr.unshift(popped);
      }
    }
    array = winnersArr;
    finalArr.push(winnersArr);
    winnersArr = [];
  }

  return finalArr;
};
console.log(
  tourney([
    13, 55, 56, 37, 6, 84, 11, 49, 32, 55, 34, 4, 8, 71, 43, 27, 37, 35, 34, 59,
    59, 39, 81, 63, 21, 76, 41, 10, 40, 7, 88, 5, 66, 94, 47, 91, 14, 59, 93,
    70, 96, 26, 41, 36, 88, 24, 13, 80, 97, 77, 80,
  ])
);
