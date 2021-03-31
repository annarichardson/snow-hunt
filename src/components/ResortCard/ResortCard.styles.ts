import styled from 'styled-components';
import { media } from '../../utils/styles';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  height: 365px;
  width: 280px;
`;

type ImageType = {
  src: string;
}

export const Image = styled.div<ImageType>`
  background-image: url(${((props) => props.src)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  overflow: hidden;
  width: 100%;
`;

export const ResortName = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 45px;
  line-height: 45px;
  margin: 30px 20px 10px 20px;
  max-width: 600px;
  text-align: left;

  ${media.phone} {
    font-size: 35px;
    line-height: 35px;
  }
`;

export const ResortState = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  margin: 0;
  margin-left: 20px;
  text-align: left;
  text-transform: uppercase;
`;

export const Stat = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  margin: 0;
  padding: 0px 5px;
  text-align: left;
`;

export const StatTitle = styled.span`
  font-family: 'Montserrat Bold', sans-serif;
  font-size: 15px;
  line-height: 20px;
`;

export const StatsWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
