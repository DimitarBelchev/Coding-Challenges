import { useEffect, useState } from "react";
const countries = [
  {
    name: "India",
    value: "In",
    cities: ["Mumbai", "Delhi"],
  },
  {
    name: "Pakistan",
    value: "Pak",
    cities: ["Karachi", "Lahore"],
  },
  {
    name: "Canada",
    value: "Ca",
    cities: ["Washington", "BeachingTon"],
  },
];

// 1. Name Value Cities
// 2. A dropdown of countries
// 3. Second dropdown will show the cities of that country no click function

const india = () => {
  //   const [items, setItems] = useState("In");
  //   const searchedcity = countries.find((e) => e.value === items);
  //   // console.log(searchedcity);
  //   return (
  //     <>
  //       {/* First Dropdown */}
  //       <select onChange={(e) => setItems(e.target.value)}>
  //         {countries.map((element) => (
  //           <option key={element.value} value={element.value}>
  //             {element.name}
  //           </option>
  //         ))}
  //       </select>

  //       {/* 2nd Dropdown */}
  //       <select>
  //         {searchedcity.cities.map((element) => (
  //           <option key={element} value={element}>
  //             {element}
  //           </option>
  //         ))}
  //       </select>
  //     </>
  //   );
  // };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
};

export default india;
