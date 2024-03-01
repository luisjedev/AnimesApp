import { useContext } from "react";
import { AnimesContext } from "../contexts/animes-context";

export function useFavAnimesContext() {
  return useContext(AnimesContext);
}
