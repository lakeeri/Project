import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../getAuthState';

export const getPassword = createSelector(getAuthState, (authState) => authState?.password);
