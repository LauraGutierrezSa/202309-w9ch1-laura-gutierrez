import { filmsMock } from "../../mocks/filmsMock";
import {
  addMovieActionCreator,
  movieReducer,
  toggleWatchedActionCreator,
} from "./movieSlice";
import { MovieStructure, MoviesStateStructure } from "./types";

describe("Given a movieReducer reducer", () => {
  describe("When it receives the movie The Lost Boys marked as 'Not Watched'", () => {
    test("Then it should return the movie The Lost Boys marked as 'Not Watched'", () => {
      const currentMovieState: MoviesStateStructure = {
        movies: filmsMock,
      };

      const idToToggle = currentMovieState.movies[0].id;
      const expectedIsWatchedToggled = !currentMovieState.movies[0].isWatched;

      const newFilmsState = movieReducer(
        currentMovieState,
        toggleWatchedActionCreator(idToToggle),
      );

      const isWatchedToggled = newFilmsState.movies[0].isWatched;

      expect(expectedIsWatchedToggled).toStrictEqual(isWatchedToggled);
    });
  });

  describe("When it recieves the action addMovies with a new Movie", () => {
    test("Then it should return a new state with the new movie added to Movies.", () => {
      const newMovie: MovieStructure = {
        id: 26,
        image: "",
        isWatched: true,
        name: "kjsbf",
        year: 1932,
      };

      const currentState: MoviesStateStructure = {
        movies: filmsMock,
      };

      const addMovieAction = addMovieActionCreator(newMovie);

      const newMovieState = movieReducer(currentState, addMovieAction);

      const isNewFilmAdded = newMovieState.movies.find(
        (movie) => movie.id === newMovie.id,
      );

      expect(isNewFilmAdded).toBeDefined();
      expect(isNewFilmAdded?.name).toBe(newMovie.name);
    });
  });
});
