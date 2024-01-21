import { useQuery } from "@apollo/client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import {
  COUNTRIES_QUERY,
  COUNTRIES_SEARCH_QUERY,
} from "../../graphql/getCountries.graphql";
import { CountryContext } from "../../context/countries/CountryContext";
import { setImageCountries } from "../../helpers/getCountryImage";
import { capitalizedWord } from "../../helpers/capitalizedWord";
import FloatBoxSearch from "./FloatBoxSearch";
import { UiContext } from "../../context/ui/UiContext";
import { GET_COUNTRIES, SET_ACTIVE_FLOAT, SET_LOADING } from "../../types";

export const Searchbar = (): React.ReactNode => {
  const [name, setSearch] = useState<string>();
  const context = useContext(CountryContext);
  const contextui = useContext(UiContext);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearch(e.target.value);
  const { data,loading } = useQuery(
    name?.length == 0 ? COUNTRIES_QUERY : COUNTRIES_SEARCH_QUERY,
    name?.length == 0
      ? {}
      : {
          variables: { name: capitalizedWord(name as string) },
          skip: !name,
        }
  );

  const handleInputFocus = () => {
    contextui?.dispatch({
      type: SET_ACTIVE_FLOAT,
      payload: true,
    });
  };

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
  }, [name, data]);
  useEffect(() => {
    contextui?.dispatch({
      type: SET_LOADING,
      payload: loading,
    });
  }, [loading])
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl md:rounded-full border py-2 px-3 md:px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 pl-2 md:pr-2 mb-2 md:mb-0">
          <p className="text-gray-400 text-lg">País:</p>
          <input
            className="focus:outline-none active:outline-none focus:border-b-[.5px] focus:border-b-cyan-700 w-full md:w-2/5 pr-1 py-1"
            type="text"
            placeholder="Escriba el país que desea ver"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="pr-3 md:pr-5">
          <button className="bg-blue-600 px-3 text-white rounded-full flex items-center text-xl py-1 hover:bg-blue-500">
            <IoSearch className="md:mr-2" />
            <span>Buscar</span>
          </button>
        </div>
      </div>
      <FloatBoxSearch />
    </div>
  );
};
