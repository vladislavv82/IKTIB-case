import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// define a service user a base URL

const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.143.24.10:5001',
  }),

  endpoints: (builder) => ({
    // login
    loginUser: builder.mutation({
      query: (user) => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
    }),

    // logout

    logoutUser: builder.mutation({
      query: (payload) => ({
        url: '/logout',
        method: 'DELETE',
        body: payload,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = appApi;

export default appApi;
