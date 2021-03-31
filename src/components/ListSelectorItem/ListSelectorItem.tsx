import React from 'react';
import Button, { ButtonThemes } from '../Button/Button';
import Colors from '../../utils/theme';

export interface ListSelectorData {
  label: string;
  value: string | boolean | number;
}

type ListSelectorItemProps = {
  onChange: (data: ListSelectorData) => void | Promise<void>;
  itemData: ListSelectorData;
  isSelected?: boolean;
}

class ListSelectorItem extends React.PureComponent<ListSelectorItemProps> {
  render(): JSX.Element {
    const { isSelected, itemData, onChange } = this.props;
    return (
      <>
        <Button
          theme={ButtonThemes.SECONDARY}
          isSelected={isSelected}
          backgroundColor={Colors.lightBlue}
          onClick={() => onChange(itemData)}
        >
          {itemData.label}
        </Button>
      </>
    );
  }
}

export default ListSelectorItem;
