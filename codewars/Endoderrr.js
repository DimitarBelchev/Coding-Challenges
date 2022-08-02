function duplicateCount(text) {
  text = text.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] === text[j]) {
        counter++;
        text = text
          .map((el) => (el === text[i] ? (el = "") : (el = el)))
          .filter(Boolean);
        i = 0;
        j = 0;
      }
    }
  }
  return counter;
}
console.log(duplicateCount("aabbcde"));
