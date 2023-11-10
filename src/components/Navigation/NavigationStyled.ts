import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.dark};
    text-transform: uppercase;
    padding: 10px;
    display: inline-block;

    &-bar__home {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.dark};
      font-weight: bold;
      font-size: 14px;
      text-decoration: underline overline ${({ theme }) => theme.colors.light};
      border-style: double;
      border-width: thick;
    }
    &-bar__add-movie {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.dark};
      font-weight: bold;
      font-size: 14px;
      text-decoration: underline overline ${({ theme }) => theme.colors.light};
      border-style: double;
      border-width: thick;
    }
  }

  .active {
    text-decoration: underline overline ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default NavigationStyled;
