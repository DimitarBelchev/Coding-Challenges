function generatePascalTriangleRecursion(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const newRow = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      newRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(newRow);
  }

  return triangle;
}

const input1 = 5;
generatePascalTriangleRecursion(input1); //output:  [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1] ]

const input2 = 1;
generatePascalTriangleRecursion(input2); //output: [[1]]

// function generatePascalTrianleCombinatorialFormula(numRows) {
//   const result = [];

//   for (let i = 0; i < numRows; i++) {
//     const row = new Array(i + 1).fill(1);

//     for (let j = 1; j < i; j++) {
//       row[j] = result[i - 1][j - 1] + result[i - 1][j];
//     }

//     result.push(row);
//   }

//   return result;
// }

// const input1 = 5;
// generatePascalTrianleCombinatorialFormula(input1); //output:  [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1] ]

// const input2 = 1;
// generatePascalTrianleCombinatorialFormula(input2); //output: [[1]]
