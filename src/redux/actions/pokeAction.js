import { ActionTypes } from "../constant/action-types"

export const setPokemon = (pokemons) => {
    return{
        type: ActionTypes.SET_POKEMON,
        payload: pokemons
    }
}

export const setPokedata = (pokedatas) => {
    return{
        type: ActionTypes.SET_POKEDATA,
        payload: pokedatas
    }
}

export const selectPokemon = (pokemon) => {
    return{
        type: ActionTypes.SELECT_POKEMON,
        payload: pokemon
    }
}

export const setOffset = (offSet) => {
    return{
        type: ActionTypes.SET_OFFSET,
        payload: offSet
    }
}

export const setDetailPokemon = (pokemon) => {
    return{
        type: ActionTypes.SET_POKEMON_DETAIL,
        payload: pokemon
    }
}

export const setDetailPokedata = (pokeData) => {
    return{
        type: ActionTypes.SET_POKEDATA_DETAIL,
        payload: pokeData
    }
}