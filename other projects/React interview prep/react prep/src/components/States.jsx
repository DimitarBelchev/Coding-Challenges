import React, { Component } from "react";
import "../App.css";

export default class States extends Component {
  constructor() {
    super();
    this.state = {
      name: "Steve",
      age: 20,
      array: [1, 2, 3, 4, 5, 6],
    };
  }

  changeStatus = () => {
    this.setState({ age: this.state.age * 2 });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        {this.state.array.map((item) => {
          return item * 2;
        })}
        <br></br>
        <button onClick={this.changeStatus}>Change Status</button>
      </div>
    );
  }
}

//FUNC
// import { useState } from "react";

// const States = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
//   const [isVisible, setIsVisible] = useState(false);
//   const [array, setArray] = useState([
//     {
//       name: "Steve",
//       age: 20,
//     },
//     {
//       name: "George",
//       age: 45,
//     },
//   ]);

//   const increment = () => {
//     setCount(count + 1);
//     setIsVisible(!isVisible);
//     setName("Steve");
//   };

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <h1>{name}</h1>
//       {isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1>}
//       <button onClick={increment}>Update State</button>
//     </div>
//   );
// };

// export default States;
