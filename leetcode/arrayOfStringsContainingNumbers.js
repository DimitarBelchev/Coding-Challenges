function method1(arr) {
  return arr.filter((v) => /[0-9]/g.test(v));
}

const array1 = ["hey", "age = 12", "pi = 3.14"];
method1(array1); //output: ["age = 12", "pi = 3.14"]
