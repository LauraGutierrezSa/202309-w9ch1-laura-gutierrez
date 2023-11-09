import { useCallback } from "react";
import { MovieStructure } from "../features/movies/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useMoviesApi = () => {
  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/films`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, []);

  const setWatchStatus = useCallback(
    async (movieId: number, isWatched: boolean): Promise<boolean> => {
      const response = await fetch(`${apiUrl}/films/${movieId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isWatched: !isWatched }),
      });

      if (!response.ok) {
        throw new Error("Error on changing film's watched status");
      }

      return isWatched;
    },
    [],
  );

  return { getMovies, setWatchStatus };
};

export default useMoviesApi;
