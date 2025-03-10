// function removeFalsyValuesFilter(arr) {
//   return arr.filter(Boolean);
// }

// const array1 = [0, "Hello", false, 42, "", NaN, true, null, "World"];
// removeFalsyValuesFilter(array1); //output: ["Hello", 42, true, "World"]

function removeFalsyValuesForLoop(arr) {
  const result = [];
  for (const value of arr) {
    if (value) {
      result.push(value);
    }
  }
  return result;
}

const array1 = [0, "Hello", false, 42, "", NaN, true, null, "World"];
removeFalsyValuesForLoop(array1); //output: ["Hello", 42, true, "World"]
