import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersRequest } from './redux/reducers/user-reducer.ts';
import User from './User';
import Preloader from './Preloader';
//import * as axios from 'axios';

const Users = () => {

    //const [users, setUsers] = useState([])
    const users = useSelector(state => state.users.users);
    const isFetching = useSelector(state => state.users.isFetching);
    const dispatch = useDispatch();

    // useEffect(() => {
    //    dispatch(usersRequest())  
    //     }, [])

  

    return (
        <div>
            {isFetching ? <Preloader /> : null}
           <button onClick={() => dispatch(usersRequest())}>users add</button>
            {users && users.map((user, idx) => <User key={idx} user={user} />)}
        </div> 
    )
}

export default Users;