import axios from "axios";
import { ICountry } from "../context/countries/types/type";

export const getCountryImage = async (
  country: string
): Promise<string | null> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_IMAGES}&q=${country}&image_type=photo`
    );
    const imageUrl = data.hits[0]?.webformatURL;
    return imageUrl;
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
    return null;
  }
};
export const setImageCountries = async (countries:ICountry[]) => {
  try {
    const countriesImages = await Promise.all(
      countries.map(async (country):Promise<ICountry> => {
        const imageUrl = await getCountryImage(country.name);
        return {
          ...country,
          imageUrl:imageUrl!,
        };
      })
    );
    return countriesImages;
  } catch (error) {
    console.error("Ocurrio un error al obtener las imagenes", error);
    return [];
  }
};
