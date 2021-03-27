import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_GREY } from './utils/colors';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${BACKGROUND_GREY};
  }
  body,
  #root {
    min-height: 100%;
    height: 100%;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export default {
  GlobalStyles,
};
