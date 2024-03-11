import { Anime } from "../interfaces/anime";
import { API_URL } from "./constants";

export async function getAnimeById(id: string) {
  try {
    const res = await fetch(`${API_URL}/anime/${id}`);
    if (!res.ok) {
      throw new Error("Error en la llamada");
    }
    const data = await res.json();
    return data.data as Anime;
  } catch (error) {
    console.log(error);
  }
}
