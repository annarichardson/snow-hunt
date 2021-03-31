import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { InView } from 'react-intersection-observer';
import { RootState } from '../../store/rootReducer';
import ResortCard from '../ResortCard/ResortCard';
import { getResortsList, getResortsStatus } from '../../store/resort/selectors';
import { ANIMATE_IN_VARIANTS } from '../../utils/animations';
import ResortLogic from '../../utils/resortLogic';

import {
  SubText,
  TitleText,
  ResortCardList,
  ResortCardWrap,
  Wrap,
} from './Results.styles';

const mapStateToProps = (state: RootState) => ({
  resortList: getResortsList(state.resort),
  resortListStatus: getResortsStatus(state.resort),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

type ResultsProps =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class Results extends React.PureComponent<ResultsProps> {
  renderCards = () => {
    const { resortList } = this.props;

    return resortList.map((resort, i) => (
      <ResortCardWrap key={resort.resortName}>
        <ResortCard
          image={ResortLogic.getResortImage({ index: i })}
          resortName={resort.resortName}
          resortState={resort.state}
          resortType={resort.resortType}
          newSnowMin={resort.newSnowMin}
          newSnowMax={resort.newSnowMax}
          avgBaseDepthMin={resort.avgBaseDepthMin}
          avgBaseDepthMax={resort.avgBaseDepthMax}
        />
      </ResortCardWrap>
    ));
  };

  render() {
    const { resortList, resortListStatus } = this.props;
    let title = '';
    let subText = '';

    if (resortListStatus.loading) {
      title = 'Hold on. We are tallying the results';
    }

    if (resortListStatus.error) {
      title = 'Sorry, there was an error getting your results';
      subText = 'Please try again later';
    }

    if (resortListStatus.loaded) {
      title = 'The results are in!';
      subText = 'These resorts have the best snow';
    }

    if (resortListStatus.loaded && !resortList.length) {
      title = 'Sorry, there are no results in your area.';
      subText = '';
    }

    return (
      <InView triggerOnce>
        {({ inView, ref }) => (
          <Wrap
            ref={ref}
            variants={ANIMATE_IN_VARIANTS}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <TitleText>
              {title}
            </TitleText>
            <SubText>
              {subText}
            </SubText>
            <ResortCardList>
              {this.renderCards()}
            </ResortCardList>
          </Wrap>
        )}
      </InView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
