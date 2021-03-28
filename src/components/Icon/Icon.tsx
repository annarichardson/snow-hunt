import React from 'react';
import { ReactComponent as SnowflakeIcon } from '../../assets/icons/snowflake.svg';
import { NAVY_BLUE } from '../../utils/colors';

export enum IconTypes {
  SNOWFLAKE = 'SNOWFLAKE',
}

type IconProps = {
  type: IconTypes;
  className?: string;
  fill?: string;
}

export class Icon extends React.Component<IconProps> {
  static defaultProps = {
    className: '',
    fill: NAVY_BLUE,
  };

  static assets = {
    [IconTypes.SNOWFLAKE]: SnowflakeIcon,
  };

  render(): JSX.Element | null {
    const { className, fill, type } = this.props;
    const IconAsset = Icon.assets[type];

    if (!IconAsset) {
      return null;
    }

    return <IconAsset className={className} fill={fill} />;
  }
}

export default Icon;
