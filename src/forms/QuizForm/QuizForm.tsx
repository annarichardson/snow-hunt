import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { getResortDataThunk } from '../../store/resort/thunks';
import { getResortsList } from '../../store/resort/selectors';
import {
  Form,
} from './QuizForm.styles';
import {
  STATES, REGIONS, State, Region,
} from '../../contexts/regions';
import FormSection from '../FormSection/FormSection';
import { ListSelectorData } from '../../components/ListSelectorItem/ListSelectorItem';
import Results from '../../components/Results/Results';

export type FormData = {
  geography?: string;
  state?: string;
  region?: string;
}

const mapStateToProps = (state: RootState) => ({
  resortList: getResortsList(state.resort),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getResorts: getResortDataThunk,
  },
  dispatch,
);

type QuizFormProps =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

type QuizFormState = {
  formData: FormData;
}

class QuizForm extends React.PureComponent<QuizFormProps, QuizFormState> {
  geographyRef: React.RefObject<HTMLDivElement> = React.createRef();

  resultsRef: React.RefObject<HTMLDivElement> = React.createRef();

  stateRegionRef: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: QuizFormProps) {
    super(props);
    this.state = {
      formData: {},
    };
  }

  getStateData = (): ListSelectorData[] => STATES.map((state: State) => ({
    label: state.fullName,
    value: state.abbreviation,
  })).sort()

  getRegionData = (): ListSelectorData[] => REGIONS.map((region: Region) => ({
    label: region.name,
    value: region.name,
  })).sort();

  onChange = (key: string, data: ListSelectorData['value'] | ListSelectorData['value'][]) => {
    const { formData } = this.state;

    this.setState({ formData: { ...formData, [key]: data } }, () => {
      // User answered geography question
      if (key === 'geography') {
        this.scrollToSection(this.stateRegionRef);
      }

      // User answered state or region question
      if (key === 'region' || key === 'state') {
        this.submitFormData();
        this.scrollToSection(this.resultsRef);
      }
    });
  }

  scrollToSection = (el: React.RefObject<HTMLDivElement>) => {
    if (!el) return;

    setTimeout(() => {
      el.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  }

  submitFormData = async () => {
    const { getResorts } = this.props;
    const { formData } = this.state;

    try {
      await getResorts({
        region: formData.region,
        state: formData.state,
      });
    } catch (error) {
      // Error is handle in Results
    }
  }

  getGeographyQuestion = () => {
    const { formData } = this.state;
    // The first question has not been answered yet
    if (!formData.geography) {
      return null;
    }
    // By state has been selected
    if (formData.geography === 'byState') {
      return (
        <FormSection
          key="state"
          text="Which state would you like to ski in?"
          subText="We are narrowing in"
          listData={this.getStateData()}
          onChange={(value) => this.onChange('state', value)}
          selected={formData.state}
        />
      );
    }
    // By region has been selected
    return (
      <FormSection
        key="region"
        text="Which region would you like to ski in?"
        subText="We are narrowing in"
        listData={this.getRegionData()}
        onChange={(value) => this.onChange('region', value)}
        selected={formData.region}
      />
    );
  }

  render(): JSX.Element {
    const { formData } = this.state;
    const showResults = Boolean(formData.geography && (formData.state || formData.region));
    return (
      <>
        <Form>
          <div ref={this.geographyRef}>
            <FormSection
              key="geography"
              text="Would you like to choose by region or by state?"
              subText="We want to select mountains near you"
              listData={[
                {
                  label: 'By State',
                  value: 'byState',
                },
                {
                  label: 'By Region',
                  value: 'byRegion',
                },
              ]}
              onChange={(value) => this.onChange('geography', value)}
              selected={formData.geography}
            />
          </div>
          <div ref={this.stateRegionRef}>
            {this.getGeographyQuestion()}
          </div>
        </Form>
        {showResults && (
          <div ref={this.resultsRef}>
            <Results />
          </div>
        )}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizForm);
