import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../getAuthState';

export const getIsLoading = createSelector(getAuthState, (authState) => authState?.isLoading);
