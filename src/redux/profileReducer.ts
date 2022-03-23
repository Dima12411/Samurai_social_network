import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

export type PostType = {
    id: number
    message: string
    amount: number
}
export type InitialStateType = typeof initialState
type PhotoProfileType = {
    small: string | null
    large: string | null
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfilePropsType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoProfileType
}
export type ProfileType = ProfilePropsType | null
export type InitialStatePropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
    status: string
}

let initialState: InitialStatePropsType = {
    posts: [
        {id: 1, message: "Hi, how are you?", amount: 15},
        {id: 2, message: "It's my first posts", amount: 20},
        {id: 3, message: "Hello!", amount: 20},
        {id: 4, message: "What's yours name?", amount: 20},
    ],
    newPostText: "",
    profile: null,
    status: "",
}


const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                posts: [{id: 5, message: state.newPostText, amount: 0,}, ...state.posts],
                newPostText: '',
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.payload
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.payload
            }
        }
        case "SET-USER-STATUS": {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state
    }
}


export type ActionsProfileType =
    | AddPostType
    | UpdateNewPostTextType
    | SetUserProfileType
    | SetUserStatusType
type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUserStatusType = ReturnType<typeof setUserStatus>

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: text
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        payload: status
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            })
    }
}



export default profileReducer;