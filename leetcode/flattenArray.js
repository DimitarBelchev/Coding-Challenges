function flattenArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      newArr.push(...flattenArray(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

const nestedArray1 = [1, 4, 5, [5, 6, 8, [4, 56]]];
flattenArray(nestedArray1); //output: [1, 4, 5, 5, 6, 8, 4, 56]

const nestedArray2 = [1, 2, [{ name: "John" }, 6]];
flattenArray(nestedArray2); //output: [1 , 2 , {"name":"John"}, 6]
