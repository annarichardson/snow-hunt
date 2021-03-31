import React from 'react';
import ListSelectorItem, { ListSelectorData } from '../ListSelectorItem/ListSelectorItem';
import { List, ItemWrap } from './ListSelector.styles';

type ListSelectorProps = {
  onChange: (
    data: ListSelectorData['value'] | ListSelectorData['value'][]
  ) => void | Promise<void>;
  data: ListSelectorData[],
  isMultiSelect?: boolean;
  selected?: ListSelectorData['value'] | ListSelectorData['value'][];
}

class QuizForm extends React.PureComponent<ListSelectorProps> {
  static defaultProps = {
    isMultiSelect: false,
    selectedValue: null,
  };

  onChange = (data: ListSelectorData): void => {
    const { isMultiSelect, onChange, selected } = this.props;

    if (!isMultiSelect) {
      onChange(data.value);
      return;
    }

    let newSelected: ListSelectorData['value'][] = selected && Array.isArray(selected) ? selected : [];
    const selectedIndex: number = newSelected.findIndex(
      (i) => i === data.value,
    );

    // if value is not in selected array, add to selected array
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(data.value);
      // if value is in selected array, remove from selected array
    } else {
      newSelected = newSelected
        .slice(0, selectedIndex)
        .concat(newSelected.slice(selectedIndex + 1));
    }

    onChange(newSelected);
  }

  renderItems = (): JSX.Element[] => {
    const {
      data, isMultiSelect, selected,
    } = this.props;
    const { length } = data;

    return data.map((item) => {
      let isSelected = false;
      if (isMultiSelect) {
        isSelected = Array.isArray(selected) && selected.some((i) => i === item.value);
      } else {
        isSelected = selected === item.value;
      }
      return (
        <ItemWrap length={length} key={item.value.toString()}>
          <ListSelectorItem
            isSelected={isSelected}
            itemData={item}
            onChange={this.onChange}
          />
        </ItemWrap>
      );
    });
  }

  render(): JSX.Element {
    const items = this.renderItems();
    return (
      <List>
        {items}
      </List>
    );
  }
}

export default QuizForm;
