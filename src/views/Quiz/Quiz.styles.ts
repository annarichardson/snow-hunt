import styled from 'styled-components';
import { motion } from 'framer-motion';
import MountainImage from '../../assets/images/mountain.jpg';
import CloudImage from '../../assets/images/cloud.png';
import { media } from '../../utils/styles';
import { NAV_BAR_HEIGHT } from '../../components/NavBar/NavBar.styles';

export const Clouds = styled(motion.div)`
  background-image: url(${CloudImage});
  background-size:cover;
  background-position: top center;
  background-repeat: repeat-x;
  background-size: 100% 80%;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -50px;
  height: 250px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Header = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  width: 100%;
  max-width: 1800px;
  overflow: hidden;
  background-image: url(${MountainImage});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  margin: 0 auto;
  max-height: 900px;
  position: relative;
`;

export const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 80px;
  text-align: center;
  text-transform: capitalize;
  line-height: 80px;
  margin: 0;
  padding-bottom: 70px;

  ${media.tablet} {
    font-size: 60px;
    line-height: 60px;
  }

  ${media.phone} {
    font-size: 40px;
    line-height: 40px;
  }
`;
