function toCamelCase(str) {
  str = str.replace(/[-_]/g, " ");
  let words = str.split(" ");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];

    word = word.charAt(0).toUpperCase() + word.slice(1);
    result += word;
  }

  return result;
}
