function countAnagrams1(s) {
  const MOD = 1_000_000_007;

  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result = (result * i) % MOD;
    }
    return result;
  }

  function countDistinctAnagrams(word) {
    const freqMap = {};
    for (const char of word) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }

    let totalFactorial = factorial(word.length);
    for (const count of Object.values(freqMap)) {
      totalFactorial = (totalFactorial / factorial(count)) % MOD;
    }
    return totalFactorial;
  }

  let result = 1;
  const words = s.split(" ");
  for (const word of words) {
    result = (result * countDistinctAnagrams(word)) % MOD;
  }

  return result;
}

const s1 = "too hot";
countAnagrams1(s1); //output: 18

const s2 = "aa";
countAnagrams1(s2); //output: 1
