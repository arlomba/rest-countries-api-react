import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentCountry = countries.find((c) => c.alpha3Code === id);
    setCountry(currentCountry);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="flex flex-col my-6 gap-6">
      <button
        onClick={() => navigate(-1)}
        className="shadow rounded py-2 px-8 w-fit flex items-center bg-white dark:bg-blue-700 dark:text-white"
      >
        <span className="font-extrabold text-xl">🡐</span>
        <p className="ml-2">Back</p>
      </button>

      <article className="flex flex-col justify-between items-center container mx-auto my-4 desktop:flex-row">
        <header className="w-full desktop:w-6/12">
          <img className="w-full" src={country.flag} alt={country.name} />
        </header>

        <div className="flex flex-col p-0 w-full desktop:p-4 desktop:w-5/12">
          <h2 className="text-lg font-extrabold desktop:text-2xl my-3">
            {country.name}
          </h2>
          <div className="flex flex-col justify-between gap-6 desktop:flex-row">
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

          <footer className="my-6">
            <h3 className="text-md font-semibold">Border Countries:</h3>
            <div className="flex flex-wrap gap-3 my-2">
              {country.borders ? (
                country.borders.map((border) => (
                  <Link
                    key={border}
                    to={`/country/${border}`}
                    className="rounded shadow py-2 px-4 dark:border-0 dark:bg-blue-700"
                  >
                    {countries.find((c) => c.alpha3Code === border).name}
                  </Link>
                ))
              ) : (
                <p className="text-3xl">¯\_(ツ)_/¯</p>
              )}
            </div>
          </footer>
        </div>
      </article>
    </section>
  );
}
