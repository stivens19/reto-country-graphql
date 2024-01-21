import React, { useContext } from "react";
import CardCountry from "./CardCountry";
import CardDescriptionCountry from "./CardDescriptionCountry";
import { CountryContext } from "../../context/countries/CountryContext";
import { UiContext } from "../../context/ui/UiContext";
import Loader from "./loader/Loader";
import { SET_ACTIVE_FLOAT } from "../../types";

export const GridCountries = (): React.ReactElement => {
  const context = useContext(CountryContext);
  const contextui = useContext(UiContext);
  const handleClickUi = () => {
    contextui?.dispatch({
      type: SET_ACTIVE_FLOAT,
      payload: false,
    });
  };
  return (
    <div
      className="flex w-[90%] self-center justify-center items-start mt-5"
      onClick={contextui?.activeFloat ? handleClickUi : undefined}
    >
      {contextui?.loading && (
        <Loader />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 w-full h-[50%] justify-center">
        {!contextui?.loading &&
          context?.countries.map((country) => (
            <CardCountry key={country.code} {...country} />
          ))}
      </div>
      {context?.countryActive && <CardDescriptionCountry />}
    </div>
  );
};
