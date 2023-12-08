import api from "./api";

const favoritePlantApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFavoritePlants: builder.query({
            query: () => `/favorite`,
            providesTags: ["FavoritePlants"],
          }),
          getFavoritePlant: builder.query({
            query: (id) => `/favorite/${id}`,
            providesTags: ["FavoritePlant"],
          }),
          createFavoritePlant: builder.mutation({
            query: (data) => ({
              url: `/favorite`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["FavoritePlants"],
          }),
          deleteFavoritePlant: builder.mutation({
            query: (id) => ({
              url: `/favorite/${id}`,
              methd: "DELETE",
            }),
            invalidatesTags: ["FavoritePlant"],
          })
    }),
});
export const { 
  useGetFavoritePlantsQuery, 
  useGetFavoritePlantQuery, 
  useCreateFavoritePlantMutation, 
  useDeleteFavoritePlantMutation } =
  favoritePlantApi;