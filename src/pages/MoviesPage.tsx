import { useDispatch } from "react-redux";
import useMoviesApi from "../hooks/useMovieApi";
import { loadMoviesActionCreator } from "../features/movies/movieSlice";
import { useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import MoviesPageStyled from "./MoviesPageStyled";

const MoviesPage = (): React.ReactElement => {
  const { getMovies } = useMoviesApi();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentMovies = await getMovies();
      dispatch(loadMoviesActionCreator(currentMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <MoviesPageStyled>
      <header className="films__container">
        <h1 className="films__title">Mis peliculas favoritas</h1>
      </header>
      <MovieList />
    </MoviesPageStyled>
  );
};

export default MoviesPage;
