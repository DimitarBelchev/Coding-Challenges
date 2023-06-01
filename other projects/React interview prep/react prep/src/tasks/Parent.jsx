import React, { useState, useEffect } from "react";

const Parent = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(userData, typeof userData);
    setUserData(json);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h2>User Data</h2>
      {Object.keys(userData).map((el) => (
        <div key={userData[el].id}>
          <p>
            <strong>Name: </strong>
            {userData[el].name || "(Need to populate name here)"}
          </p>
          <p>
            <strong>Website: </strong>
            {userData[el].website || "(Need to populate website here)"}
          </p>
          <p>
            <strong>Email: </strong>
            {userData[el].email || "(Need to populate email here)"}
          </p>
          <p>
            <strong>Phone: </strong>
            {userData[el].phone || "(Need to populate phone here)"}
          </p>
          <br />
        </div>
      ))}
    </>
  );
};

export default Parent;
