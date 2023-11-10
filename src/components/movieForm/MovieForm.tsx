import { Link } from "react-router-dom";
import MovieFormStyled from "./MovieFormStyled";
import Button from "../Button/Button";

const Form = () => {
  return (
    <MovieFormStyled className="form">
      <label className="form__label" htmlFor="name">
        Título: <input type="text" className="form__input" id="name" />
      </label>
      <label className="form__label" htmlFor="year">
        Año: <input type="text" className="form__input" id="year" />
      </label>
      <label className="form__label" htmlFor="imageUrl">
        Imagen Url: <input type="url" className="form__input" id="imageUrl" />
      </label>
      <label className="form__label" htmlFor="hasBeenSeeen">
        ¿Has visto esta película? <input type="checkbox" />
      </label>
      <Button type={"submit"} text={"Añade nueva película"} />
      <Link className="link" to="/films">
        Página principal
      </Link>
    </MovieFormStyled>
  );
};

export default Form;
