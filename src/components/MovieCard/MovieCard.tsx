import { useCallback } from "react";
import { MovieStructure } from "../../features/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchedActionCreator } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import useMovieApi from "../../hooks/useMovieApi";

interface MovieCardProps {
  movie: MovieStructure;
  id: string;
}

const MovieCard = ({ movie }: MovieCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { setWatchStatus } = useMovieApi();

  const changeWatchStatus = useCallback(() => {
    setWatchStatus(movie.id, movie.isWatched);
    dispatch(toggleWatchedActionCreator(movie.id));
  }, [dispatch, movie.id, movie.isWatched, setWatchStatus]);

  return (
    <MovieCardStyled className="card">
      <div className="card-title">
        <h2 className="card-title__name">{movie.name}</h2>
      </div>
      <img
        className="card-image"
        src={movie.image}
        alt={movie.name}
        width="300"
        height="500"
      />
      <div className="card-year">
        <span className="card-year__year">
          Año:{""}
          {movie.year}
        </span>
      </div>
      <div className="card-checkbox">
        <label htmlFor="checkbox" className="checkbox-label">
          ¿Has visto esta película?:{" "}
          <input
            type="checkbox"
            value="watched_checkbox"
            className="card-checkbox"
            checked={movie.isWatched}
            onChange={changeWatchStatus}
          />
        </label>
        <span className="card__watchedMessage">
          {movie.isWatched ? "Vista" : "No vista"}
        </span>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
