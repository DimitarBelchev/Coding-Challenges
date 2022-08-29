function maxMultiple(divisor, bound) {
  //your code here
  let result;
  for (i = 0; i <= bound; i++) {
    if (i > 0 && i <= bound && i % divisor === 0) {
      result = i;
      continue;
    }
  }
  return result;
}
console.log(maxMultiple(10, 50));
