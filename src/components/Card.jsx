export default function Card({ country }) {
  return (
    <article className="flex flex-col bg-white shadow rounded-lg cursor-pointer dark:bg-blue-700">
      <header className="w-full h-40">
        <img
          className="rounded-t-lg w-full max-h-full object-cover"
          src={country.flag}
          alt={country.name}
        />
      </header>

      <div className="p-3">
        <h2 className="text-lg font-extrabold desktop:text-xl">
          {country.name}
        </h2>

        <p className="font-semibold">
          Population: <span className="font-light">{country.population}</span>
        </p>

        <p className="font-semibold">
          Region: <span className="font-light">{country.region}</span>
        </p>

        <p className="font-semibold">
          Capital: <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </article>
  );
}
