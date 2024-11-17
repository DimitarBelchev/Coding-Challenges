function getRowIterative(rowIndex) {
  const row = [1];
  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        newRow.push(1);
      } else {
        newRow.push(row[j - 1] + row[j]);
      }
    }
    row.length = 0;
    row.push(...newRow);
  }
  return row;
}

const rowIndex1 = 3;
getRowIterative(rowIndex1); //output: [1,3,3,1]

const rowIndex2 = 0;
getRowIterative(rowIndex2); //output: [1]

const rowIndex3 = 1;
getRowIterative(rowIndex3); //output: [1,1]
