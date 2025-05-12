import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header bg-pink-600 flex flex-col items-center py-2">
      <h1 className="text-white text-3xl">Checkpoint 3 : frontend</h1>
      <Link to="/" className="text-white">Countries</Link>
    </header>
  );
}
