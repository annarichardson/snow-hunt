import styled from 'styled-components';
import MountainImage from '../../assets/images/mountain.jpg';
import { media } from '../../utils/styles';
import { NAV_BAR_HEIGHT } from '../../components/NavBar/NavBar.styles';

export const Wrap = styled.div`
  align-items: center;
  display: flex;
  background-position:center;
  background-repeat:no-repeat;
  background-image: url(${MountainImage});
  background-size:cover;
  flex-direction: column;
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  justify-content: center;
  margin: 0 auto;
  max-height: 900px;
  max-width: 1800px;
  overflow: hidden;
  width: 100%;
`;

export const Text = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 80px;
  line-height: 80px;
  margin: auto;
  padding-bottom: 70px;
  text-align: center;
  text-transform: capitalize;

  ${media.tablet} {
    font-size: 60px;
    line-height: 60px;
  }

  ${media.phone} {
    font-size: 40px;
    line-height: 40px;
  }
`;
