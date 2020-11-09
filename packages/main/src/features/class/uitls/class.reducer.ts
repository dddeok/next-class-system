import { createReducer, createEntityAdapter } from '@reduxjs/toolkit';
import { Class } from './class.interface';
import { RootState } from '../../../app/rootReducer';
import { fetchClassSuccess } from './class.action';
const classAdpater = createEntityAdapter<Class>({
  selectId: item => item.id,
  sortComparer: (a, b) => b.score.toString().localeCompare(a.score.toString()),
});

const initialState = classAdpater.getInitialState({});

const reducer = createReducer(initialState, {
  [fetchClassSuccess.type]: (state, action: ReturnType<typeof fetchClassSuccess>) => {
    const results = action.payload;
    classAdpater.setAll(state, results);
  },
});

export default reducer;

export const classSelector = classAdpater.getSelectors<RootState>(
  (state: RootState) => state.class,
);
