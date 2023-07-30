import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateShema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateShema}>
        <StoryComponent />
    </StoreProvider>
);
