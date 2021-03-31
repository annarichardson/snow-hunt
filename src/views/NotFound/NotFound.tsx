import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import {
  Text,
  Wrap,
} from './NotFound.styles';
import Button from '../../components/Button/Button';

type HomeProps = {
  location: RouteComponentProps['location'];
  history: RouteComponentProps['history'];
  match: RouteComponentProps['match'];
};

class NotFound extends React.PureComponent<HomeProps> {
  navigateToQuiz = (): void => {
    const { history: { push } } = this.props;
    push('/');
    window.scroll(0, 0);
  }

  render(): JSX.Element {
    return (
      <Wrap>
        <div>
          <Text>
            Whoops! Looks like you are on the wrong page
          </Text>
          <Button onClick={this.navigateToQuiz}>
            Go Home
          </Button>
        </div>
      </Wrap>
    );
  }
}

export default withRouter(NotFound);
