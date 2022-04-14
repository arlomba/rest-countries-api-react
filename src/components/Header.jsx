export default function Header() {
  return (
    <header className="bg-white shadow dark:bg-blue-700">
      <nav className="container mx-auto flex justify-between items-center px-3 py-4">
        <h1 className="text-xl font-extrabold desktop:text-2xl">
          Where in the world?
        </h1>

        <button className="font-semibold">Toggle Theme</button>
      </nav>
    </header>
  );
}
