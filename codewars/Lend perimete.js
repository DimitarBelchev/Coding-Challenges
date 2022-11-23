function landPerimeter(arr) {
  const width = arr[0].length;
  const height = arr.length;
  const fullArea = arr.join("");
  const max = width * height;
  let neighbours = 0;
  let area = 0;
  let counter = 2;
  let jCounter = 2;
  let count = 0;
  let row = 1;
  for (let i = 0; i < width; i++) {
    counter++;
    //end
    if (i === width - 1) {
      if (fullArea[i] === "X") {
        area += 4;
        if (fullArea[i - 1] === "X") neighbours++;
        if (fullArea[i - width] === "X") neighbours++;
        if (fullArea[i + width] === "X") neighbours++;
        area -= neighbours;
        neighbours = 0;
      }
    } else {
      //start or middle
      if (fullArea[i] === "X") {
        area += 4;
        if (fullArea[i - 1] === "X") neighbours++;
        if (fullArea[i + 1] === "X") neighbours++;
        if (fullArea[i - width] === "X") neighbours++;
        if (fullArea[i + width] === "X") neighbours++;
        area -= neighbours;
        neighbours = 0;
      }
    }

    for (let j = width + i; j < max + 1; j += width) {
      //start
      if (j % width === 0) {
        if (fullArea[j] === "X") {
          area += 4;
          if (fullArea[j + 1] === "X") neighbours++;
          if (fullArea[j - width] === "X") neighbours++;
          if (fullArea[j + width] === "X") neighbours++;
          area -= neighbours;
          neighbours = 0;
        }
      } //end
      else if (j === width * 2 - 1 + count) {
        if (fullArea[j] === "X") {
          area += 4;
          if (fullArea[j - 1] === "X") neighbours++;
          if (fullArea[j - width] === "X") neighbours++;
          if (fullArea[j + width] === "X") neighbours++;
          area -= neighbours;
          neighbours = 0;
        }
      } else {
        //middle
        if (fullArea[j] === "X") {
          area += 4;
          if (fullArea[j - 1] === "X") neighbours++;
          if (fullArea[j + 1] === "X") neighbours++;
          if (fullArea[j - width] === "X") neighbours++;
          if (fullArea[j + width] === "X") neighbours++;
          area -= neighbours;
          neighbours = 0;
        }
      }
      count += width;
    }
    count = 0;
  }
  return "Total land perimeter: " + area;
}
console.log(
  landPerimeter([
    "OXOOO",
    "OOXXX",
    "OXXOO",
    "XOOOO",
    "XOOOO",
    "XXXOO",
    "XOXOO",
    "OOOXO",
    "OXOOX",
    "XOOOO",
    "OOOXO",
  ])
);
// "XOOXO",
// "XOOXO",
// "OOOXO",
// "XXOXO",
// "OXOOO"]));

// console.log(
//   landPerimeter([
//     "OOOOXO",
//     "XOXOOX",
//     "XXOXOX",
//     "XOXOOO",
//     "OOOOOO",
//     "OOOXOO",
//     "OOXXOO",
//   ])
// );

//9=24
//7=18

// console.log(
//   landPerimeter([
//     "OXOOOX",
//     "OXOXOO",
//     "XXOOOX",
//     "OXXXOO",
//     "OOXOOX",
//     "OXOOOO",
//     "OOXOOX",
//     "OOXOOO",
//     "OXOOOO",
//     "OXOOXX",
//   ])
// );
