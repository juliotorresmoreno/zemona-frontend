
import { profileApi } from "../services/profile";
import { twitterApi } from "../services/twitter";
import sessionReducer from './session';

export type DefaultRootState = {

};

const reducers = {
    [twitterApi.reducerPath]: twitterApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    session: sessionReducer
};

export default reducers;
