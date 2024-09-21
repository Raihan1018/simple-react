import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, population, flags, maps, cca3, handleVisitedCountries } =
    country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountries);

  console.log(country);
  return (
    <div>
      <h3>Name: {name.common}</h3>
      <h4>population: {population}</h4>
      <img src={flags.png} alt="" />
      <p>
        <small>Code: {cca3}</small>
      </p>

      <button>Mark Visited</button>
      <br />
      <br />
      <button>
        <a href={maps.googleMaps} target="blank">
          Click Here
        </a>
      </button>
      <br />
      <br />
      <button onClick={handleVisited}>Visited</button>
      {visited ? "Already visited" : "Not visited yet"}
    </div>
  );
};

export default Country;
