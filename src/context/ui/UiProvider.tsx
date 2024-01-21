import { useReducer } from "react";
import { UiContext } from "./UiContext";
import { StateUi } from "./types/type";
import { uiReducer } from "./uiReducer";



interface Props {
  children: React.ReactNode;
}

const UiProvider = ({ children }: Props) => {
  const initialState:StateUi = {
    activeFloat:false,
    loading:false
  };
  const [data, dispatch] = useReducer(uiReducer,initialState);
  return (
    <UiContext.Provider
      value={{
        dispatch,
        activeFloat:data.activeFloat,
        loading:data.loading
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
