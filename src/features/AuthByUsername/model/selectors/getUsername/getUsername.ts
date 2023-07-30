import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../getAuthState';

export const getUsername = createSelector(getAuthState, (authState) => authState?.username);
