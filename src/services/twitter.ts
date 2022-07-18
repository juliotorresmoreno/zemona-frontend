// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config';
import type { TweetModel } from '../types';

// Define a service using a base URL and expected endpoints
export const twitterApi = createApi({
	reducerPath: 'twitterApi',
	baseQuery: fetchBaseQuery({
		baseUrl: config.baseUrl,
		credentials: 'include',
		mode: 'cors',
	}),
	endpoints: (builder) => ({
		getTweetsByUsername: builder.query<TweetModel[], string>({
			query: (name) => `twitter/${name}/tweets`,
		})
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTweetsByUsernameQuery } = twitterApi
