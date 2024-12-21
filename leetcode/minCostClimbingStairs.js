function minCostHashMap(cost) {
  const memo = new Map();

  function dp(i) {
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];
    if (memo.has(i)) return memo.get(i);
    const result = cost[i] + Math.min(dp(i - 1), dp(i - 2));
    memo.set(i, result);
    return result;
  }

  const n = cost.length;
  return Math.min(dp(n - 1), dp(n - 2));
}

const cost1 = [10, 15, 20];
minCostHashMap(cost1); //output: 15

const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
minCostHashMap(cost2); //output: 6

// function minCostFullTable(cost) {
//   const dp = Array(cost.length).fill(0);
//   dp[0] = cost[0];
//   dp[1] = cost[1];

//   for (let i = 2; i < cost.length; i++) {
//     dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
//   }

//   return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
// }

// const cost1 = [10, 15, 20];
// minCostFullTable(cost1); //output: 15

// const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// minCostFullTable(cost2); //output: 6
