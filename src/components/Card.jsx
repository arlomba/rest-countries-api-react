export default function Card() {
  return (
    <article className="flex flex-col bg-white shadow rounded-lg cursor-pointer dark:bg-blue-700">
      <header className="w-full h-40">
        <img className="rounded-t-lg w-full max-h-full object-cover" />
      </header>

      <div className="p-3">
        <h2 className="text-lg font-extrabold desktop:text-xl"></h2>

        <p className="font-semibold">
          Population:
          <span className="font-light"></span>
        </p>

        <p className="font-semibold">
          Region:
          <span className="font-light"></span>
        </p>

        <p className="font-semibold">
          Capital:
          <span className="font-light"></span>
        </p>
      </div>
    </article>
  );
}
