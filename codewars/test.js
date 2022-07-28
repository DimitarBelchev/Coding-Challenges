const person = {
  age: 20,
  name: "Ben",
};

const peopleArray = [person, person, person];
peopleArray[1].name = "Joe";
let names = peopleArray.map((v) => v.name);
let ages = peopleArray.map((v) => v.age);
console.log(names, ages);
