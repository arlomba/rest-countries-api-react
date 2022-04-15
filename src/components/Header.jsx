import { Link } from "react-router-dom";

export default function Header() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-white shadow dark:bg-blue-700">
      <nav className="container mx-auto flex justify-between items-center px-3 py-4">
        <Link to="/">
          <h1 className="text-xl font-extrabold desktop:text-2xl">
            Where in the world?
          </h1>
        </Link>

        <button className="font-semibold" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </nav>
    </header>
  );
}
