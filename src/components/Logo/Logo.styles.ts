import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { NAVY_BLUE } from '../../utils/colors';

export const Text = styled.h1`
  color: ${NAVY_BLUE};
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Snowflake = styled(Icon)`
  color: ${NAVY_BLUE};
  height: 27px;
  margin-left: 10px;
  margin-right: 10px;
  width: 27px;
`;

export const LogoWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
