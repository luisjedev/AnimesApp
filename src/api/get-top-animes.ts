import { AnimeApiResponse } from "../interfaces";
import { API_URL } from "./constants";
export async function getTopAnimes(page: number = 1) {
  try {
    const res = await fetch(`${API_URL}/top/anime?page=${page}`);
    if (!res.ok) {
      throw new Error("Error en la llamada");
    }
    const data = await res.json();
    return data as AnimeApiResponse;
  } catch (e) {
    console.log(e);
  }
}
