// put your GraphQL requests here (in one file or different ones)
import { gql } from "@apollo/client";

//get all countries
export const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;


//get country by code
export const GET_COUNTRY = gql`
  query Country($code: String!) {
  country(code: $code) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
`;

//all continent
export const GET_ALL_CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;


//add Country
export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
`;

