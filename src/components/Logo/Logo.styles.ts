import styled from 'styled-components';
import Icon from '../Icon/Icon';
import Colors from '../../utils/theme';

export const LogoWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.h1`
  color: ${Colors.navyBlue};
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Snowflake = styled(Icon)`
  color: ${Colors.navyBlue};
  height: 27px;
  margin-left: 10px;
  margin-right: 10px;
  width: 27px;
`;
