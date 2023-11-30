import { createSlice } from "@reduxjs/toolkit"

export const chosenPlantApi = createApi({
    reducerPath: 'plants',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api'
    }),
    endpoints: (builder) => ({
        getAllPlants: builder.query({
            query: () => "/plants",
            providesTags: ["Plants"]
        }),
        //RTK query mutation for favorite plants
        favoritePlant: builder.mutation({
            query: (plantId) => ({
                url: `/plants/toggle/${plantId}`,
                method: 'PUT'
            })
            //invalidatesTags: ["FavoritePlant"]
        }),
        //RTK query mutation for favorite stores
        getFavoriteStore: builder.query({
            query: () => "/favoriteStore",
            providesTags: ["FavoriteStore"]
        }),
        //RTK query mutation for 
        //   getNotes: builder.query({}),
        //   getReviews: builder.query({}),
    })
})
