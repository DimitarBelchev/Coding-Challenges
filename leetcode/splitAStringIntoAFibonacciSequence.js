function backtrackingFibonacciSequence(num) {
  const sequence = [];

  function explore(index) {
    if (index === num.length && sequence.length >= 3) return true;
    for (let length = 1; length <= num.length - index; length++) {
      if (length > 10) break;
      const segment = num.slice(index, index + length);
      if (segment.length > 1 && segment[0] === "0") break;
      const value = parseInt(segment, 10);
      if (value > 2 ** 31 - 1) break;
      if (sequence.length >= 2) {
        const [first, second] = [
          sequence[sequence.length - 2],
          sequence[sequence.length - 1],
        ];
        if (first + second !== value) continue;
      }
      sequence.push(value);
      if (explore(index + length)) return true;
      sequence.pop();
    }
    return false;
  }

  explore(0);
  return sequence;
}

const str1 = "1101111";
backtrackingFibonacciSequence(str1); //output: [11, 0, 11, 11]

const str2 = "112358130";
backtrackingFibonacciSequence(str2); //output: []

const str3 = "0123";
backtrackingFibonacciSequence(str3); //output: []
