import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      grey: string;
      lightGrey: string;
      darkGrey: string;
      success: string;
      error: string;
      background: string;
    };
    fontSizes: {
      default: string;
      large: string;
      small: string;
      tiny: string;
    };
    spacing: {
      default: string;
      vertical: string;
      horizontal: string;
      large: string;
    };
    transition: {
      defaut: string;
    };
  }
}
