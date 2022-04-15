import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const currentCountry = countries.find((c) => c.alpha3Code === id);
    setCountry(currentCountry);
    setIsLoading(false);
  }, [countries]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main className="container mx-auto">
      <article className="flex flex-col max-w-lg mx-auto my-4">
        <header className="w-full">
          <img className="w-full" src={country.flag} alt={country.name} />
        </header>

        <div className="flex flex-col p-4">
          <h2 className="text-lg font-extrabold desktop:text-xl mb-3">
            {country.name}
          </h2>
          <div className="flex justify-between">
            <div className="">
              <p className="font-semibold">
                Native Name:{" "}
                <span className="font-light">{country.native}</span>
              </p>

              <p className="font-semibold">
                Population:{" "}
                <span className="font-light">{country.population}</span>
              </p>

              <p className="font-semibold">
                Region: <span className="font-light">{country.region}</span>
              </p>

              <p className="font-semibold">
                Sub Region:{" "}
                <span className="font-light">{country.subregion}</span>
              </p>

              <p className="font-semibold">
                Capital: <span className="font-light">{country.capital}</span>
              </p>
            </div>

            <div className="">
              <p className="font-semibold">
                Top Level Domain:{" "}
                <span className="font-light">{country.tld}</span>
              </p>

              <p className="font-semibold">
                Currencies:{" "}
                <span className="font-light">{country.currencies}</span>
              </p>

              <p className="font-semibold">
                Languages:{" "}
                <span className="font-light">{country.languages}</span>
              </p>
            </div>
          </div>
          <footer>
            <h3 className="text-md font-semibold">Border Countries:</h3>
            <div className="flex justify-center flex-wrap gap-3 my-4">
              {country.borders}
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
