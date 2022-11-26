function orderWeight(strng) {
  strng = strng.trim().split(" ");
  let weight = 0;
  let eachNumArr = [];
  let arr = [];
  finalArr = [];
  let sorted = [];
  let weightArr = [];
  let identical = [];
  let identicalArr2 = [];
  for (let i = 0; i < strng.length; i++) {
    weight = strng[i].split("").reduce((a, b) => +a + +b, 0);
    eachNumArr.push([weight, i]);
  }
  arr.push(eachNumArr);
  sorted = arr[0].sort((a, b) => a[0] - b[0]);
  for (let j = 0; j < sorted.length; j++) {
    if (sorted[j][0] !== sorted[j + 1][0]) {
      finalArr.push(strng[sorted[j][1]]);
    }
    identical.push(strng[sorted[j][1]]);
  }
  console.log(finalArr);
}

// console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
