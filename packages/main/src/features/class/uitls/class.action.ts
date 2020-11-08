import { createAction } from '@reduxjs/toolkit';
import { Class } from './class.interface';

export const fetchClassStart = createAction('class/fetchClassStart', () => {
  return {
    payload: null,
  };
});

export const fetchClassSuccess = createAction(
  'class/fetchClassSuccess',
  (results: Class[]) => {
    return {
      payload: results,
    };
  },
);
