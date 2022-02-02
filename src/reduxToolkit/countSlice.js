import { createSlice } from "@reduxjs/toolkit";




export const countSlice = createSlice({
    name: "count",
    initialState: {
        count: 0,
       
    },
    reducers: {
        incrementCount: (state) => {
            state.count = state.count + 1;
        },
        decrementCount: (state) => {
            state.count = state.count - 1;
        },
        
    },
   
});

export const { incrementCount, decrementCount } = countSlice.actions;

export default countSlice.reducer;