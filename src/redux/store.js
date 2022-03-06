import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";
import pokeListReducer from "./features/pokeList";
import pagingReducer from "./features/searchBox";
import pokeDataReducer from "./features/pokeDetail";


export const store = configureStore({
  reducer: {
    pokemons: pokeListReducer,
    pagingFunction: pagingReducer,
    pokedata: pokeDataReducer
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});