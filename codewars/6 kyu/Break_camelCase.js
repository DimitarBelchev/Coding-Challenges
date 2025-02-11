//Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  let newStr = [];
  for (i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() !== string[i]) {
      newStr.push(string[i]);
    } else {
      newStr.push(" ");
      newStr.push(string[i]);
    }
  }

  return newStr.join("");
}
console.log(solution("camelCasing"));
