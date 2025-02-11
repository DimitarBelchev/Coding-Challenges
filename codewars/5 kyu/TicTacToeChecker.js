// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  // TODO: Check if the board is solved!
  let newArr = [].concat.apply([], board);
  let Owinner = false;
  let Xwinner = false;
  let empty = false;

  if (newArr[0] === newArr[1] && newArr[0] === newArr[2]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[0] === newArr[4] && newArr[0] === newArr[8]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[0] === newArr[3] && newArr[0] === newArr[6]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[3] === newArr[4] && newArr[3] === newArr[5]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[6] === newArr[7] && newArr[8] === newArr[6]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[1] === newArr[4] && newArr[7] === newArr[6]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[2] === newArr[5] && newArr[8] === newArr[6]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  } else if (newArr[6] === newArr[4] && newArr[2] === newArr[6]) {
    if (newArr[0] == 0) {
      empty = true;
    } else if (newArr[0] == 1) {
      Xwinner = true;
    } else {
      Owinner = true;
    }
  }
  if (Xwinner) {
    return 1;
  } else if (Owinner) {
    return 2;
  } else if (!Xwinner && !Owinner && newArr.includes(0)) {
    return -1;
  } else {
    return 0;
  }
  console.log(Xwinner, Owinner, empty);
}
console.log(
  isSolved([
    [1, 2, 1],
    [1, 1, 2],
    [2, 2, 0],
  ])
);
console.log(
  isSolved([
    [1, 2, 1],
    [1, 1, 2],
    [2, 1, 2],
  ])
);

// //function isSolved(board) {
//     var row = board;
//     var col = [0,1,2].map((i) => [0,1,2].map((h)=>board[h][i]));
//     var di1 = [[0,1,2].map((i) => board[i][i])];
//     var di2 = [[0,1,2].map((i) => board.reverse()[i][i])];
//     var all = row.concat(col,di1,di2);
//     if (all.some(x=>""+x=="1,1,1")){return 1;}
//     else if (all.some(x=>""+x=="2,2,2")){return 2;}
//     else if (all.some(x => x.includes(0))){return -1;}
//     else{return 0;};
//   }
