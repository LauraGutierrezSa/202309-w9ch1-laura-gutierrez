import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 6px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
  gap: 15px;
  .card {
    height: auto;

    &-image {
      object-fit: cover;
      border: 5px solid black;
      border-radius: 22px;
    }
    &-title__name {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      text-align: center;
      padding: 5px;
    }
    &-year {
      display: flex;
      justify-content: center;
      padding: 5px;
      margin: 0;
      padding: 15px;
    }
    &-checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      margin: 0;
      width: 300px;
      height: 50px;
    }
    &__watchedMessage {
      accent-color: ${({ theme }) => theme.colors.accent};
      padding-right: 5px;
      border-style: dotted;
      border-color: ${({ theme }) => theme.colors.accent};
      margin: 0;
      color: ${({ theme }) => theme.colors.main};
      font-size: 1.6rem;
    }
  }
  @media (max-width: 362px) {
    width: 315px;
  }
`;

export default MovieCardStyled;
