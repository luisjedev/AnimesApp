import { Pagination } from "./Pagination";
import { Anime } from "./anime";

export type AnimeApiResponse = {
  data: Anime[];
  pagination: Pagination;
};
