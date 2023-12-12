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
            query: ({data, id}) => ({
              url: `/favorite/${id}`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["FavoritePlants"],
          }),
          deleteFavoritePlant: builder.mutation({
            query: (plantId) => ({
              url: `/favorite/plant/${plantId}`,
              method: "DELETE",
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