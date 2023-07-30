import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/StoreProvider';
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

export type RedusersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type RedusersListEntry = [StateSchemaKeys, Reducer];

interface DinamicModuleLoaderProps {
    reducers: RedusersList,
    removeAfterUnmount?: boolean
}

export const DinamicModuleLoader: React.FC<DinamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: RedusersListEntry) => {
            store.reducerManager.add(name, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: RedusersListEntry) => {
                    store.reducerManager.remove(name);
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>

    );
};
