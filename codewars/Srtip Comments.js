// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
  input = input.split("\n");
  let finalArr = [];
  let splitted;
  let substr;
  let first;
  const checker = (strArr) => !markers.some((el) => strArr.includes(el));
  for (let i = 0; i < input.length; i++) {
    splitted = input[i].trim().replace('"', "").split("");

    if (checker(splitted)) {
      finalArr.push(input[i]);
    } else {
      for (j = 0; j < markers.length; j++) {
        first = input[i].indexOf(markers[j]);
        if (first !== -1) {
          substr = input[i]
            .substring(0, input[i].indexOf(markers[j]))
            .trim()
            .replace('"', "");
          finalArr.push(substr);
        }
      }
    }
  }
  return finalArr.join("\n");
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);

// console.log(
//   solution("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ])
// );

// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));
