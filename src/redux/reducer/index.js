import { combineReducers } from "redux";
import { pokeDataReducer, pokemonReducer } from "./pokeDetailReducer";
import { pokeDatasReducer, pokemonsReducer } from "./pokelistReducer";

const reducers = combineReducers({
    allPokemon: pokemonsReducer,
    allPokedata: pokeDatasReducer,
    allPokeDetail: pokemonReducer,
    allPokeDataDetail: pokeDataReducer
});

export default reducers;