function countStudentsUnableToEatGreedyMatching(students, sandwiches) {
  let studentPrefs = { 0: 0, 1: 0 };
  let sandwichPrefs = { 0: 0, 1: 0 };

  for (let student of students) studentPrefs[student]++;
  for (let sandwich of sandwiches) sandwichPrefs[sandwich]++;

  for (let i = 0; i < sandwiches.length; i++) {
    if (studentPrefs[sandwiches[i]] > 0) {
      studentPrefs[sandwiches[i]]--;
    } else {
      break;
    }
  }
  return Object.values(studentPrefs).reduce((acc, val) => acc + val, 0);
}

const students1 = [1, 1, 0, 0];
const sandwiches1 = [0, 1, 0, 1];
countStudentsUnableToEatGreedyMatching(students1, sandwiches1); //output: 0

const students2 = [1, 1, 1, 0, 0, 1];
const sandwiches2 = [1, 0, 0, 0, 1, 1];
countStudentsUnableToEatGreedyMatching(students2, sandwiches2); //output: 3

function countStudentsUnableToEatRotateAndCount(students, sandwiches) {
  let queue = students.slice();
  let stack = sandwiches.slice();
  let attempts = 0;

  while (attempts < queue.length) {
    if (queue[0] === stack[0]) {
      queue.shift();
      stack.shift();
      attempts = 0;
    } else {
      queue.push(queue.shift());
      attempts++;
    }
  }
  return queue.length;
}

const students1 = [1, 1, 0, 0];
const sandwiches1 = [0, 1, 0, 1];
countStudentsUnableToEatRotateAndCount(students1, sandwiches1); //output: 0

const students2 = [1, 1, 1, 0, 0, 1];
const sandwiches2 = [1, 0, 0, 0, 1, 1];
countStudentsUnableToEatRotateAndCount(students2, sandwiches2); //output: 3
