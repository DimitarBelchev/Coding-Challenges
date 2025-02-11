function cleanString(s) {
  const result = [];
  for (const c of s) {
    if (c === "#") {
      result.pop();
    } else {
      result.push(c);
    }
  }
  return result.join("");
}
console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));
console.log(cleanString("###a#bc#d"));
