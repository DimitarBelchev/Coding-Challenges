function upArray(arr) {
  if (
    !Array.isArray(arr) ||
    !arr.every((x) => typeof x === "number" && x >= 0 && x < 10) ||
    arr.length === 0
  ) {
    return null;
  }
  const result = new Array(arr.length).fill(0);
  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = (arr[i] + carry) % 10;
    carry = Math.floor((arr[i] + carry) / 10);
  }
  if (carry > 0) {
    result.unshift(carry);
  }

  return result;
}
