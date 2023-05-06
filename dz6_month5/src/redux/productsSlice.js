import {createSlice} from "@reduxjs/toolkit";
import prod from './prod.json'


const initialState = {
    products: prod
}


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {}
})


export default productsSlice.reducer;
export const prodSelect = state => state.productsSlice;