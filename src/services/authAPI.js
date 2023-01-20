import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    register: build.mutation({
      query: credentials => {
        return {
          url: 'users/signup',
          method: 'POST',
          body: credentials,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    login: build.mutation({
      query: credentials => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Contacts'],
    }),
    logout: build.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
    }),
    refresh: build.query({
      query: () => ({
        url: 'users/current',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
  useLazyRefreshQuery,
} = authApi;

export const {
  endpoints: { register, login, logout, refresh },
} = authApi;
