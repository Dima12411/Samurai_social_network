export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: AllAuthReducersType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state

    }
}

export type AllAuthReducersType = SetUserDataType

type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            email,
            login
        }
    } as const
}


export default authReducer;