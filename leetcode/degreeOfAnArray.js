function findSmallestLengthBruteForce(nums) {
  const degree = Math.max(
    ...nums.map((n) => nums.filter((x) => x === n).length)
  );

  let minLength = nums.length;

  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      const subArray = nums.slice(start, end + 1);
      const subDegree = Math.max(
        ...subArray.map((n) => subArray.filter((x) => x === n).length)
      );
      if (subDegree === degree) {
        minLength = Math.min(minLength, end - start + 1);
      }
    }
  }

  return minLength;
}

const nums1 = [1, 2, 2, 3, 1];
findSmallestLengthBruteForce(nums1); //output: 2

const nums2 = [1, 2, 2, 3, 1, 4, 2];
findSmallestLengthBruteForce(nums2); //output: 6
