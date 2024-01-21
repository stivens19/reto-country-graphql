import { useContext, useEffect } from "react";
import { GridCountries, Searchbar } from "../components";
import { CountryContext } from "../context/countries/CountryContext";
import { useQuery } from "@apollo/client";
import { COUNTRIES_QUERY } from "../graphql/getCountries.graphql";
import { setImageCountries } from "../helpers/getCountryImage";
import { UiContext } from "../context/ui/UiContext";
import { GET_COUNTRIES, SET_LOADING } from "../types";


export const HomePage = () => {
  const { data,loading } = useQuery(COUNTRIES_QUERY);
  const context = useContext(CountryContext);
  const contextui = useContext(UiContext);
  useEffect(() => {
    const fetchCountries = async () => {
      if (data && data.countries) {
        const countriesImages = await setImageCountries(data.countries);
        context?.dispatch({
          type: GET_COUNTRIES,
          payload: countriesImages,
        });
      }
    };

    fetchCountries();
  }, [data]);
  useEffect(() => {
    contextui?.dispatch({
      type: SET_LOADING,
      payload: loading,
    });
  }, [loading])
  
  return (
    <>
      <div className="flex flex-col md:items-center justify-center w-full">
        <div className="md:w-7/12 sm:w-full">
          <Searchbar />
        </div>
        <GridCountries />
      </div>
    </>
  );
};
