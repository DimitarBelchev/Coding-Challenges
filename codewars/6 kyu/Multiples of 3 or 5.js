function solution(number) {
  if (number < 1) {
    return 0;
  } else {
    let finalArr = [];

    for (i = 1; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        finalArr.push(i);
      } else if (i % 3 === 0) {
        finalArr.push(i);
      } else if (i % 5 === 0) {
        finalArr.push(i);
      }
    }
    return finalArr.reduce((a, b) => a + b, 0);
  }
}

console.log(solution(10));
