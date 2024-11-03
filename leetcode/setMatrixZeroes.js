function setZeroesWithBooleanMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const zeroRows = Array(numRows).fill(false);
  const zeroCols = Array(numCols).fill(false);

  const resultMatrix = matrix.map((row) => row.slice());

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (matrix[row][col] === 0) {
        zeroRows[row] = true;
        zeroCols[col] = true;
      }
    }
  }

  for (let row = 0; row < numRows; row++) {
    if (zeroRows[row]) {
      for (let col = 0; col < numCols; col++) {
        resultMatrix[row][col] = 0;
      }
    }
  }

  for (let col = 0; col < numCols; col++) {
    if (zeroCols[col]) {
      for (let row = 0; row < numRows; row++) {
        resultMatrix[row][col] = 0;
      }
    }
  }

  return resultMatrix;
}

const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroesWithBooleanMatrix(matrix1); //output: [ [1, 0, 1], [0, 0, 0], [1, 0, 1]]

const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroesWithBooleanMatrix(matrix2); //output: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0] ]
