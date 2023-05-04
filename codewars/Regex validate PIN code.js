function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }
  if (b.length === 0) {
    return a;
  }
  let newA = a;
  let newB = b;
  // [1, 2, 2, 3] [2, 3]
  a.forEach((arrItem, arrIndex) => {
    const aCopy = newA.slice();
    const bCopy = newB.slice();
    // We have found this element in both arrays
    if (b.includes(arrItem)) {
      newA = aCopy.filter((item) => item !== arrItem);
      newB = bCopy.filter((item) => item !== arrItem);
    }
  });

  console.log(newA);
  return newA;
}
