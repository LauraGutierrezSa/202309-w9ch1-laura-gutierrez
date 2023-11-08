import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

body,
h1,
h2 {
  margin: 0;
}

body {
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.typography.fontColor};
  background-color: ${({ theme }) => theme.backgroundColor.main};
}
`;

export default GlobalStyle;
