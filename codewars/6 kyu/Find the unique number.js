// const person = {
//   age: 20,
//   name: "Ben",
// };

// const peopleArray = [person, person, person];
// peopleArray[1].name = "Joe";
// let names = peopleArray.map((v) => v.name);
// let ages = peopleArray.map((v) => v.age);
// console.log(names, ages);

function findUniq(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}

console.log(findUniq([0, 1, 0, 0]));
console.log(findUniq([1, 0, 0, 0]));
console.log(findUniq([0, 0, 1, 0]));
