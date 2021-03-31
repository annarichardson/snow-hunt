import React from 'react';
import { InView } from 'react-intersection-observer';

import {
  QuestionText,
  SubText,
  Wrap,
} from './FormSection.styles';
import ListSelector from '../../components/ListSelector/ListSelector';
import { ListSelectorData } from '../../components/ListSelectorItem/ListSelectorItem';
import { ANIMATE_IN_VARIANTS } from '../../utils/animations';

type FormSectionProps = {
  text: string;
  subText: string;
  onChange: (
    data: ListSelectorData['value'] | ListSelectorData['value'][]
  ) => void | Promise<void>;
  listData: ListSelectorData[];
  selected?: ListSelectorData['value'];
}

class FormSection extends React.PureComponent<FormSectionProps> {
  render(): JSX.Element {
    const {
      listData, subText, text, onChange, selected,
    } = this.props;
    return (
      <InView triggerOnce>
        {({ inView, ref }) => (
          <Wrap
            ref={ref}
            variants={ANIMATE_IN_VARIANTS}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <QuestionText>
              {text}
            </QuestionText>
            <SubText>
              {subText}
            </SubText>
            <ListSelector
              onChange={onChange}
              data={listData}
              isMultiSelect={false}
              selected={selected}
            />
          </Wrap>
        )}
      </InView>
    );
  }
}

export default FormSection;
