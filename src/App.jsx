import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
      });
  }, []);

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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header />

      <main className="container mx-auto">
        <section className="flex flex-col desktop:flex-row gap-6 justify-between px-3 my-8">
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

        <section className="grid grid-cols-1 px-3 my-8 gap-6 desktop:grid-cols-4 desktop:gap-12">
          {filteredCountries.map((country) => (
            <Card key={country.name} country={country} />
          ))}
        </section>
      </main>
    </>
  );
}
