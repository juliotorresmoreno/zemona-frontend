

import { createReducer } from "@reduxjs/toolkit";
import { setSession } from "../actions/session";
import { SessionModel } from '../types';

export type SessionState = SessionModel;

const initialState: SessionState = {

};
const sessionReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSession, (state, action) => {
            state.profile = action.payload.profile;
            state.token = action.payload.token;
        });
});

export default sessionReducer;
