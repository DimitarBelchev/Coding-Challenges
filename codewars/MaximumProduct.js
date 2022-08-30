function adjacentElementsProduct(array) {
  //   max product
  let maxProduct = Number.MIN_SAFE_INTEGER;
  for (i = 0; i < array.length - 1; i++) {
    // console.log(i, array[i]);
    maxProduct = Math.max(maxProduct, array[i] * array[i + 1]);
  }
  return maxProduct;
}
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
