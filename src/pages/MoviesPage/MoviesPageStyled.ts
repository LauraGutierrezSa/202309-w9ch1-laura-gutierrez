import styled from "styled-components";

const MoviesPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.accent};

  .films {
    &__title {
      padding: 20px 20px 20px 20px;
      color: ${({ theme }) => theme.colors.main};
      font-size: 2.5rem;
      text-align: center;
    }
  }
`;
export default MoviesPageStyled;
