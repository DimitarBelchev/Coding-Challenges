function createProduct(id, name, price) {
  const product = {};
  product[id] = {
    name,
    price,
  };
  return product;
}

const productId = "ABC123";
const productData = createProduct(productId, "Sample Product", 9.99);
console.log(productData);
