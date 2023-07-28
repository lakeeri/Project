import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateShema } from './StateShema';

export function createReduxStore(initialState?: StateShema) {
    const rootReducer: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateShema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
