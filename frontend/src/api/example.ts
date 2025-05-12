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


