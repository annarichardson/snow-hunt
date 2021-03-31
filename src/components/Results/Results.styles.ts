import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../utils/styles';

export const ResortCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 900px;
  padding: 100px 32px;

  ${media.tablet} {
    padding: 60px 32px;
  }

  ${media.phone} {
    max-width: 400px;
    padding: 20px 15px;
  }
`;

export const ResortCardWrap = styled.div`
  padding: 10px;
`;

export const SubText = styled.p`
  margin: 20px auto;
  max-width: 600px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  text-align: center;
`;

export const TitleText = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 40px;
  margin: 0 auto;
  max-width: 600px;
  padding-top: 40px;
  text-align: center;
  text-transform: capitalize;

  ${media.phone} {
    font-size: 35px;
  }
`;

export const Wrap = styled(motion.div)`
  margin: 0 auto;
  max-width: 900px;
  padding: 100px 0;

  ${media.tablet} {
    padding: 60px 25px;
  }

  ${media.phone} {
    max-width: 400px;
    padding: 20px 15px;
  }
`;
