export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Lera"},
        {id: 4, name: "Maksim"},
        {id: 5, name: "Lesha"},
        {id: 6, name: "Anton"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Okay"},
        {id: 4, message: "Okay"},
        {id: 5, message: "Okay"},
        {id: 6, message: "Okay"},
    ] as Array<MessageType>,
    newMessageText: "",
}

const dialogsReducer = (state:InitialStateType = initialState, action: ActionsDialogsType): InitialStateType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE": {
            return {
                ...state,
                messages: [{id: 7, message: state.newMessageText}, ...state.messages],
                newMessageText: '',
            }
        }
        case "ON-CHANGE-MESSAGE": {
            return {
                ...state,
                newMessageText: action.message
            }
            // state.newMessageText = action.message
            // return state;

        }
        default:
            return state

    }

}


export type ActionsDialogsType = AddNewMessageType | OnChangeMessageType
type AddNewMessageType = ReturnType<typeof addNewMessageAC>
type OnChangeMessageType = ReturnType<typeof onChangeMessageAC>

export const addNewMessageAC = () => {
    return {
        type: "ADD-NEW-MESSAGE",
    } as const
}
export const onChangeMessageAC = (message: string) => {
    return {
        type: "ON-CHANGE-MESSAGE",
        message: message
    } as const
}

export default dialogsReducer;