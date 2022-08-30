function high(inputString) {
  let score = 0;
  let highestScore = 0;
  let winner;
  inputString = inputString.split(" ");
  for (w of inputString) {
    for (l of w) {
      score += l.charCodeAt() - 96;
    }

    if (score > highestScore) {
      highestScore = score;
      score = 0;
      winner = w;
    } else {
      score = 0;
    }
  }
  return winner;
}

console.log(high("aa b"));
