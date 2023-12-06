import api from '../../store/api'

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
        getFavoritePlants: builder.query({
            query: () => "/account/favoritePlant",
            providesTags: ["FavoritePlants"],
        }),
        createFavoritePlant: builder.mutation({
            query: (data) => ({
                url: `/account/favoritePlant`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["FavoritePlants"],
        }),
        deleteFavoritePlant: builder.mutation({
            query: (plantId) => ({
                url:`account/favoritePlant/${plantId}`, 
                method: "DELETE",
            }),
            invalidatesTags: ["FavoritePlant"]
        })
    }),
});

export const { useGetAllPlantsQuery, useGetPlantQuery, useGetFavoritePlantsQuery, useCreateFavoritePlantMutation, useDeleteFavoritePlantMutation } = plantsApi

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
//      /plants/
//      tags "plants"
//   createReview mutation     
// **this is creating a new review, but editing an existing plant by id
//      /plants/
//      method "PUT"
//      body: review

// export const 
// usegetPlantsQuery
// useGetPlantQuery
// useCreateReviewMutation
// = plantsApi