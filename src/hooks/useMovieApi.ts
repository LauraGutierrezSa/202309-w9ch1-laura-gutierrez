import { useCallback } from "react";
import { MovieStructure } from "../features/movies/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useMoviesApi = () => {
  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/films`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, []);

  return { getMovies };
};

export default useMoviesApi;
