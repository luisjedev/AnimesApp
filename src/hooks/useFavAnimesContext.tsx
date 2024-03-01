import { useContext } from "react";
import { FavAnimesContext } from "../contexts/fav-animes-context";

export function useFavAnimesContext() {
  return useContext(FavAnimesContext);
}
