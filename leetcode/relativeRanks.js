function findRelativeRanks(score) {
  const sIdx = score.map((value, index) => [value, index]);

  sIdx.sort((a, b) => b[0] - a[0]);

  const ans = new Array(score.length);

  if (sIdx.length > 0) ans[sIdx[0][1]] = "Gold Medal";
  if (sIdx.length > 1) ans[sIdx[1][1]] = "Silver Medal";
  if (sIdx.length > 2) ans[sIdx[2][1]] = "Bronze Medal";

  for (let i = 3; i < sIdx.length; i++) {
    ans[sIdx[i][1]] = (i + 1).toString();
  }

  return ans;
}

const score1 = [5, 4, 3, 2, 1];
findRelativeRanks(score1); //output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

const score2 = [10, 3, 8, 9, 4];
findRelativeRanks(score2); //output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
