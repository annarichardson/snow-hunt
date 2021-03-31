import { STATES, State } from '../contexts/regions';
import skiResortImage from '../assets/images/skiResort.jpg';
import skiResort2Image from '../assets/images/skiResort2.jpg';
import skiResort3Image from '../assets/images/skiResort3.jpg';
import skiResort4Image from '../assets/images/skiResort4.jpg';
import skiResort5Image from '../assets/images/skiResort5.jpg';

class ResortLogic {
  getResortTypeUserFriendly({ resortType }: {resortType: string}): string {
    const resortTypesUserFriendly: {[key: string]: string} = {
      NA_Alpine: 'Alpine',
      XC: 'Cross country',
      Intl: 'International',
    };

    return resortTypesUserFriendly[resortType];
  }

  getResortNewSnowRange(
    { newSnowMin, newSnowMax }: {newSnowMin: string, newSnowMax: string},
  ): string {
    return `${newSnowMin}in - ${newSnowMax}in`;
  }

  getResortBaseSnowRange(
    { avgBaseDepthMin, avgBaseDepthMax }:
    {avgBaseDepthMin: string, avgBaseDepthMax: string},
  ): string {
    return `${avgBaseDepthMin}in - ${avgBaseDepthMax}in`;
  }

  getResortStateFullName({ state }: {state: string}): string {
    const stateData = STATES.find((st: State) => (
      st.abbreviation === state.toUpperCase()
    ));

    return stateData?.fullName || '';
  }

  // Get resort image by index - not real images of resort
  getResortImage({ index }: {index: number}): string {
    const resortImages = [
      skiResortImage,
      skiResort2Image,
      skiResort3Image,
      skiResort4Image,
      skiResort5Image,
    ];
    return resortImages[index % 5];
  }
}

export default new ResortLogic();
