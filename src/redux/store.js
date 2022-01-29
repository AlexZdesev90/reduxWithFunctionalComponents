import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user-reducer';

const reducers = combineReducers({
    users: userReducer,
})

export default createStore(reducers);
