import { Link } from "react-router-dom";
import { CountryProps } from "./Coutries";

// src/components/TestTailwind.tsx
const CountryCard = ({ name, code }: CountryProps) => {
  return (
   
      <Link to={`country/${code}`} className="p-6 bg-blue-100 text-blue-800 rounded-xl shadow-lg flex flex-col items-center">
        <p className="text-lg font-semibold">{name}</p>
        <img
          src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
          alt={`Drapeau de ${name}`}
          className="mx-auto mb-2 h-6"
        />
      </Link>
    
  );
}

export default CountryCard