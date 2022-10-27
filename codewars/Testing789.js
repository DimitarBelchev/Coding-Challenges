var number = function (array) {
  //your awesome code here
  finalArr = [];
  for (i = 0; i < array.length; i++) {
    array[i] = `${i + 1}: ${array[i]}`;
  }
  return array;
};
console.log(number(["a", "b", "c"]));
