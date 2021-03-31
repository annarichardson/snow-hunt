import React from 'react';
import {
  Card,
  Image,
  ResortName,
  ResortState,
  Stat,
  StatTitle,
  StatsWrap,
} from './ResortCard.styles';
import { ResortType } from '../../network/resort';
import ResortLogic from '../../utils/resortLogic';

type ResortCardProps = {
  avgBaseDepthMax: string;
  avgBaseDepthMin: string;
  image: string;
  newSnowMax: string;
  newSnowMin: string;
  resortName: string;
  resortState: string;
  resortType: ResortType;
};

class ResortCard extends React.PureComponent<ResortCardProps> {
  getStats = (): {title: string, value: string }[] => {
    const {
      avgBaseDepthMax, avgBaseDepthMin, newSnowMax, newSnowMin, resortType,
    } = this.props;
    return [
      {
        title: 'Type',
        value: ResortLogic.getResortTypeUserFriendly({ resortType }),
      },
      {
        title: 'New Snow',
        value: ResortLogic.getResortNewSnowRange({ newSnowMin, newSnowMax }),
      },
      {
        title: 'Snow Base',
        value: ResortLogic.getResortBaseSnowRange({ avgBaseDepthMin, avgBaseDepthMax }),
      },
    ];
  }

  renderStats = (): JSX.Element[] => {
    const stats = this.getStats();
    return stats.map((st: {title: string, value: string}) => (
      <Stat key={st.title}>
        <StatTitle>
          {`${st.title}: `}
        </StatTitle>
        {st.value}
      </Stat>
    ));
  }

  render(): JSX.Element {
    const { image, resortName, resortState } = this.props;
    return (
      <Card>
        <Image src={image}>
          <ResortName>
            {resortName}
          </ResortName>
          <ResortState>
            {ResortLogic.getResortStateFullName({ state: resortState })}
          </ResortState>
        </Image>
        <StatsWrap>
          {this.renderStats()}
        </StatsWrap>
      </Card>
    );
  }
}

export default ResortCard;
