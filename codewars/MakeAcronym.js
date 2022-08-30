function toAcronym(inp) {
  // ...
  finalArr = [];

  inp = inp.split(" ");
  for (i = 0; i < inp.length; i++) {
    inp2 = inp[i].split("");
    console.log(inp2);
    poppedCase = inp2.shift();
    finalArr.push(poppedCase);
  }
  return finalArr.join("").toUpperCase();
}
console.log(toAcronym("Code Wars"));
