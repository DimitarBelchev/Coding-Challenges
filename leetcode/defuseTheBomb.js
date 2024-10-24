function defuseBombSlidingWindow(code, k) {
  const n = code.length;
  const result = new Array(n).fill(0);

  if (k === 0) return result;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    let cnt = Math.abs(k);
    let j = 0;

    if (k > 0) {
      j = i + 1;
      while (cnt--) {
        sum += code[j % n];
        j++;
      }
    } else {
      j = i - 1;
      while (cnt--) {
        if (j < 0) j += n;
        sum += code[j];
        j--;
      }
    }

    result[i] = sum;
  }

  return result;
}

console.log(defuseBombSlidingWindow([5, 7, 1, 4], 3)); // Expected Output: [12, 10, 16, 13]
console.log(defuseBombSlidingWindow([1, 2, 3, 4], 0)); // Expected Output: [0, 0, 0, 0]
console.log(defuseBombSlidingWindow([2, 4, 9, 3], -2)); // Expected Output: [12, 5, 6, 13]

const code1 = [5, 7, 1, 4];
const k1 = 3;
defuseBombSlidingWindow(code1, k1); //output: [12,10,16,13]

const code2 = [1, 2, 3, 4];
const k2 = 0;
defuseBombSlidingWindow(code2, k2); //output: [0,0,0,0]

const code3 = [2, 4, 9, 3];
const k3 = -2;
defuseBombSlidingWindow(code3, k3); //output: [12,5,6,13]
