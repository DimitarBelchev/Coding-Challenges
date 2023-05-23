import { useEffect } from "react";

const CondExpr = () => {
  useEffect(() => {
    let age = 26;
    let name = "Steve";
    if (age > 26) {
      console.log("too old");
    } else if (name === "Steve" && age === 26) {
      console.log("I am 26");
      console.log("I am Steve");
    } else {
      console.log("I am not 26");
      console.log("I am not Steve");
    }
  }, []);
  return <div className="App"></div>;
};

export default CondExpr;
