import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  query GetCountries {
    countries{
      code
      name
      continent {
        code
        name
      }
      emoji
    	capital
    	languages{
        name
      }	
    	currencies
    	subdivisions{
        name
      }
    }
  }
`;

export const COUNTRIES_SEARCH_QUERY = gql`
  query GetCountriesByName($name: String!) {
    countries(filter: { name: { regex: $name } }) {
      code
      name
      continent {
        code
        name
      }
      emoji
    	capital
    	languages{
        name
      }	
    	currencies
    	subdivisions{
        name
      }
    }
  }
`;

export const COUNTRIES_FILTER_BY_CODES=gql`
  query GetCountriesByContinents($continentCodes: [String!]!){
    countries(filter: { continent: { in: $continentCodes } }) {
      code
      name
      continent {
        code
        name
      }
      emoji
    	capital
    	languages{
        name
      }	
    	currencies
    	subdivisions{
        name
      }
    }
  }
`

export const COUNTRY_BY_CODE=gql`
  query GetCountryByCode($countryCode: ID!) {
    country(code: $countryCode) {
      code
      name
      continent {
        code
        name
      }
      emoji
    	capital
    	languages{
        name
      }	
    	currencies
    	subdivisions{
        code
        name
      }
    }
  }
`