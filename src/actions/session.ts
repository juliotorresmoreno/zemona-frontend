import { createAction } from "@reduxjs/toolkit";
import { SessionModel } from "../types";

export const setSession = createAction<SessionModel>('session/set');

