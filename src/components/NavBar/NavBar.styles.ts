import styled from 'styled-components';

export const NavBarWrap = styled.header`
  box-shadow: 0 1px 1px rgba(57, 63, 72, 0.1);
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: no-wrap;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const CenterWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex: 1;
`;

export const RightWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
`;
