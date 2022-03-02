import { ActionTypes } from "../constant/action-types"

const initialState = {
    pokemons: [],
    pokeDatas: [],
    offset: 20
}

export const pokemonsReducer = (state = initialState.pokemons, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_POKEMON:
            return {...state, pokemon: payload};
        default:
            return state;
    }
}

export const pokeDatasReducer = (state = initialState.pokeDatas, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_POKEDATA:
            return {...state, pokeData: payload};
        default:
            return state;
    }
}

export const offsetReducer = (state = initialState.offset, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_OFFSET:
            return state + 20;
        default:
            return state;
    }
}

