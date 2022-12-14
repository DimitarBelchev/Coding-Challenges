function upArray(arr) {
  let arrRev = arr.reverse();
  let counter = 0;
  let add = false;

  for (let i = 0; i <= arrRev.length - 1; i++) {
    if (arrRev[i] < 0 || arrRev[i] > 9) return null;
    if (arrRev[i] === 9) {
      for (let j = i; j <= arrRev.length - 1; j++) {
        console.log(i);
        // console.log("j" + arrRev[j]);
        counter++;
        // console.log(counter);

        if (arrRev[j] != 9) {
          i += counter;
          counter = 0;
          break;
        }
      }
    }

    // if (add) {
    //   if (arrRev[i] === 9) {
    //     arrRev[i] = 0;
    //     counter++;
    //     add = true;
    //   } else {
    //     arrRev[i] += 1;
    //     break;
    //   }
    //   arrRev[i] += 1;
    //   add = false;
    // }
    // if (arrRev[i] === 9) {
    //   arrRev[i] = 0;
    //   counter = 1;
    //   add = true;
    // } else {
    //   arrRev[i] += 1;
    //   break;
    // }
  }
  return arrRev.reverse();
}
// console.log(upArray([4, 3, 2, 5]));
// console.log(upArray([2, 3, 9, 9]));
console.log(upArray([2, 9, 9, 9, 3, 9, 9]));
// console.log(upArray([9, 9]));
// console.log(upArray([0, 7]));
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// );
