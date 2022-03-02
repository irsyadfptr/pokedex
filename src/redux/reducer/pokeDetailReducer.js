import { ActionTypes } from "../constant/action-types";

const initialState = {
    pokemon: [],
    pokeData: []
}

export const pokemonReducer = (state = initialState.pokemon, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POKEMON_DETAIL:
            return {...state, pokemon: payload};
        default:
            return state;
    }
}

export const pokeDataReducer = (state = initialState.pokeData, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POKEDATA_DETAIL:
            return {...state, pokeData: payload};
        default:
            return state;
    }
}