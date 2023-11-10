import MovieFormStyled from "./MovieFormStyled";

const Form = () => {
  return (
    <MovieFormStyled className="form">
      <label className="form__label" htmlFor="name">
        Name: <input type="text" className="form__input" id="name" />
      </label>
      <label className="form__label" htmlFor="year">
        Year: <input type="text" className="form__input" id="year" />
      </label>
      <label className="form__label" htmlFor="imageUrl">
        Image Url: <input type="url" className="form__input" id="imageUrl" />
      </label>
      <label className="form__label" htmlFor="hasBeenSeeen">
        Have you seen this movie? <input type="checkbox" />
      </label>
    </MovieFormStyled>
  );
};

export default Form;
