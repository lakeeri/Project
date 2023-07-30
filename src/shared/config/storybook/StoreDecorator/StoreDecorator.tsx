import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    auth: authReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
