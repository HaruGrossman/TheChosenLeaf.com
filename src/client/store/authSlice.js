import { api } from './api';

const AccountEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: () => "/login",
      providesTags: ["Login"],
    }),
    register: builder.query({
      query: () => "/register",
      providesTags: ["Register"],
    }),
  })
})
export const { useGetLoginQuery, useGetRegisterQuery } = AccountEndpoints
