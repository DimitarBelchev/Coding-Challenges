// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
  // your code
  //   const duplicates = [...getRepeatedChars(s1), ...getRepeatedChars(s2)];
  const mergedWord = s1 + s2;
  console.log(mergedWord);
  let newArr = [];
  for (i = 0; i < mergedWord.length; i++) {
    !newArr.includes(mergedWord[i]) && newArr.push(mergedWord[i]);
  }
  //   console.log(duplicates);
  //   console.log(s1);
  //   console.log(s2);
  return newArr.sort().join("");
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
