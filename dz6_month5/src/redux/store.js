import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice.js";
import korzinaSlice from "./korzinaSlice.js";

export const store = configureStore({
    reducer: {
        productsSlice,
        korzinaSlice
    }
})

