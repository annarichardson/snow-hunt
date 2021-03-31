import styled from 'styled-components';
import Colors from '../../utils/theme';

export const NAV_BAR_HEIGHT = 70;

export const CenterWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex: 1;
`;

export const LogoButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover, &:active, &:focus {
    border: none;
    outline: none;
  }
`;

export const NavBarWrap = styled.header`
  background-color: ${Colors.white};
  box-shadow: 0 1px 1px rgba(57, 63, 72, 0.1);
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: no-wrap;
  height: ${NAV_BAR_HEIGHT}px;
  width: 100%;
  z-index: 10000;
`;

export const RightWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
`;
