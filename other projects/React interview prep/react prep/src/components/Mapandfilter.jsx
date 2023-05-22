import { useEffect, useState } from "react";
import "../App.css";

const Mapandfilter = () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let lessThanFive = numbers
      .map((number) => number * number)
      .filter((number) => number <= 50);

    setNumbers(lessThanFive);

    // let filteredData = users.filter((user) => {
    // return user.name === "Leanne Graham";
    // return user.name.includes("L");
    // return user.id <= 5;

    // });
    // setUsers(filteredData);
    // console.log(filteredData);
    // let mappedArray = users.map((user) => user.id * 2);
    // console.log(mappedArray);
  };

  return (
    <div className="App">
      {/* <h1>Users</h1>
      <div className="card">
        {users.map((user, index) => (
          <div key={index} className="card-inner">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))}
      </div> */}

      <h1>numbers</h1>
      <div className="card">
        {numbers.map((number, index) => (
          <div key={index} className="card-inner">
            <p>{number}</p>
          </div>
        ))}
      </div>
      <button onClick={mapData}>See Mapped Array</button>
    </div>
  );
};

export default Mapandfilter;
