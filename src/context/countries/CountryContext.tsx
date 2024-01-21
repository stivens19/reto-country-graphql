import { createContext } from "react";
import { TypeCountry } from "./types/type";

export const CountryContext=createContext<TypeCountry | null>(null);