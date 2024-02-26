import { useContext } from "react";
import { AnimesContext } from "./animes-context";

//custom hook para utilizar el contexto
export function useAnimesContext() {
  return useContext(AnimesContext);
}
