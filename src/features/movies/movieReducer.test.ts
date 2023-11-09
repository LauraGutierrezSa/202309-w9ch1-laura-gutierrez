import { filmsMock } from "../../mocks/filmsMock";
import { movieReducer, toggleWatchedActionCreator } from "./movieSlice";
import { MoviesStateStructure } from "./types";

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
});
