import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPokemon = createAsyncThunk(
  "loadPokemon",
  async({offset, sort, order, search, filter}) => {
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
      for (let i = 1; i<= offset; i++){
        arr.push(await pokeData(i))
      }

      const filtered = arr.filter(p => {
        if(p.types.length === 2){
            return p.name.toLowerCase().includes(search.toLowerCase()) && (p.types[0].type.name.toLowerCase().includes(filter.toLowerCase()) || p.types[1].type.name.toLowerCase().includes(filter.toLowerCase()))
        } else{
            return p.name.toLowerCase().includes(search.toLowerCase()) && p.types[0].type.name.toLowerCase().includes(filter.toLowerCase());
        }
      })

      const sorted = filtered.sort((a,b) => {
        if(sort === "id"){
            const asc = a.id -b.id
            const desc = b.id - a.id
            return order ? asc : desc
        } else if (sort === "name") {
            const asc = a.name.localeCompare(b.name)
            const desc = b.name.localeCompare(a.name)
            return order ? asc : desc
        } else{
            const asc = a.types[0].type.name.localeCompare(b.types[0].type.name)
            const desc = b.types[0].type.name.localeCompare(a.types[0].type.name)
            return order ? asc : desc
        }
      })
      return sorted ;
    }
    array.push(pokeList.data)
    array.push(await allPokeData())
    return array ;
  }
)


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
      return { ...state, pokemonsList: payload, isFetching: false, loading:false,
        offset: state.offset + 20,};
    },
    [loadPokemon.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const {fetchingData} = pokemonSlice.actions;
export const getAllPokemonList = (state) => state.pokemons.pokemonsList;
export default pokemonSlice.reducer;
