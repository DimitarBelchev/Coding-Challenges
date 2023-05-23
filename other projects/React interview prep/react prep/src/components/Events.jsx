import React from "react";

const Events = () => {
  const getInput = (e) => {
    console.log(e.target.name);
  };
  let num = 0;
  const addNums = (num1, num2) => {
    num += num1 + num2;
    console.log(num);
  };
  return (
    <div className="App">
      <input placeholder="add smthg" onChange={getInput} name="input" />
      <button onClick={() => addNums(2, 3)}>Add nums</button>
    </div>
  );
};

export default Events;
