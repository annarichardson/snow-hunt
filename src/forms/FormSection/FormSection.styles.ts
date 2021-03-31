import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DESKTOP_WIDTH, media } from '../../utils/styles';

export const QuestionText = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 40px;
  margin: 0 auto;
  max-width: 600px;
  padding-top: 40px;
  text-align: center;

  ${media.phone} {
    font-size: 30px;
    max-width: 400px;
  }
`;

export const SubText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;

  ${media.phone} {
    font-size: 15px;
    max-width: 400px;
  }
`;

export const Wrap = styled(motion.div)`
  margin: 0 auto;
  margin-bottom: 100px;
  max-width: ${DESKTOP_WIDTH}px;

  ${media.phone} {
    font-size: 15px;
    margin-bottom: 30px;
  }
`;
