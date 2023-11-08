import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      accent: string;
      light: string;
      dark: string;
    };
  }
}
