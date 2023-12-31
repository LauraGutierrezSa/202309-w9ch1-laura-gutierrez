import { ThemeProvider } from "styled-components";
import { filmMock } from "../../mocks/filmMock";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "./MovieCard";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a MovieCard component", () => {
  describe("When it recieves the movie The Lost Boys", () => {
    test("Then it should show the movie title 'The Lost Boys'", () => {
      const movieMock = filmMock;

      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <MovieCard movie={movieMock} id={""} />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>,
      );

      const movieTitle = screen.getByRole("heading", {
        name: movieMock.name,
      });

      expect(movieTitle).toBeInTheDocument();
    });
  });
});
