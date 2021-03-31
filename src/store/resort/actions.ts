import { createAction } from 'typesafe-actions';
import { ResortData } from '../../network/resort';

export const setResortData = createAction('SET_RESORT_DATA')<
  ResortData[]
>();
export const setResortDataLoading = createAction('SET_RESORT_DATA_LOADING')<
  boolean
>();
export const setResortDataError = createAction('SET_RESORT_DATA_ERROR')<
  void
>();
