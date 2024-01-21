import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { CountryContext } from "../../context/countries/CountryContext";
import { Twemoji } from "react-emoji-render";
import { SET_COUNTRY_ACTIVE } from "../../types";

const CardDescriptionCountry = () => {
  const context = useContext(CountryContext);
  const countryActive = context?.countryActive;
  const handleClose = () => {
    context?.dispatch({
      type: SET_COUNTRY_ACTIVE,
      payload: null,
    });
  };
  return (
    <div className="fixed md:static top-10 right-0 bottom-0 left-0 overflow-auto md:overflow-hidden">
      <div className="bg-white shadow sm:max-w-screen md:w-full mx-2 pb-2">
        <div className="flex justify-end p-2">
          <IoIosClose
            onClick={handleClose}
            className="text-gray-400 hover:text-red-300 cursor-pointer"
            size={27}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-[85%]">
            <img
              className="w-full block m-0 p-0 rounded-xl"
              src={countryActive?.imageUrl}
              alt={countryActive?.name}
            />
            <div className="flex items-center py-5">
              <div className="mr-3">
                <Twemoji
                  className="text-3xl"
                  text={countryActive?.emoji ? countryActive?.emoji : "PE"}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">
                  {countryActive?.name}
                </p>
                <p className="text-gray-300">{countryActive?.continent.name}</p>
              </div>
            </div>
            <ul>
              <li className="mt-1">
                <p className="text-xl text-gray-400">
                  <span className="text-blue-500 mr-2 font-bold">Capital:</span>
                  {countryActive?.capital}
                </p>
              </li>
              <li className="mt-1">
                <p className="text-xl text-gray-400">
                  <span className="text-blue-500 mr-2 font-bold">
                    Language:
                  </span>
                  {countryActive?.languages.map((languge: any) => (
                    <span key={languge}>{languge.name} </span>
                  ))}
                </p>
              </li>
              <li className="mt-1">
                <p className="text-xl text-gray-400">
                  <span className="text-blue-500 mr-2 font-bold">
                    Population:
                  </span>
                  No figura en la API
                </p>
              </li>
              <li className="mt-1">
                <p className="text-xl text-gray-400">
                  <span className="text-blue-500 mr-2 font-bold">
                    Currency:
                  </span>
                  {countryActive?.currencies.map((currency: any) => (
                    <span key={currency}>{currency} </span>
                  ))}
                </p>
              </li>
              <li className="mt-1">
                <p className="text-xl text-gray-400">
                  <span className="text-blue-500 mr-2 font-bold">Region:</span>
                </p>
              </li>
            </ul>
            <div className="bg-white shadow p-2 mt-3">
              <ul>
                {countryActive?.subdivisions.length > 0 ? (
                  countryActive?.subdivisions.map((subdivision: any) => (
                    <li>
                      <p className="text-gray-400" key={subdivision.code}>
                        {subdivision.name}
                      </p>
                    </li>
                  ))
                ) : (
                  <li>
                    <p className="text-red-300">No se enontro registros!!!</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescriptionCountry;
