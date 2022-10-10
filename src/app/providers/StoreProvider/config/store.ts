import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
