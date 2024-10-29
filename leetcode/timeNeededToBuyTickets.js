function timeRequiredToBuyBruteForce(tickets, k) {
  let time = 0;

  while (tickets[k] > 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[k] === 0) break;
      if (tickets[i] > 0) {
        tickets[i]--;
        time++;
      }
    }
  }

  return time;
}

const tickets1 = [2, 3, 2];
const k1 = 2;
timeRequiredToBuyBruteForce(tickets1, k1); //output: 6

const tickets2 = [5, 1, 1, 1];
const k2 = 0;
timeRequiredToBuyBruteForce(tickets2, k2); //output: 8
