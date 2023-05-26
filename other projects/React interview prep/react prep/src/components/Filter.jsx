import { useEffect, useState } from "react";
import "../Filter.css";

function Filter() {
  const [users, setUsers] = useState([]);
  const [searched, setSeached] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const searched = setTimeout(() => {
        setSeached(
          users.filter((user) => {
            return Object.values(user)
              .join("")
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        );
      }, 1000);

      return () => clearTimeout(searched);
    } else {
      setUsers(users);
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search users"
        type="text"
        className="search"
      />
      <div className="grid-main">
        {searchQuery.length > 0
          ? searched.map((search, index) => {
              return (
                <div className="grid-child" key={index}>
                  <h2>{search.name}</h2>
                  <p>{search.username}</p>
                </div>
              );
            })
          : users.map((user, index) => {
              return (
                <div className="grid-child" key={index}>
                  <h2>{user.name}</h2>
                  <p>{user.username}</p>
                </div>
              );
            })}

        {/* {users.map((user, index) => {
          return (
            <div className="grid-child" key={index}>
              <h2>{user.name}</h2>
              <p>{user.username}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Filter;
