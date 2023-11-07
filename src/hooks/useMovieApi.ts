import { useCallback } from "react";
import { Movies } from "../features/movies/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useMoviesApi = () => {
  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/films`);
    const movies = (await response.json()) as Movies[];

    return movies;
  }, []);

  return { getMovies };
};

export default useMoviesApi;
