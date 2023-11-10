import { Link } from "react-router-dom";
import MovieFormStyled from "./MovieFormStyled";
import Button from "../Button/Button";

const Form = () => {
  return (
    <MovieFormStyled>
      <div className="form">
        <label className="form__label" htmlFor="name">
          Título:
        </label>
        <input type="text" className="form__input" id="name" />
      </div>
      <div className="form">
        <label className="form__label" htmlFor="year">
          Año:
        </label>
        <input type="text" className="form__input" id="year" />
      </div>
      <div className="form">
        <label className="form__label" htmlFor="imageUrl">
          Imagen Url:
        </label>
        <input type="url" className="form__input" id="imageUrl" />
      </div>
      <div className="form-checkbox">
        <label className="form__label" htmlFor="hasBeenSeeen">
          ¿Has visto esta película?
        </label>
        <input type="checkbox" className="form__checkbox" />
      </div>
      <Button type={"submit"} text={"Añade nueva película"} />
      <Link className="link" to="/films">
        Página principal
      </Link>
    </MovieFormStyled>
  );
};

export default Form;
