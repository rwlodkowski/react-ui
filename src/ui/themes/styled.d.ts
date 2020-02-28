import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    defaults: {
      fontFamily: string;
      backgroundColor: string;
      transition: string;
      gap: string;
    };
    breakpoints: any[];
    icon?: {
      size: string;
    };
  }
}
