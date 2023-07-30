import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

interface AuthByUsernameProps {
    username: string,
    password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, { rejectValue: string }>(
    'auth/authByUsername',
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (err) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return rejectWithValue('error');
        }
    },
);
