function distributeCandiesHashSet(candyType) {
  const uniqueTypes = new Set(candyType);
  const maxDistinctTypes = candyType.length / 2;
  return Math.min(uniqueTypes.size, maxDistinctTypes);
}

const candyType1 = [1, 1, 2, 2, 3, 3];
distributeCandiesHashSet(candyType1); //output: 3

const candyType2 = [1, 1, 2, 3];
distributeCandiesHashSet(candyType2); //output: 2

const candyType3 = [6, 6, 6, 6];
distributeCandiesHashSet(candyType3); //output: 1
