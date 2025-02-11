// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  const oddNumbers = [];
  let startNumber = n * n - (n - 1);

  while (n > 0) {
    oddNumbers.push(startNumber);
    startNumber += 2;
    console.log(startNumber);
    n--;
  }
  return (sum = oddNumbers.reduce((a, b) => a + b, 0));
}

// alt
// return n*n*n

console.log(rowSumOddNumbers(4));
