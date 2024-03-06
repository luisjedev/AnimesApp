//https://api.jikan.moe/v4/anime?q=one%piece&order_by=score

import { AnimeApiResponse } from "../interfaces";
import { API_URL } from "./constants";

export async function getAnimeByName(name: string = "one%piece") {
  try {
    const res = await fetch(
      `${API_URL}/anime?q=${name}&order_by=score&sort=desc`,
    );
    if (!res.ok) {
      throw new Error("Error en la llamada");
    }
    const data = await res.json();
    return data as AnimeApiResponse;
  } catch (e) {
    console.log(e);
  }
}
