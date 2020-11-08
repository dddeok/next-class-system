import { combineReducers } from '@reduxjs/toolkit';
import emailAuthReducer from '../features/emailAuth/utils/emailAuth.reducer';

const rootReducer = combineReducers({
  auth: emailAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
