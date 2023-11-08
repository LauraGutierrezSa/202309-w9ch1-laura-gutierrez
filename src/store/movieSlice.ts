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
    ): MoviesStateStructure => ({ ...currentState, movies: action.payload }),

    toggleWatched: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({ ...currentState, movies: action.payload }),
  },
});

export const { loadMovies: loadMoviesActionCreator } = moviesSlice.actions;

export const movieReducer = moviesSlice.reducer;
