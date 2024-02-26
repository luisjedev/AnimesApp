import { Anime } from "../interfaces/anime";
import { API_URL } from "./constants";

export async function getTopAnimes() {
  try {
    const res = await fetch(`${API_URL}/top/anime`);
    if (!res.ok) {
      throw new Error("Error en la llamada");
    }
    const data = await res.json();
    return data.data as Anime[];
  } catch (e) {
    console.log(e);
  }
}
