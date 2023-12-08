import api from "../../store/api";

const plantsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlants: builder.query({
      query: () => "/",
      providesTags: ["AllPlants"],
    }),
    getPlant: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Plant"],
    }),
    getPlantType: builder.query({
      query: (id) => `/plantType/${id}`,
      providesTags: ["Plant"],
    }),
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
  useGetAllPlantsQuery, 
  useGetPlantQuery, 
  useGetPlantTypeQuery, 
  useGetFavoritePlantsQuery, 
  useGetFavoritePlantQuery, 
  useCreateFavoritePlantMutation, 
  useDeleteFavoritePlantMutation } =
  plantsApi;

// import { createSlice } from '@reduxjs/toolkit'

// const plantsSlice = createSlice({
//     name: 'plants',
//     initialState: null,
//     reducers: {
//         allPlants: (state, { payload }) => { return state.concat([{ plant: payload, favorite: false }]) },

//         favoritePlantToggle: (state, { payload }) => {
//             const plantId = state.findIndex(p => p.plant === payload)
//             const currentPlantStatus = state[plantId].favorite
//             const updatePlantFavoriteStatus = { plant: payload, favorite: !currentPlantStatus }
//             if (plantId === 0) {
//                 return [updatePlantFavoriteStatus].concat(state.slice(1))
//             } else {
//                 return state.slice(0, plantId)
//                     .concat(updatePlantFavoriteStatus)
//                     .concat(state.slice(plantId + 1))
//             }
//         },
//     }
// })
// export const { allPlants, favoritePlantToggle } = plantsSlice.actions
// export default plantsSlice.reducer

// import api

// set plantsApi as api.injectEndpoints
// endpoints builder
//   getPlants query
//      /plants
//      tags "plants"
//   getPlant query
//      /plants/${id}
//      tags "plants"
//   createReview mutation
// **this is creating a new review, but editing an existing plant by id
//      /plants/${plant.id}
//      method "PUT"
//      body: review

// export const
// usegetPlantsQuery
// useGetPlantQuery
// useCreateReviewMutation
// = plantsApi
