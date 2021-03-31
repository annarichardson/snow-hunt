import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import Logo from '../Logo/Logo';
import {
  CenterWrap,
  LeftWrap,
  LogoButton,
  NavBarWrap,
  RightWrap,
} from './NavBar.styles';

type NavBarProps = {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
};

class NavBar extends React.PureComponent<NavBarProps> {
  logoRef: React.RefObject<Logo>= React.createRef();

  componentDidUpdate(prevProps: NavBarProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged = () => {
    this.logoRef.current?.animateSnowflake();
  }

  clickLogo = () => {
    const { history: { push } } = this.props;
    push('/');
    window.scroll(0, 0);
  }

  render() {
    return (
      <NavBarWrap>
        <LeftWrap />
        <CenterWrap>
          <LogoButton type="button" onClick={this.clickLogo}>
            <Logo ref={this.logoRef} />
          </LogoButton>
        </CenterWrap>
        <RightWrap />
      </NavBarWrap>
    );
  }
}

export default withRouter(NavBar);
