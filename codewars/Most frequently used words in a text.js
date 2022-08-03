// function topThreeWords(text) {
//   let newText = text.split(/\s+|[^'-\w]+|[0-9]+/).filter(Boolean);
//   let finalArr = [];
//   let n = newText.length;

//   function mostFrequent(newText, n) {
//     let max_count = 1,
//       res = newText[0];
//     let curr_count = 1;

//     for (let i = 1; i < n; i++) {
//       if (newText[i] == newText[i - 1]) curr_count++;
//       else curr_count = 1;

//       if (curr_count > max_count) {
//         max_count = curr_count;
//         res = newText[i - 1];
//       }
//     }
//     return res;
//   }
//   while (finalArr.length < 3) {
//     newText = newText.sort();
//     if (n == 0) break;
//     res = mostFrequent(newText, n);

//     if (mostFrequent(newText, n) != "'")
//       finalArr.push(mostFrequent(newText, n).toLowerCase());

//     newText = newText
//       .map((el) => (el === res ? el === "" : (el = el)))
//       .filter(Boolean);
//     n = newText.length;
//   }

//   return finalArr;
// }

function topThreeWords(text) {
  let regex = ".*[a-zA-Z].*";
  if (text.match(regex)) {
    let wordMap = new Map();
    text.split(" ").forEach((word) => {
      if (word) {
        word = word.toLowerCase();
        if (wordMap.has(word)) {
          let count = wordMap.get(word);
          count++;
          wordMap.set(word, count);
        } else {
          wordMap.set(word, 1);
        }
      }
    });
    const sortedWordMap = new Map(
      [...wordMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let result = Array.from(sortedWordMap.keys()).filter(
      (word, index) => index < 3
    );
    result = result.map((res) => {
      res = res.replace(/[/.,]/g, "");
      if (res !== "") {
        return res;
      }
    });
    return result.filter((res) => res !== undefined);
  } else {
    return [];
  }
}

console.log(topThreeWords("A poster caved on the blanket of a toad "));
// console.log(topThreeWords("  //wont won't won't "));
// console.log(
//   topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
//   mind, there lived not long since one of those gentlemen that keep a lance
//   in the lance-rack, an old buckler, a lean hack, and a greyhound for
//   coursing. An olla of rather more beef than mutton, a salad on most
//   nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
//   on Sundays, made away with three-quarters of his income.`)
// );
