import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = [];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("add this to visited country");
    console.log(country);
  };

  return (
    <div>
      <h3>Total Country: {countries.length}</h3>
      <div>
        <h5>Visited Countries.</h5>
        <ul></ul>
      </div>

      {countries.map((country) => (
        <Country
          key={country.ccn3}
          handleVisitedCountries={handleVisitedCountries}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
