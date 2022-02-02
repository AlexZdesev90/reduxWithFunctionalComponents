import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user-reducer.ts';

const reducers = combineReducers({
    users: userReducer,
})

export default createStore(reducers, applyMiddleware(thunk));
