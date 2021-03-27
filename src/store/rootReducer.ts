import { combineReducers } from '@reduxjs/toolkit';
import { resortReducer } from './resort/reducers';

const rootReducer = combineReducers({
  resort: resortReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
