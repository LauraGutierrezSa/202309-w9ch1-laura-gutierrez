import { MovieStructure } from "../../features/movies/types";
import { useAppSelector } from "../../store/hooks";

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
            <h3>{movies.title}</h3>
            <span>{movies.year}</span>
            <img
              src={movies.image}
              alt={movies.title}
              width="300"
              height="500"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
