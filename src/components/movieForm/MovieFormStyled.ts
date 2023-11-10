import styled from "styled-components";

const MovieFormStyled = styled.form`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 5px 10px 10px 0px;
  border-radius: 35px;
  width: 400px;
  padding: 30px;

  .form {
    display: flex;
    flex-direction: column;

    &__label {
      display: inline-block;
    }

    &__checkbox {
      width: 300px;
      height: 50px;
    }
  }

  .form-checkbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
  }

  .link {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: underline overline ${({ theme }) => theme.colors.light};
    border-style: double;
    border-width: thick;
    font-weight: bold;
    font-size: 14px;
  }
`;

export default MovieFormStyled;
