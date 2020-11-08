import { combineReducers } from '@reduxjs/toolkit';
import classReducer from '../features/class/uitls/class.reducer';
const rootReducer = combineReducers({
  class: classReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
