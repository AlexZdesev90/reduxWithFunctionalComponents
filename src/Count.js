import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./reduxToolkit/countSlice";
import { getUsers } from './reduxToolkit/usersSlice';
import User from './UserUser';

const Count = () => {
    const count = useSelector((state) => state.counts.count);
    let us = useSelector((state) => state.users.users);
 
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Счет: {count}</h3>
            <button onClick={() => dispatch(incrementCount())}>add</button>
            <button onClick={() => dispatch(decrementCount())}>decrease</button>
            <button onClick={() => dispatch(getUsers(count))}>getUsers</button>
            {
                
                  us ? us.map((u, idx) => (<User key={idx} users={u}/> )) : ''
            }
        </div>
    )
}

export default Count;