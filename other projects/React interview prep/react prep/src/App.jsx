// import { useState } from "react";
// import Parent from "./tasks/Parent.jsx";
// import IndyTask from "./tasks/IndiTask.jsx";
// import Child from "./tasks/Child.jsx";
import MockJunior from "./tasks/MockJunior.jsx";

const CATS = [
  {
    name: "aaaaaa",
    breed: "aaaaa",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 7,
  },
  {
    name: "mmmmmmmmm",
    breed: "mmmmmmmmm",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 7,
  },
  {
    name: "nnnnnnnnn",
    breed: "nnnnnnn",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 7,
  },
  {
    name: "bbbbb",
    breed: "bbbbb",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 7,
  },
  {
    name: "xxxxxxx",
    breed: "xxxxxxxx",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 7,
  },
  {
    name: "fffffffff",
    breed: "ffffffff",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 1,
  },
  {
    name: "kkkkkkk",
    breed: "kkkkkk",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 4,
  },
  {
    name: "uuuuuuu",
    breed: "uuuuuu",
    url: "https://placekitten.com/800/600",
    description: "Lorem etc etc",
    age: 1,
  },
];

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // return <Parent />;
  // return <IndyTask />;
  return (
    <div className="card-container">
      {CATS.map((cat, index) => {
        if (index <= 5) {
          return <MockJunior cat={cat} key={CATS.name} />;
        }
      })}
    </div>
  );
}

export default App;
