import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";
import pokeListReducer from "./features/pokeList";

export const store = configureStore({
  reducer: {
    pokemons: pokeListReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});