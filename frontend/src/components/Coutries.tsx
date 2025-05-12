import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES } from "../api/example";
import CountryCard from "./CountryCard";

export type CountryProps = {
    name: string;
    emoji?: string;
    code: string;
};

const Countries = () => {
    const { data, loading, error } = useQuery(GET_ALL_COUNTRIES);

    if (loading) return <p>Chargement ...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    console.log("data", data);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">All Countries</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data?.countries.map(({ name, code }: CountryProps) => (
                    <CountryCard key={name} name={name} code={code} />
                ))}
            </div>
        </>
    );
};

export default Countries;
