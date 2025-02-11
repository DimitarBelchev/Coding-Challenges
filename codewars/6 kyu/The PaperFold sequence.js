// function* paperFold() {
//   let sequence = [1, 1, 0];
//   let i = -1;
//   let count = 1;
//   while (true) {
//     i++;
//     if (i >= sequence.length) {
//       let newSequence = [];
//       sequence.forEach((num) => {
//         newSequence.push(count);
//         count = 1 - count;
//         newSequence.push(num);
//       });
//       newSequence.push(0);
//       count = 1;
//       sequence = newSequence.slice();
//     }
//     yield sequence[i];
//   }
// }

function* paperFold() {
  for (let i = 1; ; i++) {
    yield (i & ((i & -i) << 1)) != 0 ? 0 : 1;
  }
}
