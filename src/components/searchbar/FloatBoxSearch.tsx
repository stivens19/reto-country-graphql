import React, { useContext, useEffect, useState } from "react";
import { Continent, datacontinents } from "../../data/continents";
import { UiContext } from "../../context/ui/UiContext";
import { useQuery } from "@apollo/client";
import {
  COUNTRIES_FILTER_BY_CODES,
  COUNTRIES_QUERY,
} from "../../graphql/getCountries.graphql";
import { setImageCountries } from "../../helpers/getCountryImage";
import { CountryContext } from "../../context/countries/CountryContext";
import { GET_COUNTRIES, SET_LOADING } from "../../types";

const FloatBoxSearch = (): React.ReactElement => {
  const [continents, setContinents] = useState<Continent[]>(datacontinents);
  const [selecteds, setSelecteds] = useState<string[]>([]);
  const context = useContext(CountryContext);
  const contextui = useContext(UiContext);
  const handleSelected = (code: string) => {
    if (selecteds.includes(code)) {
      setSelecteds(selecteds.filter((selectedCode) => selectedCode !== code));
    } else {
      setSelecteds([...selecteds, code]);
    }
  };
  const { data,loading } = useQuery(
    selecteds?.length == 0 ? COUNTRIES_QUERY : COUNTRIES_FILTER_BY_CODES,
    selecteds?.length == 0
      ? {}
      : {
          variables: { continentCodes: selecteds },
          skip: !selecteds,
        }
  );

  useEffect(() => {
    const updatedContinents = continents.map((continent) => ({
      ...continent,
      active: selecteds.includes(continent.code),
    }));
    setContinents(updatedContinents);
  }, [selecteds]);
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
  }, [selecteds, data]);
  useEffect(() => {
    contextui?.dispatch({
      type: SET_LOADING,
      payload: loading,
    });
  }, [loading])
  return (
    <div
      className={`absolute bg-white shadow-md w-full sm:w-3/4 -bottom-96 rounded-2xl px-2 md:px-6 py-4 ${
        !contextui?.activeFloat && "hidden"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-lg mb-2 sm:mb-0">
          Filtrar por continentes
        </p>
        <p
          className="text-blue-500 text-md cursor-pointer"
          onClick={() => setSelecteds([])}
        >
          Limpiar
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-2 gap-1 md:gap-5">
        {continents.map((continent: Continent) => (
          <div
            className={`bg-gray-400 hover:bg-gray-300 py-7 rounded-xl shadow-md hover:shadow-blue-500 cursor-pointer ${
              continent.active && "shadow-blue-500"
            }`}
            key={continent.code}
            onClick={() => handleSelected(continent.code)}
          >
            <p className="font-bold text-center sm:text-md md:text-xl">{continent.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatBoxSearch;
