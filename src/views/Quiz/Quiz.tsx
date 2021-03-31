import React from 'react';
import { InView } from 'react-intersection-observer';

import {
  Clouds,
  Header,
  Title,
} from './Quiz.styles';
import QuizForm from '../../forms/QuizForm/QuizForm';
import { ANIMATE_IN_VARIANTS } from '../../utils/animations';

class Quiz extends React.PureComponent {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <InView triggerOnce>
          {({ inView, ref }) => (
            <Clouds
              ref={ref}
              variants={ANIMATE_IN_VARIANTS}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <Title>
                Where should I ski?
              </Title>
            </Clouds>
          )}
        </InView>
        <QuizForm />
      </>
    );
  }
}

export default Quiz;
