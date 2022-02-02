// import { usersAPI } from "../../api";
// const GET_USERS = "GET-USERS";
// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
// const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

// // type UserType = {
// //   id: number
// //   name: string
// //   userName: string
// //   email: string
// // }

// // export type InitialStateType = {
// //   users: [] as Array<UserType> 
// //   isFetching: boolean
// // }

// let initialState = {
//     users: [],
//     isFetching: false
    
// };



//  const userReducer = (state = initialState, action: any)=> {
//   switch (action.type) {
//     case GET_USERS:
//         return { ...state, users: action.users };
//     case FOLLOW:
//           return {
//               ...state,
//               users: state.users.map(user => {
//                   if (user.id === action.id) 
//                   return { ...user, followed: true }
              
                
//                 return user;
//               })
//           };
//           case UNFOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(user => {
//                     if (user.id === action.id) 
//                   return {...user, followed: false}  
//                   return user;
//                 })
//           };
//           case TOGGLE_IS_FETCHING:
//             return {
//                 ...state,
//                 isFetching: action.boolean
//             }
//     default:
//         return state;
//   }
// };


// // type GetUsersACType = {
// //   type: typeof GET_USERS
// //   users: Array<UserType>
// // }

// export const getUsersAC = (users)=> ({ type: GET_USERS, users })



// export const followAC = (id) => ({ type: FOLLOW, id })



// export const unfollowAC = (id) => ({ type: UNFOLLOW, id})


// export const toggleIsFetchAC = (boolean) => ({ type: TOGGLE_IS_FETCHING, boolean})

// export const usersRequest = () => {

//   return (dispatch)=> {
//     dispatch(toggleIsFetchAC(true));
//     usersAPI.getUsers()
//       .then(response => {
       
//           dispatch(getUsersAC(response))
          
        
//         dispatch(toggleIsFetchAC(false));
//       })
//   }
// }

// export default userReducer;

