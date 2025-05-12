
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { code } = useParams();
    

    console.log('code',code)

    return (<p>Details</p>)
}

export default CountryDetails