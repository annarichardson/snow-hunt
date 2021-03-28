import React from 'react';
import { IconTypes } from '../Icon/Icon';
import { LogoWrap, Snowflake, Text } from './Logo.styles';
import { NAVY_BLUE } from '../../utils/colors';

class Logo extends React.PureComponent {
  render(): JSX.Element {
    return (
      <LogoWrap>
        <Text>
          Snow
        </Text>
        <Snowflake
          type={IconTypes.SNOWFLAKE}
          fill={NAVY_BLUE}
        />
        <Text>
          Hunt
        </Text>
      </LogoWrap>
    );
  }
}

export default Logo;
