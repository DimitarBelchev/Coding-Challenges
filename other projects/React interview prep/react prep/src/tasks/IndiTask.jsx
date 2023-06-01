import { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const IndiTask = () => {
  const [countryValue, setCountryValue] = useState();

  const countryHandler = (e) => {
    setCountryValue(() => {
      return countries.filter((entry) => entry.value === e.target.value);
    });
  };

  return (
    <>
      <select onChange={countryHandler}>
        <option>SELECT</option>
        {countries.map((country) => {
          return (
            <option key={country.value} value={country.value}>
              {country.value}
            </option>
          );
        })}
      </select>
      {countryValue && (
        <select>
          {countryValue[0].cities.map((city) => {
            return <option key={city}>{city}</option>;
          })}
        </select>
      )}
    </>
  );
};

export default IndiTask;
