import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import { countriesMapper } from "./mappings/countriesMapper";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        const mappedCountries = countriesMapper(data);
        setCountries(mappedCountries);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />

      <main className="container mx-auto">
        <Routes>
          <Route index element={<CountryList countries={countries} />} />
          <Route
            path="country/:id"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </main>
    </>
  );
}
