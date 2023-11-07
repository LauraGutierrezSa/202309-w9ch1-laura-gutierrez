import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieStructure } from "../features/movies/types";
import { MoviesStateStructure } from "../features/movies/types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => {
      return { ...currentState, movies: action.payload };
    },
  },
});

export default moviesSlice;
