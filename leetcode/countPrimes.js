function countPrimesSimple(n) {
  if (n <= 2) return 0;

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

const n1 = 10;
countPrimesSimple(n1); //output: 4

const n2 = 15;
countPrimesSimple(n2); //output: 6

const n3 = 0;
countPrimesSimple(n3); //output: 0
