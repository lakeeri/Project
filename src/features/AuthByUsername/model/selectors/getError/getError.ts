import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../getAuthState';

export const getError = createSelector(getAuthState, (authState) => authState?.error);
