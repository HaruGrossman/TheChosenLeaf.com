import { createSlice } from '@reduxjs/toolkit'

const plantsSlice = createSlice({
    name: 'plants',
    initialState: null,
    reducers: {
        allPlants: (state, { payload }) => { return state.concat([{ plant: payload, favorite: false }]) },

        favoritePlantToggle: (state, { payload }) => {
            const plantId = state.findIndex(p => p.plant === payload)
            const currentPlantStatus = state[plantId].favorite
            const updatePlantFavoriteStatus = { plant: payload, favorite: !currentPlantStatus }
            if (plantId === 0) {
                return [updatePlantFavoriteStatus].concat(state.slice(1))
            } else {
                return state.slice(0, plantId)
                    .concat(updatePlantFavoriteStatus)
                    .concat(state.slice(plantId + 1))
            }
        },
    }
})
export const { allPlants, favoritePlantToggle } = plantsSlice.actions
export default plantsSlice.reducer