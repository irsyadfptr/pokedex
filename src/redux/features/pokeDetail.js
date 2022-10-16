import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadDetail = createAsyncThunk(
    "loadDetail",
    async(id)  => {
        let array = [] 
            const responseData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
    
            const responseSpec = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        
        array.push(responseData.data);
        array.push(responseSpec.data)
        return array;
    }
)

const initialState = {
    pokedata: {},
    loading: true
}

const pokeDetailSlice = createSlice({
    name: "pokedata",
    initialState,

    extraReducers: {
      [loadDetail.fulfilled]: (state, { payload }) => {
        return { ...state, pokedata: payload, loading:false};
      },
    },
  });

  export const getAllDetail = (state) => state.pokedata.data;
  export default pokeDetailSlice.reducer;