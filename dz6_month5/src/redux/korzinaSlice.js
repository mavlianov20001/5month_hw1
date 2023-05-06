import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    korzina: []
}

const korzinaSlice = createSlice({
    name: 'korzinaSlice',
    initialState,
    reducers: {
        setKorzina: (state, action) => {
            state.korzina.push(action.payload)
        }
    }
})

export default korzinaSlice.reducer;
export const {setKorzina} = korzinaSlice.actions;
export const korSelect = state => state.korzinaSlice;