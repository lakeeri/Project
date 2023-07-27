import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateShema } from '../config/StateShema';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: StateShema
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
