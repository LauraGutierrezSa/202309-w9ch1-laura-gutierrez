import { NavLink } from "react-router-dom";
import MovieForm from "../../components/movieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";

const NewMoviePage = () => {
  return (
    <NewMoviePageStyled>
      <header>
        <nav className="container-navigation-bar">
          <NavLink to="/films">
            <span className="navigation-bar__home">Página principal</span>
          </NavLink>
          <NavLink to="/add-movie">
            <span className="navigation-bar__add-movie">Añade película</span>
          </NavLink>
        </nav>
      </header>
      <h2 className="form-title">Añade una película:</h2>
      <MovieForm />
    </NewMoviePageStyled>
  );
};

export default NewMoviePage;
