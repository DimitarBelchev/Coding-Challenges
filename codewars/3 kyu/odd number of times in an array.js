function findOdd(A) {
  const count = {};

  for (const element of A) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  for (const property in count) {
    if(count[property] % 2 !== 0){
      return parseInt(property)
    }
  }
}
