import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetAllPlantsQuery, useGetPlantQuery } from "./plantSlice";
import { useGetLoginQuery, useGetRegisterQuery } from "./authSlice";
import { useGetCreateNoteQuery, useGetEditNoteQuery, useDeleteNoteQuery } from "./Notes";
/**
 * Empty central API slice.
 * Endpoints should be injected in their own slices.
 * If available, an auth token is added to all request headers.
 */
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({
    useGetAllPlantsQuery,
    useGetPlantQuery,
    useGetLoginQuery,
    useGetRegisterQuery,
    useGetCreateNoteQuery,
    useGetEditNoteQuery,
    useDeleteNoteQuery
  }),
});

export default api;
