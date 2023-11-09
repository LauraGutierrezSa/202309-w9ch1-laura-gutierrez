import { MovieStructure } from "../../features/movies/types";
import { useAppSelector } from "../../store/hooks";
import MovieCard from "../MovieCard/MovieCard";

export interface MovieListProps {
  movieList: MovieStructure[];
}

const MovieList = () => {
  const movies = useAppSelector((state) => state.movies.movies);

  return (
    <div>
      <ul className="movie-list">
        {movies.map((movies) => (
          <li className="film" key={movies.id}>
            <MovieCard movie={movies} id={""} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
