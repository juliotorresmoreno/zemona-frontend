
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import reducers from '../reducers';
import defaultState from './defaultState';
import { twitterApi } from '../services/twitter';
import { profileApi } from '../services/profile';

const store = configureStore({
    reducer: reducers,
    preloadedState: defaultState,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            twitterApi.middleware,
            profileApi.middleware,
            thunk
        ),
});

export default store;
