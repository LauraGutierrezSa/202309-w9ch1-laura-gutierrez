import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../store";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two elements: 'Página principal' and 'Añade película'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <Navigation />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>,
      );

      const homepageElement = screen.getByText("Página principal");
      const addMovieElement = screen.getByText("Añade película");

      expect(homepageElement).toBeInTheDocument();
      expect(addMovieElement).toBeInTheDocument();
    });
  });
});
