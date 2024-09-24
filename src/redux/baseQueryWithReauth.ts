import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { API_URL } from '@utils/consts';
import { RootState } from './store';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;
    headers.set('Authorization', `Bearer ${token}`);

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // @TODO логика истечения токена

  if (result.meta?.response) {
    return {
      ...result,
      meta: {
        status: result.meta.response.status,
      },
    };
  }

  return result;
};
