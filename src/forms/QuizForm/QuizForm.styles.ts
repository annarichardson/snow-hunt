import styled from 'styled-components';
import Colors from '../../utils/theme';
import { media } from '../../utils/styles';

export const Form = styled.form`
  background-color: ${Colors.white};
  margin: 0 auto;
  max-width: 900px;
  min-height: 200px;
  padding: 100px 0;

  ${media.tablet} {
    padding: 60px 25px;
  }

  ${media.phone} {
    padding: 20px 15px;
    max-width: 400px;
  }
`;
