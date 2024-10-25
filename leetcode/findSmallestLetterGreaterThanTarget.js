function findNextGreatestLetterLinearSearch(letters, target) {
  let result = "{";
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target && letters[i] < result) {
      result = letters[i];
    }
  }
  if (result === "{") {
    return letters[0];
  }
  return result;
}

const letters1 = ["c", "f", "j"];
const target1 = "a";
findNextGreatestLetterLinearSearch(letters1, target1); //output: c

const letters2 = ["c", "f", "j"];
const target2 = "c";
findNextGreatestLetterLinearSearch(letters2, target2); //output: f

const letters3 = ["x", "x", "y", "y"];
const target3 = "z";
findNextGreatestLetterLinearSearch(letters3, target3); //output: x
