function canPlaceFlowersGreedy(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const left = i === 0 || flowerbed[i - 1] === 0;
    const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (left && right && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  return n <= 0;
}

const flowerBedArray1 = [1, 0, 0, 0, 1];
const n1 = 1;
canPlaceFlowersGreedy(flowerBedArray1, n1); //output: true

const flowerBedArray2 = [1, 0, 0, 0, 1];
const n2 = 2;
canPlaceFlowersGreedy(flowerBedArray2, n2); //output: false
