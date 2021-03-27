import styled from 'styled-components';
import { BACKGROUND_GREY, DARK_GREY } from '../../utils/colors';

export const AppWrap = styled.div`
  position: relative;
  background-color: ${BACKGROUND_GREY};
  color: ${DARK_GREY};
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
`;

export const PageWrap = styled.div`
  font-family: inherit;
  font-size: inherit;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: 200px;
  width: 200px;
`;
