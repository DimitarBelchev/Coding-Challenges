import { useState } from "react";

const Forms = () => {
  const [objData, setObjData] = useState({});

  const getInputs = (data) => {
    let { name, value } = data.target;
    let input = { [name]: value };
    setObjData({ ...objData, ...input });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(objData);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          placeholder="name"
          //   onChange={(e) => getInputs(e.target.value, e.target.name)}
          onChange={getInputs}
          name="name"
          type="text"
        />
        <br />
        <input
          placeholder="age"
          //   onChange={(e) => getInputs(e.target.value, e.target.name)}
          onChange={getInputs}
          name="age"
          type="number"
        />
        <br />

        <input
          placeholder="hobbies"
          //   onChange={(e) => getInputs(e.target.value, e.target.name)}
          onChange={getInputs}
          name="hobbies"
          type="text"
        />
        <br />

        <input
          placeholder="date"
          //   onChange={(e) => getInputs(e.target.value, e.target.name)}
          onChange={getInputs}
          name="date"
          type="date"
        />
        <br />
        <button type="submit">Sumbit</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

export default Forms;
