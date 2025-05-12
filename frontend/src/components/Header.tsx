import { Link } from "react-router-dom";
import { TestTailwind } from "./TestTailwind";

export function Header() {
  return (
    <header className="header">
      <h1 className="text-red-500 text-3xl">Checkpoint 3 : frontend</h1>
      <TestTailwind />
      <Link to="/">Countries</Link>
    </header>
  );
}
