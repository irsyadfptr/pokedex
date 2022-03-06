import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadDetail = createAsyncThunk(
    "loadDetail",
    async(id)  => {
        let array = []
        console.log(id)
 
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
      [loadDetail.pending]: () => {
        console.log("Pending");
      },
      [loadDetail.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, pokedata: payload, loading:false};
      },
      [loadDetail.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const getAllDetail = (state) => state.pokedata.data;
  export default pokeDetailSlice.reducer;