// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  text = text.toLowerCase().split("");

  let counter = 0;
  const counts = {};
  text.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  Object.values(counts).forEach((val) =>
    val > 1 ? counter++ : (counter = counter)
  );

  return counter;
}

console.log(duplicateCount("aabBcde"));

// function duplicateCount(text) {
//   text = text.toLowerCase().split("");
//   let counter = 0;
//   for (let i = 0; i < text.length; i++) {
//     for (let j = i + 1; j < text.length; j++) {
//       if (text[i] === text[j]) {
//         counter++;
//         text = text
//           .map((el) => (el === text[i] ? (el = "") : (el = el)))
//           .filter(Boolean);
//         i = 0;
//         j = 0;
//       }
//     }
//   }
//   return counter;
// }
// console.log(duplicateCount("aabbcde"));
