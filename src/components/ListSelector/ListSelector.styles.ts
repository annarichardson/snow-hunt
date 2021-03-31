import styled from 'styled-components';

type ItemWrapType = {
  length: number;
}

export const ItemWrap = styled.div<ItemWrapType>`
  padding: 20px 15px;

  ${(props) => (props.length > 2 ? 'flex: 0 0 25%;' : '')}
`;

export const List = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
