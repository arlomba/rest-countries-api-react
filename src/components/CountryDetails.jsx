export default function CountryDetails() {
  return (
    <section>
      <article className="flex flex-col self-center mx-auto max-w-lg bg-white dark:bg-blue-900">
        <header className="w-full">
          <img className="w-full" />
        </header>

        <div className="flex flex-col p-4">
          <h2 className="text-lg font-extrabold desktop:text-xl mb-3"></h2>
          <div className="flex justify-between">
            <div className="">
              <p className="font-semibold">
                Native Name:
                <span className="font-light"></span>
              </p>

              <p className="font-semibold">
                Population:
                <span className="font-light"></span>
              </p>

              <p className="font-semibold">
                Region:
                <span className="font-light"></span>
              </p>

              <p className="font-semibold">
                Sub Region:
                <span className="font-light"></span>
              </p>

              <p className="font-semibold">
                Capital:
                <span className="font-light"></span>
              </p>
            </div>

            <div className="">
              <p className="font-semibold">
                Top Level Domain:
                <span className="font-light"></span>
              </p>

              <p className="font-semibold">
                Currencies:
                <span className="font-light"></span>
              </p>

              <p className="font-semibold">
                Languages:
                <span className="font-light"></span>
              </p>
            </div>
          </div>
          <footer>
            <h3 className="text-md font-semibold">Border Countries:</h3>
            <div className="flex justify-center flex-wrap gap-3 my-4"></div>
          </footer>
        </div>
      </article>
    </section>
  );
}
