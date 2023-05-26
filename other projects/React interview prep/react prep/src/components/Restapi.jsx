import { useEffect, useState } from "react";
import axios from "axios";

const Restapi = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);

  const postData = () => {
    axios
      .post("https://647087e93de51400f724738b.mockapi.io/users", {
        name: name,
        age: 20,
        hobbies: ["Poetry", "Cooking"],
      })
      .then((res) => {
        console.log(res.data);
        setDataChanged(true);
      })
      .catch((err) => console.log(err));
  };

  const putData = (id) => {
    axios
      .put(`https://647087e93de51400f724738b.mockapi.io/users/${id}`, {
        name: name,
      })
      .then((res) => {
        console.log(res.data);
        setDataChanged(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://647087e93de51400f724738b.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setDataChanged(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://647087e93de51400f724738b.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
        setDataChanged(false); // Reset the dataChanged variable
      })
      .catch((err) => console.log(err));
  }, [dataChanged]);

  return (
    <div className="App">
      <button onClick={postData}>Post Data</button>
      <br />
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <button onClick={() => putData(user.id)}>update</button>
            <button onClick={() => deleteData(user.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Restapi;
