function countingValleys(s) {
  //here we go again
  let counter = 0;
  let current = 0;
  for (const i of s) {
    if (i === "U") {
      current += 1;
    }
    if (i === "D") {
      current -= 1;
    }
    if (i === "U" && current === 0) counter++;
  }
  return counter;
}
console.log(countingValleys("FUFFDDFDUDFUFUF"));
