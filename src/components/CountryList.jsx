import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function CountryList({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    setFilteredCountries(
      countries.filter((c) =>
        c.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSelect = (region) => {
    setFilteredCountries(
      countries.filter((c) => c.region.toLowerCase() === region)
    );
  };

  return (
    <>
      <section className="flex flex-col desktop:flex-row gap-6 justify-between px-3 my-8 desktop:px-0">
        <input
          type="text"
          className="shadow rounded py-3 px-6 w-full desktop:w-1/3 dark:bg-blue-700 dark:placeholder:text-white"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => handleInput(e)}
        />

        <select
          className="shadow rounded p-3 bg-white dark:bg-blue-700 dark:text-white"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </section>

      <section className="grid grid-cols-1 px-3 my-8 gap-6 desktop:px-0 desktop:grid-cols-4 desktop:gap-12">
        {filteredCountries.map((country) => (
          <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
            <Card country={country} />
          </Link>
        ))}
      </section>
    </>
  );
}
