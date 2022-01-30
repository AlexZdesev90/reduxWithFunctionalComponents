import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user-reducer.ts';

const reducers = combineReducers({
    users: userReducer,
})

export default createStore(reducers);
