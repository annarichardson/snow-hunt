import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import Logo from '../Logo/Logo';
import {
  CenterWrap,
  LeftWrap,
  NavBarWrap,
  RightWrap,
} from './NavBar.styles';

type NavBarProps = {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
};

class NavBar extends React.PureComponent<NavBarProps> {
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
          <Logo />
        </CenterWrap>
        <RightWrap />
      </NavBarWrap>
    );
  }
}

export default withRouter(NavBar);
