
import { CountryContext } from "./CountryContext";
import { State } from "./types/type";
import { useReducer } from "react";
import { countryReducer } from "./countryReducer";


interface Props {
  children: React.ReactNode;
}

const CountryProvider = ({ children }: Props) => {
  const initialState:State = {
    countries: [],
    countryActive:null
  };
  const [countries, dispatch] = useReducer(countryReducer,initialState);
  return (
    <CountryContext.Provider
      value={{
        dispatch,
        countries:countries.countries,
        countryActive:countries.countryActive
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
