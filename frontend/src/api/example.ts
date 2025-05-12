// put your GraphQL requests here (in one file or different ones)
import { gql } from "@apollo/client";


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





