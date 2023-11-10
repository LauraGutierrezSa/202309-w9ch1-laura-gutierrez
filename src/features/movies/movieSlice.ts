import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieStructure, MoviesStateStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({ ...currentState, movies: action.payload }),
    toggleWatched: (
      currentState,
      action: PayloadAction<number>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: currentState.movies.map((movie) => ({
        ...movie,
        isWatched:
          movie.id === action.payload ? !movie.isWatched : movie.isWatched,
      })),
    }),
    addMovie: (currentState, action: PayloadAction<MovieStructure>) => ({
      ...currentState,
      addMovie: currentState.movies.splice(
        currentState.movies.length - 1,
        0,
        action.payload,
      ),
    }),
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatched: toggleWatchedActionCreator,
  addMovie: addMovieActionCreator,
} = moviesSlice.actions;

export const movieReducer = moviesSlice.reducer;
