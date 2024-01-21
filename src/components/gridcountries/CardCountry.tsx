import { Twemoji } from "react-emoji-render";
import { ICountry } from "../../context/countries/types/type";
import { useContext } from "react";
import { CountryContext } from "../../context/countries/CountryContext";
import { SET_COUNTRY_ACTIVE } from "../../types";

const CardCountry = (props: ICountry): React.ReactNode => {
  const { continent, emoji, name,imageUrl }=props;
  const context=useContext(CountryContext)
  const handleClick=()=>{
    context?.dispatch({
      type:SET_COUNTRY_ACTIVE,
      payload:props
    })
  }
  return (
    <div className="bg-white shadow-md overflow-hidden rounded-3xl">
      <img
        className="block h-[150px] w-full object-cover"
        src={imageUrl}
        alt={name}
      />
      <div onClick={handleClick} className="px-2 flex justify-start items-center py-5 text-blue-500 hover:bg-blue-600 hover:text-white cursor-pointer">
        <div className="mr-2">
          <Twemoji className="text-3xl" text={emoji} />
        </div>
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-gray-300">{continent.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCountry;
