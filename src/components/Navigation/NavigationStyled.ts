import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
    padding: 10px;

    &-bar__home {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: underline overline ${({ theme }) => theme.colors.light};
      border-style: double;
    }
    &-bar__add-movie {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: underline overline ${({ theme }) => theme.colors.light};
      border-style: double;
    }
  }

  .active {
    text-decoration: underline overline ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default NavigationStyled;
