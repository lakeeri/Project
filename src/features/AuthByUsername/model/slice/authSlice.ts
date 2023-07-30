import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthShema } from '../types/authShema';
import { authByUsername } from '../services/authByUsername';

const initialState: AuthShema = {
    isLoading: false,
    username: '',
    password: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        clearAuthSlice: (state) => {
            state.error = undefined;
            state.username = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { reducer: authReducer } = authSlice;
export const { actions: authActions } = authSlice;
