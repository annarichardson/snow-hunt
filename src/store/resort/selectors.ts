import { ResortState, ResortStatus } from './reducers';
import { ResortData } from '../../network/resort';

export const getResortsList = (state: ResortState): ResortData[] => (
  state.allIds.map((id) => state.byId[id])
);

export const getResortsStatus = (state: ResortState): ResortStatus => (
  state.status
);
