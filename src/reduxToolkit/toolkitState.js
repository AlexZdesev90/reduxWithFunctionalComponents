import { configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice';
import  userSlice  from './usersSlice';

export const store = configureStore({
    reducer: {
        counts: countSlice,
        users: userSlice,
    }
})