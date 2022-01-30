
const GET_USERS = "GET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

type UserType = {
  id: number
  name: string
  userName: string
  email: string
}

// export type InitialStateType = {
//   users: [] as Array<UserType> 
//   isFetching: boolean
// }

let initialState = {
    users: [] as Array<UserType>,
    isFetching: false
    
};

type InitialState = typeof initialState;

 const userReducer = (state = initialState, action: any): InitialState=> {
  switch (action.type) {
    case GET_USERS:
        return { ...state, users: action.users };
    case FOLLOW:
          return {
              ...state,
              users: state.users.map(user => {
                  if (user.id === action.id) 
                  return { ...user, followed: true }
              
                
                return user;
              })
          };
          case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) 
                  return {...user, followed: false}  
                  return user;
                })
          };
          case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            }
    default:
        return state;
  }
};


type GetUsersACType = {
  type: typeof GET_USERS
  users: Array<UserType>
}

export const getUsersAC = (users: Array<UserType>): GetUsersACType => ({ type: GET_USERS, users })

type FollowACType = {
  type: typeof FOLLOW
  id: number
}

export const followAC = (id: number): FollowACType => ({ type: FOLLOW, id })

type UnfollowACType = {
  type: typeof UNFOLLOW
  id: number
}

export const unfollowAC = (id: number): UnfollowACType => ({ type: UNFOLLOW, id})

type ToggleIsFetchACType = {
  type: typeof TOGGLE_IS_FETCHING
  boolean: boolean
}

export const toggleIsFetchAC = (boolean: boolean): ToggleIsFetchACType => ({ type: TOGGLE_IS_FETCHING, boolean})

export default userReducer;

