import { createAction } from 'typesafe-actions';
import { ResortData } from '../../network/resort';

export const setResortData = createAction('SET_RESORT_DATA')<
  ResortData[]
>();
