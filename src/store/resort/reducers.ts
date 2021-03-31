import { ActionType, createReducer } from 'typesafe-actions';
import { combineReducers, Reducer } from 'redux';

import { ResortData } from '../../network/resort';
import * as actions from './actions';

export type ResortAction = ActionType<typeof actions>;

type ResortById = {
  [key: string]: ResortData,
}

export type ResortStatus = {
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

/*
* Status
*/
export const resortStatusInitialState: ResortStatus = {
  loading: false,
  loaded: false,
  error: false,
};
export const resortStatusReducer: Reducer<ResortStatus> = createReducer(
  resortStatusInitialState,
)
  .handleAction(actions.setResortData,
    (_state: ResortStatus, _action: ResortAction) => ({
      loading: false,
      loaded: true,
      error: false,
    }))
  .handleAction(actions.setResortDataLoading,
    (_state: ResortStatus, _action: ResortAction) => ({
      loading: true,
      loaded: false,
      error: false,
    }))
  .handleAction(actions.setResortDataError,
    (_state: ResortStatus, _action: ResortAction) => ({
      loading: false,
      loaded: false,
      error: true,
    }));

/*
* All Ids
*/
export const resortAllIdsInitialState: string[] = [];
export const resortAllIdsReducer: Reducer<string[]> = createReducer(
  resortAllIdsInitialState,
)
  .handleAction(actions.setResortData,
    (_state: string[], action: {payload: ResortData[]}) => (
      action.payload.map((p) => p.id)
    ));

/*
* By Id
*/
export const resortByIdInitialState: ResortById = {};
export const resortByIdReducer: Reducer<ResortById> = createReducer(
  resortByIdInitialState,
)
  .handleAction(actions.setResortData,
    (state: ResortById, action: {payload: ResortData[]}) => (
      action.payload.reduce((newState, resort) => ({
        ...newState,
        [resort.id]: {
          ...resort,
        },
      }), state)));

export const resortReducer = combineReducers({
  status: resortStatusReducer,
  allIds: resortAllIdsReducer,
  byId: resortByIdReducer,
});
export type ResortState = ReturnType<typeof resortReducer>;
