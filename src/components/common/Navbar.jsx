import { Link } from "react-router";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-lime-400 px-2 sm:px-4">
      <div className="text-base font-medium text-orange-600 sm:text-xl">
        eQurban
      </div>
      <nav className="space-x-2 text-xs *:inline-block *:rounded-full *:bg-white *:px-1.5 *:py-0.5 *:transition-all *:duration-700 *:ease-in-out *:hover:scale-105 *:hover:bg-lime-300 sm:space-x-4 sm:text-sm *:sm:px-2 *:sm:py-1">
        <Link to="/">Home</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
