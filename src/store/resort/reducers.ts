import { ActionType, createReducer } from 'typesafe-actions';
import { combineReducers, Reducer } from 'redux';

import { ResortData } from '../../network/resort';
import * as actions from './actions';

export type ResortAction = ActionType<typeof actions>;

type ResortById = {
  [key: string]: ResortData,
}

/*
* All Ids
*/
export const resortAllIdsInitialState: string[] = [];
export const resortAllIdsReducer: Reducer<string[]> = createReducer(
  resortAllIdsInitialState,
)
  .handleAction(actions.setResortData,
    (state: string[], action: ResortAction) => state.concat(action.payload.map((p) => p.id)));

/*
* By Id
*/
export const resortByIdInitialState: ResortById = {};
export const resortByIdReducer: Reducer<ResortById> = createReducer(
  resortByIdInitialState,
)
  .handleAction(actions.setResortData,
    (state: ResortById, action: ResortAction) => action.payload.reduce((newState, resort) => ({
      ...newState,
      [resort.id]: {
        ...resort,
      },
    }), state));

export const resortReducer = combineReducers({
  allIds: resortAllIdsReducer,
  byId: resortByIdReducer,
});
export type ResortState = ReturnType<typeof resortReducer>;
