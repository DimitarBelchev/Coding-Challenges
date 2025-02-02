let snakesAndLadders = function (dice, board) {
  let idx = 0;
  for (let i = 0; i <= dice.length - 1; i++) {
    if (dice[i] === 0) continue;
    if (dice[i] + idx == board.length - 1) return 10;
    if (dice[i] + idx > board.length - 1) continue;
    idx += dice[i];
    if (board[idx] > 0) idx += board[idx];
    if (board[idx] < 0) idx = idx - Math.abs(board[idx]);
  }

  return idx;
};

console.log(
  //   snakesAndLadders([2, 1, 5, 1, 5, 4], [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0])
  snakesAndLadders(
    [2, 1, 3, 4, 5, 3, 6, 6, 6, 3],
    [
      0, 0, 0, 0, 0, -1, 0, 0, 8, 0, 0, 0, -1, -4, 0, 0, 0, 0, 9, 0, 0, -1, 0,
      0, 0, 0, 0, -2, 0, 0,
    ]
  )
);
