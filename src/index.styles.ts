import { createGlobalStyle } from 'styled-components';
import Colors from './utils/theme';

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${Colors.white};
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    margin: 0;
    padding: 0;
    position: relative;
  }
`;
