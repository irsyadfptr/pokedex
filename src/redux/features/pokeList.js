import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPokemon = createAsyncThunk(
  "loadPokemon",
  async () => {
    let array = [];

    const pokeList = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
    );

    const pokeData = async (id) =>{
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      return response.data
    }
    const allPokeData = async () => {
      let arr = [];
      for (let i = 1; i<= 20; i++){
        arr.push(await pokeData(i))
      }
      return arr;
    }
    array.push(pokeList.data)
    array.push(await allPokeData())

    return array ;
  }
);


export const morePokemon = createAsyncThunk(
  "morePokemon",
  async(offset) => {
    let array = [];

    const pokeList = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );

    const pokeData = async (id) =>{
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      return response.data
    }
    const allPokeData = async () => {
      let arr = [];
      for (let i = 1; i<= 20 + offset; i++){
        arr.push(await pokeData(i))
      }
      return arr;
    }
    array.push(pokeList.data)
    array.push(await allPokeData())
    return array ;
  }
)


// const pokemonProp = async (id) => {
//   let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const response = await axios
//   .get(url)
//   return response.data;
// 

// const pokemonIdGenerator = async () => {
//   let arr = [];
//   for (let i = 1; i <= 0 + offset; i++){
//       arr.push(await pokemonProp(i))
//   }
//   // dispatch(setPokedata([...arr]));
// }

const initialState = {
  pokemonsList: {},
  offset: 20,
  isFetching: false,
  loading: true,

};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
      fetchingData: (state) => {
        state.isFetching = true
    },
  },
  extraReducers: {
    [loadPokemon.pending]: () => {
      console.log("Pending");
    },
    [loadPokemon.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      console.log(initialState.loading)
      return { ...state, pokemonsList: payload, loading: false };
    },
    [loadPokemon.rejected]: () => {
      console.log("Rejected!");
    },
    [morePokemon.pending]: () => {
      console.log("Pending");
    },
    [morePokemon.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, pokemonsList: payload, isFetching: false,
        offset: state.offset + 20 };
    },
    [morePokemon.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const {fetchingData} = pokemonSlice.actions;
export const getAllPokemonList = (state) => state.pokemons.pokemonsList;
export default pokemonSlice.reducer;
