import { GET_COUNTRIES, SET_COUNTRY_ACTIVE } from "../../types";
import { IAction, State } from "./types/type";

export const countryReducer = (state: State, action: IAction): State => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: Array.isArray(action.payload)
          ? [...action.payload]
          : [...state.countries],
      };
    case SET_COUNTRY_ACTIVE:
      return {
        ...state,
        countryActive:Array.isArray(action.payload)
        ? action.payload[0] 
        : action.payload, 
      };
    default:
      return state;
  }
};
