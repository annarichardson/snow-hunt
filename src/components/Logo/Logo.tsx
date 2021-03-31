import React from 'react';
import { motion } from 'framer-motion';
import { IconTypes } from '../Icon/Icon';
import {
  LogoWrap, Snowflake, Text,
} from './Logo.styles';
import Colors from '../../utils/theme';

type LogoProps = {};
type LogoState = {
  isSnowflakeAnimated: boolean;
}

class Logo extends React.PureComponent<LogoProps, LogoState> {
  constructor(props: LogoProps) {
    super(props);

    this.state = {
      isSnowflakeAnimated: true,
    };
  }

  animateSnowflake = (): void => {
    this.setState({ isSnowflakeAnimated: true }, () => {
      setTimeout(() => {
        this.setState({ isSnowflakeAnimated: false });
      }, 2000);
    });
  }

  render(): JSX.Element {
    const { isSnowflakeAnimated } = this.state;
    return (
      <LogoWrap>
        <Text>
          Snow
        </Text>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isSnowflakeAnimated ? 0 : 360 }}
          transition={{ duration: 1, repeat: 0 }}
        >
          <Snowflake
            type={IconTypes.SNOWFLAKE}
            fill={Colors.navyBlue}
          />
        </motion.div>
        <Text>
          Hunt
        </Text>
      </LogoWrap>
    );
  }
}

export default Logo;
