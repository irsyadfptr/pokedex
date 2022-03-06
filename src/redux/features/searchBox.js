import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: '',
    filter: '',
    sort: "id",
    toggle: false,
    order: true
}

const pagingSlice =  createSlice({
    name: 'pagingFunction',
    initialState,
    reducers: {
        searchData: (state, action) => {
            state.search = action.payload
        },
        filterData: (state, action) => {
            state.filter = action.payload
        },
        sortData: (state, action) => {
            state.sort = action.payload
        },
        toggleSearchingBox: (state) => {
            state.toggle = (!state.toggle)
        },
        orderData: (state) => {
            state.order = (!state.order)
        }
    }


})

export const { searchData, filterData, sortData, toggleSearchingBox, orderData } = pagingSlice.actions;
export default pagingSlice.reducer;

// addItem(state, action: PayloadAction<IStoredPokemonCard>) {
//     const pokemonCard = action.payload

//     state.cards.push(pokemonCard)
//   },
//   removeItem(state, action: PayloadAction<string>) {
//     const pokemonCardUUID = action.payload
//     const cards = state.cards.filter(({ uuid }) => uuid !== pokemonCardUUID)

//     state.cards = cards
//   },