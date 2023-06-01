// import { useState } from "react";

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

// const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

const MapUsers = () => {
  // const [names, setNames] = useState("");
  return (
    <>
      <h3>User names</h3>
      {/* <ul>{userItems}</ul> */}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default MapUsers;
