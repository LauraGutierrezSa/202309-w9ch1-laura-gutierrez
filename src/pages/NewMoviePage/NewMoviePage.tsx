import MovieForm from "../../components/movieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";

const NewMoviePage = () => {
  return (
    <NewMoviePageStyled>
      <h2 className="form-title">Add a movie of your choice:</h2>
      <MovieForm />
    </NewMoviePageStyled>
  );
};

export default NewMoviePage;
