import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 6px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
  width: 350px;
  gap: 12px;
  .card {
    &-image {
      object-fit: cover;
      border: 5px solid black;
      border-radius: 22px;
    }
    &-name {
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
    }
  }
  @media (max-width: 362px) {
    width: 315px;
  }
`;

export default MovieCardStyled;
