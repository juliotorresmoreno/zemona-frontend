// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config';
import { SessionState } from '../reducers/session';
import { ProfileModel, ProfileModelUpdate, RequestsModel } from '../types';

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseUrl,
        credentials: 'include',
        mode: 'cors',
        prepareHeaders(headers, { getState }) {
            const token = (getState() as { session: SessionState }).session.token
            if (token) {
                headers.set('authorization', token);
            }
            return headers
        },
    }),

    endpoints: (builder) => ({
        getProfile: builder.query<ProfileModel, string>({
            query: (name) => `profile/${name}`,
        }),
        getProfileRequests: builder.query<RequestsModel, string>({
            query: (name) => `profile/${name}/requests`,
        }),
        patchProfile: builder.mutation<any, ProfileModelUpdate>({
            query: ({ username, ...body }) => {
                return {
                    url: `profile/${username}`,
                    method: 'PATCH',
                    body,
                };
            },
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProfileQuery,
    useGetProfileRequestsQuery,
    usePatchProfileMutation
} = profileApi;
