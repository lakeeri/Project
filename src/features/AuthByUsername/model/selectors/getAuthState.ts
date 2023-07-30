import { StateShema } from 'app/providers/StoreProvider';

export const getAuthState = (state: StateShema) => state.auth;
