function findTicTacToeWinnerUsingHashMap(moves) {
  const board = Array(3)
    .fill(null)
    .map(() => Array(3).fill(""));
  const winningCombinations = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? "A" : "B";
  }

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]];
    }
  }

  return moves.length === 9 ? "Draw" : "Pending";
}

const moves1 = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];
findTicTacToeWinnerUsingHashMap(moves1); //output: A

const moves2 = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];
findTicTacToeWinnerUsingHashMap(moves2); //output: B

const moves3 = [
  [0, 0],
  [1, 1],
  [2, 0],
  [1, 0],
  [1, 2],
  [2, 1],
  [0, 1],
  [0, 2],
  [2, 2],
];
findTicTacToeWinnerUsingHashMap(moves3); //output: Draw
