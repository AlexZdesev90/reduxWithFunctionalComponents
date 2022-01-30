import React from 'react';
import { useDispatch } from 'react-redux';
import { followAC, unfollowAC } from './redux/reducers/user-reducer.ts';
import  Photo  from './assets/img.jpg';

const User = ({user}) => {

    const dispatch = useDispatch();
    const { name, username, email, id, followed } = user;

    

    return (
        <div>
            {followed && <span>
                <img src={Photo} alt="imageUser" width="100px" />
            <span>{name}</span>{'  '}<span>{username}</span>
            <div>{email}</div>
            <button onClick={() => dispatch(unfollowAC(id))}>unfollow</button>
            </span>}
           {!followed && <span>
                <img src={Photo} alt="imageUser" width="100px"/>
            <span>{name}</span>{'  '}<span>{username}</span>
            <div>{email}</div>
            <button onClick={() => dispatch(followAC(id))}>follow</button>
            </span>}
        </div> 
    )
}

export default User;