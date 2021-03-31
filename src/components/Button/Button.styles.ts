import styled from 'styled-components';
import { ButtonThemes } from './Button';
import { media } from '../../utils/styles';

interface StyledButtonProps {
  backgroundColor: string;
  backgroundColorHover: string;
  buttonTheme: ButtonThemes;
  isSelected: boolean;
  textColor: string;
  textColorHover: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-image: ${((props) => `linear-gradient(to right, ${props.backgroundColor} 50%, ${props.backgroundColorHover} 50%);`)}
  background-size: 200% 100%;
  border: ${((props) => `1px solid ${props.backgroundColorHover}`)};
  color: ${((props) => props.textColor)};
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-position 0.7s;

  &:hover {
    background-position: -100% 0;
    color: ${((props) => props.textColorHover)};
  }

  &:hover, &:active, &:focus {
    outline: none;
  }

  ${(props) => props.isSelected && `
    background-position: -100% 0;
    color: ${props.textColorHover};
  `}

  ${(props) => props.buttonTheme === ButtonThemes.PRIMARY && `
    font-size: 20px;
    padding: 20px 30px;

    ${media.phone} {
      font-size: 15px;
      padding: 15px 20px;
    }
  `}

  ${(props) => props.buttonTheme === ButtonThemes.SECONDARY && `
    border-radius: 4px;
    font-size: 20px;
    padding: 15px 25px;

    ${media.phone} {
      font-size: 15px;
      padding: 10px 20px;
    }
  `}
`;
