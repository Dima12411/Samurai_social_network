export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload ? {...m, followed: true} : m)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload ? {...m, followed: false} : m)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.payload
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}

export type AllActionsType =
    FollowUserType
    | UnfollowUserType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | followingInUserProgressType

type FollowUserType = ReturnType<typeof followUser>
type UnfollowUserType = ReturnType<typeof unfollowUser>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type followingInUserProgressType = ReturnType<typeof followingInUserProgress>

export const followUser = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: userId
    } as const
}
export const unfollowUser = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        payload: users
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: pageNumber
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: isFetching
    } as const
}
export const followingInUserProgress = (userId: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            userId, isFetching
        }
    } as const
}


export default usersReducer;