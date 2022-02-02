import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (number, { rejectWithValue, dispatch }) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`);
        const response = await res.json();
        
        dispatch(setUsers(response));
        
       
    }
)

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        
        setUsers: (state, action) => {
            state.users.push(action.payload);
        },
    },
    extraReducers: {
        [getUsers.pending]: () => console.log("Loading"),
        [getUsers.fulfilled]: () => console.log("Done"),
        [getUsers.rejected]: () => console.log("Error"),
    },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;