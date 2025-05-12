
import { useParams } from 'react-router-dom';
import { GET_COUNTRY } from '../api/example';
import { useQuery } from '@apollo/client';

const CountryDetails = () => {
    const { code } = useParams();

    const { data, loading, error } = useQuery(GET_COUNTRY, {
        variables: { code }
    });

    if (loading) return <p>Chargement ...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    console.log("country", data.country);
    const infos = data?.country

    return (


        <div className="p-6 bg-blue-100 text-blue-800 rounded-xl shadow-lg flex flex-col items-center">
            <img
                src={`https://flagcdn.com/w80/${code?.toLowerCase()}.png`}
                alt={`Drapeau de ${infos.name}`}
                className="mx-auto mb-2 h-6"
            />
            <p className="text-lg font-semibold">Name : {infos.name} ({ infos.code})</p>
            <p className="text-lg font-semibold">Continent : {infos.continent.name}</p>
        </div>
    )
}

export default CountryDetails