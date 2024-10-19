function checkGridBasic(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) return false;
      if (j < n - 1 && grid[i][j] === grid[i][j + 1]) return false;
    }
  }

  return true;
}

const grid1 = [
  [1, 0, 2],
  [1, 0, 2],
];
checkGridBasic(grid1); //output: true

const grid2 = [
  [1, 1, 1],
  [0, 0, 0],
];
checkGridBasic(grid2); //output: false

const grid3 = [[1], [2], [3]];
checkGridBasic(grid3); //output: false
