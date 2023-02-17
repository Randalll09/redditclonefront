import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    txtColor: string;
    tabColor: string;
    highlightColor: string;
    mainColor: string;
    red: string;
    blue: string;
    font: string;
    transition: string;
    border: string;
  }
}
