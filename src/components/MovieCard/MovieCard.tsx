import { MovieStructure } from "../../features/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProps {
  movie: MovieStructure;
  id: string;
}

const MovieCard = ({ movie }: MovieCardProps): React.ReactElement => {
  return (
    <MovieCardStyled>
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
        <span className="card-year__year">Year: {movie.year}</span>
      </div>
      <div>
        <input
          type="checkbox"
          id={""}
          value="watched_checkbox"
          className="checkbox"
        />
        <label htmlFor="checkbox" className="checkbox">
          WATCHED
        </label>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
