import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { ReducersMapObject } from 'redux';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
