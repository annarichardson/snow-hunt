import { Dispatch } from 'redux';
import { RootState } from '../rootReducer';
import Resort from '../../network/resort';
import { setResortData } from './actions';

export const addResortDataThunk = () => async (
  dispatch: Dispatch,
  _getState: () => RootState,
): Promise<void> => {
  const data = await Resort.getResortList();
  dispatch(setResortData(data.items));
};
