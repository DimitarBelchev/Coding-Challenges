function isIsogram(str) {
  str = str.toLowerCase().split("");
  const lettersUnique = [...new Set(str)];
  const lettersIf = lettersUnique.length === str.length ? true : false;
  return lettersIf;
  //...
}
console.log(isIsogram("aba"));
console.log(isIsogram("Dermatoglyphics"));
