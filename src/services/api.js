import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { selectToken } from '../redux/auth/auth.selectors';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState());

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Contacts'],
  endpoints: () => ({}),
});
