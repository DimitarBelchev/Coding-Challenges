import { useState } from "react";
import "../App.css";
import Child from "./Child";

const Props = () => {
  const [name, setName] = useState("Steve");
  const changeName = (value) => {
    setName(value);
  };
  return (
    <div className="App">
      <Child name={name} changeName={changeName} />
      {/* <button onClick={() => setName("George")}>Change Name</button> */}
    </div>
  );
};

export default Props;
