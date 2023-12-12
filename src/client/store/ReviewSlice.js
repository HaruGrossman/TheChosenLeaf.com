import api from "./api";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (plantId) => `/reviews/${plantId}`,
      providesTags: ["Reviews"],
    }),
    editReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/review/${id}`,
        method: "PUT",
        body: { data },
      }),
      invalidatesTags: ["Reviews"],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `/reviews/review/create`,
        method: "POST",
        body: { data },
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/review/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useCreateReviewMutation,
  useEditReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
