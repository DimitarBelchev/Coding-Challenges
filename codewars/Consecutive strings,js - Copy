function longestConsec(strarr, k) {
  if (!strarr.length || k < 1 || k > strarr.length) return "";
  const longest = strarr.reduce((a, b) => (a.length > b.length ? a : b));
  if (k === 1) return longest;
  let results = [];
  let counter = 1;
  let next = "";
  let repeat = k;

  for (let i = 0; i < strarr.length - k + 1; i++) {
    while (repeat > 1) {
      next += strarr[i + counter];
      counter++;
      repeat--;
    }
    results.push(strarr[i] + next);
    next = "";
    counter = 1;
    repeat = k;
  }

  function allLongestStrings(inputArray) {
    let longest = Math.max(...inputArray.map(({ length }) => length));
    return inputArray.filter(({ length }) => length === longest);
  }

  return allLongestStrings(results).shift();
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "abigail", "theti"],
    2
  )
);
