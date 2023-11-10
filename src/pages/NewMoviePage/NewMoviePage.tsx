import MovieForm from "../../components/movieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";

const NewMoviePage = () => {
  return (
    <NewMoviePageStyled>
      <h2 className="form-title">Añade una película:</h2>
      <MovieForm />
    </NewMoviePageStyled>
  );
};

export default NewMoviePage;
