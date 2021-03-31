import React from 'react';

import { StyledButton } from './Button.styles';
import Colors from '../../utils/theme';

export enum ButtonThemes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

type ButtonProps = {
  children: string;
  onClick?: () => void | Promise<void>;
  theme: ButtonThemes;
  backgroundColor: string;
  backgroundColorHover: string;
  isSelected: boolean;
  textColor: string;
  textColorHover: string;
};

class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    backgroundColor: Colors.white,
    backgroundColorHover: Colors.navyBlue,
    isSelected: false,
    textColor: Colors.navyBlue,
    textColorHover: Colors.white,
    theme: ButtonThemes.PRIMARY,
  };

  render(): JSX.Element {
    const {
      backgroundColor,
      backgroundColorHover,
      children,
      isSelected,
      onClick,
      textColor,
      textColorHover,
      theme,
    } = this.props;
    return (
      <StyledButton
        type="button"
        buttonTheme={theme}
        onClick={onClick}
        backgroundColor={backgroundColor}
        backgroundColorHover={backgroundColorHover}
        textColor={textColor}
        textColorHover={textColorHover}
        isSelected={isSelected}
      >
        {children}
      </StyledButton>
    );
  }
}

export default Button;
