import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: ''
  }),
  tagTypes: [],
  endpoints: () => ({})
});

export const {} = rootApi;
