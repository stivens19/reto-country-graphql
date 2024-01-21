import { createContext } from "react";
import { TypeUiContext } from "./types/type";

export const UiContext=createContext<TypeUiContext | null>(null);