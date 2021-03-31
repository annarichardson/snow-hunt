import { Dispatch } from 'redux';
import { RootState } from '../rootReducer';
import Resort, { GetResortsParams } from '../../network/resort';
import { setResortData, setResortDataLoading, setResortDataError } from './actions';

/*
 * Get Resort data based on region or state
 */
export const getResortDataThunk = ({ region, state } : GetResortsParams) => async (
  dispatch: Dispatch,
  _getState: () => RootState,
): Promise<void> => {
  try {
    dispatch(setResortDataLoading(true));
    const data = await Resort.getResortList({ region, state });
    dispatch(setResortData(data.data.items || []));
  } catch (error) {
    dispatch(setResortDataError());
  }
};
