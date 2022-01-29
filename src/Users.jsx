import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAC, toggleIsFetchAC } from './redux/reducers/user-reducer';
import User from './User';
import Preloader from './Preloader';
import * as axios from 'axios';

const Users = () => {

    //const [users, setUsers] = useState([])
    const users = useSelector(state => state.users.users);
    const isFetching = useSelector(state => state.users.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetchAC(true));
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
           console.log(response)
        dispatch(toggleIsFetchAC(false));
        dispatch(getUsersAC(response.data))
        })
        
    }, [])

    return (
        <div>
            {isFetching ? <Preloader /> : null }
            {users && users.map((user, idx) => <User key={idx} user={user} />)}
        </div> 
    )
}

export default Users;