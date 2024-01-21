import { SET_ACTIVE_FLOAT, SET_LOADING } from "../../types";
import { IActionUi, StateUi } from "./types/type";

export const uiReducer = (state: StateUi, action: IActionUi): StateUi => {
  switch (action.type) {
    case SET_ACTIVE_FLOAT:
      return {
        ...state,
        activeFloat:action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading:action.payload
      };
    default:
      return state;
  }
};
