// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//   let fin = [];
//   let zeroes = [];
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] !== 0) {
//       fin.push(arr[i]);
//     } else {
//       zeroes.push(arr[i]);
//     }
//   }
//   return fin.concat(zeroes);
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3]));
/////////////////////////////////////////////////////////////////

// function moveZeros(arr) {
//     let fin = [];
//     let zeroes = [];
//     arr.forEach((el) => el !== 0 ? fin.push(el) : zeroes.push(el)

//     return fin.concat(zeroes);
//   }

//   console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3]));

/////////////////////////////////////////////////////////

function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      //   console.log(i + " " + arr[i]);
      arr.push(arr.splice(i, 1)[0]);
    }
  }
  return arr;
}
// console.log(
//   moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
// );
//[ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
